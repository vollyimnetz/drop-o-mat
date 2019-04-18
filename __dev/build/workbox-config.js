//@see https://developers.google.com/web/tools/workbox/modules/workbox-cli
const domainSetting = require('./domain.settings');

module.exports = {
    globDirectory: './../docs/',
    globPatterns: [
        './generated/**/*.{html,css,js,png,svg,eot,woff,ttf,svg,woff2}',
        './index.html',//the primary index file in the root directory
    ],
    swDest: './../docs/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,

    directoryIndex: domainSetting.startPath,
    navigateFallback: 'index.html',
    navigateFallbackBlacklist: [],
    importWorkboxFrom: 'disabled',//needs importScripts if 'disabled'
    importScripts: ['generated/assets/workbox-v4.3.0/workbox-sw.js'],
    cacheId: 'drop-o-mat-cache',
    runtimeCaching: [
        
    ]
};