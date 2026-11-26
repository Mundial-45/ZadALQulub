// global-search.js — Buscador global: súplicas, adhkar, aleyas y temas desde una sola búsqueda.
// Botón 🔍 en la cabecera → pantalla de búsqueda sobre todas las secciones (se cargan bajo demanda).
// Funciona en árabe (con o sin tashkil), español, transliteración y por número. No guarda nada.
(function (global) {
  'use strict';
  var SECS = ['azkar', 'rosario', 'adya', 'munajat', 'ruqyah', 'asma', 'glosario', 'qalb'];
  var index = null, building = null, lastQuery = '', filter = 'all', shown = 40, timer = null, overlay = null;

  function isEs() { return typeof currentLang !== 'undefined' && currentLang === 'es'; }
  function L(ar, es) { return isEs() ? es : ar; }
  function mk(tag, text, cls) { var e = document.createElement(tag); if (text != null) e.textContent = text; if (cls) e.className = cls; return e; }

  // Secciones disponibles según el mismo criterio que la app (qalb solo admin en la web; ramadán por fecha)
  function secAllowed(sec) {
    if (sec === 'qalb') return true;
    if (sec === 'ramadan') return typeof isRamadanVisible === 'function' && isRamadanVisible();
    return true;
  }

  // Normalización común: sin tashkil ni acentos/macrones, ا/ي/ه unificadas, sin ʿ ʾ ni apóstrofos, minúsculas, cifras indo-árabes → latinas.
  function norm(s) {
    if (!s) return '';
    return String(s).toLowerCase()
      .replace(/[٠-٩]/g, function (d) { return String(d.charCodeAt(0) - 0x0660); })
      .replace(/[۰-۹]/g, function (d) { return String(d.charCodeAt(0) - 0x06F0); })
      .normalize('NFD').replace(/[̀-ًͯ-ٰٟۖ-ۭـ]/g, '')
      .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/ؤ/g, 'و').replace(/ئ/g, 'ي')
      .replace(/[ʿʾ‘’ʼ'`´]/g, '')
      .replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
  }

  function kindOf(sec, item) {
    if (item && (item.isAyah || /^\s*[\uFD3F﴿]/.test(item.text || ''))) return 'ayah';
    if (sec === 'adya' || sec === 'munajat') return 'dua';
    if (sec === 'azkar' || sec === 'rosario') return 'dhikr';
    return 'other';
  }
  var SEC_NAME = {
    azkar: ['الأذكار', 'Adhkar'], rosario: ['المسبحة', 'Rosario'], adya: ['الأدعية', 'Súplicas'], munajat: ['المناجاة', 'Munayat'], ruqyah: ['الرقية', 'Ruqya'],
    asma: ['الأسماء الحسنى', 'Nombres de Allah'], glosario: ['المعجم', 'Glosario'], qalb: ['رحلة القلب', 'Viaje del corazón'], ramadan: ['رمضان', 'Ramadán']
  };
  var KIND_NAME = { topic: ['موضوع', 'Tema'], dua: ['دعاء', 'Súplica'], dhikr: ['ذكر', 'Dhikr'], ayah: ['آية', 'Aleya'], other: ['', ''] };

  function build() {
    if (index) return Promise.resolve(index);
    if (building) return building;
    var want = SECS.concat(['ramadan']).filter(secAllowed);
    var load = Promise.all(want.map(function (sec) {
      try { return typeof loadSection === 'function' ? Promise.resolve(loadSection(sec)).catch(function () {}) : Promise.resolve(); } catch (e) { return Promise.resolve(); }
    }));
    building = load.then(function () {
      var out = [];
      want.forEach(function (sec) {
        var m = global.ZadSectionModules && global.ZadSectionModules[sec];
        if (!m || !m.getGroups) return;
        m.getGroups().forEach(function (g) {
          var gt = norm((g.titleAr || '') + ' ' + (g.titleEs || '') + ' ' + (g.descAr || '') + ' ' + (g.descEs || ''));
          if (g.id && gt) out.push({ sec: sec, gid: g.id, g: g, kind: 'topic', title: norm((g.titleAr || '') + ' ' + (g.titleEs || '')), hay: gt, items: (g.items || []).length });
          (g.items || []).forEach(function (it, i) {
            if (!it) return;
            var body = [it.text, it.latin, it.explanationEs, it.explanationAr, it.note, it.noteEs, it.sharhAr, it.sharhEs];
            var h = norm(body.join(' '));
            if (!h) return;
            out.push({
              sec: sec, gid: g.id, g: g, idx: i, it: it, kind: kindOf(sec, it), num: Number(it.itemNumber) || (i + 1),
              title: norm((g.titleAr || '') + ' ' + (g.titleEs || '')), t: norm(it.text), l: norm(it.latin), e: norm((it.explanationEs || '') + ' ' + (it.explanationAr || '')),
              n: norm((it.note || '') + ' ' + (it.noteEs || '')), hay: h
            });
          });
        });
      });
      index = out;
      return out;
    });
    return building;
  }

  function search(q) {
    var nq = norm(q);
    if (!nq) return [];
    var STOP = { de: 1, la: 1, el: 1, en: 1, y: 1, a: 1, los: 1, las: 1, un: 1, una: 1, que: 1, con: 1, por: 1, para: 1, del: 1, al: 1, tu: 1, mi: 1, su: 1, se: 1, es: 1, lo: 1, o: 1 };
    var toks = nq.split(' ').filter(function (t) { return !STOP[t]; });
    if (!toks.length) toks = nq.split(' ');
    var onlyNum = /^\d{1,4}$/.test(nq) ? Number(nq) : null;
    var res = [];
    for (var k = 0; k < index.length; k++) {
      var e = index[k], sc = 0;
      if (onlyNum !== null) { if (e.kind !== 'topic' && e.num === onlyNum) sc = 10; else continue; }
      else {
        var ok = true, hayAll = e.kind === 'topic' ? e.hay : e.hay + ' ' + e.title;
        for (var j = 0; j < toks.length; j++) if (hayAll.indexOf(toks[j]) < 0) { ok = false; break; }
        if (!ok) continue;
        if (e.kind === 'topic') { sc = 40 + (e.title.indexOf(nq) >= 0 ? 40 : 0); }
        else {
          toks.forEach(function (t) { if (e.t.indexOf(t) >= 0) sc += 10; if (e.l.indexOf(t) >= 0) sc += 8; if (e.n.indexOf(t) >= 0) sc += 4; if (e.e.indexOf(t) >= 0) sc += 5; if (e.title.indexOf(t) >= 0) sc += 6; });
          if (toks.length > 1 && (e.t.indexOf(nq) >= 0 || e.l.indexOf(nq) >= 0)) sc += 25;
        }
      }
      res.push({ e: e, sc: sc, k: k });
    }
    res.sort(function (a, b) { return b.sc - a.sc || a.k - b.k; });
    return res;
  }

  function snippet(e, nq) {
    var it = e.it, toks = nq.split(' ');
    var inText = toks.some(function (t) { return e.t.indexOf(t) >= 0; });
    function cut(s, n) { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n).trim() + '…' : s; }
    var ar = cut(it.text, 150), sub = '';
    if (isEs()) sub = cut(it.explanationEs || it.latin, 170);
    else sub = cut(it.explanationAr || '', 120);
    if (!inText && isEs() && it.latin && toks.some(function (t) { return e.l.indexOf(t) >= 0; })) sub = cut(it.latin, 170);
    return { ar: ar, sub: sub };
  }

  function go(r) {
    close();
    var e = r.e;
    try { global.openGroup(e.gid, false, e.sec); } catch (x) { return; }
    if (e.kind === 'topic') { try { window.scrollTo(0, 0); } catch (x2) {} return; }
    var tries = 0;
    (function jump() {
      var g = typeof currentGroup !== 'undefined' ? currentGroup : null;
      var card = g && g.id === e.gid && document.getElementById('zikr-card-' + e.idx);
      if (card) { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); card.style.boxShadow = '0 0 0 3px #34d399'; setTimeout(function () { card.style.boxShadow = ''; }, 2500); return; }
      if (++tries < 14) setTimeout(jump, 250);
    })();
  }

  function css() {
    if (document.getElementById('gsStyle')) return;
    var s = document.createElement('style'); s.id = 'gsStyle';
    s.textContent =
      '#gsOverlay{position:fixed;inset:0;z-index:80;background:#f8fafc;color:#0f172a;display:flex;flex-direction:column}' +
      '.dark #gsOverlay{background:#0f172a;color:#f1f5f9}' +
      '#gsOverlay .gs-bar{display:flex;gap:.5rem;align-items:center;padding:.7rem .8rem;background:#047857;color:#fff}' +
      '.dark #gsOverlay .gs-bar{background:#064e3b}' +
      '#gsOverlay input{flex:1;min-width:0;min-height:44px;border-radius:.9rem;border:0;padding:.5rem .9rem;font-size:1rem;color:#0f172a;background:#fff}' +
      '#gsOverlay .gs-x{min-width:44px;min-height:44px;border:0;border-radius:.9rem;background:rgba(255,255,255,.18);color:#fff;font-size:1.2rem;cursor:pointer}' +
      '#gsOverlay .gs-chips{display:flex;gap:.4rem;overflow-x:auto;padding:.6rem .8rem;border-bottom:1px solid rgba(100,116,139,.3)}' +
      '#gsOverlay .gs-chip{flex:none;min-height:36px;padding:.25rem .8rem;border-radius:2rem;border:1px solid #059669;background:transparent;color:inherit;font-weight:700;font-size:.85rem;cursor:pointer;font-family:inherit}' +
      '#gsOverlay .gs-chip[aria-pressed=true]{background:#059669;color:#fff}' +
      '#gsOverlay .gs-list{flex:1;overflow-y:auto;padding:.7rem .8rem 2rem;display:flex;flex-direction:column;gap:.6rem}' +
      '#gsOverlay .gs-res{display:block;width:100%;text-align:inherit;border:1px solid rgba(180,140,60,.35);border-radius:1rem;padding:.7rem .85rem;background:#fff;color:inherit;cursor:pointer;font-family:inherit}' +
      '.dark #gsOverlay .gs-res{background:#1e293b;border-color:#334155}' +
      '#gsOverlay .gs-res:focus-visible,#gsOverlay .gs-chip:focus-visible{outline:3px solid #34d399;outline-offset:2px}' +
      '#gsOverlay .gs-meta{display:flex;flex-wrap:wrap;gap:.35rem;align-items:center;font-size:.72rem;font-weight:800;margin-bottom:.4rem}' +
      '#gsOverlay .gs-tag{padding:.1rem .55rem;border-radius:2rem;background:rgba(5,150,105,.15);color:#047857}' +
      '.dark #gsOverlay .gs-tag{color:#6ee7b7}' +
      '#gsOverlay .gs-ar{font-weight:700;line-height:1.9;font-size:1.1rem}' +
      '#gsOverlay .gs-sub{font-size:.85rem;opacity:.8;margin-top:.3rem;line-height:1.6}' +
      '#gsOverlay .gs-info{text-align:center;opacity:.75;padding:1.2rem .5rem;font-size:.9rem}';
    document.head.appendChild(s);
  }

  function renderResults() {
    var list = overlay.querySelector('.gs-list');
    list.textContent = '';
    var q = overlay.querySelector('input').value;
    if (!norm(q)) { list.appendChild(mk('div', L('اكتب بالعربية أو بالإسبانية أو بالحروف اللاتينية، أو اكتب رقمًا.', 'Escribe en árabe, en español o en transliteración; también vale un número.'), 'gs-info')); return; }
    if (!index) { list.appendChild(mk('div', L('جارٍ تجهيز البحث…', 'Preparando la búsqueda…'), 'gs-info')); return; }
    var all = search(q), nq = norm(q);
    var res = all.filter(function (r) { return filter === 'all' || r.e.kind === filter; });
    var counts = {}; all.forEach(function (r) { counts[r.e.kind] = (counts[r.e.kind] || 0) + 1; });
    overlay.querySelectorAll('.gs-chip').forEach(function (c) { var f = c.getAttribute('data-f'); var n = f === 'all' ? all.length : (counts[f] || 0); c.firstChild.nodeValue = c.getAttribute('data-l') + ' (' + n + ')'; });
    if (!res.length) { list.appendChild(mk('div', L('لا توجد نتائج لـ «' + q + '»', 'Sin resultados para «' + q + '»'), 'gs-info')); return; }
    res.slice(0, shown).forEach(function (r) {
      var e = r.e, b = mk('button', null, 'gs-res'); b.type = 'button'; b.onclick = function () { go(r); };
      var meta = mk('div', null, 'gs-meta');
      var kn = KIND_NAME[e.kind][isEs() ? 1 : 0];
      if (kn) meta.appendChild(mk('span', kn, 'gs-tag'));
      meta.appendChild(mk('span', SEC_NAME[e.sec][isEs() ? 1 : 0], 'gs-tag'));
      var gTitle = isEs() ? (e.g.titleEs || e.g.titleAr) : (e.g.titleAr || e.g.titleEs);
      meta.appendChild(mk('span', gTitle + (e.kind === 'topic' ? '' : ' · ' + (isEs() ? 'n.º ' : 'رقم ') + e.num)));
      b.appendChild(meta);
      if (e.kind === 'topic') {
        var d = isEs() ? (e.g.descEs || '') : (e.g.descAr || '');
        b.appendChild(mk('div', e.items + (isEs() ? ' elementos' : ' عناصر') + (d ? ' — ' + d : ''), 'gs-sub'));
      } else {
        var sn = snippet(e, nq), a = mk('div', sn.ar, 'gs-ar'); a.setAttribute('dir', 'rtl'); b.appendChild(a);
        if (sn.sub) { var s2 = mk('div', sn.sub, 'gs-sub'); s2.setAttribute('dir', isEs() ? 'ltr' : 'rtl'); b.appendChild(s2); }
      }
      list.appendChild(b);
    });
    if (res.length > shown) {
      var more = mk('button', L('عرض المزيد', 'Mostrar más') + ' (' + (res.length - shown) + ')', 'gs-chip'); more.type = 'button'; more.style.alignSelf = 'center';
      more.onclick = function () { shown += 40; renderResults(); }; list.appendChild(more);
    }
  }

  function open() {
    css();
    if (overlay) return;
    overlay = document.createElement('div'); overlay.id = 'gsOverlay'; overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', L('بحث', 'Buscar')); overlay.setAttribute('dir', isEs() ? 'ltr' : 'rtl');
    var bar = mk('div', null, 'gs-bar');
    var inp = document.createElement('input'); inp.type = 'search'; inp.setAttribute('enterkeyhint', 'search'); inp.autocomplete = 'off';
    inp.placeholder = L('ابحث عن دعاء أو ذكر أو آية أو موضوع…', 'Buscar súplica, dhikr, aleya o tema…'); inp.setAttribute('aria-label', inp.placeholder); inp.setAttribute('dir', 'auto'); inp.value = lastQuery;
    var x = mk('button', '✕', 'gs-x'); x.type = 'button'; x.setAttribute('aria-label', L('إغلاق', 'Cerrar')); x.onclick = close;
    bar.appendChild(inp); bar.appendChild(x);
    var chips = mk('div', null, 'gs-chips'); chips.setAttribute('role', 'group');
    [['all', 'الكل', 'Todo'], ['dua', 'أدعية', 'Súplicas'], ['dhikr', 'أذكار', 'Adhkar'], ['ayah', 'آيات', 'Aleyas'], ['topic', 'مواضيع', 'Temas'], ['other', 'أخرى', 'Otros']].forEach(function (f) {
      var lab = isEs() ? f[2] : f[1], c = mk('button', lab + ' (0)', 'gs-chip'); c.type = 'button'; c.setAttribute('data-f', f[0]); c.setAttribute('data-l', lab);
      c.setAttribute('aria-pressed', filter === f[0] ? 'true' : 'false');
      c.onclick = function () { filter = f[0]; shown = 40; chips.querySelectorAll('.gs-chip').forEach(function (o) { o.setAttribute('aria-pressed', o === c ? 'true' : 'false'); }); renderResults(); };
      chips.appendChild(c);
    });
    var list = mk('div', null, 'gs-list'); list.setAttribute('aria-live', 'polite');
    overlay.appendChild(bar); overlay.appendChild(chips); overlay.appendChild(list);
    document.body.appendChild(overlay); document.body.style.overflow = 'hidden';
    inp.oninput = function () { lastQuery = inp.value; shown = 40; clearTimeout(timer); timer = setTimeout(renderResults, 160); };
    overlay.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') close(); });
    renderResults(); inp.focus();
    if (!index) build().then(function () { if (overlay) renderResults(); });
  }
  function close() { if (!overlay) return; overlay.remove(); overlay = null; document.body.style.overflow = ''; }

  function ensureButton() {
    if (document.getElementById('gsBtn')) return;
    var dark = document.querySelector('header button[onclick="toggleDarkMode()"]');
    if (!dark || !dark.parentNode) return;
    var b = document.createElement('button'); b.type = 'button'; b.id = 'gsBtn';
    b.className = dark.className; b.textContent = '🔍'; b.style.fontSize = '1rem'; b.style.lineHeight = '1.25rem';
    b.onclick = open; dark.parentNode.insertBefore(b, dark);
    label();
  }
  function label() { var b = document.getElementById('gsBtn'); if (b) { b.title = L('بحث', 'Buscar'); b.setAttribute('aria-label', L('بحث في كل الأقسام', 'Buscar en toda la app')); } }

  var origLang = global.applyLanguageUI;
  if (typeof origLang === 'function') {
    global.applyLanguageUI = function () {
      var r = origLang.apply(this, arguments);
      try { ensureButton(); label(); if (overlay) { var o = overlay; close(); lastQuery = o ? lastQuery : ''; open(); } } catch (e) {}
      return r;
    };
  }
  global.openGlobalSearch = open;
  function init() { ensureButton(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  window.addEventListener('zad-admin', function () { index = null; building = null; });
})(window);
