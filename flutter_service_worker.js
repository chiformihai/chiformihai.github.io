'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "0a4cdce14f824ed6e95c55de7e29f73b",
"/main.dart.js": "b8073c5e7516923251b6917285d51670",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "5e030b96190bca2ef4697d3ab8c783d3",
"/assets/LICENSE": "743579572d354b3dbfd5eebaef5d60a6",
"/assets/AssetManifest.json": "b53a152a3472608d4d7881be5ecea426",
"/assets/FontManifest.json": "84a88981661f6c8ffef948757be4ef71",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/app_bar_logo.svg": "e57e9c1f93fe40459765ab924940eeab",
"/assets/assets/images/copy_paste.png": "dd7578ee787f0756b1a74c35b4e5e644",
"/assets/assets/images/eToken.png": "0b1c5402163a838d097d294d0031a94b",
"/assets/assets/images/background.png": "28367e0af9a3da74a6a2c8134aca44a3",
"/assets/assets/images/load_background.png": "6ed4ca67519480a87a7b3b871e25c2bf",
"/assets/assets/images/logo_dark.png": "ae7a2feabaa5516315d7ad00f8019099",
"/assets/assets/images/logo.png": "571958d6aa3baadb8b84e23583bbb89b",
"/assets/assets/images/logo_white.png": "7aa89a71bf6892458a030eee06169ed0",
"/assets/assets/images/backgroundDesktop.png": "7d9bed6502e5591584953795b97a29e4",
"/assets/assets/fonts/PTSans-Italic.ttf": "a97ccf1e30117c053dd28f265c270a22",
"/assets/assets/fonts/PTSans-BoldItalic.ttf": "22f2e7f9ae109154c0467619164247ea",
"/assets/assets/fonts/BebasNeue-Regular.ttf": "21bb70b62317f276f2e97a919ff5bd8c",
"/assets/assets/fonts/PTSans-Regular.ttf": "4ea26cd5e7f64894d6c2451446f7dda5",
"/assets/assets/fonts/PTSans-Bold.ttf": "333ee0ee5989e593812c23ca2dd7bc24"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
