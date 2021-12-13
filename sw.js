let path = '/20213-PWA-GSA-U2-T2/sw.js';

const CACHE_STATIC = "static_v1"
const CACHE_INMUTABLE = "inmutable_v1"

self.addEventListener('install', (event) => {
    let url = self.location.href;
    if (url.includes('localhost') || url.includes('127.0.0.1')) {
        path = '/';
    }

    const cacheStatic = caches.open(CACHE_STATIC)
    .then( cache => {
        cache.addAll([
            path + './',
            path + './index.html',
            path + './manifest.json',
            path + './js/camera.js',
            path + './js/app.js',
            path + './images/icons/android-launchericon-48-48.png',
            path + './images/icons/android-launchericon-72-72.png',
            path + './images/icons/android-launchericon-96-96.png',
            path + './images/icons/android-launchericon-144-144.png',
            path + './images/icons/android-launchericon-192-192.png',
            path + './images/icons/android-launchericon-512-512.png',
        ])
    })

    const cacheInmutable = caches.open(CACHE_INMUTABLE)
    .then( cache => {
        cache.addAll([
            'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
            'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js'
        ])
    })

    event.waitUntil(Promise.all([cacheStatic, cacheInmutable]))
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
    );
});