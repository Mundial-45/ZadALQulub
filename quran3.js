// quran3.js — «مصحف المدينة (ورش) — prueba». Mushaf del Complejo del Rey Fahd (KFGQPC), 559 páginas.
// Basado en quran2.js: mismos paneles, pulsación larga y modo admin.
// (heredado) quran3.js — «القرآن الكريم (جديد)». Sección de prueba, solo visible en modo admin.
// Mismas páginas de quran_pages/, lectura continua con scroll vertical. Pulsar sobre la página abre un panel lateral con selector de
// sura / hizb / juz, ir a página, modo noche y marcadores. El zoom es con dos dedos.
(function () {
  'use strict';

  var TOTAL = 559;
  var K_LAST = 'quran3_last_page_v1';
  var K_MARKS = 'quran3_marks_v1';
  var K_ZOOM = 'quran3_zoom_v1';
  var K_NIGHT = 'quran3_night_v1', K_TR = 'quran2_trlang_v1';
  var cur = 1;
  // Marca de ثمن por página (0 = ninguna, 1..7 = الثمن الأول، ربع، الثالث، نصف، الخامس، ثلاثة أرباع، السابع). Datos del mushaf de Warsh; sirve a esta edición de 638 páginas.
  var DOTS = [4095,5215,6328,7156,8156,8802,9919,11098,12274,13449,14390,15397,16452,17573,18689,19806,20858,21919,23100,24328,25628,26628,27804,28748,29804,31215,32392,33627,34378,35328,36212,37157,38158,39278,39918,40565,41687,42682,43854,45157,46100,47277,48333,49502,50564,51737,52804,53919,55100,56394,57394,58331,59398,60502,61802,63151,64331,64857,66255,67502,68275,69216,70087,70857,71796,72865,74224,75630,76621,77502,78502,79565,80745,81860,83089,84101,85095,85919,87272,88448,89619,90679,91857,93095,94098,95154,96210,97154,98330,99270,100330,101159,102437,103684,104612,105630,106737,107860,108914,110212,111564,112747,114085,115274,116444,117740,118908,120331,121445,122387,123383,124210,125270,126149,126915,127802,128679,129631,130687,132157,133392,134678,135741,136799,138100,139161,140327,141445,142623,143799,145085,146204,147389,148392,149733,150802,151748,152689,153790,155099,156095,156741,157678,158739,159743,160916,162331,163743,164619,165502,166688,167566,168628,169502,170515,171216,172449,173453,174565,175502,176622,177799,178683,179683,180737,181748,182859,184100,185446,186566,187628,188683,189854,191095,192148,193455,194504,195563,196447,197333,198616,199565,200677,201682,202800,203796,205095,206683,207864,209157,210329,211498,212677,213858,215154,216392,217385,218334,219387,220395,221502,222390,223622,224798,225854,226913,228205,229502,230625,232095,233333,234564,235743,237101,238104,239154,240212,241099,242212,243390,244440,245628,246623,247561,248629,249805,251161,252387,253617,254570,255850,257330,258684,259917,261152,262104,263215,264158,265327,266502,267686,268742,270095,271156,272442,273800,275100,276572,278093,279449,280734,281734,282858,283865,285093,286270,287269,288447,289502,290331,291627,292863,294090,295156,296334,297388,298504,299627,300802,301859,303094,304333,305681,307095,308212,309329,310502,311740,313329,314386,315566,316796,318094,319099,320330,321271,322683,323743,324800,325688,326866,328389,329629,330913,332327,333389,334741,336334,337566,338795,339801,340792,342216,343502,344619,345680,346909,348099,349272,350161,351445,352742,354093,355212,356209,357449,358503,359512,360505,361625,363095,364625,365801,366741,367922,369336,370917,372326,373502,374688,375680,376682,377741,378683,379682,380396,381503,382507,383502,384689,386150,387154,388156,388799,390154,391152,392792,393915,395213,396445,397565,398860,400154,400855,402215,403448,404502,405620,406802,407857,409390,410502,411624,412798,414329,415688,416919,418151,419271,420448,421446,422742,423741,424623,425736,426857,428093,429272,430452,431739,432740,433565,434804,435798,437098,437915,438915,439919,441216,442213,443272,444329,445687,447096,448438,450100,451755,452740,453917,455393,456804,457797,459326,460683,462099,463270,464807,466335,467330,468446,469330,470274,471563,472560,473864,475092,476333,477689,478682,480211,481331,482447,483681,484682,486276,487795,489215,490215,491625,492913,493913,495388,496503,497564,499095,500385,502101,503210,504682,506392,507677,508622,509627,510917,512086,512917,513797,514862,516211,517865,519266,520449,521748,523148,524388,525397,526689,528209,529569,530867,532275,533279,534574,535862,537455,538563,540209,541145,542268,543738,544680,545755,546860,548569,550086,551331,553325,554807,557210];
  var DOT_ES = ['', '1/8', '1/4', '1/8', '1/2', '1/8', '1/4', '1/8'];
  var SAJDA = [154439,219630,239154,258323,273800,297388,303739,326866,340792,375271,411099,434804,481738,543857,552677];
  var DOT_AR = ['', 'ثمن', 'ربع', 'ثمن', 'نصف', 'ثمن', 'ربع', 'ثمن'];
  // Sajda (punto azul en la imagen): página*1000 + posición vertical en por mil.
  var THUMN_AR = ['', 'الثمن الأول', 'ربع الحزب', 'الثمن الثالث', 'نصف الحزب', 'الثمن الخامس', 'ثلاثة أرباع الحزب', 'الثمن السابع'];
  var THUMN_ES = ['', 'Octavo 1 del hizb', 'Cuarto del hizb', 'Octavo 3 del hizb', 'Medio hizb', 'Octavo 5 del hizb', 'Tres cuartos del hizb', 'Octavo 7 del hizb'];
  var JUZ_AR = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر', 'الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر', 'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرون', 'الحادي والعشرون', 'الثاني والعشرون', 'الثالث والعشرون', 'الرابع والعشرون', 'الخامس والعشرون', 'السادس والعشرون', 'السابع والعشرون', 'الثامن والعشرون', 'التاسع والعشرون', 'الثلاثون'];
  var Q3_SP = [1,2,43,66,92,111,131,154,163,180,192,205,217,223,229,234,247,258,269,276,286,294,304,312,321,328,338,346,356,364,370,373,376,385,391,397,402,409,414,422,431,436,442,448,451,455,459,463,468,470,473,476,479,481,484,487,490,495,498,501,504,506,507,508,510,512,514,517,519,521,523,525,527,528,530,532,534,535,537,538,540,540,541,543,544,545,545,546,547,548,549,549,550,551,551,552,552,553,554,554,555,555,555,556,556,557,557,557,558,558,558,559,559,559], Q3_AY = [7,285,200,175,122,167,206,76,130,109,121,111,44,54,99,128,110,105,99,134,111,76,119,62,77,226,95,88,69,59,33,30,73,54,46,82,182,86,72,84,53,50,89,56,36,34,39,29,18,45,60,47,61,55,77,99,28,21,24,13,14,11,11,18,12,12,31,52,52,44,30,28,18,55,39,31,50,40,45,42,29,19,36,25,22,17,19,26,32,20,15,21,11,8,8,20,5,8,9,11,10,8,3,9,5,5,6,3,6,3,5,4,5,6];
  var Q3S = (typeof quranSurahs !== 'undefined' ? quranSurahs : []).map(function (s, i) { return { id: s.id, nameAr: s.nameAr, nameEs: s.nameEs, page: Q3_SP[i], ayahs: Q3_AY[i] }; });
  var Q3H = [1,11,19,28,37,45,53,63,70,79,88,97,105,115,124,132,141,150,158,167,175,184,193,201,211,220,229,239,247,257,266,276,286,295,304,314,323,333,343,352,361,372,380,388,398,407,418,426,435,444,455,466,475,484,495,506,514,525,535,545].map(function (p, i) { return { id: i + 1, page: p }; });
  function hizbOf(p) { var h = 1; for (var i = 0; i < Q3H.length; i++) { if (Q3H[i].page <= p) h = Q3H[i].id; else break; } return h; }

  function trEs() { var v = get(K_TR); return v ? v === 'es' : appEs(); }
  function appEs() { return typeof currentLang !== 'undefined' && currentLang === 'es'; }
  function isEs() { return trEs(); }
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
    var s = Q3S[surahId - 1];
    if (!s) return 1;
    if (window.Q3_AYAS && window.Q3_AYAS[surahId - 1] && window.Q3_AYAS[surahId - 1][aya - 1]) return Math.floor(window.Q3_AYAS[surahId - 1][aya - 1] / 1000000);
    var next = Q3S[surahId];
    var end = next ? next.page : TOTAL;
    var span = Math.max(0, end - s.page);
    var a = Math.min(Math.max(1, aya), s.ayahs);
    return clampPage(s.page + Math.floor(((a - 1) / s.ayahs) * (span + (next ? 0.999 : 0))));
  }

  function ensureView() {
    var v = $('quran3View');
    if (v) return v;
    var host = $('quranReaderView');
    if (!host || !host.parentNode) return null;
    v = mk('div', 'hidden');
    v.id = 'quran3View';
    host.parentNode.insertBefore(v, host.nextSibling);
    v.innerHTML =
      '<style>' +
      '#quran3View{width:100vw;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw)}' +
      '#q3Zoom{position:fixed;top:.55rem;right:.55rem;z-index:55;display:flex;gap:.1rem;direction:ltr}#q3Zoom button{background:transparent;border:0;color:#5b3a12;font-weight:800;font-size:1.05rem;padding:.55rem .55rem;text-shadow:0 0 3px #f6e2b8,0 0 3px #f6e2b8,0 0 6px #f6e2b8;cursor:pointer}#q3Zoom.hid{display:none}' +
      '#q3Menu{position:fixed;top:.55rem;right:.55rem;z-index:55;width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;border-radius:.8rem;border:1px solid rgba(91,58,18,.35);background:rgba(246,226,184,.92);color:#5b3a12;box-shadow:0 2px 8px rgba(0,0,0,.25);cursor:pointer}#q3Menu.hid{display:none}#q3Menu svg{width:22px;height:22px;fill:none;stroke:#5b3a12;stroke-width:2}#q3Menu svg *{fill:none;stroke:#5b3a12}' +
      '#quran3View .q3-hl{position:absolute;left:0;width:100%;top:0;height:100%;z-index:1;pointer-events:none;animation:q3glow 2.2s ease-in-out forwards}#quran3View .q3-hr{position:absolute;border-radius:.4rem;background:rgba(255,214,90,.40);box-shadow:0 0 .45rem .08rem rgba(255,214,90,.45)}@keyframes q3glow{0%{opacity:0}18%{opacity:1}60%{opacity:1}100%{opacity:0}}' +
      '#quran3View .q3-box{background:#fff}#quran3View .q3-cad,#quran3View .q3-hd,#quran3View .q3-num{display:none!important}' +
      '#quran3View .q3-night .q3-box{background:transparent}#quran3View .q3-night .q3-box img{mix-blend-mode:normal}' +
      '#quran3View .q3-night img,#quran3View .q3-night .q3-box::before{filter:invert(1) hue-rotate(180deg) brightness(.9)}' +
      '#quran3View .q3-box::before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:var(--fr,none) 0 0/100% 100% no-repeat}' +
      '#quran3View .q3-box{position:relative;width:100%;padding-bottom:146.83%}' +
      '#quran3View .q3-box img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain}' +
      '#quran3View .q3-cad{height:.55rem;background-size:100% 100%;background-repeat:no-repeat}' +
      '#quran3View .q3-cad1{background-image:url(quran_pages/q3_cadre1.jpg)}#quran3View .q3-cad2{background-image:url(quran_pages/q3_cadre2.jpg)}' +
      '#quran3View .q3-hd{display:flex;align-items:center;justify-content:space-between;direction:rtl;height:2.7rem;padding:0 1.6rem;gap:.35rem;font-size:calc(min(.78rem,2.75vw) * var(--q3z,1));white-space:nowrap;overflow:hidden;color:#5b3a12;background:#f6e2b8;position:relative}' +
      '#quran3View .q3-hd>span{display:inline-block}#quran3View .q3-hd i{font-style:normal;margin-inline-start:.4rem}' +
      '#quran3View .q3-hz{padding:.12rem .65rem;border-radius:999px;transition:background .2s,color .2s,box-shadow .2s}#quran3View .q3-hz.q3-lit{color:#9f0f1d;font-weight:800;background:#fff;box-shadow:0 0 0 2px rgba(255,255,255,.55),0 1px 6px rgba(0,0,0,.25)}' +
      '@keyframes q3pulse{0%{transform:scale(1)}40%{transform:scale(1.25);box-shadow:0 0 0 3px #fff,0 0 18px 6px rgba(255,255,255,.95)}100%{transform:scale(1)}}' +
      '#quran3View .q3-hz.q3-pulse{animation:q3pulse 1.4s ease-in-out}' +
      '#quran3View .q3-gut{position:absolute;left:0;top:0;bottom:0;width:7%;background:#f6e2b8;border-right:3px double #a8742a}' +
      '#quran3View .q3-gutr{position:absolute;right:0;top:0;bottom:0;width:7%;background:#f6e2b8;border-left:3px double #a8742a;box-shadow:inset 0 0 0 2px #e9cd8f}' +
      '#quran3View .q3-gx{box-shadow:inset 0 0 0 2px #e9cd8f}' +
      '#quran3View .q3-gut{background:#f6e2b8}' +
      '#quran3View .q3-tag{position:absolute;z-index:2;left:.6%;width:7.6%;transform:translateY(-50%);text-align:center;pointer-events:none;font-size:calc(.6rem * var(--q3z,1));line-height:1}' +
      '#quran3View .q3-tag .m{aspect-ratio:1;display:flex;align-items:center;justify-content:center;background:#c9473f;color:#fbe9d0;font-weight:700;clip-path:polygon(50.0% 0.0%,60.6% 10.4%,75.0% 6.7%,79.0% 21.0%,93.3% 25.0%,89.6% 39.4%,100.0% 50.0%,89.6% 60.6%,93.3% 75.0%,79.0% 79.0%,75.0% 93.3%,60.6% 89.6%,50.0% 100.0%,39.4% 89.6%,25.0% 93.3%,21.0% 79.0%,6.7% 75.0%,10.4% 60.6%,0.0% 50.0%,10.4% 39.4%,6.7% 25.0%,21.0% 21.0%,25.0% 6.7%,39.4% 10.4%);}' +
      '#quran3View .q3-tag.rb .m{clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);font-size:.9em}' +
      '#quran3View .q3-tag.nf .m{clip-path:polygon(50.0% 0.0%,58.6% 6.8%,69.1% 3.8%,74.4% 13.4%,85.4% 14.6%,86.6% 25.6%,96.2% 30.9%,93.2% 41.4%,100.0% 50.0%,93.2% 58.6%,96.2% 69.1%,86.6% 74.4%,85.4% 85.4%,74.4% 86.6%,69.1% 96.2%,58.6% 93.2%,50.0% 100.0%,41.4% 93.2%,30.9% 96.2%,25.6% 86.6%,14.6% 85.4%,13.4% 74.4%,3.8% 69.1%,6.8% 58.6%,0.0% 50.0%,6.8% 41.4%,3.8% 30.9%,13.4% 25.6%,14.6% 14.6%,25.6% 13.4%,30.9% 3.8%,41.4% 6.8%);background:#b73a34}' +
      '#quran3View .q3-tag .n{margin:.35em auto 0;width:72%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;background:#c9473f;color:#fbe9d0;font-size:.85em;font-weight:700;clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)}' +
      '#quran3View .q3-tag.up{transform:translateY(-100%)}#quran3View .q3-tag.dn{transform:none}' +
      '#quran3View .q3-tag.sj .m{clip-path:none;border-radius:50% 50% 46% 46% / 62% 62% 38% 38%;font-size:.8em;background:#b73a34;box-shadow:0 0 0 .3em #f6e2b8}' +
      '#quran3View .q3-tag.sj{width:6.2%;left:.9%}' +
      '#quran3View .q3-tag.hz0 .m{font-size:1.05em}' +
      '#quran3View .q3-tag .m,#quran3View .q3-tag .n{background:#1f7a8c;color:#fff}#quran3View .q3-tag.nf .m{background:#17606f}' +
      '#quran3View .q3-tag.hz0 .m,#quran3View .q3-tag.hz0 .n{background:#a8742a;color:#fff4d6}' +
      '#quran3View .q3-ros{position:absolute;top:50%;transform:translateY(-52%);font-size:calc(1.15rem * var(--q3z,1));line-height:1;color:#a8742a}' +
      '#quran3View .q3-ros.r{right:.45rem}#quran3View .q3-ros.l{left:.45rem}' +
      '#quran3View .q3-num{height:2.2rem;line-height:2.2rem;text-align:center;font-size:calc(min(.9rem,3.4vw) * var(--q3z,1));color:#5b3a12;background:#f6e2b8;border-bottom:2px solid rgba(91,58,18,.22)}' +
      '#q3Drawer{position:fixed;top:0;bottom:0;right:0;width:min(82vw,20rem);z-index:60;background:#0f172a;color:#f1f5f9;box-shadow:-6px 0 24px rgba(0,0,0,.45);transform:translateX(105%);transition:transform .22s;display:flex;flex-direction:column;padding:.7rem;gap:.55rem;direction:rtl}' +
      '#q3Drawer{visibility:hidden;pointer-events:none;transform:translateX(130%)}#q3Drawer.open{transform:none;visibility:visible;pointer-events:auto}' +
      '#q3Drawer{right:4.4rem;width:min(68vw,17rem);top:.6rem;bottom:.6rem;border-radius:1rem;background:rgba(15,23,42,.94)}' +
      '#q3Drawer{top:50%!important;bottom:auto!important;height:min(26rem,86vh);margin-top:calc(min(26rem,86vh)/-2)}#q3Drawer[data-tab=h],#q3Drawer[data-tab=j],#q3Drawer[data-tab=l]{width:min(48vw,12rem)}#q3Drawer[data-tab=l]{height:auto!important;margin-top:-3.5rem!important}' +
      '#q3Drawer .q3-tabs,#q3Drawer>div:nth-child(1),#q3Drawer>div:nth-child(2),#q3Range{display:none!important}' +
      '#q3Drawer{background:rgba(253,243,221,.97);color:#3b2a10;border:2px solid #b8862b;box-shadow:-4px 0 18px rgba(91,58,18,.35)}' +
      '#q3Drawer .q3-field{background:#fff!important;border:1px solid #c9a24a!important;color:#3b2a10!important}' +
      '#q3Drawer .q3-row{border-bottom:1px solid rgba(184,134,43,.25)}' +
      '#q3Drawer .q3-row:active,#q3Drawer .q3-row.cur{background:rgba(201,162,74,.35)}' +
      '#q3Drawer .q3-am{background:#b8862b}' +
      '#q3Sheet{position:fixed;left:0;right:0;bottom:0;z-index:62;max-height:52vh;display:none;flex-direction:column;background:#fdf3dd;color:#3b2a10;border-top:2px solid #b8862b;border-radius:1rem 1rem 0 0;box-shadow:0 -6px 22px rgba(91,58,18,.4);padding:.6rem .8rem .5rem}#q3Sheet.open{display:flex}' +
      '#q3Sheet .sh-h{display:flex;align-items:center;justify-content:space-between;gap:.5rem;font-weight:800;font-size:.95rem;padding-bottom:.4rem;border-bottom:1px solid rgba(184,134,43,.4)}#q3Sheet .sh-x{border:0;background:rgba(184,134,43,.18);color:#7a1d1d;border-radius:50%;width:2rem;height:2rem;font-size:1rem;cursor:pointer}' +
      '#q3Sheet{direction:ltr}#q3Sheet .sh-b{text-align:left;overflow:auto;padding:.5rem .1rem;font-size:1.02rem;line-height:1.65;white-space:pre-wrap;-webkit-user-select:text;user-select:text}#q3Sheet .sh-b.ar{direction:rtl;font-size:1.15rem;text-align:right}' +
      '#q3Sheet .sh-f{margin-top:.6rem;padding-top:.4rem;border-top:1px dashed rgba(184,134,43,.5);font-size:.82rem;line-height:1.5;opacity:.85}' +
      '#q3Sheet .sh-c{font-size:.68rem;opacity:.65;padding-top:.3rem;text-align:center}' +
      '#q3Rail{position:fixed;top:0;bottom:0;right:0;width:4.2rem;max-width:24vw;z-index:61;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.55rem;background:transparent;pointer-events:none;transform:translateX(110%);transition:transform .2s;direction:ltr}' +
      '#q3Rail.open{transform:none}' +
      '#q3Rail button{pointer-events:auto;width:3.1rem;height:3.1rem;max-width:18vw;max-height:18vw;border-radius:50%;border:2px solid rgba(255,255,255,.9);background:radial-gradient(circle at 35% 30%,#fff,#dfeaf5 70%,#b9cbe0);box-shadow:0 2px 8px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.72rem;line-height:1;color:#7a1d1d;cursor:pointer;padding:0;font-family:inherit}' +
      '#q3Rail button.on{border-color:#f59e0b;box-shadow:0 0 0 2px #f59e0b,0 2px 8px rgba(0,0,0,.4)}' +
      '#q3Rail .ic{font-size:1.35rem}#q3Rail [data-rt=l]{font-size:.7rem;line-height:1.25;flex-direction:column}#q3Rail #q3RInfo{font-size:1.7rem;font-family:Georgia,serif;font-style:italic;color:#1d4e89}' +
      '#q3Drawer .q3-btn{padding:.4rem .7rem;border-radius:.7rem;font-weight:700;font-size:.8rem;cursor:pointer;background:#334155;color:#fff;border:0}' +
      '#q3Drawer .q3-ok{background:#059669}#q3Drawer .q3-am{background:#d97706}' +
      '#q3Drawer .q3-field{padding:.45rem .6rem;border-radius:.6rem;border:1px solid #475569;background:#1e293b;color:#f1f5f9;font-size:.85rem;min-width:0}' +
      '#q3Drawer .q3-tabs{display:flex;gap:.3rem}#q3Drawer .q3-tab{flex:1;padding:.4rem 0;border-radius:.6rem;background:#1e293b;color:#cbd5e1;font-size:.8rem;font-weight:700;text-align:center;cursor:pointer;border:0}' +
      '#q3Drawer .q3-tab.on{background:#d97706;color:#fff}' +
      '#q3Drawer .q3-list{flex:1;overflow:auto;min-height:0}' +
      '#q3Drawer .q3-row{display:flex;justify-content:space-between;gap:.5rem;padding:.5rem .55rem;border-radius:.6rem;cursor:pointer;font-size:.85rem}' +
      '#q3Drawer .q3-row:active,#q3Drawer .q3-row.cur{background:rgba(245,158,11,.25)}' +
      '</style>' +
      '<div id="q3Card" class="w-full max-w-2xl mx-auto select-none">' +
        '<div id="q3Wrap" style="overflow-x:auto;touch-action:pan-x pan-y;background:#fdca9b">' +
          '<div id="q3Pages" style="width:100%"></div>' +
        '</div>' +
      '</div>' +
      '<div id="q3Zoom"><button type="button" id="q3ZMinus" aria-label="A-">A-</button><button type="button" id="q3ZPlus" aria-label="A+">A+</button></div>' +
      '<div id="q3Sheet"><div class="sh-h"><span id="q3ShT"></span><button type="button" class="sh-x" id="q3ShX">✕</button></div><div class="sh-b" id="q3ShB"></div><div class="sh-c" id="q3ShC"></div></div>' +
      '<div id="q3Rail">' +
        '<button type="button" id="q3RClose" aria-label="close"><span class="ic">✕</span></button>' +
        '<button type="button" data-rt="s"></button>' +
        '<button type="button" data-rt="a"></button>' +
        '<button type="button" data-rt="h"></button>' +
        '<button type="button" data-rt="j"></button>' +
        '<button type="button" data-rt="m"><span class="ic">🔖</span></button>' +
        '<button type="button" data-rt="l"></button>' +
        '<button type="button" id="q3RInfo" aria-label="info">i</button>' +
        '<button type="button" id="q3RNight"><span class="ic">🌙</span></button>' +
        '<button type="button" id="q3RHome"><span class="ic">🏠</span></button>' +
      '</div>' +
      '<div id="q3Drawer" aria-hidden="true">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:.4rem">' +
          '<button type="button" id="q3Home" class="q3-btn" style="background:#ecfdf5;color:#047857"></button>' +
          '<button type="button" id="q3Close" class="q3-btn">✕</button>' +
        '</div>' +
        '<div style="display:flex;align-items:center;gap:.4rem">' +
          '<input id="q3PageIn" type="number" min="1" max="' + TOTAL + '" class="q3-field" style="width:4.6rem;text-align:center" />' +
          '<button type="button" id="q3GoPage" class="q3-btn q3-ok"></button>' +
          '<button type="button" id="q3Star" class="q3-btn" style="font-size:1.1rem;padding:.2rem .6rem" aria-label="marcador">☆</button>' +
          '<button type="button" id="q3Night" class="q3-btn" style="font-size:1.1rem;padding:.2rem .6rem">🌙</button>' +
        '</div>' +
        '<input id="q3Range" type="range" min="1" max="' + TOTAL + '" value="1" dir="rtl" style="width:100%" />' +
        '<div class="q3-tabs">' +
          '<button type="button" class="q3-tab on" data-t="s"></button>' +
          '<button type="button" class="q3-tab" data-t="h"></button>' +
          '<button type="button" class="q3-tab" data-t="j"></button>' +
          '<button type="button" class="q3-tab" data-t="a"></button>' +
          '<button type="button" class="q3-tab" data-t="m">🔖</button>' +
        '</div>' +
        '<input id="q3Filter" type="text" class="q3-field" />' +
        '<div id="q3MarkAdd" style="display:none;gap:.4rem"><input id="q3Note" type="text" class="q3-field" style="flex:1" /><button type="button" id="q3AddMark" class="q3-btn q3-am"></button></div>' +
        '<div id="q3Results" class="q3-list"></div>' +
      '</div>';

    var tabs = v.querySelectorAll('.q3-tab');
    for (var ti = 0; ti < tabs.length; ti++) {
      tabs[ti].onclick = function () { tab = this.getAttribute('data-t'); renderResults(); };
    }
    $('q3Home').onclick = function () { goHome(); };
    var rbs = v.querySelectorAll('#q3Rail [data-rt]');
    for (var ri = 0; ri < rbs.length; ri++) {
      rbs[ri].onclick = function () {
        var t = this.getAttribute('data-rt'), dr = $('q3Drawer');
        if (dr.classList.contains('open') && tab === t) { panel(false); return; }
        tab = t; panel(true);
      };
    }
    $('q3RInfo').onclick = function () { showInfo(); };
    $('q3RClose').onclick = function () { drawer(false); };
    $('q3RNight').onclick = function () { set(K_NIGHT, get(K_NIGHT) === '1' ? '0' : '1'); applyView(); };
    $('q3RHome').onclick = function () { drawer(false); goHome(); };
    $('q3Close').onclick = function () { drawer(false); };
    $('q3GoPage').onclick = function () {
      var n = parseInt($('q3PageIn').value, 10);
      if (!n || n < 1 || n > TOTAL) { toast(isEs() ? ('Página entre 1 y ' + TOTAL) : ('الصفحة من 1 إلى ' + TOTAL)); return; }
      drawer(false); show(n, true);
    };
    $('q3Filter').oninput = renderResults;
    $('q3Night').onclick = function () { set(K_NIGHT, get(K_NIGHT) === '1' ? '0' : '1'); applyView(); };
    $('q3Range').onchange = function () { drawer(false); show(parseInt(this.value, 10), true); };
    $('q3Star').onclick = function () { toggleMark(); };
    $('q3AddMark').onclick = function () { toggleMark(true); };

    buildPages();
    // El panel lateral se abre con el botón de menú; pulsar sobre la página solo lo cierra si está abierto.
    $('q3ZPlus').onclick = function () { setZoom(zoomLevel() + 0.25, true); };
    $('q3ZMinus').onclick = function () { setZoom(zoomLevel() - 0.25, true); };
    $('q3ShX').onclick = function () { sheet(false); };
    setupLongPress(); setTimeout(ayasReady, 1500);
    $('q3Pages').addEventListener('contextmenu', function (e) { e.preventDefault(); });
    $('q3Pages').addEventListener('click', function () {
      if (Date.now() - pinchAt < 450 || Date.now() - lpAt < 700) return;
      if ($('q3Sheet').classList.contains('open')) { sheet(false); return; }
      drawer(!$('q3Rail').classList.contains('open'));
    });
    setupPinch();
    window.addEventListener('scroll', onScroll, { passive: true });
    applyLabels();
    renderResults();
    return v;
  }

  var tab = 's', pinchAt = 0, lpAt = 0, flat = null;

  // Pulsación larga sobre un aya: muestra el shar7 (árabe) o la tarjama (español) de esa aya.
  function showInfo() {
    var es = trEs(), B = $('q3ShB');
    $('q3Sheet').style.direction = es ? 'ltr' : 'rtl';
    $('q3ShT').textContent = es ? 'Información' : 'معلومات';
    B.className = 'sh-b' + (es ? '' : ' ar'); B.scrollTop = 0;
    B.textContent = es
      ? 'Mantén pulsada una ayah para ver su traducción (ES) o su tafsir (AR).\n\nLa traducción de Muhammad Isa García sigue la numeración de Hafs, mientras que este Mushaf es de Warsh. Por eso algunas ayahs no coinciden en número: en esos casos se muestran juntas las ayas Hafs que corresponden a cada aya Warsh. El significado (ma\'na) sí coincide.\n\nEl tafsir en árabe es «al-Mujtasar fi Tafsir al-Qur\'an al-Karim», del Markaz Tafsir.'
      : 'اضغط مطولًا على الآية لعرض ترجمتها (ES) أو تفسيرها (AR).\n\nترجمة محمد عيسى غارسيا مبنية على ترقيم حفص، بينما هذا المصحف برواية ورش، ولذلك قد لا تتطابق أرقام بعض الآيات؛ وفي هذه الحالة تُعرض آيات حفص المقابلة لكل آية في ورش معًا، والمعنى متطابق.\n\nالتفسير العربي هو «المختصر في تفسير القرآن الكريم» لمركز تفسير للدراسات القرآنية.';
    $('q3ShC').textContent = 'QuranEnc.com'; sheet(true);
  }
  function syncLang() { var b = $('q3RLang'); if (b) b.textContent = trEs() ? 'ES' : 'AR'; }
  function sheet(open) { var e = $('q3Sheet'); if (e) e.classList.toggle('open', !!open); }
  function ayaAtPoint(page, y, x) {
    if (!flat) { flat = []; window.Q3_AYAS.forEach(function (su, si) { su.forEach(function (v, ai) { flat.push([Math.floor(v / 1000000), Math.floor(v / 1000) % 1000, v % 1000, si, ai]); }); }); }
    for (var i = 0; i < flat.length; i++) {
      var f = flat[i], c = pcfg(page), LH = c.LH, MK = c.MK; if (f[0] < page) continue; if (f[0] > page) return i;
      if (y < f[1] - LH / 2 || (Math.abs(y - f[1]) <= LH / 2 && x >= f[2] - MK * 0.55)) return i;
    }
    return flat.length - 1;
  }
  function loadTr(cb) {
    var es = trEs(), name = es ? 'Q2_TR_ES' : 'Q2_TF_AR';
    if (window[name]) { cb(window[name]); return; }
    var sc = document.createElement('script'); sc.src = es ? 'quran_tarjama_es.js' : 'quran_tafsir_ar.js';
    sc.onload = function () { cb(window[name] || null); };
    sc.onerror = function () { cb(null); };
    document.head.appendChild(sc);
  }
  function showAyaInfo(idx) {
    var f = flat[idx], es = trEs(), sr = Q3S[f[3]];
    var title = (es ? sr.nameEs : sr.nameAr) + ' · ' + (es ? 'Ayah ' : 'آية ') + (f[4] + 1);
    var bx = $('q3Pages').childNodes[f[0] - 1].childNodes[3];
    var prev = idx > 0 ? window.Q3_AYAS[flat[idx - 1][3]][flat[idx - 1][4]] : 0;
    glow(bx, window.Q3_AYAS[f[3]][f[4]]);
    var T = $('q3ShT'), B = $('q3ShB'), C = $('q3ShC');
    T.textContent = title; B.className = 'sh-b' + (es ? '' : ' ar'); $('q3Sheet').style.direction = es ? 'ltr' : 'rtl'; B.textContent = '…'; B.scrollTop = 0; C.textContent = ''; sheet(true);
    loadTr(function (data) {
      var rec = data && data[f[3]] && data[f[3]][f[4]];
      B.textContent = ''; B.scrollTop = 0;
      if (!rec) { B.textContent = es ? 'Traducción no disponible.' : 'التفسير غير متوفر بعد.'; return; }
      B.appendChild(document.createTextNode(rec[0]));
      if (rec[1]) { var ft = mk('div', 'sh-f'); ft.textContent = rec[1]; B.appendChild(ft); }
      C.textContent = es ? 'Traducción: Muhammad Isa García · QuranEnc.com · v1.0.2' : 'المختصر في تفسير القرآن الكريم · مركز تفسير للدراسات القرآنية · QuranEnc.com';
    });
  }
  function setupLongPress() {
    var pg = $('q3Pages'), tm = 0, sx = 0, sy = 0;
    function clear() { if (tm) { clearTimeout(tm); tm = 0; } }
    function start(cx, cy) {
      clear(); sx = cx; sy = cy;
      tm = setTimeout(function () {
        tm = 0;
        if (!ayasReady()) return;
        var el = document.elementFromPoint(cx, cy); el = el && el.closest && el.closest('.q3-pg'); if (!el) return;
        var page = Array.prototype.indexOf.call(pg.childNodes, el) + 1, bx = el.childNodes[3], r = bx.getBoundingClientRect();
        var xx = (cx - r.left) / r.width * 1000, yy = (cy - r.top) / r.height * 1000;
        if (xx < 0 || xx > 1000 || yy < 0 || yy > 1000) return;
        lpAt = Date.now();
        if (navigator.vibrate) { try { navigator.vibrate(15); } catch (e) {} }
        showAyaInfo(ayaAtPoint(page, yy, xx));
      }, 480);
    }
    pg.addEventListener('touchstart', function (e) { if (e.touches.length === 1) start(e.touches[0].clientX, e.touches[0].clientY); else clear(); }, { passive: true });
    pg.addEventListener('touchmove', function (e) { var t = e.touches[0]; if (t && (Math.abs(t.clientX - sx) > 10 || Math.abs(t.clientY - sy) > 10)) clear(); }, { passive: true });
    pg.addEventListener('touchend', clear); pg.addEventListener('touchcancel', clear);
    pg.addEventListener('mousedown', function (e) { if (e.button === 0) start(e.clientX, e.clientY); });
    pg.addEventListener('mousemove', function (e) { if (tm && (Math.abs(e.clientX - sx) > 10 || Math.abs(e.clientY - sy) > 10)) clear(); });
    pg.addEventListener('mouseup', clear);
  }
  function panel(open) {
    var d = $('q3Drawer'); if (!d) return;
    d.classList.toggle('open', !!open);
    d.setAttribute('aria-hidden', open ? 'false' : 'true');
    var rb = document.querySelectorAll('#q3Rail [data-rt]');
    for (var i = 0; i < rb.length; i++) rb[i].classList.toggle('on', !!open && rb[i].getAttribute('data-rt') === tab);
    if (open) renderResults();
  }
  function drawer(open) {
    var r = $('q3Rail'); if (!r) return;
    if (!open) panel(false);
    r.classList.toggle('open', !!open);
    var sh = $('q3Sheet'); if (sh) sh.style.right = open ? '4.4rem' : '0';
    var mb = $('q3Menu'); if (mb) mb.classList.toggle('hid', !!open);
    var zb = $('q3Zoom'); if (zb) zb.classList.toggle('hid', !!open);
  }

  // Zoom con dos dedos (sin botones): la anchura de las páginas cambia y se mantiene el punto central.
  function setupPinch() {
    var wrap = $('q3Wrap'), pg = $('q3Pages'), d0 = 0, z0 = 1, zt = 1;
    function dist(e) { var a = e.touches[0], b = e.touches[1]; return Math.sqrt(Math.pow(a.clientX - b.clientX, 2) + Math.pow(a.clientY - b.clientY, 2)); }
    wrap.addEventListener('touchstart', function (e) {
      if (e.touches.length === 2) {
        d0 = dist(e); z0 = zoomLevel(); zt = z0; pinchAt = Date.now();
        // Durante el gesto solo se escala con transform (sin recalcular el diseño de 638 páginas): fluido.
        var ox = wrap.scrollLeft + wrap.clientWidth / 2, oy = window.pageYOffset + window.innerHeight / 2 - listTop();
        pg.style.transformOrigin = ox + 'px ' + oy + 'px';
        pg.style.willChange = 'transform';
      }
    }, { passive: true });
    wrap.addEventListener('touchmove', function (e) {
      if (e.touches.length !== 2 || !d0) return;
      e.preventDefault();
      pinchAt = Date.now();
      zt = Math.min(3, Math.max(1, z0 * dist(e) / d0));
      pg.style.transform = 'scale(' + (zt / z0) + ')';
    }, { passive: false });
    function end() {
      if (!d0) return;
      d0 = 0; pinchAt = Date.now();
      pg.style.transform = ''; pg.style.willChange = ''; pg.style.transformOrigin = '';
      setZoom(zt, true);   // un único recálculo al terminar el gesto
    }
    wrap.addEventListener('touchend', function (e) { if (e.touches.length < 2) end(); }, { passive: true });
    wrap.addEventListener('touchcancel', end, { passive: true });
  }
  function setZoom(z, keepPos) {
    z = Math.min(3, Math.max(1, Math.round(z * 100) / 100));
    var old = zoomLevel();
    if (z === old) return;
    set(K_ZOOM, String(z));
    var pg = $('q3Pages'), wrap = $('q3Wrap'), r = z / old, vh = window.innerHeight;
    var lt = listTop(), y = window.pageYOffset, sl = wrap.scrollLeft, w = wrap.clientWidth;
    var f = (y - lt + vh / 2) / pageH();   // posición del centro de la pantalla en «páginas» (todas miden lo mismo)
    pg.style.width = (z * 100) + '%';
    pg.style.setProperty('--q3z', String(z));
    if (keepPos) {
      programmatic++;
      window.scrollTo(0, Math.max(0, lt + f * pageH() - vh / 2));
      wrap.scrollLeft = (sl + w / 2) * r - w / 2;
      setTimeout(function () { programmatic = Math.max(0, programmatic - 1); }, 120);
    }
  }

  function zoomLevel() { var z = parseFloat(get(K_ZOOM)); return z >= 1 && z <= 3 ? z : 1; }
  function applyView() {
    var pg = $('q3Pages'); if (!pg) return;
    var z = zoomLevel();
    pg.style.width = (z * 100) + '%';
    pg.style.setProperty('--q3z', String(z));
    $('q3Wrap').classList.toggle('q3-night', get(K_NIGHT) === '1');
    $('q3Night').textContent = get(K_NIGHT) === '1' ? '☀️' : '🌙';
  }

  // Lectura continua: 638 huecos de página y solo se cargan las imágenes cercanas a la página actual.
  var KEEP_BEHIND = 3, KEEP_AHEAD = 6, PREFETCH = 10, programmatic = 0;
  function buildPages() {
    var pg = $('q3Pages'); if (!pg || pg.firstChild) return;
    var frag = document.createDocumentFragment();
    for (var i = 1; i <= TOTAL; i++) {
      var d = mk('div', 'q3-pg');
      d.setAttribute('data-p', i);
      d.appendChild(mk('div', 'q3-cad q3-cad1'));
      d.appendChild(mk('div', 'q3-hd'));
      d.appendChild(mk('div', 'q3-cad q3-cad2'));
      d.appendChild(mk('div', 'q3-box'));
      d.appendChild(mk('div', 'q3-num', String(i)));
      frag.appendChild(d);
    }
    pg.appendChild(frag);
    labelHeaders();
    labelMarks();
  }
  // Etiqueta pequeña al lado de la línea donde empieza cada marca (se superpone en el margen ornamental, no empuja la página).
  function labelMarks() {
    var pg = $('q3Pages'); if (!pg || !pg.firstChild) return;
    var es = isEs(), i, old = pg.querySelectorAll('.q3-tag');
    for (i = 0; i < old.length; i++) old[i].parentNode.removeChild(old[i]);
    for (i = 0; i < DOTS.length; i++) {
      var pgNo = Math.floor(DOTS[i] / 1000), y = DOTS[i] % 1000, n = i + 1, hz = Math.floor(n / 8) + 1, k = n % 8;
      var box = pg.childNodes[pgNo - 1] && pg.childNodes[pgNo - 1].childNodes[3]; if (!box) continue;
      var tg = mk('div', k ? (k == 4 ? 'q3-tag nf' : (k == 2 || k == 6 ? 'q3-tag rb' : 'q3-tag')) : 'q3-tag hz0');
      for (var q = 0; q < SAJDA.length; q++) if (Math.floor(SAJDA[q] / 1000) === pgNo && Math.abs(SAJDA[q] % 1000 - y) < 85) { tg.className += ' up'; break; }
      tg.style.top = (y / 10) + '%';
      tg.innerHTML = k ? '<div class="m">' + DOT_AR[k] + '</div>' : '<div class="m">' + 'حزب' + '</div><div class="n">' + hz + '</div>';
      box.appendChild(tg);
    }
    for (i = 0; i < SAJDA.length; i++) {
      var sp = Math.floor(SAJDA[i] / 1000), sy = SAJDA[i] % 1000;
      var sb = pg.childNodes[sp - 1] && pg.childNodes[sp - 1].childNodes[3]; if (!sb) continue;
      var cls = 'q3-tag sj', j;
      for (j = 0; j < DOTS.length; j++) if (Math.floor(DOTS[j] / 1000) === sp && Math.abs(DOTS[j] % 1000 - sy) < 85) { sy = DOTS[j] % 1000; cls += ' dn'; break; }
      var st = mk('div', cls); st.style.top = (sy / 10) + '%';
      st.innerHTML = '<div class="m">' + (es ? 'Sajda' : 'سجدة') + '</div>';
      sb.appendChild(st);
    }
  }
  // (las sajdas se añaden dentro de labelMarks)
  // Cabecera de cada página (como el lector de referencia): juz | sura | hizb + marca de ثمن
  function labelHeaders() { return;
    var pg = $('q3Pages'); if (!pg || !pg.firstChild) return;
    var es = isEs();
    for (var i = 1; i <= TOTAL; i++) {
      var hd = pg.childNodes[i - 1].childNodes[1];
      var hz = hizbOf(i), jz = Math.ceil(hz / 2), tm = parseInt(THUMN.charAt(i - 1), 10) || 0;
      var sur = Q3S[0];
      for (var k = 0; k < Q3S.length; k++) { if (Q3S[k].page <= i) sur = Q3S[k]; else break; }
      var html = '<span class="q3-ros r">۞</span><span class="q3-ros l">۞</span>' +
        '<span>' + (es ? "Juz' " + jz : 'الجزء ' + JUZ_AR[jz - 1]) + '</span>' +
        '<span>' + (es ? 'Surah ' + sur.nameEs : 'سورة ' + sur.nameAr) + '</span>' +
        '<span>' + '<b class="' + (i > 1 && hz !== hizbOf(i - 1) || i === 1 ? 'q3-hz' : '') + '" style="font-weight:inherit;display:inline-block">' + (es ? 'Hizb ' : 'الحزب ') + hz + '</b>' + (tm ? '<i>' + (es ? THUMN_ES[tm] : THUMN_AR[tm]) + '</i>' : '') + '</span>';
      hd.innerHTML = html;
    }
  }
  function pageH() { var f = $('q3Pages') && $('q3Pages').firstChild; return f ? f.getBoundingClientRect().height || 1 : 1; } // con decimales: offsetHeight redondea y el error se acumula en 638 páginas
  function appHeader(hide) { var hd = document.querySelector('header'); if (hd) hd.style.display = hide ? 'none' : ''; }
  function barBottom() { return 0; }
  function listTop() { var pg = $('q3Pages'); return pg.getBoundingClientRect().top + window.pageYOffset; }
  function loadWindow() {
    var pg = $('q3Pages'); if (!pg) return;
    var lo = clampPage(cur - KEEP_BEHIND), hi = clampPage(cur + KEEP_AHEAD), i;
    // Quitar las lejanas
    for (i = 1; i <= TOTAL; i++) {
      if (i < lo - 2 || i > hi + 2) { var f = pg.childNodes[i - 1].childNodes[3], im0 = f.querySelector('img'); if (im0) f.removeChild(im0); }
    }
    // Cargar primero la página actual y después las más cercanas (así la red atiende antes lo que se ve)
    var order = [];
    for (i = lo; i <= hi; i++) order.push(i);
    order.sort(function (a, b) { return Math.abs(a - cur) - Math.abs(b - cur) || a - b; });
    order.forEach(function (n, k) {
      var d = pg.childNodes[n - 1].childNodes[3];
      if (d.querySelector('img')) return;
      var img = document.createElement('img'); img.alt = ''; img.decoding = 'async';
      if (k < 2) img.fetchPriority = 'high';
      img.src = pageSrc(n); d.style.setProperty('--fr', n > 2 ? 'url(quran_pages3/frame' + (n % 2) + '.avif)' : 'none'); d.appendChild(img);
    });
    prefetch();
  }
  // Precarga en segundo plano de las páginas siguientes (y alguna anterior): quedan en la caché y aparecen al instante.
  var pre = {}, preTimer = 0;
  function pageSrc(n) { return n <= 2 ? 'quran_pages3/page' + n + '.jpg' : 'quran_pages3/L' + n + '.avif'; }
  function prefetch() {
    clearTimeout(preTimer);
    preTimer = setTimeout(function () {
      var list = [], k;
      for (k = KEEP_AHEAD + 1; k <= KEEP_AHEAD + PREFETCH; k++) list.push(cur + k);
      list.push(cur - KEEP_BEHIND - 1, cur - KEEP_BEHIND - 2);
      list.forEach(function (n) {
        if (n < 1 || n > TOTAL || pre[n]) return;
        pre[n] = 1; var im = new Image(); im.decoding = 'async'; im.src = pageSrc(n); if (n > 2) { var fi = new Image(); fi.src = 'quran_pages3/frame' + (n % 2) + '.avif'; }
      });
    }, 400);
  }
  // Aviso al llegar leyendo a la mitad del hizb o al comienzo de un hizb nuevo
  // Solo mientras la página donde empieza un hizb está centrada, su «الحزب N» se pone en blanco y pulsa una vez.
  var litEl = null;
  function notifyMark(prev, now) {
    if (litEl) { litEl.classList.remove('q3-lit', 'q3-pulse'); litEl = null; }
    if (now < 2 || hizbOf(now) === hizbOf(now - 1)) return;
    var pg = $('q3Pages'); if (!pg) return;
    var el = pg.childNodes[now - 1].querySelector('.q3-hz'); if (!el) return;
    el.classList.add('q3-lit', 'q3-pulse');
    litEl = el;
  }
  function setCur(p, notify) {
    var prevPage = cur;
    cur = clampPage(p);
    notifyMark(prevPage, cur);
    set(K_LAST, String(cur));
    $('q3PageIn').value = cur;
    $('q3Range').value = cur;
    updateStar();
    loadWindow();
    var v = $('quran3View');
    if (window.history && window.history.replaceState && v && !v.classList.contains('hidden')) {
      try { window.history.replaceState({ view: 'quran3', page: cur }, '', '#quran3-page-' + cur); } catch (e) {}
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
    var v = $('quran3View'); if (!v || v.classList.contains('hidden')) return;
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
    set_('q3Home', es ? 'Inicio' : 'الرئيسية');
    set_('q3GoPage', es ? 'Ir' : 'اذهب');
    set_('q3AddMark', es ? 'Marcar' : 'علّم');
    var tb = document.querySelectorAll('#q3Drawer .q3-tab');
    var names = { s: es ? 'Surah' : 'السور', h: es ? 'Hizb' : 'الأحزاب', j: es ? "Juz'" : 'الأجزاء', a: es ? 'Ayah' : 'آية' };
    for (var i = 0; i < tb.length; i++) { var k = tb[i].getAttribute('data-t'); if (names[k]) tb[i].textContent = names[k]; }
    var rl = { s: es ? 'Surah' : 'سورة', a: es ? 'Ayah' : 'آية', h: es ? 'Hizb' : 'الأحزاب', j: es ? "Juz'" : 'الأجزاء', l: 'x' };
    var rbl = document.querySelectorAll('#q3Rail [data-rt]');
    for (var q = 0; q < rbl.length; q++) { var kk = rbl[q].getAttribute('data-rt'); if (rl[kk]) { rbl[q].textContent = rl[kk]; if (kk === 'l') rbl[q].innerHTML = '<span>Idioma</span><span>لغة</span>'; } }
    var n = $('q3Note'); if (n) n.placeholder = es ? 'Nota (opcional)' : 'ملاحظة (اختياري)';
    var p = $('q3PageIn'); if (p) p.placeholder = '1…' + TOTAL;
  }

  function surahAt(p) { var s = Q3S[0]; for (var k = 0; k < Q3S.length; k++) { if (Q3S[k].page <= p) s = Q3S[k]; else break; } return s; }
  function addRow(box, title, sub, page, isCur) {
    var r = mk('div', 'q3-row' + (isCur ? ' cur' : ''));
    r.appendChild(mk('span', 'font-bold', title));
    if (sub) r.appendChild(mk('span', 'text-xs', sub));
    r.onclick = function () { drawer(false); show(page, true); };
    box.appendChild(r);
  }
  function renderResults() {
    var box = $('q3Results'); if (!box) return;
    var es = isEs(), pageLbl = es ? 'pág. ' : 'ص ';
    var q = norm($('q3Filter').value.trim());
    var tbs = document.querySelectorAll('#q3Drawer .q3-tab');
    for (var i = 0; i < tbs.length; i++) tbs[i].classList.toggle('on', tbs[i].getAttribute('data-t') === tab);
    $('q3Filter').style.display = (tab === 's' || (tab === 'a' && !ayaSurah)) ? '' : 'none';
    $('q3Filter').placeholder = es ? 'Filtrar suras por nombre o número…' : 'ابحث عن سورة بالاسم أو الرقم…';
    $('q3MarkAdd').style.display = tab === 'm' ? 'flex' : 'none';
    var dw = $('q3Drawer'); if (dw) dw.setAttribute('data-tab', tab);
    box.innerHTML = '';
    var hz = hizbOf(cur), jz = Math.ceil(hz / 2), cs = surahAt(cur);
    if (tab === 's') {
      Q3S.filter(function (s) {
        return !q || String(s.id) === q || norm(s.nameAr).indexOf(q) !== -1 || norm(s.nameEs).indexOf(q) !== -1;
      }).forEach(function (s) { addRow(box, s.id + ' · ' + (es ? s.nameEs : s.nameAr), pageLbl + s.page, s.page, s.id === cs.id); });
    } else if (tab === 'h') {
      Q3H.forEach(function (h) { addRow(box, (es ? 'Hizb ' : 'الحزب ') + h.id, '', h.page, h.id === hz); });
    } else if (tab === 'j') {
      for (var j = 1; j <= Math.ceil(Q3H.length / 2); j++) {
        var h = Q3H[2 * j - 2];
        addRow(box, (es ? "Juz' " : 'جزء ') + j, '', h.page, j === jz);
      }
    } else if (tab === 'l') {
      [['ar', 'العربية'], ['es', 'Español']].forEach(function (L) {
        var r = mk('div', 'q3-row' + ((trEs() ? 'es' : 'ar') === L[0] ? ' cur' : ''));
        r.appendChild(mk('span', 'font-bold', L[1]));
        r.onclick = function () { set(K_TR, L[0]); sheet(false); panel(false); applyLabels(); };
        box.appendChild(r);
      });
    } else if (tab === 'a') { renderAyas(box, q, es, pageLbl); }
    else { renderMarks(); }
  }

  // Ir a una aya: primero se elige la sura y después el número de aya (posiciones en quran_ayas.js).
  var ayaSurah = 0, ayasLoading = false;
  function ayasReady() {
    if (window.Q3_AYAS) return true;
    if (!ayasLoading) {
      ayasLoading = true;
      var sc = document.createElement('script'); sc.src = 'quran3_ayas.js';
      sc.onload = function () { renderResults(); };
      sc.onerror = function () { ayasLoading = false; };
      document.head.appendChild(sc);
    }
    return false;
  }
  function renderAyas(box, q, es, pageLbl) {
    if (!ayasReady()) { box.appendChild(mk('div', 'text-sm p-2', '…')); return; }
    if (!ayaSurah) {
      Q3S.filter(function (s) {
        return !q || String(s.id) === q || norm(s.nameAr).indexOf(q) !== -1 || norm(s.nameEs).indexOf(q) !== -1;
      }).forEach(function (s) {
        var r = mk('div', 'q3-row'); r.appendChild(mk('span', 'font-bold', s.id + ' · ' + (es ? s.nameEs : s.nameAr)));
        r.appendChild(mk('span', 'text-xs', (window.Q3_AYAS[s.id - 1] || []).length + (es ? ' ayahs' : ' آية')));
        r.onclick = function () { ayaSurah = s.id; $('q3Filter').value = ''; renderResults(); };
        box.appendChild(r);
      });
      return;
    }
    var sr = Q3S[ayaSurah - 1], list = window.Q3_AYAS[ayaSurah - 1] || [];
    var back = mk('div', 'q3-row cur'); back.appendChild(mk('span', 'font-bold', '← ' + sr.id + ' · ' + (es ? sr.nameEs : sr.nameAr)));
    back.onclick = function () { ayaSurah = 0; renderResults(); };
    box.appendChild(back);
    var grid = mk('div', ''); grid.style.cssText = 'display:grid;grid-template-columns:repeat(5,1fr);gap:.35rem;margin-top:.5rem;direction:ltr';
    list.forEach(function (pos, i) {
      var b = mk('button', 'q3-btn', String(i + 1)); b.type = 'button'; b.style.padding = '.45rem 0';
      b.onclick = function () { drawer(false); goToAya(pos, i > 0 ? list[i - 1] : 0); };
      grid.appendChild(b);
    });
    box.appendChild(grid);
  }
  function goToAya(pos, prev) {
    var p = Math.floor(pos / 1000000), y = Math.floor(pos / 1000) % 1000;
    goTo(p);
    var pg = $('q3Pages'), el = pg && pg.childNodes[p - 1], bx = el && el.childNodes[3];
    if (!bx) return;
    var r = bx.getBoundingClientRect();
    programmatic++;
    window.scrollTo(0, Math.max(0, r.top + window.pageYOffset + r.height * y / 1000 - window.innerHeight / 2));
    setTimeout(function () { programmatic = Math.max(0, programmatic - 1); }, 120);
    glow(bx, pos);
  }
  // Luz transparente un instante sobre el aya: empieza justo después del número del aya anterior y acaba en su propio número.
  // Texto de derecha a izquierda: la primera línea va desde el número anterior hacia la izquierda, las intermedias enteras y la última desde la derecha hasta el número del aya.
  // Y (‰) de la primera línea de texto del aya 1 de cada sura (debajo del cuadro del nombre de la sura); -1 = arriba de la página.
  var SURA_START = [469,470,678,795,561,557,862,614,264,619,919,797,678,617,497,554,561,681,733,566,268,-1,327,329,739,388,562,910,-1,210,268,914,682,-1,-1,445,620,385,680,739,323,860,737,915,746,388,856,-1,443,-1,851,743,331,917,680,789,-1,385,796,-1,675,384,674,-1,-1,-1,851,327,678,739,616,383,328,852,848,267,272,849,442,914,204,-1,795,325,271,209,745,507,393,554,386,-1,736,326,682,203,854,328,204,619,203,673,-1,377,793,204,506,862,208,520,812,205,452,750];
  var posIdx = null;
  // Geometría (‰ de la imagen) de la zona de texto: las 2 primeras páginas llevan marco decorativo y letra más pequeña.
  function pcfg(pg) { return pg <= 2 ? { L: 324, R: 723, TOP: 434, BOT: 667, LH: 39, MK: 32, W: 82 } : { L: 81, R: 919, TOP: 89, BOT: 913, LH: 59, MK: 39, W: 88 }; }
  function glow(bx, pos) {
    if (!window.Q3_AYAS) return;
    var old = document.querySelectorAll('#q3Pages .q3-hl'), i;
    for (i = 0; i < old.length; i++) old[i].parentNode.removeChild(old[i]);
    if (!posIdx) { posIdx = {}; window.Q3_AYAS.forEach(function (su, si) { su.forEach(function (v, ai) { posIdx[v] = [si, ai]; }); }); }
    var ix = posIdx[pos]; if (!ix) return;
    var si = ix[0], ai = ix[1], prev = 0;
    if (ai > 0) prev = window.Q3_AYAS[si][ai - 1]; else if (si > 0) prev = window.Q3_AYAS[si - 1][window.Q3_AYAS[si - 1].length - 1];
    var p = Math.floor(pos / 1000000), ye = Math.floor(pos / 1000) % 1000, xe = pos % 1000;
    var c0 = pcfg(p), LH = c0.LH, MK = c0.MK, TOP = c0.TOP, BOT = c0.BOT;
    function seg(pg, ys, xs, yEnd, xEnd) {       // xEnd null = hasta el final de la página
      var el = $('q3Pages').childNodes[pg - 1], b = el && el.childNodes[3]; if (!b) return;
      var cc = pcfg(pg), L = cc.L, R = cc.R; LH = cc.LH; MK = cc.MK;
      if (xs === null) xs = R;
      var n = Math.max(1, Math.round((yEnd - ys) / LH) + 1), k, boxes = [];
      if (yEnd < ys) { ys = yEnd; xs = R; n = 1; }
      for (k = 0; k < n; k++) {
        var yc = n === 1 ? yEnd : ys + k * (yEnd - ys) / (n - 1);
        var right = k === 0 ? xs : R, left = (k === n - 1 && xEnd !== null) ? xEnd - MK * 0.65 : L;
        if (right > left) boxes.push([yc, left, right]);
      }
      var wrap = mk('div', 'q3-hl');
      boxes.forEach(function (bb) {
        var d = mk('div', 'q3-hr');
        d.style.top = ((bb[0] - LH / 2) / 10) + '%'; d.style.height = (LH / 10) + '%';
        d.style.left = (bb[1] / 10) + '%'; d.style.width = ((bb[2] - bb[1]) / 10) + '%';
        wrap.appendChild(d);
      });
      b.appendChild(wrap);
      setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }, 2300);
    }
    if (ai === 0) {                                // primer aya de la sura: empieza debajo del cuadro con el nombre
      var y0 = SURA_START[si]; if (y0 === undefined || y0 > ye + 32) y0 = ye; seg(p, y0 >= 0 ? y0 : TOP, null, ye, xe);
      return;
    }
    var pp = Math.floor(prev / 1000000), py = Math.floor(prev / 1000) % 1000, px = prev % 1000;
    var xs = px - MK, ys = py;
    if (pp === p) {
      if (xs < c0.L + c0.W) { ys += LH; xs = null; }
      seg(p, ys, xs, ye, xe);
    } else {                                       // el aya empieza en una página anterior y acaba en esta
      if (xs < c0.L + c0.W) { ys += LH; xs = null; }
      if (ys <= BOT + LH / 2) seg(pp, ys, xs, BOT, null);
      seg(p, TOP, null, ye, xe);
    }
  }

  function isMarked(p) { return marks().some(function (m) { return m.page === p; }); }
  function toggleMark(withNote) {
    var m = marks(), i = -1;
    m.forEach(function (x, k) { if (x.page === cur) i = k; });
    if (i >= 0 && !withNote) { m.splice(i, 1); toast(isEs() ? 'Marcador quitado' : 'أُزيلت العلامة'); }
    else {
      var note = ($('q3Note') && $('q3Note').value || '').trim();
      if (i >= 0) m[i].note = note || m[i].note; else m.push({ page: cur, note: note, t: Date.now() });
      if ($('q3Note')) $('q3Note').value = '';
      toast(isEs() ? 'Marcador guardado' : 'تم حفظ العلامة');
    }
    saveMarks(m); updateStar(); renderMarks();
  }
  function updateStar() { var s = $('q3Star'); if (s) s.textContent = isMarked(cur) ? '★' : '☆'; }
  function renderMarks() {
    var box = $('q3Results'); if (!box || tab !== 'm') return;
    box.innerHTML = '';
    var m = marks().sort(function (a, b) { return a.page - b.page; });
    if (!m.length) { box.appendChild(mk('div', 'text-sm p-2', isEs() ? 'Sin marcadores todavía.' : 'لا توجد علامات بعد.')); return; }
    m.forEach(function (x) {
      var r = mk('div', 'q3-row');
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
      try { window.history.pushState({ view: 'quran3', page: clampPage(start) }, '', '#quran3-page-' + clampPage(start)); } catch (e) {}
    }
    setTimeout(function () { show(start, true); }, 0);
  }
  window.showQuran3 = function (page) { open(page, true); };

  var origHide = window.hideAllViews;
  window.hideAllViews = function () {
    origHide.apply(this, arguments);
    try { drawer(false); appHeader(false); } catch (e) {}
    var v = $('quran3View'); if (v) v.classList.add('hidden');
  };
  window.addEventListener('popstate', function (e) {
    var st = e.state;
    if (st && st.view === 'quran3') {
      e.stopImmediatePropagation();
      if (adminOk()) open(st.page, false); else goHome(true);
    }
  }, true);

  // Tarjeta en la pantalla principal, justo después de la de «القرآن الكريم». Solo en modo admin.
  function ensureHomeCard() {
    var base = $('q2HomeCard') || document.querySelector('#homeView button[onclick="showQuranView()"]');
    var card = $('q3HomeCard');
    if (!adminOk()) { if (card) card.remove(); return; }
    if (!base || !base.parentNode) return;
    if (!card) {
      card = mk('button', base.className.replace(/from-amber-600|to-amber-800|hover:from-amber-700/g, '').trim());
      card.id = 'q3HomeCard';
      card.type = 'button';
      card.style.cssText = 'background: linear-gradient(135deg, #0f766e, #134e4a) !important;';
      card.onclick = function () { open(null, true); };
      base.parentNode.insertBefore(card, base.nextSibling);
    }
    var es = isEs();
    card.innerHTML = '<span class="home-icon-wrap"><img src="Iconos/Quran.webp" alt="" class="home-category-icon" loading="lazy" decoding="async"></span>' +
      '<span class="block"><span class="block text-lg sm:text-xl font-extrabold"></span><span class="block text-amber-100 text-xs mt-0.5 line-clamp-1"></span></span>';
    var sp = card.querySelectorAll('span.block span.block');
    sp[0].textContent = es ? 'Mushaf Medina Warsh (prueba) ⚙️' : 'مصحف المدينة ورش (تجريبي) ⚙️';
    sp[1].textContent = es ? 'Prueba: mushaf del Rey Fahd (Medina, Warsh)' : 'تجريبي: مصحف مجمع الملك فهد (ورش)';
  }

  var origLang = window.applyLanguageUI;
  if (typeof origLang === 'function') {
    window.applyLanguageUI = function () {
      var r = origLang.apply(this, arguments);
      try { ensureHomeCard(); applyLabels(); labelHeaders(); labelMarks(); renderResults(); var v = $('quran3View'); if (v && !v.classList.contains('hidden')) setCur(cur); } catch (e) {}
      return r;
    };
  }
  window.addEventListener('zad-admin', function () { try { ensureHomeCard(); } catch (e) {} });
  function init() { ensureHomeCard(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
