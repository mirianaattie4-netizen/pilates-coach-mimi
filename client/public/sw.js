// Minimal service worker — enables "Add to Home Screen" installability.
// Network-first, no offline caching, so the site always stays current.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
