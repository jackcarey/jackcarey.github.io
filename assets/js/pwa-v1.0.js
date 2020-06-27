var cacheName = "jackcarey-pwa";
var filesToCache = [
  '/sass/main.css',
  '/sass/fontawesome-all.min.css',
  '/js/breakpoints.min.js',
  '/js/browser.min.js',
  '/js/jquery.min.js',
  '/js/main.js',
  '/js/util.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Try the cache first, then fall back to updating from the network */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});