/*
 * Persistencia local de «وردي اليومي». Datos de rutina e historial SEPARADOS de los contenidos religiosos.
 * Estructura versionada y con marcas de tiempo (lista para una futura sincronización entre dispositivos).
 */
(function (W) {
  'use strict';
  var R = W.ZadRoutine = W.ZadRoutine || {};
  var K_DATA = 'zad_routine_v1', K_LOG = 'zad_routine_log_v1', K_UI = 'zad_routine_ui_v1';
  function rd(k) { try { var s = localStorage.getItem(k); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
  function wr(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }

  var S = R.Storage = {};

  // v2: Maghrib/Isha separados, istighfar y salawat en la misbaha, tahlil ×10 tras el Fayr y el Maghrib, witr tras el Isha
  // v3: istighfar y salawat sin tope de 100; el usuario cuenta lo que quiera y confirma
  function migrate3(d) {
    d.routines.forEach(function (r) { r.acts.forEach(function (a) {
      if ((a.id === 'istighfar' || a.id === 'salawat') && a.category === 'tasbeeh') { a.open = true; a.repetitions = 1; }
    }); });
  }
  // v4: la oración de Ad-Duha se enlaza con el término 196 del glosario
  function migrate4(d) {
    d.routines.forEach(function (r) { r.acts.forEach(function (a) {
      if (a.id === 'duha_prayer' && (!a.contentId || a.category === 'custom')) { a.category = 'glosario'; a.contentId = 'glosario_salat|196'; }
    }); });
  }
  // v5: «الدعاء» lleva a la pantalla de estado de ánimo (súplicas según la situación)
  function migrate5(d) {
    d.routines.forEach(function (r) { r.acts.forEach(function (a) {
      if (a.id === 'dua_quran' && a.category === 'adya') { a.category = 'situations'; a.contentId = null; a.title = { ar: a.title.ar, es: 'Súplicas según tu estado de ánimo' }; }
    }); });
  }
  function migrate2(d) {
    d.routines.forEach(function (r) {
      r.acts.forEach(function (a) {
        if (a.groupId === 'after_maghrib_isha') a.groupId = (a.id === 'quran_night') ? 'after_maghrib' : 'after_isha';
        if (a.id === 'witr') a.groupId = 'after_isha';
        if (a.id === 'istighfar' && a.category === 'azkar') { a.category = 'tasbeeh'; a.contentId = 't5'; if (!(a.repetitions > 1)) a.repetitions = 100; }
        if (a.id === 'salawat' && a.category === 'azkar') { a.category = 'tasbeeh'; a.contentId = 't7'; if (!(a.repetitions > 1)) a.repetitions = 100; }
      });
      if (r.tpl === 'balanced' || r.tpl === 'extended') {
        var has = function (id) { return r.acts.some(function (a) { return a.id === id; }); };
        if (!has('tahlil10_fajr')) r.acts.unshift(JSON.parse(JSON.stringify(R.LIB.tahlil10_fajr)));
        if (!has('tahlil10_maghrib')) {
          var i = -1; r.acts.forEach(function (a, k) { if (a.id === 'quran_night') i = k; });
          r.acts.splice(i < 0 ? r.acts.length : i, 0, JSON.parse(JSON.stringify(R.LIB.tahlil10_maghrib)));
        }
      }
      r.groupIdx = null;
    });
  }

  S.load = function () {
    var d = rd(K_DATA);
    if (!d || d.v !== 1 || !Array.isArray(d.routines) || !d.routines.length) {
      var id = R.uid('r');
      d = { v: 1, ver: 5, active: id, updated: Date.now(), reminders: { sabah: { on: false, h: 6, m: 0 }, masaa: { on: false, h: 17, m: 30 }, lectura: { on: false, h: 20, m: 0 }, nawm: { on: false, h: 22, m: 30 }, custom: {} },
        routines: [{ id: id, name: { ar: R.STR.defaultName[0], es: R.STR.defaultName[1] }, tpl: 'balanced', acts: R.templateActs('balanced'), updated: Date.now() }] };
      wr(K_DATA, d);
    }
    d.reminders = d.reminders || {}; d.reminders.custom = d.reminders.custom || {};
    if (!d.ver || d.ver < 2) { migrate2(d); d.ver = 2; wr(K_DATA, d); }
    if (d.ver < 3) { migrate3(d); d.ver = 3; wr(K_DATA, d); }
    if (d.ver < 4) { migrate4(d); d.ver = 4; wr(K_DATA, d); }
    if (d.ver < 5) { migrate5(d); d.ver = 5; wr(K_DATA, d); }
    var fixedRos = false;
    d.routines.forEach(function (r) { r.acts.forEach(function (a) {
      if (a.category === 'azkar' && ['fadl_salah_ala_nabi', 'istighfar_tawbah', 'fadl_tasbih_tahlil', 'kayfa_yusabbih_nabi'].indexOf(a.contentId) >= 0) { a.category = 'rosario'; fixedRos = true; }
    }); });
    if (fixedRos) wr(K_DATA, d);
    if (!d.routines.some(function (r) { return r.id === d.active; })) d.active = d.routines[0].id;
    return d;
  };
  S.save = function (d) { d.updated = Date.now(); return wr(K_DATA, d); };
  S.active = function (d) { return d.routines.filter(function (r) { return r.id === d.active; })[0] || d.routines[0]; };

  // Historial: { 'YYYY-MM-DD': { routineId: { n: {actId: count}, t: total, d: hechas, u: ts } } }
  S.log = function () { return rd(K_LOG) || {}; };
  S.saveLog = function (l) { return wr(K_LOG, l); };

  // Estado de interfaz (grupos desplegados) por sesión de uso
  S.ui = function () { return rd(K_UI) || {}; };
  S.saveUi = function (u) { wr(K_UI, u); };
})(window);
