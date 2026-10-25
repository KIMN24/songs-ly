const gallery = document.querySelector('#gallery');
const dialog = document.querySelector('#song-dialog');
const player = document.querySelector('#song-audio');
const colors = [['#b38d79', '#d4ba9a'], ['#a1a995', '#e0c7a4'], ['#b39b88', '#caa89c'], ['#8d9e9b', '#d2bda7'], ['#b58c7e', '#c4b29c']];
const el = (tag, cls, txt) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (txt) n.textContent = txt;
  return n
};
function artwork(song, i, cls) {
  const node = el('div', cls);
  node.style.setProperty('--a', colors[i % colors.length][0]);
  node.style.setProperty('--b', colors[i % colors.length][1]);
  if (song.cover) {
    const img = document.createElement('img');
    img.src = song.cover;
    img.alt = `Portada de ${song.title}`;
    img.loading = 'lazy';
    img.onerror = () => img.remove();
    node.append(img)
  }
  return node
}
songs.forEach((song, i) => {
  const btn = el('button', 'song-card');
  btn.type = 'button';
  const art = artwork(song, i, 'cover');
  art.append(el('span', 'number', String(i + 1).padStart(2, '0')));
  const copy = el('div', 'card-copy');
  copy.append(el('h2', '', song.title), el('p', '', song.artist), el('span', '', 'Leer la nota ♡'));
  btn.append(art, copy);
  btn.addEventListener('click', () => {
    const container = document.querySelector('#dialog-art');
    const art = artwork(song, i, 'dialog-art');
    art.id = 'dialog-art';
    container.replaceWith(art);
    document.querySelector('#dialog-title').textContent = song.title;
    document.querySelector('#dialog-artist').textContent = song.artist;
    document.querySelector('#dialog-reason').textContent = song.reason;
    player.pause();
    player.hidden = !song.audio;
    if (song.audio) player.src = encodeURI(song.audio);
    else player.removeAttribute('src');
    player.load();
    document.querySelector('#audio-status').textContent = '';
    const link = document.querySelector('#song-link');
    link.hidden = !song.url;
    if (song.url) link.href = song.url;
    else link.removeAttribute('href');
    dialog.showModal()
  });
  gallery.append(btn)
});

document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {
  if (e.target === dialog) dialog.close()
});

dialog.addEventListener('close', () => player.pause());
player.addEventListener('error', () => {
  document.querySelector('#audio-status').textContent = 'No se pudo cargar la canción. Revisa que el archivo MP3 esté disponible.';
});
