// App-shell service worker: network-first, falling back to cache when
// offline. Runtime-cached rather than precached because Vite's build
// output filenames are content-hashed, so we can't know them ahead of
// time — the shell + quest data get cached as they're actually fetched.
const CACHE = "quest-guide-shell-v1";

self.addEventListener("install", () => self.skipWaiting());

// Explicit "Download for offline" (Settings): the page sends the list of
// same-origin URLs it has already loaded (app shell + bundled quest data) and
// we precache them so the app opens with no network.
self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || data.type !== "CACHE_URLS" || !Array.isArray(data.urls)) return;
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await Promise.all(
        data.urls.map(async (url) => {
          try {
            const res = await fetch(url, { cache: "reload" });
            if (res.ok) await cache.put(url, res.clone());
          } catch {
            /* skip anything that can't be fetched */
          }
        })
      );
      const source = event.source;
      if (source) source.postMessage({ type: "CACHE_URLS_DONE" });
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => k !== CACHE && k.startsWith("quest-guide-shell-")).map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      } catch {
        const cached = await cache.match(req);
        if (cached) return cached;
        throw new Error("offline and not cached");
      }
    })()
  );
});
