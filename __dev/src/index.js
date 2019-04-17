import serviceWorker from './service-worker-config.js';

import Vue from 'vue'
import App from './App.vue';
import './style/index.scss';

import router from './router/index'
import store from './store'

//vuetify
import Vuetify from '../node_modules/vuetify/dist/vuetify.min.js';//import all
Vue.use(Vuetify,{});

Vue.config.productionTip = false

new Vue({
    router,
    el: '#app',
    router,
    store,
    render: h => h(App)
});



