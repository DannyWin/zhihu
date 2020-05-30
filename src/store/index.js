import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: window.localStorage.token
    },
    mutations: {
        saveToken(state, data) {
            state.token = data;
            window.localStorage.setItem('token', data);
        }
    },
    actions: {},
    modules: {}
});
