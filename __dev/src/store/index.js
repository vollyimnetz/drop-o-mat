import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const mutationTypes = {};
const storeObj = {
    modules: {}//fill modules later
};

// Load online module
const online = require('./module-online.js');
storeObj.modules.online = online.storeModule;
Object.assign(mutationTypes, online.mutationTypes);

const store = new Vuex.Store(storeObj);
store.dispatch('setupOnlineState');//setup the online-module
export default store;