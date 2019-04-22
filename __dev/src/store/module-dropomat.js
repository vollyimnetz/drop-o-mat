

export const mutationTypes = {
    LOADHISTORYDATA: 'LOADHISTORYDATA',
    STOREHISTORYDATA: 'STOREHISTORYDATA',
};

/** store module **************************************************************************/
export const storeModule = {
    state: {
        clockhistory: []//initial state
    },
    getters: {
        clockhistory: state => state.clockhistory
    },
    mutations: {
        [mutationTypes.LOADHISTORYDATA](state, { param }) {
            state.clockhistory = param;
        },
        [mutationTypes.STOREHISTORYDATA](state, { data }) {
            if (typeof(Storage) === "undefined") { return; }
            
            state.clockhistory = data;
            localStorage.setItem("clockhistory",JSON.stringify( data ));
        },

    },
    actions: {
        async loadClockHistoryFromStorage({ commit }) {
            if (typeof(Storage) === "undefined") { return; }
            
            var storedClockhistory = localStorage.getItem("clockhistory");
            if(storedClockhistory) {
                commit(mutationTypes.LOADHISTORYDATA, { param: JSON.parse( storedClockhistory ) });
            } else {
                commit(mutationTypes.LOADHISTORYDATA, { param: [] });
            }
        },
    }
};