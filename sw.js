// sw.js — service worker de la versión web (PWA). No se registra dentro de la app de Android.
// Al cambiar archivos de la app, subir CACHE_VERSION para que los móviles descarguen la versión nueva.
const CACHE_VERSION = 'zad-v1';
const CORE_CACHE = CACHE_VERSION + '-core';
const RUNTIME_CACHE = CACHE_VERSION + '-runtime';

const CORE_FILES = [
  './',
  'index.html',
  'app.js',
  'pwa.js',
  'quran.js',
  'tasbeeh.js',
  'azkar.js',
  'adya.js',
  'munajat.js',
  'ruqya.js',
  'asma.js',
  'glosario.js',
  'tailwind.min.css',
  'app_styles.css',
  'fonts/fonts.css',
  'card_bg.avif',
  'manifest.webmanifest',
  'Iconos/apple-touch-icon.png',
  'Iconos/icon-192.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CORE_CACHE)
      .then(function (cache) { return cache.addAll(CORE_FILES); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (key) {
        return key.indexOf(CACHE_VERSION) !== 0;
      }).map(function (key) { return caches.delete(key); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isCodeOrPage(url) {
  return url.pathname.endsWith('/') || /\.(html|js|css|webmanifest)$/.test(url.pathname);
}

self.addEventListener('fetch', function (event) {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Solo archivos de la propia web; los audios de GitHub y demás van directos a la red.
  if (url.origin !== self.location.origin) return;

  if (isCodeOrPage(url)) {
    // Red primero: con conexión siempre se ve la última versión; sin conexión, la guardada.
    event.respondWith(
      fetch(request).then(function (response) {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CORE_CACHE).then(function (cache) { cache.put(request, copy); });
        }
        return response;
      }).catch(function () {
        return caches.match(request).then(function (cached) {
          return cached || caches.match('index.html');
        });
      })
    );
    return;
  }

  // Fuentes, iconos y páginas del Corán: caché primero y se guardan al verlas por primera vez.
  event.respondWith(
    caches.match(request).then(function (cached) {
      if (cached) return cached;
      return fetch(request).then(function (response) {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then(function (cache) { cache.put(request, copy); });
        }
        return response;
      });
    })
  );
});
