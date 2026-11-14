
// pwa.js — Instalación de Zad Al-Qulub en la versión web.
// iPhone/iPad: botón "Instalar" que muestra instrucciones.
// Android: botón "Instalar" que abre directamente el diálogo nativo.
// La aplicación Android del Play Store no muestra este aviso.

(function () {
  'use strict';

  // No ejecutar dentro de la aplicación Android nativa o TWA.
  var isAndroidApp =
    !!window.AndroidBridge ||
    location.hostname === 'appassets.androidplatform.net' ||
    location.protocol === 'file:' ||
    (document.referrer || '').indexOf('android-app://') === 0;

  if (isAndroidApp) return;

  // Registrar el Service Worker para el funcionamiento sin conexión.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }

  var installPrompt = null;
  var dismissedThisVisit = false;
  var bannerId = 'zadInstallBanner';
  var modalId = 'zadInstallModal';

  // Detectar el idioma del teléfono/navegador, nunca el de la aplicación.
  function deviceLanguage() {
    var languages = navigator.languages || [navigator.language || 'en'];

    for (var i = 0; i < languages.length; i++) {
      var code = String(languages[i] || '').toLowerCase();

      if (code.indexOf('ar') === 0) return 'ar';
      if (code.indexOf('es') === 0) return 'es';
      if (code.indexOf('fr') === 0) return 'fr';
    }

    return 'en';
  }

  var lang = deviceLanguage();

  var translations = {
    ar: {
      install: 'تثبيت',
      close: 'إغلاق',
      title: 'تثبيت زاد القلوب',
      steps: [
        'اضغط على «مشاركة».',
        'إذا ظهر خيار «المزيد…»، فاضغط عليه.',
        'اختر «إضافة إلى الشاشة الرئيسية».',
        'أكد بالضغط على «إضافة».'
      ],
      note: 'إذا لم يظهر الخيار، افتح الموقع في Safari.'
    },

    es: {
      install: 'Instalar',
      close: 'Cerrar',
      title: 'Instalar Zad Al-Qulub',
      steps: [
        'Pulsa «Compartir».',
        'Si aparece la opción «Más…», púlsala.',
        'Selecciona «Añadir a pantalla de inicio».',
        'Confirma pulsando «Añadir».'
      ],
      note: 'Si no aparece la opción, abre la página en Safari.'
    },

    fr: {
      install: 'Installer',
      close: 'Fermer',
      title: 'Installer Zad Al-Qulub',
      steps: [
        'Appuyez sur « Partager ».',
        'Si l’option « Plus… » apparaît, appuyez dessus.',
        'Choisissez « Sur l’écran d’accueil ».',
        'Confirmez en appuyant sur « Ajouter ».'
      ],
      note: 'Si cette option n’apparaît pas, ouvrez le site dans Safari.'
    },

    en: {
      install: 'Install',
      close: 'Close',
      title: 'Install Zad Al-Qulub',
      steps: [
        'Tap « Share ».',
        'If « More… » appears, tap it.',
        'Choose « Add to Home Screen ».',
        'Confirm by tapping « Add ».'
      ],
      note: 'If this option does not appear, open the website in Safari.'
    }
  };

  var t = translations[lang];

  function isIOS() {
    var ua = navigator.userAgent || '';

    return /iPhone|iPad|iPod/.test(ua) ||
      (ua.indexOf('Macintosh') !== -1 && navigator.maxTouchPoints > 1);
  }

  function isAndroid() {
    return /Android/i.test(navigator.userAgent || '');
  }

  function isInstalled() {
    return navigator.standalone === true ||
      (window.matchMedia &&
        window.matchMedia('(display-mode: standalone)').matches);
  }

  function shouldShow() {
    if (isInstalled() || dismissedThisVisit) return false;

    if (isIOS()) return true;

    // En Android solo se muestra cuando el navegador
    // ofrece realmente la instalación nativa.
    if (isAndroid() && installPrompt) return true;

    return false;
  }

  var INSTALL_ICON =
    '<svg viewBox="0 0 24 24" width="19" height="19" ' +
    'fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" ' +
    'style="vertical-align:-4px;margin-right:6px">' +
    '<path d="M12 3v12"/>' +
    '<path d="M7 10l5 5 5-5"/>' +
    '<path d="M5 19h14"/>' +
    '</svg>';

  function removeBanner() {
    var banner = document.getElementById(bannerId);
    if (banner) banner.remove();
  }

  function closeModal() {
    var modal = document.getElementById(modalId);
    if (modal) modal.remove();
  }

  function showIOSInstructions() {
    closeModal();

    var modal = document.createElement('div');
    modal.id = modalId;
    modal.dir = lang === 'ar' ? 'rtl' : 'ltr';

    var stepsHTML = t.steps.map(function (step, index) {
      return '<li style="margin:0 0 12px;padding-left:4px;">' +
        '<span style="font-weight:700;">' + (index + 1) + '.</span> ' +
        step + '</li>';
    }).join('');

    modal.innerHTML =
      '<div class="zad-install-overlay" style="' +
        'position:fixed;inset:0;background:rgba(0,0,0,.55);' +
        'z-index:10001;display:flex;align-items:center;' +
        'justify-content:center;padding:18px;">' +

        '<div role="dialog" aria-modal="true" ' +
          'aria-labelledby="zadInstallTitle" style="' +
          'width:100%;max-width:390px;background:#fff;color:#222;' +
          'border-radius:18px;padding:22px;' +
          'box-shadow:0 12px 40px rgba(0,0,0,.3);' +
          'font-size:15px;line-height:1.7;">' +

          '<button type="button" class="zad-modal-close" ' +
            'aria-label="' + t.close + '" style="' +
            'float:right;border:0;background:#eee;color:#333;' +
            'border-radius:50%;width:30px;height:30px;' +
            'font-size:17px;cursor:pointer;">×</button>' +

          '<h3 id="zadInstallTitle" style="' +
            'font-size:18px;margin:0 35px 18px 0;">' +
            t.title + '</h3>' +

          '<ol style="padding-left:22px;margin:0 0 16px;">' +
            stepsHTML +
          '</ol>' +

          '<p style="font-size:13px;color:#666;margin:12px 0 0;">' +
            t.note +
          '</p>' +

        '</div>' +
      '</div>';

    document.body.appendChild(modal);

    modal.querySelector('.zad-modal-close').onclick = closeModal;

    modal.querySelector('.zad-install-overlay').onclick = function (event) {
      if (event.target === this) closeModal();
    };

    function escapeHandler(event) {
      if (event.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escapeHandler);
      }
    }

    document.addEventListener('keydown', escapeHandler);
  }

  function render() {
    if (!document.body) return;

    if (!shouldShow()) {
      removeBanner();
      return;
    }

    if (document.getElementById(bannerId)) return;

    var banner = document.createElement('div');
    banner.id = bannerId;
    banner.dir = lang === 'ar' ? 'rtl' : 'ltr';

    banner.style.cssText =
      'position:fixed;left:12px;right:12px;' +
      'bottom:calc(12px + env(safe-area-inset-bottom));' +
      'z-index:10000;display:flex;align-items:center;' +
      'justify-content:center;gap:10px;' +
      'background:#047857;color:#fff;' +
      'border-radius:16px;padding:9px 42px;' +
      'box-shadow:0 6px 22px rgba(0,0,0,.24);';

    banner.innerHTML =
      '<button type="button" class="zad-install-button" ' +
        'style="border:0;background:transparent;color:#fff;' +
        'font-size:15px;font-weight:700;padding:5px 12px;' +
        'cursor:pointer;">' +
        INSTALL_ICON + t.install +
      '</button>' +

      '<button type="button" class="zad-install-close" ' +
        'aria-label="' + t.close + '" style="' +
        'position:absolute;top:5px;' +
        (lang === 'ar' ? 'left' : 'right') + ':7px;' +
        'width:28px;height:28px;border:0;border-radius:50%;' +
        'background:rgba(255,255,255,.2);color:#fff;' +
        'font-size:17px;cursor:pointer;">×</button>';

    document.body.appendChild(banner);

    banner.querySelector('.zad-install-close').onclick = function () {
      dismissedThisVisit = true;
      removeBanner();
    };

    banner.querySelector('.zad-install-button').onclick = async function () {
      if (isIOS()) {
        showIOSInstructions();
        return;
      }

      if (isAndroid() && installPrompt) {
        var promptEvent = installPrompt;

        // Cada evento de instalación solo puede utilizarse una vez.
        installPrompt = null;

        try {
          await promptEvent.prompt();
          removeBanner();
        } catch (error) {
          console.warn('No se pudo abrir la instalación:', error);
        }
      }
    };
  }

  // Android: guardar el evento para abrir el diálogo nativo
  // cuando el usuario pulse el botón.
  window.addEventListener('beforeinstallprompt', function (event) {
    if (!isAndroidApp && isAndroid() && !isInstalled()) {
      event.preventDefault();
      installPrompt = event;
      render();
    }
  });

  // Cuando la instalación se completa, retirar el aviso.
  window.addEventListener('appinstalled', function () {
    installPrompt = null;
    removeBanner();
    closeModal();
  });

  function start() {
    if (isInstalled()) return;

    if (isIOS()) {
      setTimeout(render, 1000);
    } else if (isAndroid() && installPrompt) {
      render();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  // Al volver a la página, comprobar si sigue siendo necesario mostrarlo.
  window.addEventListener('pageshow', function () {
    if (isInstalled()) {
      removeBanner();
      closeModal();
    } else {
      render();
    }
  });

})();
