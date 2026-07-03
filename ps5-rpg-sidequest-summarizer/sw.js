/* RPG Quest Guide — service worker
   Bump CACHE_VERSION whenever the precached shell changes. */
const CACHE_VERSION = 'quest-guide-v1';
const OFFLINE_URL = 'index.html';

/* App shell — kept in sync with the ?v= query strings in index.html. */
const PRECACHE_URLS = [
  './',
  'index.html',
  'src/styles.css?v=7',
  'data/quests.js?v=7',
  'src/app.js?v=7',
  'src/chatbot.js?v=7',
  'src/feedback.js?v=7',
  'manifest.json',
  'images/favicon.svg',
  'images/icon-192.png',
  'images/icon-512.png',
  'images/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      // addAll is atomic; a single 404 would abort. Cache best-effort instead.
      Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Only manage our own origin. Fonts, YouTube, form endpoints pass straight through.
  if (url.origin !== self.location.origin) return;

  // Navigations: network-first so content stays fresh, fall back to cached shell offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL)))
    );
    return;
  }

  // Static assets: stale-while-revalidate.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
