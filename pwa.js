// pwa.js — solo para la versión web: registra el service worker y, en iPhone/iPad,
// muestra cómo añadir la app a la pantalla de inicio. Dentro de la app de Android no hace nada.
(function () {
  var isAndroidApp = !!window.AndroidBridge || location.hostname === 'appassets.androidplatform.net' || location.protocol === 'file:';
  if (isAndroidApp) return;

  // 1) Service worker (uso sin conexión).
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }

  // 2) Aviso de instalación solo en iPhone/iPad.
  var DISMISS_KEY = 'avisoIOSCerrado';

  function isIOS() {
    var ua = navigator.userAgent || '';
    return /iPhone|iPad|iPod/.test(ua) || (ua.indexOf('Macintosh') !== -1 && navigator.maxTouchPoints > 1);
  }

  function isInstalled() {
    return window.navigator.standalone === true ||
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
  }

  function wasDismissed() {
    try { return localStorage.getItem(DISMISS_KEY) === '1'; } catch (e) { return false; }
  }

  function shouldShowHint() {
    return isIOS() && !isInstalled() && !wasDismissed();
  }

  function lang() {
    try { return typeof currentLang !== 'undefined' ? currentLang : 'ar'; } catch (e) { return 'ar'; }
  }

  var SHARE_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-3px"><path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>';

  function hintHtml() {
    if (lang() === 'es') {
      return '<strong>Instala Zad Al-Qulub en tu iPhone o iPad</strong><br>' +
        'Pulsa ' + SHARE_ICON + ' <strong>Compartir</strong> y luego <strong>«Añadir a pantalla de inicio»</strong>.';
    }
    return '<strong>ثبّت زاد القلوب على جهازك</strong><br>' +
      'اضغط ' + SHARE_ICON + ' <strong>مشاركة</strong> ثم <strong>«إضافة إلى الشاشة الرئيسية»</strong>.';
  }

  function render() {
    var box = document.getElementById('iosInstallHint');
    if (!shouldShowHint()) {
      if (box) box.remove();
      return;
    }
    if (!box) {
      box = document.createElement('div');
      box.id = 'iosInstallHint';
      box.setAttribute('role', 'note');
      box.style.cssText = 'position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:60;' +
        'background:#047857;color:#fff;border-radius:16px;padding:12px 40px 12px 14px;font-size:14px;line-height:1.6;' +
        'box-shadow:0 8px 24px rgba(0,0,0,.25);text-align:center;';
      document.body.appendChild(box);
    }
    var isEs = lang() === 'es';
    box.dir = isEs ? 'ltr' : 'rtl';
    box.style.padding = isEs ? '12px 40px 12px 14px' : '12px 14px 12px 40px';
    box.innerHTML = hintHtml() +
      '<button type="button" aria-label="' + (isEs ? 'Cerrar' : 'إغلاق') + '" ' +
      'style="position:absolute;top:6px;' + (isEs ? 'right' : 'left') + ':8px;width:28px;height:28px;border-radius:50%;' +
      'background:rgba(255,255,255,.2);color:#fff;font-size:16px;line-height:28px;border:0;cursor:pointer;">✕</button>';
    box.querySelector('button').onclick = function () {
      try { localStorage.setItem(DISMISS_KEY, '1'); } catch (e) {}
      box.remove();
    };
  }

  window.addEventListener('DOMContentLoaded', function () {
    setTimeout(render, 1500);
    // Cambiar el idioma también cambia el texto del aviso.
    if (typeof window.toggleLanguage === 'function') {
      var originalToggle = window.toggleLanguage;
      window.toggleLanguage = function () {
        var result = originalToggle.apply(this, arguments);
        if (document.getElementById('iosInstallHint')) render();
        return result;
      };
    }
  });
})();
