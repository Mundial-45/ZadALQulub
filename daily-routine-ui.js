/*
 * Interfaz de «وردي اليومي · Mi rutina diaria»: panel del día, grupos por momentos, personalización,
 * historial/calendario y recordatorios. Usa los módulos daily-routine*.js y la navegación del resto de la app.
 */
(function (W) {
  'use strict';
  var R = W.ZadRoutine, S = R.Storage, P = R.Progress, t = R.t;
  var D = null, LOG = null, view = null, screen = 'main', monthRef = null, selDay = null;
  var BR = W.AndroidBridge && typeof W.AndroidBridge.setReminder === 'function' ? W.AndroidBridge : null;

  function mk(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function es() { return R.isEs(); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function today() { return P.key(new Date()); }
  function routine() { return S.active(D); }
  function reload() { D = S.load(); LOG = S.log(); }
  function persist() { S.save(D); }
  function persistLog() { P.prune(LOG); S.saveLog(LOG); }

  /* ───────── Estilos ───────── */
  var CSS = [
    '.rt-view{display:block;font-family:inherit}.rt-view.hidden{display:none}',
    '.rt-head{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding-bottom:.75rem;border-bottom:1px solid #e2e8f0;margin-bottom:1rem}',
    'html.dark .rt-head{border-color:#1e293b}',
    '.rt-btn{font-size:.85rem;font-weight:700;border-radius:.8rem;padding:.45rem .8rem;cursor:pointer;font-family:inherit;border:1px solid #a7f3d0;background:#ecfdf5;color:#047857}',
    'html.dark .rt-btn{background:rgba(2,44,34,.5);border-color:#065f46;color:#34d399}',
    '.rt-btn.gold{background:linear-gradient(135deg,#b45309,#92400e);color:#fff;border-color:rgba(253,230,138,.4)}',
    '.rt-btn.danger{background:#fff1f2;color:#be123c;border-color:#fecdd3}html.dark .rt-btn.danger{background:rgba(76,5,25,.5);color:#fb7185;border-color:#9f1239}',
    '.rt-title{flex:1;text-align:center;font-weight:800;font-size:1.2rem;color:#064e3b;font-family:"Amiri","Amiri Quran",serif}html.dark .rt-title{color:#fef3c7}',
    '.rt-hero{border-radius:1.4rem;padding:1.1rem 1.2rem;background:linear-gradient(135deg,#065f46,#064e3b);color:#fff;box-shadow:0 6px 18px rgba(6,78,59,.25);border:1px solid rgba(245,200,90,.35);margin-bottom:1rem}',
    '.rt-dates{display:flex;justify-content:space-between;gap:.5rem;flex-wrap:wrap;font-size:.8rem;opacity:.92;margin-bottom:.7rem}',
    '.rt-sub{font-size:.85rem;opacity:.85;text-align:center;margin-bottom:.6rem}',
    '.rt-num{display:flex;justify-content:space-between;align-items:baseline;font-weight:800;margin-bottom:.45rem}.rt-num b{font-size:1.5rem}',
    '.rt-bar{height:.7rem;border-radius:1rem;background:rgba(255,255,255,.2);overflow:hidden}.rt-bar>i{display:block;height:100%;width:0;background:linear-gradient(90deg,#fde68a,#f5c85a);transition:width .35s ease;border-radius:1rem}',
    '.rt-motto{text-align:center;font-size:.78rem;opacity:.8;margin-top:.55rem;font-family:"Amiri",serif}',
    '.rt-grp{border-radius:1.1rem;border:1px solid #e2e8f0;background:#fffdf7;margin-bottom:.7rem;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.04)}',
    'html.dark .rt-grp{background:#1e293b;border-color:#334155}',
    '.rt-gh{display:flex;align-items:center;gap:.6rem;padding:.8rem 1rem;cursor:pointer;width:100%;background:transparent;border:0;text-align:inherit;font-family:inherit;color:#064e3b}',
    'html.dark .rt-gh{color:#f1f5f9}',
    '.rt-gt{flex:1;min-width:0;font-weight:800;font-size:1.05rem}',
    '.rt-gp{font-size:.75rem;font-weight:700;color:#92400e;background:#fef3c7;border-radius:1rem;padding:.15rem .6rem;flex:none}html.dark .rt-gp{background:rgba(120,53,15,.5);color:#fde68a}',
    '.rt-gb{height:.3rem;background:#e2e8f0}.rt-gb>i{display:block;height:100%;background:linear-gradient(90deg,#10b981,#059669);transition:width .3s}html.dark .rt-gb{background:#334155}',
    '.rt-chev{flex:none;transition:transform .2s;opacity:.7}.rt-grp.open .rt-chev{transform:rotate(180deg)}',
    '.rt-gl{display:none;padding:.3rem .7rem .7rem}.rt-grp.open .rt-gl{display:block}',
    '.rt-act{display:flex;align-items:center;gap:.6rem;padding:.55rem .35rem;border-bottom:1px dashed #e2e8f0}.rt-act:last-child{border-bottom:0}html.dark .rt-act{border-color:#334155}',
    '.rt-chk{flex:none;min-width:2.1rem;height:2.1rem;border-radius:.7rem;border:2px solid #10b981;background:#fff;color:#047857;font-weight:800;font-size:.85rem;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;padding:0 .3rem}',
    'html.dark .rt-chk{background:#0f172a;color:#34d399}.rt-chk.on{background:#059669;color:#fff;border-color:#059669}',
    '.rt-an{flex:1;min-width:0;font-weight:700;font-size:1rem;color:#0f172a;line-height:1.5}html.dark .rt-an{color:#f1f5f9}.rt-act.done .rt-an{opacity:.55;text-decoration:line-through}',
    '.rt-an small{display:block;font-weight:500;font-size:.7rem;opacity:.7}',
    '.rt-go{flex:none;font-size:.78rem;font-weight:700;border-radius:.7rem;padding:.4rem .7rem;border:1px solid #fcd34d;background:#fffbeb;color:#92400e;cursor:pointer;font-family:inherit}',
    'html.dark .rt-go{background:rgba(120,53,15,.4);border-color:#92400e;color:#fde68a}',
    '.rt-empty{text-align:center;opacity:.6;font-size:.85rem;padding:.6rem}',
    '.rt-sec{font-weight:800;color:#475569;margin:1.1rem 0 .5rem;font-size:.95rem}html.dark .rt-sec{color:#cbd5e1}',
    '.rt-card{border:1px solid #e2e8f0;background:#fff;border-radius:1rem;padding:.8rem 1rem;margin-bottom:.6rem}html.dark .rt-card{background:#1e293b;border-color:#334155}',
    '.rt-row{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}',
    '.rt-in,.rt-sel{width:100%;padding:.55rem .7rem;border-radius:.7rem;border:1px solid #cbd5e1;background:#fff;color:#0f172a;font-family:inherit;font-size:.95rem}',
    'html.dark .rt-in,html.dark .rt-sel{background:#0f172a;border-color:#475569;color:#f1f5f9}',
    '.rt-lab{display:block;font-size:.78rem;font-weight:700;margin:.6rem 0 .2rem;opacity:.8}',
    '.rt-ed{display:flex;align-items:center;gap:.4rem;padding:.5rem .4rem;border-bottom:1px dashed #e2e8f0;background:inherit}html.dark .rt-ed{border-color:#334155}',
    '.rt-ed .rt-an{font-size:.92rem}.rt-ed.off .rt-an{opacity:.45}',
    '.rt-mini{flex:none;width:1.9rem;height:1.9rem;border-radius:.6rem;border:1px solid #cbd5e1;background:#f8fafc;cursor:pointer;font-size:.8rem;line-height:1;color:#334155;font-family:inherit}',
    'html.dark .rt-mini{background:#0f172a;border-color:#475569;color:#e2e8f0}',
    '.rt-hnd{flex:none;cursor:grab;touch-action:none;padding:.2rem .35rem;opacity:.6;font-size:1.05rem;user-select:none}',
    '.rt-ed.drag{background:#fef3c7;box-shadow:0 4px 12px rgba(0,0,0,.18);position:relative;z-index:2}html.dark .rt-ed.drag{background:#78350f}',
    '.rt-ov{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:80;display:flex;align-items:flex-end;justify-content:center}',
    '.rt-dlg{width:100%;max-width:34rem;max-height:88vh;overflow:auto;background:#fffdf7;border-radius:1.4rem 1.4rem 0 0;padding:1.1rem 1.2rem 1.4rem;color:#0f172a}',
    'html.dark .rt-dlg{background:#1e293b;color:#f1f5f9}@media(min-width:640px){.rt-ov{align-items:center}.rt-dlg{border-radius:1.4rem}}',
    '.rt-sw{position:relative;width:2.6rem;height:1.5rem;flex:none;border-radius:1rem;background:#cbd5e1;cursor:pointer;border:0;transition:background .2s}',
    '.rt-sw:after{content:"";position:absolute;top:.15rem;inset-inline-start:.15rem;width:1.2rem;height:1.2rem;border-radius:50%;background:#fff;transition:transform .2s}',
    '.rt-sw.on{background:#059669}.rt-sw.on:after{transform:translateX(1.1rem)}[dir=rtl] .rt-sw.on:after,.rt-view[dir=rtl] .rt-sw.on:after{transform:translateX(-1.1rem)}',
    '.rt-bars{display:flex;gap:.4rem;align-items:stretch;height:9rem}.rt-bc{flex:1;display:flex;flex-direction:column;align-items:center;gap:.25rem;font-size:.7rem;height:100%}',
    '.rt-bv{width:100%;background:linear-gradient(180deg,#34d399,#047857);border-radius:.4rem .4rem 0 0;min-height:3px}.rt-bt{flex:1;width:100%;display:flex;align-items:flex-end;min-height:0}',
    '.rt-cal{display:grid;grid-template-columns:repeat(7,1fr);gap:.3rem;direction:ltr}',
    '.rt-cd{aspect-ratio:1;border-radius:.6rem;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;cursor:pointer;background:#f1f5f9;color:#475569;border:2px solid transparent}',
    'html.dark .rt-cd{background:#0f172a;color:#94a3b8}.rt-cd.l1{background:#d1fae5;color:#065f46}.rt-cd.l2{background:#6ee7b7;color:#064e3b}.rt-cd.l3{background:#10b981;color:#fff}.rt-cd.l4{background:#047857;color:#fff}',
    '.rt-cd.today{border-color:#f5c85a}.rt-cd.sel{outline:2px solid #92400e}.rt-cd.x{visibility:hidden}',
    '.rt-wd{font-size:.7rem;text-align:center;opacity:.6;font-weight:700}',
    '.rt-stat{display:flex;align-items:center;gap:.5rem;font-size:.88rem;margin:.35rem 0}.rt-stat .rt-sb{flex:1;height:.45rem;border-radius:1rem;background:#e2e8f0;overflow:hidden}.rt-stat .rt-sb>i{display:block;height:100%;background:#10b981}html.dark .rt-stat .rt-sb{background:#334155}',
    '.rt-note{font-size:.78rem;opacity:.7;margin:.3rem 0}',
    '#rtHomeCard{grid-column:1/-1}'
  ].join('\n');
  (function () { var s = document.createElement('style'); s.id = 'rtCss'; s.textContent = CSS; document.head.appendChild(s); })();

  /* ───────── Vista y navegación ───────── */
  function ensureView() {
    if (view) return view;
    var main = document.querySelector('main'); if (!main) return null;
    view = mk('div', 'rt-view hidden'); view.id = 'routineView'; main.appendChild(view);
    return view;
  }
  function hideMine() { if (view) view.classList.add('hidden'); }
  function setDir() { if (view) view.setAttribute('dir', es() ? 'ltr' : 'rtl'); }

  function show(scr, push) {
    var v = ensureView(); if (!v) return;
    if (typeof hideAllViews === 'function') hideAllViews();
    reload(); screen = scr || 'main';
    render(); v.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (push && history.pushState) { try { history.pushState({ view: 'routine', screen: screen }, '', '#routine' + (screen === 'main' ? '' : '-' + screen)); } catch (e) {} }
  }
  W.showRoutine = function () { if (!true) return; show('main', true); };

  var origHide = W.hideAllViews;
  W.hideAllViews = function () { var r = origHide.apply(this, arguments); hideMine(); return r; };
  W.addEventListener('popstate', function (e) {
    var st = e.state;
    if (st && st.view === 'routine' && true) { e.stopImmediatePropagation(); show(st.screen || 'main', false); }
  }, true);

  function go(scr) { show(scr, true); }
  function back() { if (history.length > 1) history.back(); else if (typeof goHome === 'function') goHome(); }

  /* ───────── Utilidades de fecha ───────── */
  function dateLabels() {
    var d = new Date(), e = es(), g = '', h = '';
    try { g = d.toLocaleDateString(e ? 'es-ES' : 'ar', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', numberingSystem: 'latn' }); } catch (x) { g = d.toDateString(); }
    try { h = new Intl.DateTimeFormat(e ? 'es-u-ca-islamic-umalqura' : 'ar-SA-u-ca-islamic-umalqura', { day: 'numeric', month: 'long', year: 'numeric' }).format(d); } catch (x) { h = ''; }
    return [g, h];
  }
  function monthName(y, m) { try { return new Date(y, m, 1).toLocaleDateString(es() ? 'es-ES' : 'ar', { month: 'long', year: 'numeric', numberingSystem: 'latn' }); } catch (e) { return y + '-' + (m + 1); } }

  /* ───────── Pantalla principal ───────── */
  function header(title, backFn, extra) {
    var h = mk('div', 'rt-head');
    var b = mk('button', 'rt-btn', t('back')); b.type = 'button'; b.onclick = backFn || back; h.appendChild(b);
    h.appendChild(mk('h2', 'rt-title', title));
    if (extra) h.appendChild(extra); else { var sp = mk('div'); sp.style.width = '4rem'; h.appendChild(sp); }
    return h;
  }
  function render() {
    setDir(); view.innerHTML = '';
    if (screen === 'settings') renderSettings(); else if (screen === 'history') renderHistory(); else renderMain();
  }

  function renderMain() {
    var r = routine(), key = today(), e = es(), ui = S.ui();
    var cfgBtn = mk('button', 'rt-btn', '⚙'); cfgBtn.type = 'button'; cfgBtn.title = t('customize'); cfgBtn.setAttribute('aria-label', t('customize')); cfgBtn.onclick = function () { go('settings'); };
    view.appendChild(header(t('title'), null, cfgBtn));

    var sm = P.summary(LOG, key, r), dl = dateLabels();
    var hero = mk('div', 'rt-hero');
    var dates = mk('div', 'rt-dates'); dates.appendChild(mk('span', '', dl[0])); if (dl[1]) dates.appendChild(mk('span', '', dl[1])); hero.appendChild(dates);
    hero.appendChild(mk('div', 'rt-sub', t('sub')));
    var num = mk('div', 'rt-num'); var cnt = mk('span', '', ''); cnt.id = 'rtCnt';
    var pct = mk('b', '', ''); pct.id = 'rtPct'; num.appendChild(cnt); num.appendChild(pct); hero.appendChild(num);
    var bar = mk('div', 'rt-bar'); var fill = mk('i'); fill.id = 'rtFill'; bar.appendChild(fill); hero.appendChild(bar);
    hero.appendChild(mk('div', 'rt-motto', t('motto')));
    view.appendChild(hero);

    var nav = mk('div', 'rt-row'); nav.style.marginBottom = '.8rem';
    var b1 = mk('button', 'rt-btn gold', t('customize')); b1.type = 'button'; b1.onclick = function () { go('settings'); };
    var b2 = mk('button', 'rt-btn', t('history')); b2.type = 'button'; b2.onclick = function () { go('history'); };
    nav.appendChild(b1); nav.appendChild(b2); view.appendChild(nav);

    var names = mk('div', 'rt-note', (e ? r.name.es : r.name.ar) || r.name.ar); view.appendChild(names);

    var any = false;
    R.GROUPS.forEach(function (g) {
      var acts = r.acts.filter(function (a) { return a.groupId === g.id && a.enabled !== false; });
      if (!acts.length) return; any = true;
      var open = ui.open ? !!ui.open[g.id] : true;
      var box = mk('div', 'rt-grp' + (open ? ' open' : '')); box.dataset.g = g.id;
      var gh = mk('button', 'rt-gh'); gh.type = 'button';
      gh.appendChild(mk('span', 'rt-gt', R.groupTitle(g)));
      var gp = mk('span', 'rt-gp', ''); gp.dataset.gp = g.id; gh.appendChild(gp);
      gh.appendChild(mk('span', 'rt-chev', '▾'));
      gh.onclick = function () { box.classList.toggle('open'); var u = S.ui(); u.open = u.open || {}; u.open[g.id] = box.classList.contains('open'); S.saveUi(u); };
      box.appendChild(gh);
      var gb = mk('div', 'rt-gb'); var gi = mk('i'); gi.dataset.gi = g.id; gb.appendChild(gi); box.appendChild(gb);
      var list = mk('div', 'rt-gl');
      acts.forEach(function (a) { list.appendChild(actRow(a, r, key)); });
      box.appendChild(list); view.appendChild(box);
    });
    if (!any) view.appendChild(mk('div', 'rt-empty', t('noActs')));
    refreshProgress();
  }

  function actRow(a, r, key) {
    var row = mk('div', 'rt-act'); row.dataset.a = a.id;
    var reps = P.reps(a), c = P.count(LOG, key, r.id, a.id), done = c >= reps;
    if (done) row.classList.add('done');
    var chk = mk('button', 'rt-chk' + (done ? ' on' : ''), done ? '✓' : (reps > 1 ? c + '/' + reps : '')); chk.type = 'button';
    chk.setAttribute('aria-label', R.actTitle(a));
    chk.onclick = function () { reload(); var rr = routine(), kk = today(); P.toggle(LOG, kk, rr, rr.acts.filter(function (x) { return x.id === a.id; })[0] || a); persistLog(); updateRow(row, a, rr, kk); refreshProgress(); };
    row.appendChild(chk);
    var nm = mk('div', 'rt-an', R.actTitle(a));
    if (a.category !== 'custom') nm.appendChild(mk('small', '', R.STR.cat[a.category] ? R.STR.cat[a.category][es() ? 1 : 0] : ''));
    row.appendChild(nm);
    if (a.category !== 'custom') {
      var gb = mk('button', 'rt-go', t('open')); gb.type = 'button';
      gb.onclick = function () { R.openContent(a); };
      row.appendChild(gb);
    }
    return row;
  }
  function updateRow(row, a, r, key) {
    var reps = P.reps(a), c = P.count(LOG, key, r.id, a.id), done = c >= reps, chk = row.querySelector('.rt-chk');
    row.classList.toggle('done', done); chk.classList.toggle('on', done); chk.textContent = done ? '✓' : (reps > 1 ? c + '/' + reps : '');
  }
  function refreshProgress() {
    var r = routine(), key = today(), sm = P.summary(LOG, key, r), e = es();
    var c = view.querySelector('#rtCnt'), p = view.querySelector('#rtPct'), f = view.querySelector('#rtFill');
    if (c) c.textContent = sm.done + ' / ' + sm.total + ' ' + (e ? 'actividades completadas' : 'نَشَاطًا مُنْجَزًا');
    if (p) p.textContent = sm.pct + '%'; if (f) f.style.width = sm.pct + '%';
    R.GROUPS.forEach(function (g) {
      var gs = P.groupSummary(LOG, key, r, g.id), gp = view.querySelector('[data-gp="' + g.id + '"]'), gi = view.querySelector('[data-gi="' + g.id + '"]');
      if (gp) gp.textContent = (gs.done === gs.total && gs.total ? '✓ ' : '') + gs.done + '/' + gs.total; if (gi) gi.style.width = gs.pct + '%';
    });
  }

  /* ───────── Personalización ───────── */
  function renderSettings() {
    var r = routine(), e = es();
    view.appendChild(header(t('customize')));

    // Rutinas
    view.appendChild(mk('div', 'rt-sec', t('routines')));
    D.routines.forEach(function (x) {
      var c = mk('div', 'rt-card'); var rw = mk('div', 'rt-row');
      var rb = mk('button', 'rt-btn' + (x.id === D.active ? ' gold' : ''), (e ? x.name.es : x.name.ar) || x.name.ar); rb.type = 'button'; rb.style.flex = '1';
      rb.onclick = function () { D.active = x.id; persist(); render(); }; rw.appendChild(rb);
      var rn = mk('button', 'rt-mini', '✎'); rn.type = 'button'; rn.title = t('rename'); rn.onclick = function () {
        var nm = prompt(t('rename'), (e ? x.name.es : x.name.ar)); if (nm && nm.trim()) { x.name.ar = nm.trim(); x.name.es = nm.trim(); persist(); render(); }
      }; rw.appendChild(rn);
      if (D.routines.length > 1) { var dl = mk('button', 'rt-mini', '🗑'); dl.type = 'button'; dl.title = t('del'); dl.onclick = function () { if (confirm(t('confirmDel'))) { D.routines = D.routines.filter(function (y) { return y.id !== x.id; }); if (D.active === x.id) D.active = D.routines[0].id; persist(); render(); } }; rw.appendChild(dl); }
      c.appendChild(rw); view.appendChild(c);
    });
    var tp = mk('div', 'rt-card'); tp.appendChild(mk('div', 'rt-note', t('applyTpl')));
    var tr = mk('div', 'rt-row');
    ['brief', 'balanced', 'extended'].forEach(function (id) {
      var b = mk('button', 'rt-btn', R.STR.tpl[id][e ? 1 : 0]); b.type = 'button';
      b.onclick = function () {
        var nm = R.STR.tpl[id]; var n = { id: R.uid('r'), name: { ar: nm[0], es: nm[1] }, tpl: id, acts: R.templateActs(id), updated: Date.now() };
        D.routines.push(n); D.active = n.id; persist(); render(); R.toast(t('saved'));
      }; tr.appendChild(b);
    });
    var nb = mk('button', 'rt-btn gold', '+ ' + t('newRoutine')); nb.type = 'button';
    nb.onclick = function () { var n = { id: R.uid('r'), name: { ar: R.STR.newRoutine[0], es: R.STR.newRoutine[1] }, tpl: 'custom', acts: [], updated: Date.now() }; D.routines.push(n); D.active = n.id; persist(); render(); };
    tr.appendChild(nb); tp.appendChild(tr); view.appendChild(tp);

    // Actividades por momento
    view.appendChild(mk('div', 'rt-sec', (e ? r.name.es : r.name.ar) + ' — ' + t('acts')));
    R.GROUPS.forEach(function (g) {
      var box = mk('div', 'rt-card'); box.appendChild(mk('div', 'rt-sec', R.groupTitle(g))); box.firstChild.style.margin = '0 0 .3rem';
      var list = mk('div', ''); list.dataset.g = g.id;
      r.acts.filter(function (a) { return a.groupId === g.id; }).forEach(function (a) { list.appendChild(edRow(a, r)); });
      if (!list.children.length) list.appendChild(mk('div', 'rt-empty', t('emptyGroup')));
      box.appendChild(list); view.appendChild(box);
    });
    var add = mk('button', 'rt-btn gold', '+ ' + t('addAct') || ''); add.type = 'button'; add.textContent = '+ ' + t('addAct'); add.style.width = '100%';
    add.onclick = function () { editDialog(null); }; view.appendChild(add);

    renderReminders();
  }

  function edRow(a, r) {
    var row = mk('div', 'rt-ed' + (a.enabled === false ? ' off' : '')); row.dataset.a = a.id;
    var h = mk('span', 'rt-hnd', '≡'); row.appendChild(h); dragInit(h, row, r);
    row.appendChild(mk('div', 'rt-an', R.actTitle(a) + (P.reps(a) > 1 ? ' ×' + P.reps(a) : '')));
    var up = mk('button', 'rt-mini', '▲'), dn = mk('button', 'rt-mini', '▼'), ed = mk('button', 'rt-mini', '✎'), dl = mk('button', 'rt-mini', '🗑');
    [up, dn, ed, dl].forEach(function (b) { b.type = 'button'; });
    up.title = t('moveUp'); dn.title = t('moveDown'); ed.title = t('edit'); dl.title = t('del');
    up.onclick = function () { moveAct(r, a, -1); }; dn.onclick = function () { moveAct(r, a, 1); };
    ed.onclick = function () { editDialog(a); };
    dl.onclick = function () { if (confirm(t('confirmDel'))) { r.acts = r.acts.filter(function (x) { return x !== a; }); r.updated = Date.now(); persist(); render(); } };
    [up, dn, ed, dl].forEach(function (b) { row.appendChild(b); });
    return row;
  }
  function moveAct(r, a, dir) {
    var sib = r.acts.filter(function (x) { return x.groupId === a.groupId; }), i = sib.indexOf(a), j = i + dir;
    if (j < 0 || j >= sib.length) return;
    var ia = r.acts.indexOf(a), ib = r.acts.indexOf(sib[j]); r.acts[ia] = sib[j]; r.acts[ib] = a;
    r.updated = Date.now(); persist(); var y = window.scrollY; render(); window.scrollTo(0, y);
  }
  // Arrastrar y soltar (ratón y táctil) dentro del mismo momento del día
  function dragInit(handle, row, r) {
    handle.addEventListener('pointerdown', function (ev) {
      ev.preventDefault(); var list = row.parentNode; row.classList.add('drag');
      try { handle.setPointerCapture(ev.pointerId); } catch (e) {}
      var move = function (m) {
        var sibs = Array.prototype.filter.call(list.children, function (c) { return c !== row && c.classList.contains('rt-ed'); });
        var after = null; for (var i = 0; i < sibs.length; i++) { var bb = sibs[i].getBoundingClientRect(); if (m.clientY < bb.top + bb.height / 2) { after = sibs[i]; break; } }
        if (after) list.insertBefore(row, after); else list.appendChild(row);
      };
      var up = function () {
        handle.removeEventListener('pointermove', move); handle.removeEventListener('pointerup', up); handle.removeEventListener('pointercancel', up);
        row.classList.remove('drag');
        var order = Array.prototype.map.call(list.querySelectorAll('.rt-ed'), function (c) { return c.dataset.a; });
        var gid = list.dataset.g, inGrp = r.acts.filter(function (x) { return x.groupId === gid; });
        var sorted = order.map(function (id) { return inGrp.filter(function (x) { return x.id === id; })[0]; }).filter(Boolean);
        var k = 0; r.acts = r.acts.map(function (x) { return x.groupId === gid ? sorted[k++] : x; });
        r.updated = Date.now(); persist();
      };
      handle.addEventListener('pointermove', move); handle.addEventListener('pointerup', up); handle.addEventListener('pointercancel', up);
    });
  }

  function editDialog(a) {
    var r = routine(), e = es(), isNew = !a;
    var w = a ? JSON.parse(JSON.stringify(a)) : { id: R.uid('u'), title: { ar: '', es: '' }, category: 'custom', contentId: null, groupId: 'after_fajr', repetitions: 1, enabled: true };
    var ov = mk('div', 'rt-ov'), dlg = mk('div', 'rt-dlg'); dlg.setAttribute('dir', e ? 'ltr' : 'rtl'); ov.appendChild(dlg);
    ov.onclick = function (ev) { if (ev.target === ov) ov.remove(); };
    dlg.appendChild(mk('h3', 'rt-sec', isNew ? t('addAct') : t('edit')));
    function field(label, el) { dlg.appendChild(mk('label', 'rt-lab', label)); dlg.appendChild(el); return el; }
    var cat = mk('select', 'rt-sel'); ['azkar', 'adya', 'munajat', 'ruqyah', 'quran', 'tasbeeh', 'custom'].concat(w.category === 'glosario' || w.category === 'situations' ? [w.category] : []).forEach(function (c) { var o = mk('option', '', R.STR.cat[c][e ? 1 : 0]); o.value = c; if (c === w.category) o.selected = true; cat.appendChild(o); });
    field(t('link'), cat);
    var sel = mk('select', 'rt-sel'); dlg.appendChild(sel);
    var page = mk('input', 'rt-in'); page.type = 'number'; page.min = 1; page.max = 638; page.placeholder = t('pageNo'); dlg.appendChild(page);
    function fillSel() {
      var c = cat.value; sel.innerHTML = ''; sel.style.display = (R.modules[c] || c === 'tasbeeh') ? '' : 'none'; page.style.display = c === 'quran' ? '' : 'none';
      if (R.modules[c]) {
        var fill = function () {
          sel.innerHTML = ''; R.listGroups(c).forEach(function (g) { var o = mk('option', '', e ? g.es : g.ar); o.value = g.id; if (g.id === w.contentId) o.selected = true; sel.appendChild(o); });
        };
        fill(); if (!sel.children.length && typeof loadAllSections === 'function') loadAllSections().then(fill);
      }
      if (c === 'tasbeeh') { try { tasbeehItems.forEach(function (x) { var o = mk('option', '', e ? x.es : x.ar); o.value = x.id; if (x.id === w.contentId) o.selected = true; sel.appendChild(o); }); } catch (er) {} }
      if (c === 'quran') page.value = /^page:(\d+)$/.test(w.contentId || '') ? RegExp.$1 : '';
    }
    cat.onchange = function () { w.contentId = null; fillSel(); autoName(); };
    var keepId = w.category === 'glosario' ? w.contentId : null;
    function autoName() { // propone el nombre del contenido si el nombre está vacío
      if (ti.value.trim() || !sel.value) return;
      if (cat.value === 'tasbeeh') { var tb = R.tasbeehItem(sel.value); if (tb) { ti.value = tb.ar; te.value = tb.es; } return; }
      if (!R.modules[cat.value]) return;
      var g = R.listGroups(cat.value).filter(function (x) { return x.id === sel.value; })[0]; if (g) { ti.value = g.ar; te.value = g.es; }
    }
    var ti = mk('input', 'rt-in'); ti.value = w.title.ar || ''; field(t('titleAr'), ti); ti.setAttribute('dir', 'rtl');
    var te = mk('input', 'rt-in'); te.value = w.title.es || ''; field(t('titleEs'), te); te.setAttribute('dir', 'ltr');
    sel.onchange = function () { ti.value = ''; te.value = ''; autoName(); };
    var gs = mk('select', 'rt-sel'); R.GROUPS.forEach(function (g) { var o = mk('option', '', R.groupTitle(g)); o.value = g.id; if (g.id === w.groupId) o.selected = true; gs.appendChild(o); }); field(t('group'), gs);
    var rp = mk('input', 'rt-in'); rp.type = 'number'; rp.min = 1; rp.max = 1000; rp.value = P.reps(w); field(t('reps'), rp);
    var en = mk('label', 'rt-row'); en.style.marginTop = '.7rem'; var cb = mk('input'); cb.type = 'checkbox'; cb.checked = w.enabled !== false; en.appendChild(cb); en.appendChild(mk('span', '', t('enabled'))); dlg.appendChild(en);
    var tm = null, tcb = null;
    if (!BR) {
      var rm = D.reminders.custom[w.id] || { on: false, h: 9, m: 0 };
      var rr = mk('div', 'rt-row'); rr.style.marginTop = '.7rem'; tcb = mk('input'); tcb.type = 'checkbox'; tcb.checked = !!rm.on; rr.appendChild(tcb); rr.appendChild(mk('span', '', t('reminders')));
      tm = mk('input', 'rt-in'); tm.type = 'time'; tm.value = pad(rm.h) + ':' + pad(rm.m); tm.style.width = '8rem'; rr.appendChild(tm); dlg.appendChild(rr);
    }
    var bar = mk('div', 'rt-row'); bar.style.marginTop = '1rem';
    var sv = mk('button', 'rt-btn gold', t('save')), cn = mk('button', 'rt-btn', t('cancel')); sv.type = cn.type = 'button';
    cn.onclick = function () { ov.remove(); };
    sv.onclick = function () {
      w.category = cat.value; w.groupId = gs.value; w.repetitions = Math.max(1, parseInt(rp.value, 10) || 1); w.enabled = cb.checked;
      w.title = { ar: ti.value.trim(), es: te.value.trim() };
      if (R.modules[w.category]) w.contentId = sel.value || null; else if (w.category === 'quran') w.contentId = page.value ? 'page:' + parseInt(page.value, 10) : 'home'; else if (w.category === 'tasbeeh') w.contentId = sel.value || 'home'; else if (w.category === 'glosario') w.contentId = keepId || w.contentId; else w.contentId = null; /* situations: sin contenido fijo, la persona elige su estado */
      if (!w.title.ar && !w.title.es) { R.toast(es() ? 'Escribe un nombre' : 'اكْتُبِ اسْمًا لِلنَّشَاطِ'); return; }
      if (!w.title.ar) w.title.ar = w.title.es; if (!w.title.es) w.title.es = w.title.ar;
      if (tcb) { if (tcb.checked) { var p = (tm.value || '09:00').split(':'); D.reminders.custom[w.id] = { on: true, h: +p[0], m: +p[1], t: w.title }; askNotif(); } else delete D.reminders.custom[w.id]; }
      if (isNew) { r.acts.push(w); } else { r.acts[r.acts.indexOf(a)] = w; }
      r.groupIdx = null; r.updated = Date.now(); persist(); ov.remove(); render(); R.toast(t('saved'));
    };
    bar.appendChild(sv); bar.appendChild(cn); dlg.appendChild(bar);
    document.body.appendChild(ov); fillSel();
  }

  /* ───────── Recordatorios ───────── */
  var REM = [
    { id: 'sabah', k: 'remMorning', tAr: 'أذكار الصباح', bAr: 'ابدأ يومك بذكر الله: حان وقت أذكار الصباح', tEs: 'Azkar de la mañana', bEs: 'Es la hora de tus azkar de la mañana' },
    { id: 'masaa', k: 'remEvening', tAr: 'أذكار المساء', bAr: 'حان وقت أذكار المساء', tEs: 'Azkar de la tarde', bEs: 'Es la hora de tus azkar de la tarde' },
    { id: 'lectura', k: 'remQuran', tAr: 'وردك من القرآن', bAr: 'خصّص دقائق اليوم لقراءة القرآن', tEs: 'Tu lectura del Corán', bEs: 'Dedica unos minutos de hoy a leer el Corán' },
    { id: 'nawm', k: 'remSleep', tAr: 'قبل النوم', bAr: 'لا تنسَ أذكار النوم', tEs: 'Antes de dormir', bEs: 'No olvides tus azkar antes de dormir' }
  ];
  function askNotif() {
    if (BR) return true;
    try { if (typeof Notification === 'undefined') { R.toast(es() ? 'Este navegador no admite notificaciones' : 'الإشعارات غير مدعومة'); return false; } if (Notification.permission === 'default') Notification.requestPermission(); return true; } catch (e) { return false; }
  }
  function pushRem(it, s) {
    if (BR) { try { BR.setReminder(it.id, !!s.on, s.h, s.m, es() ? it.tEs : it.tAr, es() ? it.bEs : it.bAr); } catch (e) {} }
  }
  function renderReminders() {
    var e = es(); view.appendChild(mk('div', 'rt-sec', t('reminders')));
    view.appendChild(mk('div', 'rt-note', t('remNote')));
    if (BR) { try { var cur = JSON.parse(BR.getReminders()) || {}; REM.forEach(function (it) { if (cur[it.id]) D.reminders[it.id] = cur[it.id]; }); } catch (x) {} }
    REM.forEach(function (it) {
      var s = D.reminders[it.id] || (D.reminders[it.id] = { on: false, h: 8, m: 0 });
      var c = mk('div', 'rt-card'), rw = mk('div', 'rt-row');
      var sw = mk('button', 'rt-sw' + (s.on ? ' on' : '')); sw.type = 'button'; sw.setAttribute('aria-pressed', s.on ? 'true' : 'false');
      rw.appendChild(sw); var nm = mk('div', 'rt-an', t(it.k)); rw.appendChild(nm);
      var tm = mk('input', 'rt-in'); tm.type = 'time'; tm.value = pad(s.h) + ':' + pad(s.m); tm.style.width = '7.5rem'; rw.appendChild(tm);
      sw.onclick = function () {
        if (!s.on && !askNotif()) return; s.on = !s.on; sw.classList.toggle('on', s.on); sw.setAttribute('aria-pressed', s.on ? 'true' : 'false'); persist(); pushRem(it, s);
      };
      tm.onchange = function () { var p = (tm.value || '08:00').split(':'); s.h = +p[0]; s.m = +p[1]; persist(); if (s.on) pushRem(it, s); };
      c.appendChild(rw); view.appendChild(c);
    });
  }
  // Web: avisos mientras la app está abierta (sin permiso hasta que el usuario activa un recordatorio)
  function tick() {
    if (BR) return; try {
      if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
      var d = S.load(), n = new Date(), hm = n.getHours() * 60 + n.getMinutes(), key = P.key(n), fired = {}; try { fired = JSON.parse(sessionStorage.getItem('zad_rt_fired') || '{}'); } catch (e) {}
      var fire = function (id, ti, bo, s) { if (!s.on || s.h * 60 + s.m !== hm || fired[id] === key) return; fired[id] = key; new Notification(ti, { body: bo, icon: 'Iconos/apple-touch-icon.png' }); };
      REM.forEach(function (it) { var s = d.reminders[it.id]; if (s) fire(it.id, es() ? it.tEs : it.tAr, es() ? it.bEs : it.bAr, s); });
      Object.keys(d.reminders.custom || {}).forEach(function (id) { var s = d.reminders.custom[id]; if (s) fire('c' + id, (s.t && (es() ? s.t.es : s.t.ar)) || 'وردي', t('title'), s); });
      sessionStorage.setItem('zad_rt_fired', JSON.stringify(fired));
    } catch (e) {}
  }
  setInterval(tick, 30000);

  /* ───────── Historial ───────── */
  function renderHistory() {
    var e = es(), r = routine(); view.appendChild(header(t('history')));
    // Semana
    view.appendChild(mk('div', 'rt-sec', t('week')));
    var wk = P.week(LOG, today()), bars = mk('div', 'rt-bars rt-card');
    wk.forEach(function (d) {
      var c = mk('div', 'rt-bc'); c.appendChild(mk('span', '', d.pct == null ? '–' : d.pct + '%'));
      var tb = mk('div', 'rt-bt'), bv = mk('div', 'rt-bv'); bv.style.height = (d.pct || 0) + '%'; tb.appendChild(bv); c.appendChild(tb);
      c.appendChild(mk('span', '', R.STR.wd[e ? 1 : 0][d.date.getDay()])); bars.appendChild(c);
    });
    bars.style.direction = 'ltr'; view.appendChild(bars);
    // Mes
    if (!monthRef) { var n = new Date(); monthRef = { y: n.getFullYear(), m: n.getMonth() }; }
    var nav = mk('div', 'rt-row'); nav.style.justifyContent = 'space-between'; view.appendChild(mk('div', 'rt-sec', t('month')));
    var pv = mk('button', 'rt-mini', '‹'), nx = mk('button', 'rt-mini', '›'); pv.type = nx.type = 'button';
    pv.onclick = function () { monthRef.m--; if (monthRef.m < 0) { monthRef.m = 11; monthRef.y--; } render(); };
    nx.onclick = function () { monthRef.m++; if (monthRef.m > 11) { monthRef.m = 0; monthRef.y++; } render(); };
    nav.appendChild(pv); nav.appendChild(mk('b', '', monthName(monthRef.y, monthRef.m))); nav.appendChild(nx); nav.style.direction = 'ltr'; view.appendChild(nav);
    var cal = mk('div', 'rt-cal rt-card'); R.STR.wd[e ? 1 : 0].forEach(function (w) { cal.appendChild(mk('div', 'rt-wd', w)); });
    var days = P.month(LOG, monthRef.y, monthRef.m), first = days[0].date.getDay();
    for (var i = 0; i < first; i++) cal.appendChild(mk('div', 'rt-cd x'));
    days.forEach(function (d) {
      var lv = d.pct == null ? '' : d.pct >= 100 ? ' l4' : d.pct >= 66 ? ' l3' : d.pct >= 33 ? ' l2' : d.pct > 0 ? ' l1' : '';
      var c = mk('div', 'rt-cd' + lv + (d.key === today() ? ' today' : '') + (d.key === selDay ? ' sel' : ''), String(d.date.getDate()));
      c.onclick = function () { selDay = d.key; render(); }; cal.appendChild(c);
    });
    view.appendChild(cal);
    if (selDay) { var dd = P.dayCounts(LOG, selDay), pc = P.dayPct(LOG, selDay);
      var info = mk('div', 'rt-card', selDay + ' — ' + (pc == null ? t('noData') : dd.d + ' / ' + dd.t + ' (' + pc + '%)')); view.appendChild(info); }
    // Estadísticas
    view.appendChild(mk('div', 'rt-sec', t('stats')));
    var st = P.activityStats(LOG, r, today(), 30), box = mk('div', 'rt-card'), anyd = false;
    r.acts.forEach(function (a) { var n = st[a.id] || 0; if (!n) return; anyd = true;
      var row = mk('div', 'rt-stat'); row.appendChild(mk('span', '', R.actTitle(a))); row.firstChild.style.flex = '1.4';
      var sb = mk('div', 'rt-sb'), si = mk('i'); si.style.width = Math.round(n * 100 / 30) + '%'; sb.appendChild(si); row.appendChild(sb);
      row.appendChild(mk('span', '', n + ' ' + (es() ? t('days') : (n === 1 ? 'يَوْمٌ' : n === 2 ? 'يَوْمَانِ' : n <= 10 ? 'أَيَّامٍ' : 'يَوْمًا')))); box.appendChild(row); });
    if (!anyd) box.appendChild(mk('div', 'rt-empty', t('noData')));
    view.appendChild(box);
  }

  /* ───────── Tarjeta en la pantalla principal ───────── */
  function ensureHomeCard() {
    var q = document.querySelector('#homeView button[onclick="showQuranView()"]'); if (!q || !q.parentNode) return;
    var card = document.getElementById('rtHomeCard');
    if (!true) { if (card) card.remove(); return; }
    if (!card) {
      card = document.createElement('button'); card.id = 'rtHomeCard'; card.type = 'button';
      card.className = q.className.replace(/bg-gradient-to-br|from-amber-600|to-amber-800|hover:from-amber-700|border-amber-300\/30/g, '').trim();
      card.style.cssText = 'background: linear-gradient(135deg, #047857, #064e3b) !important; border-color: rgba(245,200,90,.45) !important;';
      card.onclick = function () { W.showRoutine(); };
      q.parentNode.insertBefore(card, q.nextSibling);
    }
    card.innerHTML = '<span class="home-icon-wrap"><img src="Iconos/Wird.webp" alt="وردي اليومي" class="home-category-icon" loading="lazy" decoding="async"></span>' +
      '<span class="block"><span class="block text-lg sm:text-xl font-bold" id="btnRoutineTitle"></span><span class="block text-emerald-100 text-[10px] sm:text-xs mt-0.5 line-clamp-1" id="btnRoutineSub"></span></span>';
    var sp = card.querySelectorAll('span.block span.block'); sp[0].textContent = es() ? 'Mi rutina diaria' : 'وِرْدِي الْيَوْمِيُّ'; sp[1].textContent = es() ? 'Organiza tus azkar y tu lectura del Corán, y sigue tu constancia' : 'نَظِّمْ أَذْكَارَكَ وَقِرَاءَتَكَ وَتَابِعْ مُدَاوَمَتَكَ';
  }
  var origLang = W.applyLanguageUI;
  W.applyLanguageUI = function () {
    var r = origLang.apply(this, arguments);
    try { ensureHomeCard(); if (view && !view.classList.contains('hidden')) { setDir(); render(); } } catch (e) {}
    return r;
  };

  // Cambio automático de fecha: al volver a la app o cada minuto se recalcula si cambió el día
  var shownKey = today();
  function checkDate() {
    var k = today(); if (k === shownKey) return; shownKey = k;
    if (view && !view.classList.contains('hidden') && screen === 'main') { reload(); render(); }
  }
  setInterval(checkDate, 30000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) checkDate(); });

  window.addEventListener('zad-admin', function () { try { ensureHomeCard(); } catch (e) {} });
  function init() { ensureHomeCard(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  R.UI = { show: show, ensureHomeCard: ensureHomeCard };
})(window);
