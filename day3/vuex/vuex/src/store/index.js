import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        app
    },
    state: {
        a: 1,
        b: 2
    },
    plugins: [createLogger()]
})