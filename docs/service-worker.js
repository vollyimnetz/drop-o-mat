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
  "generated/assets/workbox-v4.3.0/workbox-sw.js"
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
    "url": "generated/assets/workbox-v4.3.0/workbox-background-sync.dev.js",
    "revision": "5163dbff976e9c367e2d8082c42d8e82"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-background-sync.prod.js",
    "revision": "fe462ec9070077c7d67a6703b7e9dcbe"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-broadcast-update.dev.js",
    "revision": "049e8b58ccea1d3a9e2f7e7230911405"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-broadcast-update.prod.js",
    "revision": "3feb51158fd519abadaa0e9595758c99"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-cacheable-response.dev.js",
    "revision": "b4ef1cd9cf8c60e6368624cb722f980d"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-cacheable-response.prod.js",
    "revision": "ba959ad8274469fa7a3a85b7979e04b1"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-core.dev.js",
    "revision": "eaa5402bd36a9359fa8f09e7844154e8"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-core.prod.js",
    "revision": "c679f5659e7d501c68849ae863df5285"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-expiration.dev.js",
    "revision": "247d14b3c3cc31bb1966936c7957c359"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-expiration.prod.js",
    "revision": "7cf1bcea38b4c95c726382236a9d6610"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-navigation-preload.dev.js",
    "revision": "5329bcf9e603625a8ceb66bd41858790"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-navigation-preload.prod.js",
    "revision": "c56639398e95e46608d78f3f06e1f21f"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-offline-ga.dev.js",
    "revision": "bf7bf3a2eaad466eda56af64ae8e4ad9"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-offline-ga.prod.js",
    "revision": "309939f2cb5fbda535fa1c84e5170c30"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-precaching.dev.js",
    "revision": "759d924075389dbb7551e3f3af7e2370"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-precaching.prod.js",
    "revision": "57863e8ee89d7e64f03d4f7bdc19eae1"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-range-requests.dev.js",
    "revision": "1d8912c19664030b0cc6af4cba2657ec"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-range-requests.prod.js",
    "revision": "3a60d9f8563f1d41feda873252a87ad1"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-routing.dev.js",
    "revision": "59e4e6b9bf058013aa3788f1951fc96f"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-routing.prod.js",
    "revision": "4475941b51e97d5742812aa3211bfdc9"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-strategies.dev.js",
    "revision": "9b1169319e9e9298712f36b624026ed6"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-strategies.prod.js",
    "revision": "3f29d2ef1bd51de3658df04c76497fef"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-streams.dev.js",
    "revision": "e308a228623b2afcc4720014d81e2798"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-streams.prod.js",
    "revision": "09898d510579eb2255c657e99bcafecb"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-sw.js",
    "revision": "139a8675b9982727d3bbb225c963aea5"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-window.dev.umd.js",
    "revision": "7a0b24e68d58a0f7f37f6e1ab8c4e6ab"
  },
  {
    "url": "generated/assets/workbox-v4.3.0/workbox-window.prod.umd.js",
    "revision": "da9a15dcd87a024f108b5c63bc9658b4"
  },
  {
    "url": "generated/icon_150x150.png",
    "revision": "31319547d346e2d0221d5e9a3f4874a2"
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
    "revision": "2cd2ddec570fecb558613ef5881083ca"
  },
  {
    "url": "generated/main.css",
    "revision": "459babf9b8c76e80cf08fa3800bf6684"
  },
  {
    "url": "generated/main.js",
    "revision": "6d469ee8320da4e6fa0d457311e38622"
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
    "revision": "1ece477c3a2fcdd9aaa52cc6c3309a9e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "directoryIndex": "./../"
});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"), {
  
  blacklist: [],
});
