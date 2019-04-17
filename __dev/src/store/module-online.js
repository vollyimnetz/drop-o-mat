



export const mutationTypes = {
    ONLINE: 'ONLINE',
};

/** store module **************************************************************************/
export const storeModule = {
    state: {
        online: navigator.onLine//initial state
    },
    getters: {
        online: state => state.online
    },
    mutations: {
        [mutationTypes.ONLINE](state, { param }) {
            //console.log('mutation',param,state);
            state.online = param
        }
    },
    actions: {
        async setupOnlineState({ commit }) {
            window.addEventListener('online', function handleOnline(e) {
                commit(mutationTypes.ONLINE, { param: true });
            });
            window.addEventListener('offline', function handleOffline(e) {
                commit(mutationTypes.ONLINE, { param: false });
            });
        },
    }
};