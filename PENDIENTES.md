# Mejoras pendientes (para cuando se pruebe en Android Studio)

Estos cambios se dejaron para más adelante porque afectan a cómo funciona la app dentro del WebView de Android.

1. **Cargar cada sección al abrirla** (en lugar de cargar azkar, adya, munajat y ruqya al inicio). Hacerlo con `<script>` dinámico, no con `fetch()`, porque `fetch()` falla en `file:///android_asset`.
2. **Favoritos por sección/grupo/número** en lugar de por texto árabe, con migración automática de los favoritos antiguos para no perder los de los testers.
3. **Contadores guardados por identificador** en lugar de por posición, también con migración.
4. **Reinicio diario configurable** (por ejemplo al Fajr en vez de a medianoche).
5. **PWA (manifest + service worker)** solo para la versión web; debe desactivarse sola en el WebView de Android.
6. **Botón Editar solo en modo administrador** (por ejemplo con `?editar=1` en la web).
7. **azkar.js**: revisar las frases posiblemente incompletas (elementos 137 y 279) y agrupar los 92 capítulos de un solo zikr por temas.
8. **Pantalla bajo las barras del sistema (Android 15+)**: comprobar en un móvil reciente que el contenido no queda debajo de la barra de estado o de navegación; si pasa, aplicar los insets en `MainActivity`.
9. **Pantalla siempre encendida**: `keepScreenOn` está activo en toda la app; dejarlo solo en la misbaha, el Corán o mientras suena un audio.
10. **Actualizar librerías de Android** (appcompat, core-ktx, activity, material) a versiones acordes con el SDK 37.

## Ideas de contenido guardadas

11. **Súplicas del Corán** (رَبَّنَا… y súplicas de los profetas) con referencia de sura y aleya; comprobar antes que no estén ya en adya.
12. **Los 40 hadices de An-Nawawi** en árabe y español con un comentario breve.
13. **Plan para completar el Corán (ختمة)**: elegir en cuántos días y calcular las páginas diarias sobre las 638 páginas.
14. **Aleya o hadiz del día** en la pantalla de inicio.
15. **Botones rápidos en la misbaha**: 33 + 33 + 34 tras la oración, istighfar ×100, salawat.
16. **Glosario de términos islámicos en español** (tawhid, shirk, taqwa, nafth, dhikr…).
17. **Notificaciones** (azkar de la mañana y la tarde, Al-Kahf y salawat del viernes) y **horarios de oración y qibla**: necesitan código nativo en Android.
18. **Tafsir y traducción por página del Corán**: botón «تفسير / Explicación» entre página anterior y siguiente (pendiente del permiso de la Fundación Mohammed VI y del índice de aleyas por página).
19. **Guía de la purificación y la oración**: quitada de la app de momento; guardada completa en `pendiente/guia/` (ver su LEEME.md para volver a activarla).

## Hecho en Android (12/11/2026)

- Copia de seguridad del proyecto en `AndroidStudioProjects/Misbaha_copia_2026-11-12`.
- Compartir y copiar nativos (`window.AndroidBridge` en `MainActivity`), enlaces externos en el navegador.
- Quitados ajustes de acceso a archivos, `usesCleartextTraffic`, `WAKE_LOCK` y los restos de la plantilla (fragments, navegación, menú).
- Fuentes locales, Tailwind reducido, iconos WebP y audio de Al-Kafirún (`Q109.mp3`) corregido.
- Páginas del Corán en WebP: probado y descartado, solo ahorraba un 10 % (ya son PNG de 16 colores optimizados).
- **Al copiar a Android hay que quitar el botón Editar** de `app.js` y el editor de `index.html` (o hacer el punto 6).
