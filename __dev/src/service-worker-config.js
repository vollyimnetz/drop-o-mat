(function () {
    console.log('service worker needed?', ['localhost', '127'].indexOf(location.hostname) === -1);

    if ('serviceWorker' in navigator && ['localhost', '127'].indexOf(location.hostname) === -1) { 
        console.log('service worker setup');
        navigator.serviceWorker.register( 'MY_WEBAPP_FULL_PATH/service-worker.js', { scope: 'MY_WEBAPP_SW_SCOPE' })
            .then(function(registration) {
                console.log('Service Worker registered successfully.');
            })
            .catch(error => console.log('Service Worker registration failed:', error));
    }
})();



/*** START add to homescreen ***/
let deferredPrompt;
const addBtn = document.querySelector('.addToHomescreenButton');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our addToHomescreen button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the addToHomescreen prompt');
            } else {
                console.log('User dismissed the addToHomescreen prompt');
            }
            deferredPrompt = null;
        });
    });
});
/*** END add to homescreen ***/