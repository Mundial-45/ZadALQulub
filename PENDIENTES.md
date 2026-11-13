# Mejoras pendientes (para cuando se pruebe en Android Studio)

## ⚠️ Urgente: contenido

**Audios por grabar**
1. **Munajat**: ninguna tiene audio (204). Las 9 que lo tenían (#1–#7, #175, #176) se cambiaron por munajat nuevas de 400+ letras y su audio se borró. El resto de secciones ya tiene todos sus audios.

**Fuentes que faltan (son hadices, pero la nota no lo dice)**
2. Adya #106 y #111 (رحمن الدنيا والآخرة ورحيمهما…), #107 y #113 (اللهم رب السماوات السبع…), #228 (أبدلهما دارا خيرا من دارهما), #256 (الله الله ربي لا أشرك به شيئا), #260. Buscar la fuente y el grado en dorar o islamweb.
3. Adya #55 («اللهم إني أسألك الثبات في الأمر»): la nota dice «الطبراني في الكبير»; comprobar el grado.

**Por revisar**
4. **Munajat**: se leyó a mano el grupo de atributos y una súplica de cada grupo, y se pasó un barrido automático. Quedan por leer a mano unas 168.

## Android

Estos cambios se dejaron para más adelante porque afectan a cómo funciona la app dentro del WebView de Android.

1. **Pantalla bajo las barras del sistema (Android 15+)**: comprobar en un móvil reciente que el contenido no queda debajo de la barra de estado o de navegación; si pasa, aplicar los insets en `MainActivity`.

## Ideas de contenido guardadas

2. **Los 40 hadices de An-Nawawi** en árabe y español con un comentario breve.
3. **Aleya o hadiz del día** en la pantalla de inicio.
4. **Botones rápidos en la misbaha**: 33 + 33 + 34 tras la oración, istighfar ×100, salawat.
5. **Notificaciones** (azkar de la mañana y la tarde, Al-Kahf y salawat del viernes) y **horarios de oración y qibla**: necesitan código nativo en Android.
6. **Tafsir y traducción por página del Corán**: botón «تفسير / Explicación» entre página anterior y siguiente (pendiente del permiso de la Fundación Mohammed VI y del índice de aleyas por página).
7. **Guía de la purificación y la oración**: quitada de la app de momento; guardada completa en `pendiente/guia/` (ver su LEEME.md para volver a activarla).

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
- Nueva sección Glosario de términos islámicos (107 términos), cada uno verificado en islamweb, binbaz o dorar.net con enlace a la fuente, y explicaciones centradas.
- PWA solo para la web (manifest, service worker e icono oficial); el aviso de instalación sale solo en iPhone/iPad y en Android no se activa.
- Modo oscuro legible en el pie, favoritos, cabecera del lector del Corán y guía de transliteración.
- Favoritos en español con transliteración y traducción, y fuente del Corán en las aleyas.
- Al girar el móvil la app ya no se recarga (`configChanges` en el manifest).
- Icono monocromo propio para los iconos temáticos de Android 13+.
