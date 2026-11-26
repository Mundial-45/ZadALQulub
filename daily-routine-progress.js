/*
 * Cálculo de progreso e historial de «وردي اليومي». Fechas locales (no UTC): cada día tiene su propio registro.
 * Sin puntuaciones espirituales ni comparaciones: solo constancia.
 */
(function (W) {
  'use strict';
  var R = W.ZadRoutine = W.ZadRoutine || {};
  var P = R.Progress = {};
  function p2(n) { return (n < 10 ? '0' : '') + n; }
  P.key = function (d) { d = d || new Date(); return d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate()); };
  P.parse = function (k) { var a = k.split('-'); return new Date(+a[0], +a[1] - 1, +a[2]); };
  P.addDays = function (d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; };

  P.enabledActs = function (routine) { return routine.acts.filter(function (a) { return a.enabled !== false; }); };
  P.reps = function (a) { return Math.max(1, parseInt(a.repetitions, 10) || 1); };

  function entry(log, key, rid, create) {
    if (!log[key]) { if (!create) return null; log[key] = {}; }
    if (!log[key][rid]) { if (!create) return null; log[key][rid] = { n: {}, t: 0, d: 0 }; }
    return log[key][rid];
  }
  P.count = function (log, key, rid, actId) { var e = entry(log, key, rid); return e ? (e.n[actId] || 0) : 0; };
  P.isDone = function (log, key, routine, a) { return P.count(log, key, routine.id, a.id) >= P.reps(a); };

  P.summary = function (log, key, routine) {
    var acts = P.enabledActs(routine), done = 0;
    acts.forEach(function (a) { if (P.isDone(log, key, routine, a)) done++; });
    return { done: done, total: acts.length, pct: acts.length ? Math.round(done * 100 / acts.length) : 0 };
  };
  P.groupSummary = function (log, key, routine, gid) {
    var acts = P.enabledActs(routine).filter(function (a) { return a.groupId === gid; }), done = 0;
    acts.forEach(function (a) { if (P.isDone(log, key, routine, a)) done++; });
    return { done: done, total: acts.length, pct: acts.length ? Math.round(done * 100 / acts.length) : 0 };
  };

  // Marca/desmarca. Con repeticiones > 1, cada toque suma uno; al completar, otro toque reinicia.
  P.toggle = function (log, key, routine, a) {
    var e = entry(log, key, routine.id, true), r = P.reps(a), c = e.n[a.id] || 0;
    if (r === 1) e.n[a.id] = c >= 1 ? 0 : 1;
    else e.n[a.id] = c >= r ? 0 : c + 1;
    if (!e.n[a.id]) delete e.n[a.id];
    P.snapshot(log, key, routine);
  };
  P.setCount = function (log, key, routine, a, n) {
    var e = entry(log, key, routine.id, true); n = Math.max(0, Math.min(P.reps(a), n | 0));
    if (n) e.n[a.id] = n; else delete e.n[a.id];
    P.snapshot(log, key, routine);
  };
  P.snapshot = function (log, key, routine) {
    var e = entry(log, key, routine.id, true), s = P.summary(log, key, routine);
    e.t = s.total; e.d = s.done; e.u = Date.now();
  };

  // % del día (suma de todas las rutinas usadas ese día). Para hoy usa la rutina viva.
  P.dayPct = function (log, key) {
    var day = log[key]; if (!day) return null;
    var t = 0, d = 0; Object.keys(day).forEach(function (rid) { t += day[rid].t || 0; d += day[rid].d || 0; });
    return t ? Math.round(d * 100 / t) : null;
  };
  P.dayCounts = function (log, key) {
    var day = log[key]; if (!day) return { d: 0, t: 0 };
    var t = 0, d = 0; Object.keys(day).forEach(function (rid) { t += day[rid].t || 0; d += day[rid].d || 0; });
    return { d: d, t: t };
  };
  P.week = function (log, endKey) {
    var end = P.parse(endKey), out = [];
    for (var i = 6; i >= 0; i--) { var dt = P.addDays(end, -i), k = P.key(dt); out.push({ key: k, date: dt, pct: P.dayPct(log, k), c: P.dayCounts(log, k) }); }
    return out;
  };
  P.month = function (log, y, m) {
    var n = new Date(y, m + 1, 0).getDate(), out = [];
    for (var i = 1; i <= n; i++) { var dt = new Date(y, m, i), k = P.key(dt); out.push({ key: k, date: dt, pct: P.dayPct(log, k), c: P.dayCounts(log, k) }); }
    return out;
  };
  // Días (de los últimos N) en que se completó cada actividad
  P.activityStats = function (log, routine, endKey, n) {
    var end = P.parse(endKey), res = {};
    routine.acts.forEach(function (a) { res[a.id] = 0; });
    for (var i = 0; i < n; i++) {
      var k = P.key(P.addDays(end, -i)), e = entry(log, k, routine.id);
      if (!e) continue;
      routine.acts.forEach(function (a) { if ((e.n[a.id] || 0) >= P.reps(a)) res[a.id]++; });
    }
    return res;
  };
  // Poda opcional del historial (> 800 días) para no crecer sin límite
  P.prune = function (log) {
    var keys = Object.keys(log).sort(); while (keys.length > 800) delete log[keys.shift()];
  };
})(window);
