# Guía de la purificación y la oración (guardada para más adelante)

La sección se ha quitado de la app de momento. Todo lo necesario para volver a ponerla está aquí:

- `guia.js`: los datos de la sección, listos para usar (50 tarjetas, 9 apartados, desplegables de las cuatro escuelas).
- `Guia.webp`: el icono de la tarjeta de inicio.
- `guia_data.py`, `madh.py`, `generar.py`: el contenido fuente (texto malikí y descripción de las otras tres escuelas) y el script que genera `guia.js` (también genera `asma.js`).

## Para volver a activarla

1. Mover `guia.js` a la raíz del repositorio y `Guia.webp` a `Iconos/`.
2. En `index.html`, añadir `<script src="guia.js"></script>` después de `ruqya.js`, y la tarjeta con `onclick="openGuiaSection()"` en el inicio.
3. `app.js` y `app_styles.css` ya tienen todo lo necesario (textos, desplegables por escuela, imágenes por paso).
