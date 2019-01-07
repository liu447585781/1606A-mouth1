import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../containers/index'
import Txsh from '../containers/txsh'

const router = new VueRouter({
    routes: [{
        path: '*',
        redirect: '/index'
    }, {
        path: '/index',
        component: Index
    }, {
        path: '/txsh',
        component: Txsh
    }]
})

export default router;