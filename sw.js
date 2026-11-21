// Cache hors ligne d'Objectif X (https seulement). À chaque publication : augmenter VERSION, et tenir FILES à jour.
// Les fichiers de contenu (une matière par fichier) sont gardés au premier chargement : l'élève n'en télécharge
// que pour ses matières. La police est gardée à part, d'une version à l'autre.
const VERSION = 'objx-8';
const POLICES = 'objx-polices';
const FILES = [
  './', 'index.html', 'manifest.webmanifest', 'css/app.css',
  'js/app.js', 'js/ui.js', 'js/data.js', 'js/store.js', 'js/reviser.js', 'js/seance.js', 'js/bac.js', 'js/outils.js',
  'icones/icone-192.png', 'icones/icone-512.png', 'icones/apple-touch-icon.png', 'icones/favicon.png',
];

self.addEventListener('install', e => {
  // ?v=VERSION : GitHub Pages garde les fichiers 10 minutes en cache, on force donc la dernière version.
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(FILES.map(f =>
    fetch(new Request(f.endsWith('/') ? f : f + '?v=' + VERSION, { cache: 'reload' })).then(r => { if (!r.ok) throw new Error(f); return c.put(f, r); }))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== VERSION && n !== POLICES).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Police (Google Fonts) : gardée dès la première fois.
  if (/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) {
    e.respondWith(caches.open(POLICES).then(async c => (await c.match(e.request)) || fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; })));
    return;
  }
  if (u.origin !== location.origin) return;
  // Le numéro en ligne, pour savoir s'il y a une mise à jour : toujours depuis le réseau.
  if (u.pathname.endsWith('sw.js')) return;
  e.respondWith(caches.open(VERSION).then(async c => {
    const enCache = (await c.match(e.request, { ignoreSearch: true })) || (e.request.mode === 'navigate' ? await c.match('./') : null);
    if (enCache) return enCache;
    const r = await fetch(e.request);
    if (r.ok && /contenu\/.+\.js$/.test(u.pathname)) c.put(e.request, r.clone());
    return r;
  }));
});
