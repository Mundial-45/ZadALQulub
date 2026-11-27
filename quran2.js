// quran2.js — «القرآن الكريم (جديد)». Sección de prueba, solo visible en modo admin.
// Mismas páginas de quran_pages/, lectura continua con scroll vertical. Pulsar sobre la página abre un panel lateral con selector de
// sura / hizb / juz, ir a página, modo noche y marcadores. El zoom es con dos dedos.
(function () {
  'use strict';

  var TOTAL = 638;
  var K_LAST = 'quran2_last_page_v1';
  var K_MARKS = 'quran2_marks_v1';
  var K_ZOOM = 'quran2_zoom_v1';
  var K_NIGHT = 'quran2_night_v1';
  var cur = 1;
  // Marca de ثمن por página (0 = ninguna, 1..7 = الثمن الأول، ربع، الثالث، نصف، الخامس، ثلاثة أرباع، السابع). Datos del mushaf de Warsh; sirve a esta edición de 638 páginas.
  var THUMN = '00012345677012345567012234556701223456701124456770123345677012334566701223456701223345670012344567001233456700123445670012344556700122344567012345667001233456670012334566701223456701123345667012345677012334567701123445677012344567001233455670012234567001233456670112234556701223455670122344567700123445670012334556770112345567011234556701223456670112344566701123445677012334556700112345567001234456700123345670011234556670012344567012344567011223455677012334556700122344566701123456770112334567001234566701122344566700122344566700123456670112344567701122344567701223445567700123345670011233445667001223345667001122345567701122344556667777';
  var THUMN_AR = ['', 'الثمن الأول', 'ربع الحزب', 'الثمن الثالث', 'نصف الحزب', 'الثمن الخامس', 'ثلاثة أرباع الحزب', 'الثمن السابع'];
  var THUMN_ES = ['', 'Octavo 1 del hizb', 'Cuarto del hizb', 'Octavo 3 del hizb', 'Medio hizb', 'Octavo 5 del hizb', 'Tres cuartos del hizb', 'Octavo 7 del hizb'];
  var JUZ_AR = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر', 'الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر', 'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرون', 'الحادي والعشرون', 'الثاني والعشرون', 'الثالث والعشرون', 'الرابع والعشرون', 'الخامس والعشرون', 'السادس والعشرون', 'السابع والعشرون', 'الثامن والعشرون', 'التاسع والعشرون', 'الثلاثون'];
  function hizbOf(p) { var h = 1; for (var i = 0; i < quranAhzab.length; i++) { if (quranAhzab[i].page <= p) h = quranAhzab[i].id; else break; } return h; }

  function isEs() { return typeof currentLang !== 'undefined' && currentLang === 'es'; }
  function adminOk() { return typeof isAdminMode === 'function' && isAdminMode(); }
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function toast(m) { if (typeof showToast === 'function') showToast(m); }
  function $(id) { return document.getElementById(id); }
  function mk(tag, cls, text) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text != null) el.textContent = text;
    return el;
  }
  function clampPage(n) { n = parseInt(n, 10); if (!n || n < 1) return 1; return n > TOTAL ? TOTAL : n; }
  function norm(s) {
    return String(s || '').replace(/[ً-ْٰـ]/g, '').replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').toLowerCase();
  }
  function marks() { try { var m = JSON.parse(get(K_MARKS) || '[]'); return Array.isArray(m) ? m : []; } catch (e) { return []; } }
  function saveMarks(m) { set(K_MARKS, JSON.stringify(m)); }

  // Página aproximada de una aya: reparte las ayas de la sura entre su página inicial y la de la sura siguiente.
  // No hay tabla aya→página de esta edición, así que el resultado puede variar ±1 página.
  function pageForAya(surahId, aya) {
    var s = quranSurahs[surahId - 1];
    if (!s) return 1;
    var next = quranSurahs[surahId];
    var end = next ? next.page : TOTAL;
    var span = Math.max(0, end - s.page);
    var a = Math.min(Math.max(1, aya), s.ayahs);
    return clampPage(s.page + Math.floor(((a - 1) / s.ayahs) * (span + (next ? 0.999 : 0))));
  }

  function ensureView() {
    var v = $('quran2View');
    if (v) return v;
    var host = $('quranReaderView');
    if (!host || !host.parentNode) return null;
    v = mk('div', 'hidden');
    v.id = 'quran2View';
    host.parentNode.insertBefore(v, host.nextSibling);
    v.innerHTML =
      '<style>' +
      '#quran2View .q2-night img{filter:invert(1) hue-rotate(180deg) brightness(.9)}' +
      '#quran2View .q2-box{position:relative;width:100%;padding-bottom:146.6%}' +
      '#quran2View .q2-box img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain}' +
      '#quran2View .q2-cad{height:.55rem;background-size:100% 100%;background-repeat:no-repeat}' +
      '#quran2View .q2-cad1{background-image:url(quran_pages/q2_cadre1.jpg)}#quran2View .q2-cad2{background-image:url(quran_pages/q2_cadre2.jpg)}' +
      '#quran2View .q2-hd{display:flex;align-items:center;justify-content:space-between;direction:rtl;height:2.7rem;padding:0 1.25rem;gap:.35rem;font-size:calc(min(.78rem,2.75vw) * var(--q2z,1));white-space:nowrap;overflow:hidden;color:#7a3b2a;background:#fdca9b;position:relative}' +
      '#quran2View .q2-hd>span{display:inline-block}#quran2View .q2-hd i{font-style:normal;margin-inline-start:.4rem}' +
      '#quran2View .q2-hz{color:#9f0f1d;font-weight:800;background:#fff;padding:.12rem .65rem;border-radius:999px;box-shadow:0 0 0 2px rgba(255,255,255,.55),0 1px 6px rgba(0,0,0,.25)}' +
      '@keyframes q2pulse{0%{transform:scale(1)}40%{transform:scale(1.25);box-shadow:0 0 0 3px #fff,0 0 18px 6px rgba(255,255,255,.95)}100%{transform:scale(1)}}' +
      '#quran2View .q2-hz.q2-pulse{animation:q2pulse 1.4s ease-in-out}' +
      '#quran2View .q2-ros{position:absolute;top:50%;width:1.7rem;height:1.7rem;margin-top:-.85rem;border-radius:50%;background:radial-gradient(circle,#f3a3ad 0 34%,#fbe9a6 36% 50%,rgba(251,233,166,.45) 52% 62%,transparent 64%)}' +
      '#quran2View .q2-ros.r{right:-.35rem}#quran2View .q2-ros.l{left:-.35rem}' +
      '#quran2View .q2-num{height:2.2rem;line-height:2.2rem;text-align:center;font-size:calc(min(.9rem,3.4vw) * var(--q2z,1));color:#7a3b2a;background:#fdca9b;border-bottom:2px solid rgba(124,58,42,.2)}' +
      '#q2Drawer{position:fixed;top:0;bottom:0;right:0;width:min(82vw,20rem);z-index:60;background:#0f172a;color:#f1f5f9;box-shadow:-6px 0 24px rgba(0,0,0,.45);transform:translateX(105%);transition:transform .22s;display:flex;flex-direction:column;padding:.7rem;gap:.55rem;direction:rtl}' +
      '#q2Drawer.open{transform:none}' +
      '#q2Drawer .q2-btn{padding:.4rem .7rem;border-radius:.7rem;font-weight:700;font-size:.8rem;cursor:pointer;background:#334155;color:#fff;border:0}' +
      '#q2Drawer .q2-ok{background:#059669}#q2Drawer .q2-am{background:#d97706}' +
      '#q2Drawer .q2-field{padding:.45rem .6rem;border-radius:.6rem;border:1px solid #475569;background:#1e293b;color:#f1f5f9;font-size:.85rem;min-width:0}' +
      '#q2Drawer .q2-tabs{display:flex;gap:.3rem}#q2Drawer .q2-tab{flex:1;padding:.4rem 0;border-radius:.6rem;background:#1e293b;color:#cbd5e1;font-size:.8rem;font-weight:700;text-align:center;cursor:pointer;border:0}' +
      '#q2Drawer .q2-tab.on{background:#d97706;color:#fff}' +
      '#q2Drawer .q2-list{flex:1;overflow:auto;min-height:0}' +
      '#q2Drawer .q2-row{display:flex;justify-content:space-between;gap:.5rem;padding:.5rem .55rem;border-radius:.6rem;cursor:pointer;font-size:.85rem}' +
      '#q2Drawer .q2-row:active,#q2Drawer .q2-row.cur{background:rgba(245,158,11,.25)}' +
      '</style>' +
      '<div id="q2Card" class="w-full max-w-2xl mx-auto select-none">' +
        '<div id="q2Wrap" style="overflow-x:auto;touch-action:pan-x pan-y;background:#fdca9b">' +
          '<div id="q2Pages" style="width:100%"></div>' +
        '</div>' +
      '</div>' +
      '<div id="q2Drawer" aria-hidden="true">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:.4rem">' +
          '<button type="button" id="q2Home" class="q2-btn" style="background:#ecfdf5;color:#047857"></button>' +
          '<button type="button" id="q2Close" class="q2-btn">✕</button>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:.4rem">' +
          '<input id="q2PageIn" type="number" min="1" max="' + TOTAL + '" class="q2-field" style="width:4.6rem;text-align:center" />' +
          '<button type="button" id="q2GoPage" class="q2-btn q2-ok"></button>' +
          '<button type="button" id="q2Star" class="q2-btn" style="font-size:1.1rem;padding:.2rem .6rem" aria-label="marcador">☆</button>' +
          '<button type="button" id="q2Night" class="q2-btn" style="font-size:1.1rem;padding:.2rem .6rem">🌙</button>' +
        '</div>' +
        '<input id="q2Range" type="range" min="1" max="' + TOTAL + '" value="1" dir="rtl" style="width:100%" />' +
        '<div class="q2-tabs">' +
          '<button type="button" class="q2-tab on" data-t="s"></button>' +
          '<button type="button" class="q2-tab" data-t="h"></button>' +
          '<button type="button" class="q2-tab" data-t="j"></button>' +
          '<button type="button" class="q2-tab" data-t="m">🔖</button>' +
        '</div>' +
        '<input id="q2Filter" type="text" class="q2-field" />' +
        '<div id="q2MarkAdd" style="display:none;gap:.4rem"><input id="q2Note" type="text" class="q2-field" style="flex:1" /><button type="button" id="q2AddMark" class="q2-btn q2-am"></button></div>' +
        '<div id="q2Results" class="q2-list"></div>' +
      '</div>';

    var tabs = v.querySelectorAll('.q2-tab');
    for (var ti = 0; ti < tabs.length; ti++) {
      tabs[ti].onclick = function () { tab = this.getAttribute('data-t'); renderResults(); };
    }
    $('q2Home').onclick = function () { goHome(); };
    $('q2Close').onclick = function () { drawer(false); };
    $('q2GoPage').onclick = function () {
      var n = parseInt($('q2PageIn').value, 10);
      if (!n || n < 1 || n > TOTAL) { toast(isEs() ? ('Página entre 1 y ' + TOTAL) : ('الصفحة من 1 إلى ' + TOTAL)); return; }
      drawer(false); show(n, true);
    };
    $('q2Filter').oninput = renderResults;
    $('q2Night').onclick = function () { set(K_NIGHT, get(K_NIGHT) === '1' ? '0' : '1'); applyView(); };
    $('q2Range').onchange = function () { drawer(false); show(parseInt(this.value, 10), true); };
    $('q2Star').onclick = function () { toggleMark(); };
    $('q2AddMark').onclick = function () { toggleMark(true); };

    buildPages();
    // Pulsar sobre la página muestra/oculta el panel lateral (un deslizamiento no cuenta como pulsación).
    $('q2Pages').addEventListener('click', function () {
      if (Date.now() - pinchAt < 450) return;
      drawer(!$('q2Drawer').classList.contains('open'));
    });
    setupPinch();
    window.addEventListener('scroll', onScroll, { passive: true });
    applyLabels();
    renderResults();
    return v;
  }

  var tab = 's', pinchAt = 0;
  function drawer(open) {
    var d = $('q2Drawer'); if (!d) return;
    d.classList.toggle('open', !!open);
    d.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) renderResults();
  }

  // Zoom con dos dedos (sin botones): la anchura de las páginas cambia y se mantiene el punto central.
  function setupPinch() {
    var wrap = $('q2Wrap'), d0 = 0, z0 = 1;
    function dist(e) { var a = e.touches[0], b = e.touches[1]; return Math.sqrt(Math.pow(a.clientX - b.clientX, 2) + Math.pow(a.clientY - b.clientY, 2)); }
    wrap.addEventListener('touchstart', function (e) { if (e.touches.length === 2) { d0 = dist(e); z0 = zoomLevel(); pinchAt = Date.now(); } }, { passive: true });
    wrap.addEventListener('touchmove', function (e) {
      if (e.touches.length !== 2 || !d0) return;
      e.preventDefault();
      pinchAt = Date.now();
      setZoom(z0 * dist(e) / d0, true);
    }, { passive: false });
    wrap.addEventListener('touchend', function (e) { if (e.touches.length < 2 && d0) { d0 = 0; pinchAt = Date.now(); } }, { passive: true });
  }
  function setZoom(z, keepPos) {
    z = Math.min(3, Math.max(1, Math.round(z * 100) / 100));
    var old = zoomLevel();
    if (z === old) return;
    set(K_ZOOM, String(z));
    var pg = $('q2Pages'), wrap = $('q2Wrap'), r = z / old, vh = window.innerHeight;
    var lt = listTop(), y = window.pageYOffset, sl = wrap.scrollLeft, w = wrap.clientWidth;
    pg.style.width = (z * 100) + '%';
    pg.style.setProperty('--q2z', String(z));
    if (keepPos) {
      programmatic++;
      window.scrollTo(0, Math.max(0, lt + (y - lt + vh / 2) * r - vh / 2));
      wrap.scrollLeft = (sl + w / 2) * r - w / 2;
      setTimeout(function () { programmatic = Math.max(0, programmatic - 1); }, 120);
    }
  }

  function zoomLevel() { var z = parseFloat(get(K_ZOOM)); return z >= 1 && z <= 3 ? z : 1; }
  function applyView() {
    var pg = $('q2Pages'); if (!pg) return;
    var z = zoomLevel();
    pg.style.width = (z * 100) + '%';
    pg.style.setProperty('--q2z', String(z));
    $('q2Wrap').classList.toggle('q2-night', get(K_NIGHT) === '1');
    $('q2Night').textContent = get(K_NIGHT) === '1' ? '☀️' : '🌙';
  }

  // Lectura continua: 638 huecos de página y solo se cargan las imágenes cercanas a la página actual.
  var KEEP_BEHIND = 3, KEEP_AHEAD = 4, programmatic = 0;
  function buildPages() {
    var pg = $('q2Pages'); if (!pg || pg.firstChild) return;
    var frag = document.createDocumentFragment();
    for (var i = 1; i <= TOTAL; i++) {
      var d = mk('div', 'q2-pg');
      d.setAttribute('data-p', i);
      d.appendChild(mk('div', 'q2-cad q2-cad1'));
      d.appendChild(mk('div', 'q2-hd'));
      d.appendChild(mk('div', 'q2-cad q2-cad2'));
      d.appendChild(mk('div', 'q2-box'));
      d.appendChild(mk('div', 'q2-num', String(i)));
      frag.appendChild(d);
    }
    pg.appendChild(frag);
    labelHeaders();
  }
  // Cabecera de cada página (como el lector de referencia): juz | sura | hizb + marca de ثمن
  function labelHeaders() {
    var pg = $('q2Pages'); if (!pg || !pg.firstChild) return;
    var es = isEs();
    for (var i = 1; i <= TOTAL; i++) {
      var hd = pg.childNodes[i - 1].childNodes[1];
      var hz = hizbOf(i), jz = Math.ceil(hz / 2), tm = parseInt(THUMN.charAt(i - 1), 10) || 0;
      var sur = quranSurahs[0];
      for (var k = 0; k < quranSurahs.length; k++) { if (quranSurahs[k].page <= i) sur = quranSurahs[k]; else break; }
      var html = '<span class="q2-ros r"></span><span class="q2-ros l"></span>' +
        '<span>' + (es ? 'Yuz ' + jz : 'الجزء ' + JUZ_AR[jz - 1]) + '</span>' +
        '<span>' + (es ? 'Sura ' + sur.nameEs : 'سورة ' + sur.nameAr) + '</span>' +
        '<span>' + '<b class="' + (i > 1 && hz !== hizbOf(i - 1) || i === 1 ? 'q2-hz' : '') + '" style="font-weight:inherit;display:inline-block">' + (es ? 'Hizb ' : 'الحزب ') + hz + '</b>' + (tm ? '<i>' + (es ? THUMN_ES[tm] : THUMN_AR[tm]) + '</i>' : '') + '</span>';
      hd.innerHTML = html;
    }
  }
  function pageH() { var f = $('q2Pages') && $('q2Pages').firstChild; return f ? f.getBoundingClientRect().height || 1 : 1; } // con decimales: offsetHeight redondea y el error se acumula en 638 páginas
  function appHeader(hide) { var hd = document.querySelector('header'); if (hd) hd.style.display = hide ? 'none' : ''; }
  function barBottom() { return 0; }
  function listTop() { var pg = $('q2Pages'); return pg.getBoundingClientRect().top + window.pageYOffset; }
  function loadWindow() {
    var pg = $('q2Pages'); if (!pg) return;
    var lo = clampPage(cur - KEEP_BEHIND), hi = clampPage(cur + KEEP_AHEAD);
    for (var i = 1; i <= TOTAL; i++) {
      var d = pg.childNodes[i - 1].childNodes[3], img = d.querySelector('img');
      if (i >= lo && i <= hi) {
        if (!img) { img = document.createElement('img'); img.alt = ''; img.decoding = 'async'; img.src = 'quran_pages/page' + i + '.png'; d.appendChild(img); }
      } else if (img && (i < lo - 2 || i > hi + 2)) { d.removeChild(img); }
    }
  }
  // Aviso al llegar leyendo a la mitad del hizb o al comienzo de un hizb nuevo
  // Al centrarse la página donde empieza un hizb, el «الحزب N» de su cabecera se ilumina un momento.
  function notifyMark(prev, now) {
    if (now === prev || hizbOf(now) === hizbOf(now - 1) || now < 2) return;
    var pg = $('q2Pages'); if (!pg) return;
    var el = pg.childNodes[now - 1].querySelector('.q2-hz'); if (!el) return;
    el.classList.remove('q2-pulse');
    void el.offsetWidth;
    el.classList.add('q2-pulse');
  }
  function setCur(p, notify) {
    var prevPage = cur;
    cur = clampPage(p);
    if (notify) notifyMark(prevPage, cur);
    set(K_LAST, String(cur));
    $('q2PageIn').value = cur;
    $('q2Range').value = cur;
    updateStar();
    loadWindow();
    var v = $('quran2View');
    if (window.history && window.history.replaceState && v && !v.classList.contains('hidden')) {
      try { window.history.replaceState({ view: 'quran2', page: cur }, '', '#quran2-page-' + cur); } catch (e) {}
    }
  }
  function goTo(p) {
    p = clampPage(p);
    setCur(p);
    programmatic++;
    var ph = pageH(), vh = window.innerHeight, top = listTop() + (p - 1) * ph;
    window.scrollTo(0, Math.max(0, ph < vh ? top - (vh - ph) / 2 : top)); // la página queda centrada (o arriba si no cabe)
    setTimeout(function () { programmatic = Math.max(0, programmatic - 1); }, 120);
  }
  var scrollTimer = 0;
  function onScroll() {
    if (programmatic || scrollTimer) return;
    var v = $('quran2View'); if (!v || v.classList.contains('hidden')) return;
    scrollTimer = setTimeout(function () {
      scrollTimer = 0;
      var y = window.pageYOffset + window.innerHeight / 2 - listTop(); // página que está en el centro de la pantalla
      var p = clampPage(Math.floor(y / pageH()) + 1);
      if (p !== cur) setCur(p, true);
    }, 80);
  }

  function applyLabels() {
    var es = isEs();
    var set_ = function (id, t) { var e = $(id); if (e) e.textContent = t; };
    set_('q2Home', es ? 'Inicio' : 'الرئيسية');
    set_('q2GoPage', es ? 'Ir' : 'اذهب');
    set_('q2AddMark', es ? 'Marcar' : 'علّم');
    var tb = document.querySelectorAll('#q2Drawer .q2-tab');
    var names = { s: es ? 'Suras' : 'السور', h: es ? 'Hizb' : 'الأحزاب', j: es ? 'Yuz' : 'الأجزاء' };
    for (var i = 0; i < tb.length; i++) { var k = tb[i].getAttribute('data-t'); if (names[k]) tb[i].textContent = names[k]; }
    var n = $('q2Note'); if (n) n.placeholder = es ? 'Nota (opcional)' : 'ملاحظة (اختياري)';
    var p = $('q2PageIn'); if (p) p.placeholder = '1…' + TOTAL;
  }

  function surahAt(p) { var s = quranSurahs[0]; for (var k = 0; k < quranSurahs.length; k++) { if (quranSurahs[k].page <= p) s = quranSurahs[k]; else break; } return s; }
  function addRow(box, title, sub, page, isCur) {
    var r = mk('div', 'q2-row' + (isCur ? ' cur' : ''));
    r.appendChild(mk('span', 'font-bold', title));
    r.appendChild(mk('span', 'text-xs', sub));
    r.onclick = function () { drawer(false); show(page, true); };
    box.appendChild(r);
  }
  function renderResults() {
    var box = $('q2Results'); if (!box) return;
    var es = isEs(), pageLbl = es ? 'pág. ' : 'ص ';
    var q = norm($('q2Filter').value.trim());
    var tbs = document.querySelectorAll('#q2Drawer .q2-tab');
    for (var i = 0; i < tbs.length; i++) tbs[i].classList.toggle('on', tbs[i].getAttribute('data-t') === tab);
    $('q2Filter').style.display = tab === 's' ? '' : 'none';
    $('q2Filter').placeholder = es ? 'Filtrar suras por nombre o número…' : 'ابحث عن سورة بالاسم أو الرقم…';
    $('q2MarkAdd').style.display = tab === 'm' ? 'flex' : 'none';
    box.innerHTML = '';
    var hz = hizbOf(cur), jz = Math.ceil(hz / 2), cs = surahAt(cur);
    if (tab === 's') {
      quranSurahs.filter(function (s) {
        return !q || String(s.id) === q || norm(s.nameAr).indexOf(q) !== -1 || norm(s.nameEs).indexOf(q) !== -1;
      }).forEach(function (s) { addRow(box, s.id + ' · ' + (es ? s.nameEs : s.nameAr), pageLbl + s.page, s.page, s.id === cs.id); });
    } else if (tab === 'h') {
      quranAhzab.forEach(function (h) { addRow(box, (es ? 'Hizb ' : 'الحزب ') + h.id, (es ? surahAt(h.page).nameEs : surahAt(h.page).nameAr) + ' · ' + pageLbl + h.page, h.page, h.id === hz); });
    } else if (tab === 'j') {
      for (var j = 1; j <= 30; j++) {
        var h = quranAhzab[2 * j - 2];
        addRow(box, es ? 'Yuz ' + j : 'الجزء ' + JUZ_AR[j - 1], (es ? surahAt(h.page).nameEs : surahAt(h.page).nameAr) + ' · ' + pageLbl + h.page, h.page, j === jz);
      }
    } else { renderMarks(); }
  }

  function isMarked(p) { return marks().some(function (m) { return m.page === p; }); }
  function toggleMark(withNote) {
    var m = marks(), i = -1;
    m.forEach(function (x, k) { if (x.page === cur) i = k; });
    if (i >= 0 && !withNote) { m.splice(i, 1); toast(isEs() ? 'Marcador quitado' : 'أُزيلت العلامة'); }
    else {
      var note = ($('q2Note') && $('q2Note').value || '').trim();
      if (i >= 0) m[i].note = note || m[i].note; else m.push({ page: cur, note: note, t: Date.now() });
      if ($('q2Note')) $('q2Note').value = '';
      toast(isEs() ? 'Marcador guardado' : 'تم حفظ العلامة');
    }
    saveMarks(m); updateStar(); renderMarks();
  }
  function updateStar() { var s = $('q2Star'); if (s) s.textContent = isMarked(cur) ? '★' : '☆'; }
  function renderMarks() {
    var box = $('q2Results'); if (!box || tab !== 'm') return;
    box.innerHTML = '';
    var m = marks().sort(function (a, b) { return a.page - b.page; });
    if (!m.length) { box.appendChild(mk('div', 'text-sm p-2', isEs() ? 'Sin marcadores todavía.' : 'لا توجد علامات بعد.')); return; }
    m.forEach(function (x) {
      var r = mk('div', 'q2-row');
      var l = mk('span', 'flex-1');
      l.appendChild(mk('span', 'font-bold', (isEs() ? 'Pág. ' : 'ص ') + x.page + ' · ' + (isEs() ? surahAt(x.page).nameEs : surahAt(x.page).nameAr)));
      if (x.note) l.appendChild(mk('span', 'block text-xs', x.note));
      var del = mk('span', 'font-bold px-2', '✕');
      del.style.color = '#fb7185';
      del.onclick = function (e) { e.stopPropagation(); saveMarks(marks().filter(function (y) { return y.page !== x.page; })); updateStar(); renderMarks(); };
      r.appendChild(l); r.appendChild(del);
      r.onclick = function () { drawer(false); show(x.page, true); };
      box.appendChild(r);
    });
  }

  function show(p, scrollTop, fromRange) {
    var v = ensureView(); if (!v) return;
    if (scrollTop === false) { setCur(p); return; }
    goTo(p);
  }

  function open(page, push) {
    if (!adminOk()) return;
    var v = ensureView(); if (!v) return;
    hideAllViews();
    appHeader(true);
    v.classList.remove('hidden');
    applyLabels();
    applyView();
    var start = page || parseInt(get(K_LAST), 10) || parseInt(get('quran_last_page_v1'), 10) || 1;
    if (push && window.history && window.history.pushState) {
      try { window.history.pushState({ view: 'quran2', page: clampPage(start) }, '', '#quran2-page-' + clampPage(start)); } catch (e) {}
    }
    setTimeout(function () { show(start, true); }, 0);
  }
  window.showQuran2 = function (page) { open(page, true); };

  var origHide = window.hideAllViews;
  window.hideAllViews = function () {
    origHide.apply(this, arguments);
    try { drawer(false); appHeader(false); } catch (e) {}
    var v = $('quran2View'); if (v) v.classList.add('hidden');
  };
  window.addEventListener('popstate', function (e) {
    var st = e.state;
    if (st && st.view === 'quran2') {
      e.stopImmediatePropagation();
      if (adminOk()) open(st.page, false); else goHome(true);
    }
  }, true);

  // Tarjeta en la pantalla principal, justo después de la de «القرآن الكريم». Solo en modo admin.
  function ensureHomeCard() {
    var base = document.querySelector('#homeView button[onclick="showQuranView()"]');
    var card = $('q2HomeCard');
    if (!adminOk()) { if (card) card.remove(); return; }
    if (!base || !base.parentNode) return;
    if (!card) {
      card = mk('button', base.className.replace(/from-amber-600|to-amber-800|hover:from-amber-700/g, '').trim());
      card.id = 'q2HomeCard';
      card.type = 'button';
      card.style.cssText = 'background: linear-gradient(135deg, #b45309, #78350f) !important;';
      card.onclick = function () { open(null, true); };
      base.parentNode.insertBefore(card, base.nextSibling);
    }
    var es = isEs();
    card.innerHTML = '<span class="home-icon-wrap"><img src="Iconos/Quran.webp" alt="" class="home-category-icon" loading="lazy" decoding="async"></span>' +
      '<span class="block"><span class="block text-lg sm:text-xl font-extrabold"></span><span class="block text-amber-100 text-xs mt-0.5 line-clamp-1"></span></span>';
    var sp = card.querySelectorAll('span.block span.block');
    sp[0].textContent = es ? 'Corán (nuevo) ⚙️' : 'القرآن الكريم (جديد) ⚙️';
    sp[1].textContent = es ? 'Prueba: lectura continua y panel lateral' : 'تجريبي: قراءة متواصلة ولوحة جانبية';
  }

  var origLang = window.applyLanguageUI;
  if (typeof origLang === 'function') {
    window.applyLanguageUI = function () {
      var r = origLang.apply(this, arguments);
      try { ensureHomeCard(); applyLabels(); labelHeaders(); renderResults(); var v = $('quran2View'); if (v && !v.classList.contains('hidden')) setCur(cur); } catch (e) {}
      return r;
    };
  }
  window.addEventListener('zad-admin', function () { try { ensureHomeCard(); } catch (e) {} });
  function init() { ensureHomeCard(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
