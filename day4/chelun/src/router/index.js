import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../containers/index'

const router = new VueRouter({
    routes: [{
        path: '*',
        redirect: '/index'
    }, {
        path: '/index',
        component: Index
    }]
})

export default router;