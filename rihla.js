/* Tarjeta de inicio de «رحلة القلب» (la sección en sí está en qalb.js y se carga al abrirla). */
(function () {
  'use strict';
  function isEs() { return typeof currentLang !== 'undefined' && currentLang === 'es'; }
  function ensureHomeCard() {
    var base = document.querySelector('#homeView button[onclick="showFavorites()"]');
    var anchor = document.getElementById('zxHomeCard') || base;
    if (!anchor || !anchor.parentNode) return;
    
    var card = document.getElementById('rhHomeCard');
    if (!true) { if (card) card.remove(); return; }
    if (!card) {
      card = document.createElement('button');
      card.className = (base ? base.className : '').replace(/bg-gradient-to-br|from-rose-600|to-rose-800|hover:from-rose-700/g, '').trim();
      card.id = 'rhHomeCard'; card.type = 'button';
      card.style.cssText = 'background: linear-gradient(135deg, #0e7490, #0c4a6e) !important;';
      card.onclick = function () { if (typeof openQalbSection === 'function') openQalbSection(); else showSection('qalb'); };
      anchor.parentNode.insertBefore(card, anchor);
    }
    var es = isEs();
    card.innerHTML = '<span class="home-icon-wrap"><img src="Iconos/Rihla.webp" alt="رحلة القلب" class="home-category-icon" loading="lazy" decoding="async"></span>' +
      '<span class="block"><span class="block text-lg sm:text-xl font-bold" id="btnRihlaTitle"></span><span class="block text-sky-100 text-[10px] sm:text-xs mt-0.5 line-clamp-1" id="btnRihlaSub"></span></span>';
    card.querySelector('#btnRihlaTitle').textContent = es ? 'El viaje del corazón' : 'رحلة القلب';
    card.querySelector('#btnRihlaSub').textContent = es ? 'Gratitud, paciencia, sinceridad…' : 'الشكر، الصبر، الإخلاص…';
  }
  function ensureRamadanCard() {
    var base = document.querySelector('#homeView button[onclick="showFavorites()"]');
    var anchor = document.getElementById('rhHomeCard') || document.getElementById('zxHomeCard') || base;
    var card = document.getElementById('rmHomeCard');
    if (!(typeof isRamadanVisible === 'function' && isRamadanVisible())) { if (card) card.remove(); return; }
    if (!anchor || !anchor.parentNode) return;
    if (!card) {
      card = document.createElement('button');
      card.className = (base ? base.className : '').replace(/bg-gradient-to-br|from-rose-600|to-rose-800|hover:from-rose-700/g, '').trim();
      card.id = 'rmHomeCard'; card.type = 'button';
      card.style.cssText = 'background: linear-gradient(135deg, #7c3aed, #3b0764) !important;';
      card.onclick = function () { if (typeof openRamadanSection === 'function') openRamadanSection(); else showSection('ramadan'); };
      anchor.parentNode.insertBefore(card, anchor);
    }
    var es = isEs();
    card.innerHTML = '<span class="home-icon-wrap"><img src="Iconos/Ramadan.webp" alt="رمضان" class="home-category-icon" loading="lazy" decoding="async"></span>' +
      '<span class="block"><span class="block text-lg sm:text-xl font-bold" id="btnRamadanTitle"></span><span class="block text-violet-100 text-[10px] sm:text-xs mt-0.5 line-clamp-1" id="btnRamadanSub"></span></span>';
    card.querySelector('#btnRamadanTitle').textContent = es ? 'Ramadán' : 'رَمَضَان';
    card.querySelector('#btnRamadanSub').textContent = es ? 'Virtudes, normas, Laylat al-Qadr, Eid y seguimiento' : 'الْفَضَائِلُ وَالْأَحْكَامُ وَلَيْلَةُ الْقَدْرِ وَالْعِيدُ وَالْمُتَابَعَةُ';
  }
  var origLang = window.applyLanguageUI;
  window.applyLanguageUI = function () {
    var r = origLang.apply(this, arguments);
    try { ensureHomeCard(); ensureRamadanCard(); } catch (e) {}
    return r;
  };
  window.addEventListener('zad-admin', function () { try { ensureHomeCard(); ensureRamadanCard(); if (typeof fitHome === 'function') fitHome(); } catch (e) {} });
  function init() { ensureHomeCard(); ensureRamadanCard(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
