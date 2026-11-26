/*
 * وردي اليومي · Mi rutina diaria — definición de grupos, plantillas, textos y enlaces a los contenidos originales.
 * NO contiene textos religiosos: cada actividad apunta (category + contentId) a un grupo real de azkar / adya /
 * munajat / ruqyah, al lector del Corán o a la misbaha. Idiomas: árabe y español.
 */
(function (W) {
  'use strict';
  var R = W.ZadRoutine = W.ZadRoutine || {};

  /* ── Textos de la interfaz (centralizados) ── */
  R.STR = {
    title: ['وِرْدِي الْيَوْمِيُّ', 'Mi rutina diaria'],
    sub: ['رُوتِينُكَ الْيَوْمِيُّ فِي الْعِبَادَةِ', 'Tu constancia en la adoración'],
    done: ['أَنْجَزْتَ', 'completadas'], of: ['مِنْ', 'de'], acts: ['الْأَنْشِطَةُ', 'actividades'],
    customize: ['تَخْصِيصُ وِرْدِي', 'Personalizar mi rutina'], history: ['السِّجِلُّ', 'Historial'],
    back: ['رجوع', 'Volver'], open: ['افْتَحْ', 'Abrir'], hijri: ['', ''],
    emptyGroup: ['لَا أَنْشِطَةَ هُنَا', 'Sin actividades'], noActs: ['أَضِفْ نَشَاطًا مِنْ «تَخْصِيصِ وِرْدِي»', 'Añade actividades desde «Personalizar»'],
    routines: ['الرُّوتِينَاتُ', 'Rutinas'], newRoutine: ['رُوتِينٌ جَدِيدٌ', 'Nueva rutina'], rename: ['إِعَادَةُ تَسْمِيَةٍ', 'Renombrar'],
    del: ['حَذْفٌ', 'Eliminar'], templates: ['الْقَوَالِبُ', 'Plantillas'], applyTpl: ['تَطْبِيقُ قَالِبٍ عَلَى رُوتِينٍ جَدِيدٍ', 'Crear rutina desde una plantilla'],
    addAct: ['إِضَافَةُ نَشَاطٍ', 'Añadir actividad'], edit: ['تَعْدِيلٌ', 'Editar'], save: ['حِفْظٌ', 'Guardar'], cancel: ['إِلْغَاءٌ', 'Cancelar'],
    titleAr: ['الِاسْمُ بِالْعَرَبِيَّةِ', 'Nombre en árabe'], titleEs: ['الِاسْمُ بِالْإِسْبَانِيَّةِ', 'Nombre en español'],
    group: ['الْوَقْتُ', 'Momento del día'], reps: ['عَدَدُ التَّكْرَارِ', 'Repeticiones'], link: ['الْمُحْتَوَى', 'Contenido enlazado'],
    none: ['بِلَا رَابِطٍ (نَشَاطٌ حُرٌّ)', 'Sin enlace (actividad libre)'], enabled: ['مُفَعَّلٌ', 'Activa'],
    reminders: ['التَّذْكِيرَاتُ', 'Recordatorios'], remNote: ['لَا يُطْلَبُ إِذْنُ الْإِشْعَارَاتِ إِلَّا عِنْدَ تَفْعِيلِ تَذْكِيرٍ.', 'El permiso de notificaciones solo se pide al activar un recordatorio.'],
    remMorning: ['أَذْكَارُ الصَّبَاحِ', 'Azkar de la mañana'], remEvening: ['أَذْكَارُ الْمَسَاءِ', 'Azkar de la tarde'],
    remQuran: ['قِرَاءَةُ الْقُرْآنِ', 'Lectura del Corán'], remSleep: ['قَبْلَ النَّوْمِ', 'Antes de dormir'],
    week: ['الْأُسْبُوعُ', 'Semana'], month: ['الشَّهْرُ', 'Mes'], stats: ['إِحْصَاءَاتُ الْأَنْشِطَةِ (٣٠ يَوْمًا)', 'Estadísticas de actividades (30 días)'],
    days: ['أَيَّامٌ', 'días'], noData: ['لَا بَيَانَاتٍ بَعْدُ', 'Aún no hay datos'], motto: ['الْمُدَاوَمَةُ خَيْرٌ مِنَ الْكَثْرَةِ', 'La constancia vale más que la cantidad'],
    confirmDel: ['هَلْ تُرِيدُ الْحَذْفَ؟', '¿Eliminar?'], moveUp: ['أَعْلَى', 'Subir'], moveDown: ['أَسْفَلَ', 'Bajar'],
    unavailable: ['هَذَا الْمُحْتَوَى غَيْرُ مُتَوَفِّرٍ', 'Este contenido no está disponible'], pageNo: ['رَقْمُ صَفْحَةِ الْمُصْحَفِ', 'N.º de página del Mushaf'],
    cat: { azkar: ['الْأَذْكَارُ', 'Azkar'], rosario: ['الْمِسْبَحَةُ', 'Rosario'], adya: ['الْأَدْعِيَةُ', 'Súplicas'], munajat: ['الْمُنَاجَاةُ', 'Munajat'], ruqyah: ['الرُّقْيَةُ', 'Ruqya'], quran: ['الْقُرْآنُ الْكَرِيمُ', 'Corán'], tasbeeh: ['الْمِسْبَحَةُ', 'Misbaha'], custom: ['نَشَاطٌ حُرٌّ', 'Actividad libre'], glosario: ['الْمُعْجَمُ', 'Glosario'], situations: ['حَسَبَ الْحَالَةِ', 'Estado de ánimo'] },
    tpl: { brief: ['مُخْتَصَرٌ', 'Rutina breve'], balanced: ['مُتَوَازِنٌ', 'Rutina equilibrada'], extended: ['مُوَسَّعٌ', 'Rutina ampliada'] },
    defaultName: ['وِرْدِي', 'Mi rutina'], saved: ['تَمَّ الْحِفْظُ', 'Guardado'], todayLbl: ['الْيَوْمُ', 'Hoy'],
    wd: [['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'], ['D', 'L', 'M', 'X', 'J', 'V', 'S']]
  };
  R.t = function (k) {
    var v = R.STR[k]; if (!v) return k;
    var es = (typeof currentLang !== 'undefined' && currentLang === 'es');
    return Array.isArray(v) ? v[es ? 1 : 0] : v;
  };
  R.isEs = function () { return typeof currentLang !== 'undefined' && currentLang === 'es'; };

  /* ── Momentos del día ── */
  R.GROUPS = [
    { id: 'after_fajr', ar: 'بَعْدَ الْفَجْرِ', es: 'Después del Fayr' },
    { id: 'duha', ar: 'الضُّحَى', es: 'Ad-Duha' },
    { id: 'after_dhuhr', ar: 'بَعْدَ الظُّهْرِ', es: 'Después del Dhuhr' },
    { id: 'after_asr', ar: 'بَعْدَ الْعَصْرِ', es: 'Después del Asr' },
    { id: 'after_maghrib', ar: 'بَعْدَ الْمَغْرِبِ', es: 'Después del Maghrib' },
    { id: 'after_isha', ar: 'بَعْدَ الْعِشَاءِ', es: 'Después del Isha' },
    { id: 'before_sleep', ar: 'قَبْلَ النَّوْمِ', es: 'Antes de dormir' }
  ];

  /* ── Actividades base: category + contentId = ids REALES de grupos existentes ── */
  function A(id, ar, es, cat, cid, grp, reps) {
    return { id: id, title: { ar: ar, es: es }, category: cat, contentId: cid || null, groupId: grp, repetitions: reps || 1, enabled: true };
  }
  var LIB = {
    morning_adhkar: A('morning_adhkar', 'أَذْكَارُ الصَّبَاحِ', 'Azkar de la mañana', 'azkar', 'sabah', 'after_fajr'),
    quran_fajr: A('quran_fajr', 'قِرَاءَةُ الْقُرْآنِ', 'Lectura del Corán', 'quran', 'home', 'after_fajr'),
    tahlil10_fajr: A('tahlil10_fajr', 'التَّهْلِيلُ عَشْرَ مَرَّاتٍ', 'Tahlil ×10 (tras el Fayr)', 'tasbeeh', 't11', 'after_fajr', 10),
    istighfar: A('istighfar', 'الِاسْتِغْفَارُ', 'Pedir perdón (istighfar)', 'tasbeeh', 't5', 'after_fajr', 1),
    duha_prayer: A('duha_prayer', 'صَلَاةُ الضُّحَى', 'Oración de Ad-Duha', 'glosario', 'glosario_salat|196', 'duha'),
    salawat: A('salawat', 'الصَّلَاةُ عَلَى النَّبِيِّ ﷺ', 'Bendecir al Profeta ﷺ', 'tasbeeh', 't7', 'duha', 1),
    dhuhr_adhkar: A('dhuhr_adhkar', 'أَذْكَارٌ مُخْتَارَةٌ', 'Azkar escogidos', 'azkar', 'azkar_bada_salah', 'after_dhuhr'),
    tasbih_tahlil: A('tasbih_tahlil', 'التَّسْبِيحُ وَالتَّحْمِيدُ وَالتَّهْلِيلُ', 'Tasbih, tahmid y tahlil', 'rosario', 'fadl_tasbih_tahlil', 'after_dhuhr'),
    evening_adhkar: A('evening_adhkar', 'أَذْكَارُ الْمَسَاءِ', 'Azkar de la tarde', 'azkar', 'masaa', 'after_asr'),
    tahlil10_maghrib: A('tahlil10_maghrib', 'التَّهْلِيلُ عَشْرَ مَرَّاتٍ', 'Tahlil ×10 (tras el Maghrib)', 'tasbeeh', 't11', 'after_maghrib', 10),
    quran_night: A('quran_night', 'قِرَاءَةُ الْقُرْآنِ', 'Lectura del Corán', 'quran', 'home', 'after_maghrib'),
    dua_quran: A('dua_quran', 'الدُّعَاءُ', 'Súplicas según tu estado de ánimo', 'situations', null, 'after_isha'),
    munajat_hamd: A('munajat_hamd', 'الْحَمْدُ وَالشُّكْرُ', 'Alabanza y gratitud', 'munajat', 'alabanza', 'after_isha'),
    sleep_adhkar: A('sleep_adhkar', 'أَذْكَارُ النَّوْمِ', 'Azkar antes de dormir', 'azkar', 'nawm', 'before_sleep'),
    witr: A('witr', 'الْوِتْرُ', 'Oración de Witr', 'azkar', 'witr', 'after_isha'),
    misbaha: A('misbaha', 'الْمِسْبَحَةُ', 'Misbaha', 'tasbeeh', 'home', 'before_sleep')
  };
  LIB.istighfar.open = true; LIB.salawat.open = true; // sin tope: el usuario decide cuántas y confirma él mismo
  R.LIB = LIB;
  function pick(ids) { return ids.map(function (i) { return JSON.parse(JSON.stringify(LIB[i])); }); }

  R.TEMPLATES = {
    brief: { id: 'brief', acts: ['morning_adhkar', 'evening_adhkar', 'sleep_adhkar'] },
    balanced: { id: 'balanced', acts: ['tahlil10_fajr', 'morning_adhkar', 'quran_fajr', 'istighfar', 'duha_prayer', 'salawat', 'dhuhr_adhkar', 'evening_adhkar', 'tahlil10_maghrib', 'quran_night', 'dua_quran', 'witr', 'sleep_adhkar'] },
    extended: { id: 'extended', acts: ['tahlil10_fajr', 'morning_adhkar', 'quran_fajr', 'istighfar', 'duha_prayer', 'salawat', 'dhuhr_adhkar', 'tasbih_tahlil', 'evening_adhkar', 'tahlil10_maghrib', 'quran_night', 'dua_quran', 'munajat_hamd', 'witr', 'sleep_adhkar', 'misbaha'] }
  };
  R.templateActs = function (tid) { return pick(R.TEMPLATES[tid].acts); };

  R.uid = function (p) { return (p || 'u') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); };

  /* ── Enlace con el contenido original ── */
  R.modules = { azkar: 1, adya: 1, munajat: 1, ruqyah: 1, rosario: 1 };
  R.findGroup = function (cat, id) {
    try { var m = getSectionModule(cat); return m && m.findGroup ? m.findGroup(id) : null; } catch (e) { return null; }
  };
  // Lista (aplanada) de los grupos de una sección: [{id, ar, es}]
  R.listGroups = function (cat) {
    var out = [];
    try {
      var m = getSectionModule(cat); var walk = function (gs) {
        (gs || []).forEach(function (g) {
          if (g.items) out.push({ id: g.id, ar: g.titleAr || g.titleEs || g.id, es: g.titleEs || g.titleAr || g.id });
          if (g.groups) walk(g.groups); if (g.children) walk(g.children);
        });
      }; walk(m.getGroups());
    } catch (e) {}
    return out;
  };
  R.exists = function (a) {
    if (a.category === 'situations') return typeof showSituations === 'function';
    if (!a.contentId) return a.category === 'custom';
    if (a.category === 'glosario') return typeof openGroup === 'function';
    if (R.modules[a.category]) return !!R.findGroup(a.category, a.contentId);
    if (a.category === 'quran') return typeof showQuranView === 'function';
    if (a.category === 'tasbeeh') return typeof showTasbeeh === 'function' && (a.contentId === 'home' || R.tasbeehItem(a.contentId));
    return false;
  };
  R.openContent = function (a) {
    try {
      if (a.category === 'situations') { if (typeof showSituations === 'function') showSituations(); else R.toast(R.t('unavailable')); return; }
      if (R.modules[a.category] && a.contentId) {
        var go = function () { if (R.findGroup(a.category, a.contentId)) openGroup(a.contentId, false, a.category); else R.toast(R.t('unavailable')); };
        if (!R.findGroup(a.category, a.contentId) && typeof loadAllSections === 'function') loadAllSections().then(go); else go();
      } else if (a.category === 'glosario' && a.contentId) {
        // contentId = «grupo|número de término»: abre el grupo del glosario y baja a ese término
        var gp = String(a.contentId).split('|'), num = parseInt(gp[1], 10);
        openGroup(gp[0], false, 'glosario');
        var tries = 0, jump = function () {
          try {
            var g = typeof currentGroup !== 'undefined' ? currentGroup : null;
            if (g && g.id === gp[0] && g.items) {
              var idx = -1; g.items.forEach(function (it, i) { if ((Number(it.itemNumber) || i + 1) === num) idx = i; });
              var el = idx >= 0 && document.getElementById('zikr-card-' + idx);
              if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
            }
          } catch (e) {}
          if (++tries < 12) setTimeout(jump, 250);
        };
        setTimeout(jump, 300);
      } else if (a.category === 'quran') {
        var m = /^page:(\d+)$/.exec(a.contentId || '');
        if (m && typeof openQuranPage === 'function') openQuranPage(parseInt(m[1], 10)); else showQuranView();
      } else if (a.category === 'tasbeeh') { showTasbeeh(); R.focusTasbeeh(a); }
    } catch (e) { R.toast(R.t('unavailable')); }
  };
  R.tasbeehItem = function (id) { try { return tasbeehItems.filter(function (x) { return x.id === id; })[0] || null; } catch (e) { return null; } };

  /* ── Marcado automático desde las secciones de contenido ── */
  function curRoutine() { var D = R.Storage.load(); return { D: D, r: R.Storage.active(D) }; }
  function findAct(r, pred) { return r.acts.filter(function (a) { return a.enabled !== false && pred(a); }); }
  R.setActCount = function (r, a, n) { var L = R.Storage.log(); R.Progress.setCount(L, R.Progress.key(), r, a, n); R.Storage.saveLog(L); };
  // Contador libre (sin tope) de actividades abiertas como istighfar/salawat; no marca la casilla por sí solo
  R.openCount = function (r, a) { var L = R.Storage.log(), e = L[R.Progress.key()] && L[R.Progress.key()][r.id]; return (e && e.o && e.o[a.id]) || 0; };
  R.addOpen = function (r, a, n) {
    var L = R.Storage.log(), k = R.Progress.key(); L[k] = L[k] || {}; var e = L[k][r.id] = L[k][r.id] || { n: {}, t: 0, d: 0 };
    e.o = e.o || {}; e.o[a.id] = (e.o[a.id] || 0) + n; R.Storage.saveLog(L);
  };
  R.actCountToday = function (r, a) { return R.Progress.count(R.Storage.log(), R.Progress.key(), r.id, a.id); };
  R.notify = function (a) { R.toast((R.isEs() ? '✓ Marcado en tu rutina: ' : '✓ تَمَّ تَسْجِيلُ الْإِنْجَازِ فِي وِرْدِكَ: ') + R.actTitle(a)); };
  // Un grupo de azkar completado en su sección marca la actividad enlazada
  R.autoDone = function (cat, gid) {
    try {
      var c = curRoutine();
      findAct(c.r, function (a) { return a.category === cat && a.contentId === gid; }).forEach(function (a) {
        if (R.actCountToday(c.r, a) < R.Progress.reps(a)) { R.setActCount(c.r, a, R.Progress.reps(a)); R.notify(a); }
      });
    } catch (e) {}
  };
  // Misbaha abierta desde la rutina: cada toque suma al contador de esa actividad
  R.tasbeehCtx = null;
  R.focusTasbeeh = function (a) {
    R.tasbeehCtx = (a.contentId && a.contentId !== 'home') ? { actId: a.id, tid: a.contentId } : null;
    setTimeout(function () { try { if (typeof renderTasbeehGrid === 'function') renderTasbeehGrid(); var el = R.tasbeehCtx && document.getElementById('tasbeeh-card-' + R.tasbeehCtx.tid); if (el) el.scrollIntoView({ block: 'center' }); } catch (e) {} }, 60);
  };
  function ctxAct() {
    var x = R.tasbeehCtx; if (!x) return null;
    var c = curRoutine(), a = findAct(c.r, function (q) { return q.id === x.actId; })[0];
    return a ? { r: c.r, a: a } : null;
  }
  (function hook() {
    var oi = W.incrementTasbeeh, orr = W.renderTasbeehGrid, oh = W.hideAllViews;
    if (typeof oi === 'function') W.incrementTasbeeh = function (id) {
      try {
        var x = ctxAct();
        if (x && R.tasbeehCtx.tid === id) {
          if (x.a.open) R.addOpen(x.r, x.a, 1);
          else {
          var reps = R.Progress.reps(x.a), cur = R.actCountToday(x.r, x.a);
          if (cur < reps) { R.setActCount(x.r, x.a, cur + 1); if (cur + 1 >= reps) R.notify(x.a); }
          }
        }
      } catch (e) {}
      return oi.apply(this, arguments);
    };
    if (typeof orr === 'function') W.renderTasbeehGrid = function () {
      var r = orr.apply(this, arguments);
      try {
        var x = ctxAct(); if (!x) return r;
        var el = document.getElementById('tasbeeh-card-' + R.tasbeehCtx.tid); if (!el) return r;
        var reps = R.Progress.reps(x.a), cur = R.actCountToday(x.r, x.a);
        el.style.boxShadow = '0 0 0 3px #fbbf24';
        var b = document.createElement('div');
        b.style.cssText = 'width:100%;text-align:center;font-weight:800;padding:.45rem;border-radius:.8rem;background:rgba(251,191,36,.18)';
        if (x.a.open) {
          var oc = R.openCount(x.r, x.a), dn = cur >= 1;
          b.textContent = (R.isEs() ? 'Hoy en tu rutina: ' : 'الْيَوْمَ فِي وِرْدِكَ: ') + oc + (dn ? ' ✓' : '');
          var bt = document.createElement('button'); bt.type = 'button';
          bt.style.cssText = 'display:block;margin:.4rem auto 0;padding:.35rem .9rem;border-radius:.7rem;border:0;font-weight:800;font-family:inherit;background:#059669;color:#fff;cursor:pointer';
          bt.textContent = dn ? (R.isEs() ? 'Quitar la marca' : 'إِزَالَةُ الْعَلَامَةِ') : (R.isEs() ? '✓ Marcar como hecho' : '✓ تَحْدِيدُ كَمُنْجَزٍ');
          bt.onclick = function (ev) { ev.stopPropagation(); R.setActCount(x.r, x.a, dn ? 0 : 1); if (!dn) R.notify(x.a); try { renderTasbeehGrid(); } catch (e) {} };
          b.appendChild(bt);
        } else
        b.textContent = (R.isEs() ? 'Hoy en tu rutina: ' : 'الْيَوْمَ فِي وِرْدِكَ: ') + cur + ' / ' + reps + (cur >= reps ? ' ✓' : '');
        el.insertBefore(b, el.firstChild);
      } catch (e) {}
      return r;
    };
    if (typeof oh === 'function') W.hideAllViews = function () { R.tasbeehCtx = null; return oh.apply(this, arguments); };
    var od = W.decrementCounter;
    if (typeof od === 'function') W.decrementCounter = function () {
      var r = od.apply(this, arguments);
      try {
        var g = (typeof currentGroup !== 'undefined') ? currentGroup : null, sec = (typeof currentSection !== 'undefined') ? currentSection : null;
        if (g && g.items && R.modules[sec]) {
          var counted = g.items.map(function (it, i) { return { it: it, i: i }; }).filter(function (o) { return !o.it.isInfo && !o.it.noCounter && o.it.count > 0; });
          if (counted.length && counted.every(function (o) { return getSavedCount(g.id, o.i, o.it.count) === 0; })) R.autoDone(sec, g.id);
        }
      } catch (e) {}
      return r;
    };
  })();
  R.toast = function (m) { try { showToast(m); } catch (e) {} };
  R.actTitle = function (a) { return (R.isEs() ? (a.title.es || a.title.ar) : (a.title.ar || a.title.es)) || ''; };
  R.groupTitle = function (g) { return R.isEs() ? g.es : g.ar; };
})(window);
