const CACHE_NAME = 'milkcount-vendor-v8';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './vendor-logo.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('supabase.co')) return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});

// Background Sync Listener
self.addEventListener('sync', event => {
  if (event.tag === 'milkcount-sync') {
    event.waitUntil(Promise.resolve());
  }
});

// Periodic Background Sync Listener
self.addEventListener('periodicsync', event => {
  if (event.tag === 'milkcount-periodic-sync') {
    event.waitUntil(Promise.resolve());
  }
});

// Push Notifications Listener
self.addEventListener('push', event => {
  const title = 'MilkCount Vendor';
  const options = {
    body: event.data ? event.data.text() : 'కొత్త పాల లెక్కల అప్‌డేట్ వచ్చింది!',
    icon: './vendor-logo-192.png',
    badge: './vendor-logo-192.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

