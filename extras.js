/*
 * Extras de Zad al-Qulub (se carga después de app.js y adab.js):
 *  1) Favoritos de SECCIONES completas (por ejemplo «Azkar de la mañana»): estrella en la cabecera del grupo
 *     y bloque «Secciones guardadas» arriba en Favoritos.
 *  2) «Súplicas según la situación»: elige cómo te sientes y la app te lleva a los grupos de súplicas relacionados
 *     (con sus fuentes y audios, que son los de siempre).
 */
(function () {
  'use strict';

  function isEs() { return typeof currentLang !== 'undefined' && currentLang === 'es'; }
  function mk(tag, cls, text) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text != null) el.textContent = text;
    return el;
  }
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }
  function modGroup(sec, id) {
    try {
      var m = getSectionModule(sec);
      return m && typeof m.findGroup === 'function' ? m.findGroup(id) : null;
    } catch (e) { return null; }
  }
  var SEC_NAMES = {
    azkar: ['أذكار', 'Azkar'], adya: ['أدعية', 'Súplicas'], munajat: ['مناجاة', 'Munajat'],
    ruqyah: ['رقية', 'Ruqya'], asma: ['الأسماء الحسنى', 'Nombres de Allah'], glosario: ['معجم', 'Glosario'], qalb: ['رحلة القلب', 'El viaje del corazón']
  };

  var CSS = [
    '.zx-star{flex:none;font-size:1.25rem;line-height:1;padding:.35rem .6rem;border-radius:.75rem;border:1px solid #fecdd3;background:#fff1f2;color:#e11d48;cursor:pointer}',
    'html.dark .zx-star{background:rgba(76,5,25,.5);border-color:#9f1239;color:#fb7185}',
    '.zx-block-title{font-weight:800;font-size:.95rem;color:#475569;margin:.2rem 0 .1rem}',
    'html.dark .zx-block-title{color:#cbd5e1}',
    '.zx-row{display:flex;align-items:center;gap:.5rem;width:100%}',
    '.zx-card{flex:1;min-width:0;display:flex;align-items:center;justify-content:space-between;gap:.6rem;padding:.85rem 1rem;border-radius:1rem;border:1px solid #e2e8f0;background:#fff;color:#0f172a;font-weight:700;cursor:pointer;text-align:start;box-shadow:0 1px 2px rgba(0,0,0,.05)}',
    'html.dark .zx-card{background:#1e293b;border-color:#334155;color:#f1f5f9}',
    '.zx-card small{display:block;font-weight:500;opacity:.75;margin-top:.15rem;font-size:.72rem}',
    '.zx-x{flex:none;border:0;background:#fff1f2;color:#e11d48;border-radius:.75rem;padding:.55rem .7rem;font-size:.9rem;cursor:pointer}',
    'html.dark .zx-x{background:rgba(76,5,25,.5);color:#fb7185}',
    '.zx-chip{width:100%;padding:1rem;border-radius:1rem;border:1px solid #fde68a;background:linear-gradient(135deg,#fffbeb,#fef3c7);color:#78350f;font-weight:800;font-size:1.02rem;cursor:pointer;display:flex;align-items:center;gap:.7rem}',
    'html.dark .zx-chip{background:linear-gradient(135deg,#451a03,#78350f);border-color:#92400e;color:#fef3c7}',
    '.zx-chip .zx-emo{font-size:1.5rem}',
    '.zx-view{display:block}.zx-view.hidden{display:none}',
    '.zx-head{display:flex;align-items:center;justify-content:space-between;gap:.5rem;padding-bottom:.75rem;border-bottom:1px solid #e2e8f0;margin-bottom:1rem}',
    'html.dark .zx-head{border-color:#1e293b}',
    '.zx-back{font-size:.875rem;font-weight:600;color:#047857;background:#ecfdf5;border:1px solid #a7f3d0;padding:.375rem .75rem;border-radius:.75rem;cursor:pointer}',
    'html.dark .zx-back{color:#34d399;background:rgba(2,44,34,.5);border-color:#065f46}',
    '.zx-title{flex:1;text-align:center;font-weight:700;font-size:1.1rem;line-height:1.5;color:#1e293b}',
    'html.dark .zx-title{color:#f1f5f9}',
    '.zx-list{display:flex;flex-direction:column;gap:.7rem}',
    '.zx-chip,.zx-card,.zx-back{font-family:inherit}',
    '.zx-chip{background:linear-gradient(135deg,#059669,#115e59)!important;color:#fff!important;border:1px solid rgba(255,255,255,.1)!important;border-radius:1rem;font-weight:700;font-size:.95rem;box-shadow:0 4px 6px rgba(0,0,0,.12)}',
    '.zx-chip .zx-emo{background:rgba(255,255,255,.2);border-radius:.75rem;padding:.5rem .6rem;font-size:1.3rem}',
    '.zx-card{background:linear-gradient(135deg,#0d9488,#065f46)!important;color:#fff!important;border:1px solid rgba(255,255,255,.1)!important;border-radius:1rem}',
    '.zx-card small{color:#d1fae5}',
    '.zx-title{font-size:1.25rem}',
    '.zx-back{background-color:#d1fae5;color:#065f46;border-color:#6ee7b7}html.dark .zx-back{background-color:#064e3b;color:#d1fae5;border-color:#047857}',
    '.zx-hint{font-size:.85rem;color:#64748b;text-align:center;margin-bottom:.8rem}'
  ].join('');
  (function () { var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st); })();

  /* ───────────── 1) Favoritos de secciones ───────────── */
  var GFAV_KEY = 'zad_fav_groups_v1';
  function gfavs() { try { var a = JSON.parse(store(GFAV_KEY) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  function saveG(a) { store(GFAV_KEY, JSON.stringify(a)); }
  function gkey(sec, id) { return sec + '|' + id; }

  function toggleGroupFav() {
    if (typeof currentGroup === 'undefined' || !currentGroup || typeof currentSection === 'undefined' || !currentSection) return;
    var k = gkey(currentSection, currentGroup.id), a = gfavs(), i = a.indexOf(k);
    if (i >= 0) { a.splice(i, 1); toast(isEs() ? 'Sección quitada de favoritos' : 'تمت إزالة القسم من المفضلة'); }
    else { a.push(k); toast(isEs() ? 'Sección añadida a favoritos' : 'تمت إضافة القسم إلى المفضلة'); }
    saveG(a);
    updateStar();
  }
  function toast(m) { try { showToast(m); } catch (e) {} }

  function ensureStar() {
    var btn = document.getElementById('zxGroupStar');
    if (btn) return btn;
    var reset = document.getElementById('resetAllBtn');
    if (!reset || !reset.parentNode) return null;
    btn = mk('button', 'zx-star');
    btn.id = 'zxGroupStar';
    btn.type = 'button';
    btn.onclick = toggleGroupFav;
    reset.parentNode.insertBefore(btn, reset);
    return btn;
  }
  function updateStar() {
    var btn = ensureStar();
    if (!btn) return;
    var on = typeof currentGroup !== 'undefined' && currentGroup && typeof currentSection !== 'undefined' &&
      gfavs().indexOf(gkey(currentSection, currentGroup.id)) >= 0;
    btn.textContent = on ? '★' : '☆';
    var label = on ? (isEs() ? 'Quitar sección de favoritos' : 'إزالة القسم من المفضلة') : (isEs() ? 'Guardar esta sección en favoritos' : 'حفظ هذا القسم في المفضلة');
    btn.setAttribute('aria-label', label);
    btn.title = label;
  }

  var origItems = window.renderGroupItems;
  if (typeof origItems === 'function') {
    window.renderGroupItems = function () {
      var r = origItems.apply(this, arguments);
      try { updateStar(); } catch (e) {}
      return r;
    };
  }

  function renderFavGroups() {
    var view = document.getElementById('favoritesView');
    var container = document.getElementById('favoritesContainer');
    if (!view || !container || view.classList.contains('hidden')) return;
    var old = document.getElementById('zxFavGroups');
    if (old) old.remove();
    var a = gfavs().filter(function (k) { var p = k.split('|'); return modGroup(p[0], p[1]); });
    if (!a.length) return;
    var es = isEs();
    var wrap = mk('div', 'zx-list');
    wrap.id = 'zxFavGroups';
    wrap.appendChild(mk('div', 'zx-block-title', es ? 'Secciones guardadas' : 'الأقسام المحفوظة'));
    a.forEach(function (k) {
      var p = k.split('|'), g = modGroup(p[0], p[1]);
      var row = mk('div', 'zx-row');
      var card = mk('button', 'zx-card');
      card.type = 'button';
      var left = mk('div');
      left.appendChild(mk('span', '', es ? (g.titleEs || g.titleAr) : g.titleAr));
      left.appendChild(mk('small', '', (SEC_NAMES[p[0]] ? SEC_NAMES[p[0]][es ? 1 : 0] : p[0]) + ' · ' + (g.items ? g.items.length : 0) + (es ? ' elementos' : ' عَنَاصِر')));
      card.appendChild(left);
      card.appendChild(mk('span', '', es ? '→' : '←'));
      card.onclick = function () { openGroup(p[1], false, p[0]); };
      var x = mk('button', 'zx-x', '✕');
      x.type = 'button';
      x.setAttribute('aria-label', es ? 'Quitar de favoritos' : 'إزالة من المفضلة');
      x.onclick = function () { var b = gfavs(); var i = b.indexOf(k); if (i >= 0) b.splice(i, 1); saveG(b); renderFavGroups(); fixEmptyFav(); };
      row.appendChild(card); row.appendChild(x);
      wrap.appendChild(row);
    });
    container.insertBefore(wrap, container.firstChild);
    fixEmptyFav();
  }
  // Si solo hay secciones guardadas, el aviso «no hay invocaciones guardadas» sobra.
  function fixEmptyFav() {
    var container = document.getElementById('favoritesContainer');
    if (!container) return;
    var has = !!document.getElementById('zxFavGroups');
    Array.prototype.forEach.call(container.children, function (c) {
      if (c.id !== 'zxFavGroups' && !c.querySelector('button') && c.querySelector('p')) c.style.display = has ? 'none' : '';
    });
  }
  var origShowFav = window.showFavorites;
  if (typeof origShowFav === 'function') {
    window.showFavorites = function () {
      var r = origShowFav.apply(this, arguments);
      try {
        if (typeof allSectionsLoaded === 'function' && allSectionsLoaded()) renderFavGroups();
      } catch (e) {}
      return r;
    };
  }

  (function () { var st = document.createElement('style'); st.textContent = '#homeView.zx-fit{height:var(--zx-home-h,auto);min-height:0;display:flex!important;flex-direction:column;margin-top:0!important;margin-bottom:0!important;padding-top:0!important}\n#homeView.zx-fit.hidden{display:none!important}\n#homeView.zx-fit>h2{flex:none;margin:.1rem 0 .45rem!important;font-size:1rem}\n#homeView.zx-fit .home-category-grid{flex:1 1 auto;min-height:0;grid-auto-rows:minmax(0,1fr)!important;gap:.5rem!important}\n#homeView.zx-fit .home-category-card{min-height:0!important;height:100%;padding:.25rem .35rem!important;gap:.12rem!important;justify-content:center}\n#homeView.zx-fit .home-category-card.home-category-wide{min-height:0!important;padding:.25rem .8rem!important}\n#homeView.zx-fit .home-icon-wrap{flex:0 0 var(--zx-ic,44px)!important;width:var(--zx-ic,44px)!important;height:var(--zx-ic,44px)!important}\n#homeView.zx-fit .home-category-icon{width:var(--zx-ic,44px)!important;height:var(--zx-ic,44px)!important;max-width:var(--zx-ic,44px)!important;max-height:var(--zx-ic,44px)!important}\n#homeView.zx-fit .home-category-card [id$=Title]{font-size:var(--zx-fs,.95rem)!important;line-height:1.25!important}\n#homeView.zx-fit.zx-noh2>h2{display:none}\n#homeView.zx-fit.zx-row .home-category-card:not(.home-category-wide){flex-direction:row!important;justify-content:flex-start!important;text-align:start!important;gap:.5rem!important;padding:.3rem .6rem!important}\n#homeView.zx-fit.zx-row .home-category-card:not(.home-category-wide)>span:last-child{width:auto!important;flex:1 1 auto;min-width:0}\n#homeView.zx-fit .home-category-card [id$=Sub]{-webkit-line-clamp:2!important;font-size:.62rem!important;line-height:1.25!important}\n#homeView.zx-fit.zx-row .home-category-card:not(.home-category-wide) [id$=Title]{white-space:normal!important;line-height:1.2!important}'; document.head.appendChild(st); })();

  /* Pantalla de inicio: todos los botones visibles sin desplazar, en cualquier tamaño de pantalla. */
  function fitHome() {
    try {
      var hv = document.getElementById('homeView'), hd = document.querySelector('header'), ft = document.querySelector('footer'), mn = document.querySelector('main');
      if (!hv || !hd || !ft || !mn) return;
      hv.classList.add('zx-fit');
      var cs = getComputedStyle(mn), pad = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var raw = vh - hd.offsetHeight - ft.offsetHeight - pad;
      var gr = hv.querySelector('.home-category-grid'), nW = 0, nN = 0;
      if (gr) Array.prototype.forEach.call(gr.children, function (c) { if (c.classList.contains('home-category-wide') || c.id === 'rtHomeCard') nW++; else nN++; });
      var ROWS = Math.max(6, nW + Math.ceil(nN / 2));
      var rowH = (raw - 40 - 30) / ROWS;          // con título de bienvenida
      var noh2 = rowH < 88;
      if (noh2) rowH = (raw - 30) / ROWS;
      var avail = Math.max(raw, ROWS * 74 + 30 + (noh2 ? 0 : 40));
      rowH = Math.max(rowH, 74);
      hv.classList.toggle('zx-noh2', noh2);
      hv.style.setProperty('--zx-home-h', avail + 'px');
      var row = rowH < 118;
      hv.classList.toggle('zx-row', row);
      var ic = Math.max(30, Math.min(54, Math.round(rowH * (row ? 0.5 : 0.42))));
      hv.style.setProperty('--zx-ic', ic + 'px');
      hv.style.setProperty('--zx-fs', (row ? (window.innerWidth < 350 ? 0.74 : window.innerWidth < 600 ? 0.8 : 1) : 1) + 'rem');
    } catch (e) {}
  }
  window.addEventListener('resize', fitHome);
  window.addEventListener('orientationchange', function () { setTimeout(fitHome, 250); });
  window.addEventListener('load', fitHome);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', fitHome);

  /* ───────────── 2) Súplicas según la situación ───────────── */
  var SITUATIONS = [
    { id: 'worry', emo: '😟', ar: 'أَنَا قَلِقٌ', es: 'Estoy preocupado',
      groups: [['azkar', 'karb_khawf'], ['adya', 'adya_hamm_huzn'], ['adya', 'adya_karb_shidda'], ['munajat', 'alivio'], ['azkar', 'amr_yakrahuh']] },
    { id: 'fear', emo: '😨', ar: 'أَنَا خَائِفٌ', es: 'Tengo miedo',
      groups: [['azkar', 'karb_khawf'], ['azkar', 'ind_faza'], ['munajat', 'refugio'], ['adya', 'adya_karb_shidda']] },
    { id: 'ill', emo: '🤒', ar: 'أَنَا مَرِيضٌ', es: 'Estoy enfermo',
      groups: [['azkar', 'marid'], ['azkar', 'waja_fi_jasad'], ['munajat', 'salud'], ['ruqyah', 'ruqyah_shariyah_healing']] },
    { id: 'patience', emo: '🌿', ar: 'أَحْتَاجُ إِلَى الصَّبْرِ', es: 'Necesito paciencia',
      groups: [['azkar', 'amr_yakrahuh'], ['adya', 'adya_musiba'], ['adya', 'adya_karb_shidda'], ['munajat', 'confianza']] },
    { id: 'rizq', emo: '🤲', ar: 'أَطْلُبُ الرِّزْقَ', es: 'Busco sustento',
      groups: [['adya', 'adya_rizq'], ['munajat', 'sustento'], ['azkar', 'shadaid']] },
    { id: 'tawba', emo: '💧', ar: 'أُرِيدُ أَنْ أَتُوبَ', es: 'Quiero arrepentirme',
      groups: [['rosario', 'istighfar_tawbah'], ['adya', 'adya_tawba_maghfirah'], ['munajat', 'perdon'], ['munajat', 'arrepentimiento']] },
    { id: 'protect', emo: '🛡️', ar: 'أَحْتَاجُ إِلَى الْحِمَايَةِ', es: 'Necesito protección',
      groups: [['azkar', 'sabah'], ['azkar', 'masaa'], ['azkar', 'waswasa'], ['azkar', 'radd_kayd_shayatin'], ['azkar', 'himayat_din'], ['munajat', 'refugio'], ['ruqyah', 'ruqyah_shariyah_complete_healing'], ['ruqyah', 'ruqyah_bayt']] },
    { id: 'grief', emo: '😔', ar: 'أَنَا حَزِينٌ أَوْ فَقَدْتُ عَزِيزًا', es: 'Estoy triste o de luto',
      groups: [['adya', 'adya_hamm_huzn'], ['adya', 'adya_musiba'], ['munajat', 'alivio'], ['munajat', 'final']] },
    { id: 'anger', emo: '😡', ar: 'أَنَا غَاضِبٌ', es: 'Estoy enfadado',
      groups: [['azkar', 'waswasa'], ['munajat', 'refugio'], ['munajat', 'guia']] },
    { id: 'travel', emo: '🧳', ar: 'أُرِيدُ أَنْ أُسَافِرَ', es: 'Voy de viaje',
      groups: [['azkar', 'safar_all'], ['azkar', 'istikhara'], ['munajat', 'refugio']] },
    { id: 'debt', emo: '💼', ar: 'عَلَيَّ دَيْنٌ وَضِيقٌ مَالِيٌّ', es: 'Deudas y apuros económicos',
      groups: [['adya', 'adya_rizq'], ['azkar', 'shadaid'], ['munajat', 'sustento']] },
    { id: 'study', emo: '📚', ar: 'أَطْلُبُ الْعِلْمَ', es: 'Estudio y conocimiento',
      groups: [['adya', 'adya_quraniya'], ['adya', 'adya_anbiya'], ['munajat', 'guia'], ['azkar', 'istikhara']] },
    { id: 'injustice', emo: '⚖️', ar: 'أَنَا مَظْلُومٌ', es: 'Sufro una injusticia',
      groups: [['adya', 'adya_karb_shidda'], ['adya', 'adya_anbiya'], ['munajat', 'alivio'], ['munajat', 'confianza']] }
  ];
  var ZG = ['linear-gradient(135deg,#059669,#115e59)', 'linear-gradient(135deg,#0284c7,#0f766e)', 'linear-gradient(135deg,#0d9488,#065f46)', 'linear-gradient(135deg,#0891b2,#0369a1)', 'linear-gradient(135deg,#047857,#164e63)', 'linear-gradient(135deg,#14b8a6,#0369a1)'];
  var TITLE = ['أَدْعِيَةٌ حَسَبَ الْحَالَةِ', 'Súplicas según la situación'];
  var SUB = ['اختر حالتك لتظهر لك الأدعية المناسبة', 'Elige cómo te sientes y verás las súplicas relacionadas'];

  var view = null;
  function ensureView() {
    if (view) return view;
    var main = document.querySelector('main');
    if (!main) return null;
    view = mk('div', 'zx-view hidden');
    view.id = 'situationsView';
    main.appendChild(view);
    return view;
  }
  function hideMine() { if (view) view.classList.add('hidden'); }

  function renderSituation(sit) {
    var es = isEs(), v = ensureView();
    v.innerHTML = '';
    var head = mk('div', 'zx-head');
    var back = mk('button', 'zx-back', es ? 'Volver' : 'رجوع');
    back.type = 'button';
    back.onclick = function () { if (window.history.length > 1) window.history.back(); else goHome(); };
    head.appendChild(back);
    head.appendChild(mk('h2', 'zx-title', sit ? (es ? sit.es : sit.ar) : (es ? TITLE[1] : TITLE[0])));
    head.appendChild(mk('div')); head.lastChild.style.width = '4rem';
    v.appendChild(head);
    var list = mk('div', 'zx-list');
    if (!sit) {
      v.appendChild(mk('p', 'zx-hint', es ? SUB[1] : SUB[0]));
      SITUATIONS.forEach(function (s) {
        var b = mk('button', 'zx-chip'); b.style.background = ZG[SITUATIONS.indexOf(s) % ZG.length];
        b.type = 'button';
        b.appendChild(mk('span', 'zx-emo', s.emo));
        b.appendChild(mk('span', '', es ? s.es : s.ar));
        b.onclick = function () { showSituation(s.id, true); };
        list.appendChild(b);
      });
    } else {
      v.appendChild(mk('p', 'zx-hint', es ? 'Súplicas relacionadas (con sus fuentes y audios):' : 'الأدعية المناسبة (بمصادرها وصوتياتها):'));
      sit.groups.forEach(function (gp) {
        var g = modGroup(gp[0], gp[1]);
        if (!g) return;
        var card = mk('button', 'zx-card');
        card.type = 'button';
        var left = mk('div');
        left.appendChild(mk('span', '', es ? (g.titleEs || g.titleAr) : g.titleAr));
        left.appendChild(mk('small', '', (SEC_NAMES[gp[0]] ? SEC_NAMES[gp[0]][es ? 1 : 0] : gp[0]) + ' · ' + (g.items ? g.items.length : 0) + (es ? ' elementos' : ' عَنَاصِر')));
        card.appendChild(left);
        card.appendChild(mk('span', '', es ? '→' : '←'));
        card.onclick = function () { openGroup(gp[1], false, gp[0]); };
        list.appendChild(card);
      });
    }
    v.appendChild(list);
  }

  function showSituation(id, push) {
    if (!true) return;
    var v = ensureView();
    if (!v) return;
    var sit = id ? SITUATIONS.filter(function (s) { return s.id === id; })[0] : null;
    var go = function () {
      hideAllViews();
      renderSituation(sit);
      v.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (push && window.history && window.history.pushState) {
        try { window.history.pushState({ view: 'situations', sit: id || null }, '', '#situations' + (id ? '-' + id : '')); } catch (e) {}
      }
    };
    if (sit && typeof allSectionsLoaded === 'function' && !allSectionsLoaded()) loadAllSections().then(go); else go();
  }
  window.showSituations = function () { showSituation(null, true); };

  var origHide = window.hideAllViews;
  window.hideAllViews = function () { origHide.apply(this, arguments); hideMine(); };

  window.addEventListener('popstate', function (e) {
    var st = e.state;
    if (st && st.view === 'situations' && true) {
      e.stopImmediatePropagation();
      showSituation(st.sit || null, false);
    }
  }, true);

  // Tarjeta en la pantalla principal (justo antes de «Favoritos»).
  function ensureHomeCard() {
    var fav = document.querySelector('#homeView button[onclick="showFavorites()"]');
    if (!fav || !fav.parentNode) return;
    var card = document.getElementById('zxHomeCard');
    if (!true) { if (card) card.remove(); return; }
    if (!card) {
      card = mk('button', fav.className.replace(/bg-gradient-to-br|from-rose-600|to-rose-800|hover:from-rose-700/g, '').trim());
      card.id = 'zxHomeCard';
      card.style.cssText = 'background: linear-gradient(135deg, #0f766e, #134e4a) !important;';
      card.type = 'button';
      card.onclick = function () { showSituation(null, true); };
      fav.parentNode.insertBefore(card, fav);
    }
    var es = isEs();
    card.innerHTML = '<span class="home-icon-wrap"><img src="Iconos/Situaciones.webp" alt="دعاء حسب الحالة" class="home-category-icon" loading="lazy" decoding="async"></span>' +
      '<span class="block"><span class="block text-lg sm:text-xl font-bold" id="btnSitTitle"></span><span class="block text-teal-100 text-[10px] sm:text-xs mt-0.5 line-clamp-1" id="btnSitSub"></span></span>';
    var sp = [card.querySelector('#btnSitTitle'), card.querySelector('#btnSitSub')];
    sp[0].textContent = es ? 'Súplicas según la situación' : 'أَدْعِيَةٌ حَسَبَ الْحَالَةِ';
    sp[1].textContent = es ? 'Elige cómo te sientes' : 'اختر حالتك';
  }
  var origLang = window.applyLanguageUI;
  window.applyLanguageUI = function () {
    var r = origLang.apply(this, arguments);
    try { ensureHomeCard(); fitHome(); updateStar(); renderFavGroups(); if (view && !view.classList.contains('hidden')) { var st = window.history.state || {}; renderSituation(st.sit ? SITUATIONS.filter(function (s) { return s.id === st.sit; })[0] : null); } } catch (e) {}
    return r;
  };
  window.addEventListener('zad-admin', function () { try { ensureHomeCard(); fitHome(); setTimeout(fitHome, 60); } catch (e) {} });
  function init() { ensureHomeCard(); fitHome(); setTimeout(fitHome, 300); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
