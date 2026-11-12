# Mejoras pendientes (para cuando se pruebe en Android Studio)

Estos cambios se dejaron para más adelante porque afectan a cómo funciona la app dentro del WebView de Android.

1. **Reinicio diario configurable** (por ejemplo al Fajr en vez de a medianoche).
2. **PWA (manifest + service worker)** solo para la versión web; debe desactivarse sola en el WebView de Android.
3. **azkar.js**: revisar las frases posiblemente incompletas (elementos 137 y 279) y agrupar los 92 capítulos de un solo zikr por temas.
4. **Pantalla bajo las barras del sistema (Android 15+)**: comprobar en un móvil reciente que el contenido no queda debajo de la barra de estado o de navegación; si pasa, aplicar los insets en `MainActivity`.

## Ideas de contenido guardadas

5. **Súplicas del Corán** (رَبَّنَا… y súplicas de los profetas) con referencia de sura y aleya; comprobar antes que no estén ya en adya.
6. **Los 40 hadices de An-Nawawi** en árabe y español con un comentario breve.
7. **Plan para completar el Corán (ختمة)**: elegir en cuántos días y calcular las páginas diarias sobre las 638 páginas.
8. **Aleya o hadiz del día** en la pantalla de inicio.
9. **Botones rápidos en la misbaha**: 33 + 33 + 34 tras la oración, istighfar ×100, salawat.
10. **Notificaciones** (azkar de la mañana y la tarde, Al-Kahf y salawat del viernes) y **horarios de oración y qibla**: necesitan código nativo en Android.
11. **Tafsir y traducción por página del Corán**: botón «تفسير / Explicación» entre página anterior y siguiente (pendiente del permiso de la Fundación Mohammed VI y del índice de aleyas por página).
12. **Guía de la purificación y la oración**: quitada de la app de momento; guardada completa en `pendiente/guia/` (ver su LEEME.md para volver a activarla).

## Hecho en Android (12/11/2026)

- Copia de seguridad del proyecto en `AndroidStudioProjects/Misbaha_copia_2026-11-12`.
- Compartir y copiar nativos (`window.AndroidBridge` en `MainActivity`), enlaces externos en el navegador.
- Quitados ajustes de acceso a archivos, `usesCleartextTraffic`, `WAKE_LOCK` y los restos de la plantilla (fragments, navegación, menú).
- Fuentes locales, Tailwind reducido, iconos WebP y audio de Al-Kafirún (`Q109.mp3`) corregido.
- Páginas del Corán en WebP: probado y descartado, solo ahorraba un 10 % (ya son PNG de 16 colores optimizados).
- Al copiar a Android se sigue quitando el botón Editar de `app.js` y el editor de `index.html` (además, en Android el modo administrador no se activa).
- Botón Editar solo en modo administrador: pulsar 3 veces el título «Zad Al-Qulub» (nunca en Android).
- Favoritos y contadores guardados por identificador (`sección|grupo|número`), con migración de los antiguos.
- Cada sección se carga al abrirla y el resto en segundo plano.
- Pantalla encendida solo en la misbaha, el lector del Corán o con audio (`AndroidBridge.keepScreenOn`).
- Librerías de Android actualizadas (core-ktx 1.19.1, appcompat 1.8.0, activity 1.13.0, material 1.14.0, webkit 1.18.0).
- Nueva sección Glosario de términos islámicos (107 términos).
