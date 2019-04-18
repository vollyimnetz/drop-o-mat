(function () {
    console.log('service worker needed?', ['localhost', '127'].indexOf(location.hostname) === -1);

    if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) { 
        console.log('service worker setup');
        navigator.serviceWorker.register( MY_WEBAPP_SW_SCOPE + 'service-worker.js', { scope: MY_WEBAPP_SW_SCOPE })
            .then(function(registration) {
                console.log('Service Worker registered successfully.');
            })
            .catch(error => console.log('Service Worker registration failed:', error));
    }
})();
