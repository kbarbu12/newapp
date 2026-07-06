/* Kill-switch service worker for the Pages root (/newapp/).
 *
 * Earlier deploys served the vanilla site at the root and registered a
 * service worker whose scope (/newapp/) also covered /newapp/app/ and
 * /newapp/staging/, so returning visitors could be served a stale, cached
 * redesign. The vanilla PWA now lives under /newapp/classic/ with its own
 * correctly-scoped worker; this root worker exists only to neutralize the
 * legacy registration in browsers that still have it.
 *
 * On activation it deletes every cache and unregisters itself, then reloads
 * controlled pages so they fetch fresh from the network. */
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((c) => c.navigate(c.url));
    })()
  );
});
