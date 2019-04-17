//@see https://developers.google.com/web/tools/workbox/modules/workbox-cli

module.exports = {
    globDirectory: './../docs/',
    globPatterns: [
        './generated/**/*.{html,css,js,png,svg,eot,woff,ttf,svg,woff2}',
        './app_shell.html'
    ],
    swDest: './../docs/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,

    directoryIndex:'https://vollyimnetz.github.io/drop-o-mat',
    navigateFallback: 'app_shell.html',
    navigateFallbackBlacklist: [],
    importWorkboxFrom: 'disabled',//needs importScripts if 'disabled'
    importScripts: ['workbox-v4.2.0/workbox-sw.js'],
    cacheId: 'drop-o-mat-cache',
    runtimeCaching: [
        
    ]
};