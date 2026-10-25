# Songs to U ♡

Una galería vintage de siete canciones, presentada como fotografías Polaroid con notas personales.

## Cómo editar

1. Abre `js/songs.js` y modifica las siete entradas: `title`, `artist`, `reason`, `cover`, `audio` y `url`.
2. Guarda las portadas en `assets/covers/` y usa rutas como `assets/covers/01.jpg`.
3. Abre `index.html` en el navegador para ver la galería.
4. Al tocar una Polaroid se abre una nota con la dedicatoria y un enlace opcional para escuchar la canción.

No necesita instalaciones ni frameworks. Para publicar, sube el contenido a un repositorio de GitHub y activa Pages desde la rama principal, carpeta raíz.

Las siete canciones están conectadas a sus MP3 locales en assets/covers/. Cada nota incluye controles de audio; al cerrarla, la reproducción se pausa. Las dedicatorias son sugerencias: puedes personalizarlas en reason dentro de js/songs.js. Para añadir portadas, indica una imagen JPG o PNG en cover.

Las siete portadas están guardadas como JPG en assets/covers/ y se muestran en las tarjetas y las notas. Proceden del catálogo de Apple Music/iTunes; sus URLs están documentadas en assets/covers/sources.json.
