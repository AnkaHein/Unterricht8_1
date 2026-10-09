// Service Worker 8.1 ESZ: Seite funktioniert nach dem ersten Besuch auch offline.
// Bei Aenderungen an der Seite VERSION hochzaehlen.
const VERSION = 'v6';
const CACHE = '81-esz-' + VERSION;
const CORE = ['./', 'index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('81-esz-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // Audio/Range-Anfragen direkt ans Netz
  if (req.headers.has('range')) return;
  const isPage = req.mode === 'navigate' || /index\.html$|manifest\.json|app-icon\.png/.test(new URL(req.url).pathname);
  if (isPage) {
    // Seite: erst Netz (neueste Version), sonst Cache
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; }).catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
  } else {
    // Bilder, PDFs usw.: erst Cache, dann Netz (und merken)
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(n => { const c = n.clone(); caches.open(CACHE).then(x => x.put(req, c)); return n; })));
  }
});
