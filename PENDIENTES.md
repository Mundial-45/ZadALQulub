# Mejoras pendientes (para cuando se pruebe en Android Studio)

Estos cambios se dejaron para más adelante porque afectan a cómo funciona la app dentro del WebView de Android.

1. **Cargar cada sección al abrirla** (en lugar de cargar azkar, adya, munajat y ruqya al inicio). Hacerlo con `<script>` dinámico, no con `fetch()`, porque `fetch()` falla en `file:///android_asset`.
2. **Favoritos por sección/grupo/número** en lugar de por texto árabe, con migración automática de los favoritos antiguos para no perder los de los testers.
3. **Contadores guardados por identificador** en lugar de por posición, también con migración.
4. **Reinicio diario configurable** (por ejemplo al Fajr en vez de a medianoche).
5. **PWA (manifest + service worker)** solo para la versión web; debe desactivarse sola en el WebView de Android.
6. **Botón Editar solo en modo administrador** (por ejemplo con `?editar=1` en la web).
7. **Fuentes dentro de la app** (Amiri, Amiri Quran, Tajawal, Inter, Lora) para que se vean sin internet. Hace falta subir los archivos de las fuentes al repositorio.
8. **Audio de Al-Kafirún** (`Q009.mp3`): comprobar que es la sura 109 y no At-Tawba.
9. **azkar.js**: revisar las frases posiblemente incompletas (elementos 137 y 279) y agrupar los 92 capítulos de un solo zikr por temas.

## Ideas de contenido guardadas

10. **Súplicas del Corán** (رَبَّنَا… y súplicas de los profetas) con referencia de sura y aleya; comprobar antes que no estén ya en adya.
11. **Los 40 hadices de An-Nawawi** en árabe y español con un comentario breve.
12. **Plan para completar el Corán (ختمة)**: elegir en cuántos días y calcular las páginas diarias sobre las 638 páginas.
13. **Aleya o hadiz del día** en la pantalla de inicio.
14. **Botones rápidos en la misbaha**: 33 + 33 + 34 tras la oración, istighfar ×100, salawat.
15. **Glosario de términos islámicos en español** (tawhid, shirk, taqwa, nafth, dhikr…).
16. **Notificaciones** (azkar de la mañana y la tarde, Al-Kahf y salawat del viernes) y **horarios de oración y qibla**: necesitan código nativo en Android.
17. **Tafsir y traducción por página del Corán**: botón «تفسير / Explicación» entre página anterior y siguiente (pendiente del permiso de la Fundación Mohammed VI y del índice de aleyas por página).
18. **Guía de la purificación y la oración**: quitada de la app de momento; guardada completa en `pendiente/guia/` (ver su LEEME.md para volver a activarla).
