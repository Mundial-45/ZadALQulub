// quran2.js — «القرآن الكريم (جديد)». Sección de prueba, solo visible en modo admin.
// Mismas páginas de quran_pages/, lectura continua con scroll vertical y búsqueda mejorada: ir a sura + aya, índice de suras filtrable,
// barra deslizante de páginas, zoom, modo noche, marcadores con nota y última página recordada.
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
    v = mk('div', 'hidden space-y-4');
    v.id = 'quran2View';
    host.parentNode.insertBefore(v, host.nextSibling);
    v.innerHTML =
      '<style>' +
      '#quran2View .q2-bar{position:sticky;top:4rem;z-index:40}' +
      '#quran2View .q2-night img{filter:invert(1) hue-rotate(180deg) brightness(.9)}' +
      '#quran2View .q2-box{position:relative;width:100%;padding-bottom:146.6%}' +
      '#quran2View .q2-box img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain}' +
      '#quran2View .q2-hd{display:flex;align-items:center;justify-content:space-between;direction:rtl;height:2.6rem;padding:0 .8rem;font-size:.85rem;color:#6b5a4a;border-top:4px double #8a7a68;border-bottom:4px double #8a7a68;background:#fdca9b}' +
      '#quran2View .q2-hd b{font-weight:600}#quran2View .q2-hd i{font-style:normal;font-size:.7rem;color:#9a3412;margin-inline-start:.4rem}' +
      '#quran2View .q2-hd .q2-dot{display:inline-block;width:.8rem;height:.8rem;border-radius:50%;background:#f5b98a;margin:0 .4rem}' +
      '#quran2View .q2-num{height:2.2rem;line-height:2.2rem;text-align:center;font-size:1rem;color:#6b5a4a;background:#fdca9b}' +
      '#quran2View .q2-btn{padding:.4rem .7rem;border-radius:.75rem;font-weight:700;font-size:.8rem;cursor:pointer;background:#334155;color:#fff}' +
      '#quran2View .q2-bar{background:rgba(15,23,42,.95);color:#fff}' +
      '#quran2View .q2-ok{background:#059669}#quran2View .q2-am{background:#d97706}' +
      '#quran2View #q2Star{background:rgba(255,255,255,.85);color:#b45309;border-radius:.6rem;padding:.15rem .45rem;font-size:1.6rem}' +
      '#quran2View .q2-field{padding:.45rem .6rem;border-radius:.6rem;border:1px solid #94a3b8;background:#fff;color:#0f172a;font-size:.85rem}' +
      '.dark #quran2View .q2-field{background:#1e293b;color:#f1f5f9;border-color:#475569}' +
      '#quran2View .q2-list{max-height:16rem;overflow:auto}' +
      '#quran2View .q2-row{display:flex;justify-content:space-between;gap:.5rem;padding:.45rem .6rem;border-radius:.6rem;cursor:pointer}' +
      '#quran2View .q2-row:hover{background:rgba(245,158,11,.15)}' +
      '</style>' +
      '<div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">' +
        '<button type="button" id="q2Home" class="q2-btn" style="background:#ecfdf5;color:#047857;border:1px solid #a7f3d0"></button>' +
        '<h2 class="text-lg font-bold text-slate-800 dark:text-slate-100" id="q2Title"></h2>' +
        '<span style="font-size:10px;font-weight:700;background:#f59e0b;color:#fff;padding:2px 8px;border-radius:6px">ADMIN</span>' +
      '</div>' +
      '<div class="q2-bar flex items-center justify-between gap-2 bg-slate-900/90 text-white p-1.5 rounded-2xl backdrop-blur-md border border-slate-700/80 shadow-xl">' +
        '<div class="flex items-center gap-1.5">' +
          '<button type="button" id="q2ToggleGo" class="q2-btn q2-am">🔍</button>' +
          '<button type="button" id="q2ToggleMarks" class="q2-btn">🔖</button>' +
          '<button type="button" id="q2Star" aria-label="marcador">☆</button>' +
        '</div>' +
        '<div class="flex items-center gap-1.5">' +
          '<button type="button" id="q2ZoomOut" class="q2-btn">A−</button>' +
          '<button type="button" id="q2ZoomIn" class="q2-btn">A+</button>' +
          '<button type="button" id="q2Night" class="q2-btn">🌙</button>' +
        '</div>' +
      '</div>' +
      '<div id="q2GoPanel" class="hidden bg-white dark:bg-slate-800 p-3 rounded-2xl border border-amber-200/80 dark:border-slate-700 space-y-3">' +
        '<div class="flex flex-wrap items-center gap-2">' +
          '<select id="q2Surah" class="q2-field flex-1 min-w-[10rem]"></select>' +
          '<input id="q2Aya" type="number" min="1" class="q2-field w-20 text-center" />' +
          '<button type="button" id="q2GoAya" class="q2-btn q2-ok"></button>' +
        '</div>' +
        '<div class="flex items-center gap-2">' +
          '<input id="q2PageIn" type="number" min="1" max="' + TOTAL + '" class="q2-field w-24 text-center" />' +
          '<button type="button" id="q2GoPage" class="q2-btn q2-ok"></button>' +
        '</div>' +
        '<input id="q2Range" type="range" min="1" max="' + TOTAL + '" value="1" dir="rtl" class="w-full" />' +
        '<input id="q2Filter" type="text" class="q2-field w-full" />' +
        '<div id="q2Results" class="q2-list"></div>' +
      '</div>' +
      '<div id="q2MarksPanel" class="hidden bg-white dark:bg-slate-800 p-3 rounded-2xl border border-amber-200/80 dark:border-slate-700 space-y-2">' +
        '<div class="flex items-center gap-2">' +
          '<input id="q2Note" type="text" class="q2-field flex-1" />' +
          '<button type="button" id="q2AddMark" class="q2-btn q2-am"></button>' +
        '</div>' +
        '<div id="q2MarksList" class="q2-list"></div>' +
      '</div>' +
      '<div id="q2Card" class="w-full max-w-2xl mx-auto select-none">' +
        '<div id="q2Wrap" style="overflow-x:auto;border-radius:1rem;background:#fdca9b">' +
          '<div id="q2Pages" style="width:100%"></div>' +
        '</div>' +
        '<div class="flex items-center justify-between pt-3" style="direction:ltr">' +
          '<button type="button" id="q2Next" class="q2-btn q2-ok"></button>' +
          '<button type="button" id="q2Prev" class="q2-btn"></button>' +
        '</div>' +
      '</div>';

    var sel = $('q2Surah');
    quranSurahs.forEach(function (s) {
      var o = document.createElement('option');
      o.value = s.id;
      o.textContent = s.id + ' · ' + s.nameAr + ' · ' + s.nameEs;
      sel.appendChild(o);
    });
    sel.onchange = function () { $('q2Aya').value = 1; $('q2Aya').max = quranSurahs[sel.value - 1].ayahs; };
    sel.onchange();

    $('q2Home').onclick = function () { goHome(); };
    $('q2ToggleGo').onclick = function () { $('q2GoPanel').classList.toggle('hidden'); $('q2MarksPanel').classList.add('hidden'); };
    $('q2ToggleMarks').onclick = function () { $('q2MarksPanel').classList.toggle('hidden'); $('q2GoPanel').classList.add('hidden'); renderMarks(); };
    $('q2GoAya').onclick = function () {
      var s = quranSurahs[$('q2Surah').value - 1];
      var a = parseInt($('q2Aya').value, 10);
      if (!a || a < 1 || a > s.ayahs) { toast(isEs() ? ('La aya debe estar entre 1 y ' + s.ayahs) : ('رقم الآية من 1 إلى ' + s.ayahs)); return; }
      var p = a === 1 ? s.page : pageForAya(s.id, a);
      show(p, true);
      if (a !== 1) toast(isEs() ? 'Posición aproximada de la aya (puede variar ±1 página).' : 'موضع الآية تقريبي (قد يختلف بصفحة).');
    };
    $('q2GoPage').onclick = function () {
      var n = parseInt($('q2PageIn').value, 10);
      if (!n || n < 1 || n > TOTAL) { toast(isEs() ? ('Página entre 1 y ' + TOTAL) : ('الصفحة من 1 إلى ' + TOTAL)); return; }
      show(n, true);
    };
    $('q2Filter').oninput = renderResults;
    $('q2ZoomIn').onclick = function () { zoom(0.15); };
    $('q2ZoomOut').onclick = function () { zoom(-0.15); };
    $('q2Night').onclick = function () { set(K_NIGHT, get(K_NIGHT) === '1' ? '0' : '1'); applyView(); };
    $('q2Next').onclick = function () { step(1); };
    $('q2Prev').onclick = function () { step(-1); };
    $('q2Range').oninput = function () { show(parseInt(this.value, 10), true, true); };
    $('q2Star').onclick = function () { toggleMark(); };
    $('q2AddMark').onclick = function () { toggleMark(true); };

    buildPages();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', function (e) {
      if (v.classList.contains('hidden')) return;
      var t = e.target && e.target.tagName;
      if (t === 'INPUT' || t === 'SELECT' || t === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') step(1); else if (e.key === 'ArrowRight') step(-1);
    });
    applyLabels();
    renderResults();
    return v;
  }

  function zoomLevel() { var z = parseFloat(get(K_ZOOM)); return z >= 1 && z <= 3 ? z : 1; }
  function zoom(d) {
    var z = Math.min(3, Math.max(1, Math.round((zoomLevel() + d) * 100) / 100));
    set(K_ZOOM, String(z));
    applyView();
  }
  function applyView() {
    var pg = $('q2Pages'); if (!pg) return;
    var z = zoomLevel();
    if (pg.style.width !== (z * 100) + '%') {
      pg.style.width = (z * 100) + '%';
      if (pg.firstChild) setTimeout(function () { goTo(cur); }, 0); // al cambiar el zoom cambia el alto de página
    }
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
      d.appendChild(mk('div', 'q2-hd'));
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
      var hd = pg.childNodes[i - 1].firstChild;
      var hz = hizbOf(i), jz = Math.ceil(hz / 2), tm = parseInt(THUMN.charAt(i - 1), 10) || 0;
      var sur = quranSurahs[0];
      for (var k = 0; k < quranSurahs.length; k++) { if (quranSurahs[k].page <= i) sur = quranSurahs[k]; else break; }
      var html = '<span><span class="q2-dot"></span>' + (es ? 'Yuz ' + jz : 'الجزء ' + JUZ_AR[jz - 1]) + '</span>' +
        '<span>' + (es ? 'Sura ' + sur.nameEs : 'سورة ' + sur.nameAr) + '</span>' +
        '<span>' + (es ? 'Hizb ' : 'الحزب ') + hz + (tm ? '<i>' + (es ? THUMN_ES[tm] : THUMN_AR[tm]) + '</i>' : '') + '<span class="q2-dot"></span></span>';
      hd.innerHTML = html;
    }
  }
  function pageH() { var f = $('q2Pages') && $('q2Pages').firstChild; return f ? f.offsetHeight || 1 : 1; }
  function barBottom() { var b = document.querySelector('#quran2View .q2-bar'); return b ? b.getBoundingClientRect().bottom : 0; }
  function listTop() { var pg = $('q2Pages'); return pg.getBoundingClientRect().top + window.pageYOffset; }
  function loadWindow() {
    var pg = $('q2Pages'); if (!pg) return;
    var lo = clampPage(cur - KEEP_BEHIND), hi = clampPage(cur + KEEP_AHEAD);
    for (var i = 1; i <= TOTAL; i++) {
      var d = pg.childNodes[i - 1].childNodes[1], img = d.querySelector('img');
      if (i >= lo && i <= hi) {
        if (!img) { img = document.createElement('img'); img.alt = ''; img.decoding = 'async'; img.src = 'quran_pages/page' + i + '.png'; d.appendChild(img); }
      } else if (img && (i < lo - 2 || i > hi + 2)) { d.removeChild(img); }
    }
  }
  function setCur(p) {
    cur = clampPage(p);
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
    window.scrollTo(0, Math.max(0, listTop() + (p - 1) * pageH() - barBottom() + 2));
    setTimeout(function () { programmatic = Math.max(0, programmatic - 1); }, 120);
  }
  var scrollTimer = 0;
  function onScroll() {
    if (programmatic || scrollTimer) return;
    var v = $('quran2View'); if (!v || v.classList.contains('hidden')) return;
    scrollTimer = setTimeout(function () {
      scrollTimer = 0;
      var y = window.pageYOffset + barBottom() + 40 - listTop();
      var p = clampPage(Math.floor(y / pageH()) + 1);
      if (p !== cur) setCur(p);
    }, 80);
  }

  function applyLabels() {
    var es = isEs();
    var set_ = function (id, t) { var e = $(id); if (e) e.textContent = t; };
    set_('q2Home', es ? 'Inicio' : 'الرئيسية');
    set_('q2Title', es ? 'Corán (nuevo)' : 'القرآن الكريم (جديد)');
    set_('q2GoAya', es ? 'Ir a la aya' : 'اذهب للآية');
    set_('q2GoPage', es ? 'Ir a la página' : 'اذهب للصفحة');
    set_('q2AddMark', es ? 'Marcar esta página' : 'علّم هذه الصفحة');
    set_('q2Next', es ? 'Siguiente ➔' : 'التالية ➔');
    set_('q2Prev', es ? '⬅ Anterior' : '⬅ السابقة');
    var f = $('q2Filter'); if (f) f.placeholder = es ? 'Filtrar suras por nombre o número…' : 'ابحث عن سورة بالاسم أو الرقم…';
    var n = $('q2Note'); if (n) n.placeholder = es ? 'Nota (opcional)' : 'ملاحظة (اختياري)';
    var a = $('q2Aya'); if (a) a.placeholder = es ? 'Aya' : 'آية';
    var p = $('q2PageIn'); if (p) p.placeholder = '1…' + TOTAL;
  }

  function renderResults() {
    var box = $('q2Results'); if (!box) return;
    var q = norm($('q2Filter').value.trim());
    box.innerHTML = '';
    quranSurahs.filter(function (s) {
      return !q || String(s.id) === q || norm(s.nameAr).indexOf(q) !== -1 || norm(s.nameEs).indexOf(q) !== -1;
    }).forEach(function (s) {
      var r = mk('div', 'q2-row text-slate-800 dark:text-slate-100');
      r.appendChild(mk('span', 'font-bold', s.id + ' · ' + s.nameAr + ' · ' + s.nameEs));
      r.appendChild(mk('span', 'text-xs text-slate-500', (isEs() ? 'pág. ' : 'ص ') + s.page));
      r.onclick = function () { show(s.page, true); };
      box.appendChild(r);
    });
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
    var box = $('q2MarksList'); if (!box) return;
    box.innerHTML = '';
    var m = marks().sort(function (a, b) { return a.page - b.page; });
    if (!m.length) { box.appendChild(mk('div', 'text-sm text-slate-500 p-2', isEs() ? 'Sin marcadores todavía.' : 'لا توجد علامات بعد.')); return; }
    m.forEach(function (x) {
      var info = getSurahInfoForPage(x.page);
      var r = mk('div', 'q2-row text-slate-800 dark:text-slate-100');
      var l = mk('span', 'flex-1');
      l.appendChild(mk('span', 'font-bold', (isEs() ? 'Pág. ' : 'ص ') + x.page + ' · ' + info.title));
      if (x.note) l.appendChild(mk('span', 'block text-xs text-slate-500', x.note));
      var del = mk('span', 'text-rose-600 font-bold px-2', '✕');
      del.onclick = function (e) { e.stopPropagation(); saveMarks(marks().filter(function (y) { return y.page !== x.page; })); updateStar(); renderMarks(); };
      r.appendChild(l); r.appendChild(del);
      r.onclick = function () { show(x.page, true); };
      box.appendChild(r);
    });
  }

  function step(d) {
    var n = cur + d;
    if (n < 1) { toast(isEs() ? 'Esta es la primera página' : 'هذه هي الصفحة الأولى'); return; }
    if (n > TOTAL) { toast(isEs() ? 'Has llegado a la última página' : 'وصلت إلى نهاية المصحف الشريف'); return; }
    show(n, true);
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
    sp[1].textContent = es ? 'Prueba: lectura y búsqueda mejoradas' : 'تجريبي: قراءة وبحث محسّنان';
  }

  var origLang = window.applyLanguageUI;
  if (typeof origLang === 'function') {
    window.applyLanguageUI = function () {
      var r = origLang.apply(this, arguments);
      try { ensureHomeCard(); applyLabels(); labelHeaders(); renderResults(); renderMarks(); var v = $('quran2View'); if (v && !v.classList.contains('hidden')) setCur(cur); } catch (e) {}
      return r;
    };
  }
  window.addEventListener('zad-admin', function () { try { ensureHomeCard(); } catch (e) {} });
  function init() { ensureHomeCard(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
