const CACHE_STATIC = "static_v1"
const CACHE_INMUTABLE = "inmutable_v1"

self.addEventListener('install', (event) => {

    const cacheStatic = caches.open(CACHE_STATIC)
    .then( cache => {
        cache.addAll([
            '/20213-PWA-GSA-U2-T2/',
            '/20213-PWA-GSA-U2-T2/index.html',
            '/20213-PWA-GSA-U2-T2/manifest.json',
            '/20213-PWA-GSA-U2-T2/js/camera.js',
            '/20213-PWA-GSA-U2-T2/js/app.js',
            '/20213-PWA-GSA-U2-T2/images/icons/android-launchericon-48-48.png',
            '/20213-PWA-GSA-U2-T2/images/icons/android-launchericon-72-72.png',
            '/20213-PWA-GSA-U2-T2/images/icons/android-launchericon-96-96.png',
            '/20213-PWA-GSA-U2-T2/images/icons/android-launchericon-144-144.png',
            '/20213-PWA-GSA-U2-T2/images/icons/android-launchericon-192-192.png',
            '/20213-PWA-GSA-U2-T2/images/icons/android-launchericon-512-512.png',
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