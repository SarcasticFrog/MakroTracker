const CACHE_NAME = 'makrotracker-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'logo.jpg'
];

// Installieren und Dateien in den Cache laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Aktivieren und alten Cache löschen
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Anfragen beantworten (Offline-Funktionalität)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
