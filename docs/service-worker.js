/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "workbox-v4.2.0/workbox-sw.js"
);

workbox.core.setCacheNameDetails({prefix: "drop-o-mat-cache"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "generated/assets/favicon.png",
    "revision": "fde6f4fa3684d7e5064968aab62ca572"
  },
  {
    "url": "generated/icon_180x180.png",
    "revision": "5918879ccc0df6e76337088b96983ac8"
  },
  {
    "url": "generated/icon_192x192.png",
    "revision": "a82448c5302c93df1f57fda394b8f555"
  },
  {
    "url": "generated/icon_270x270.png",
    "revision": "cd30b10e97d617ce50160220e6568747"
  },
  {
    "url": "generated/icon_32x32.png",
    "revision": "be4a2e0aaaed4689d8fd9575009bbe05"
  },
  {
    "url": "generated/icon_512x512.png",
    "revision": "fc6e6287634f77fc178bb4d93180e5f6"
  },
  {
    "url": "generated/icon_96x96.png",
    "revision": "85405af29dcd9049496dd40532eed923"
  },
  {
    "url": "generated/index.html",
    "revision": "2de10cbe56bcbfbd806a805c879874fc"
  },
  {
    "url": "generated/main.css",
    "revision": "25110961987c41dccf3c87b905b2c0bf"
  },
  {
    "url": "generated/main.js",
    "revision": "a2c0f8de0c28c3cf61ae6ece92195ca0"
  },
  {
    "url": "generated/vendor.css",
    "revision": "09f7a21f932d7249e52d862bdcddba8f"
  },
  {
    "url": "generated/vendor.js",
    "revision": "45da108b76d9e67c62981747a299db1a"
  },
  {
    "url": "index.html",
    "revision": "f2a4df1e558bee1428e2f936cc3d1c15"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "directoryIndex": "https://vollyimnetz.github.io/drop-o-mat"
});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"), {
  
  blacklist: [],
});
