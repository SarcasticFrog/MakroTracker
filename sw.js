self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Erlaubt es der App, Daten zu laden
    event.respondWith(fetch(event.request));
});
