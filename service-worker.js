importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');


if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://yesno.wtf/api'),
        new workbox.strategies.NetworkFirst()
    );
}