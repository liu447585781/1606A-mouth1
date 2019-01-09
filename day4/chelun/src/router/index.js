import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../containers/index'
import Txsh from '../containers/txsh'
import Canvas from '../containers/canvas'

const router = new VueRouter({
    routes: [{
        path: '*',
        redirect: '/canvas'
    }, {
        path: '/index',
        component: Index
    }, {
        path: '/txsh',
        component: Txsh
    }, {
        path: '/canvas',
        component: Canvas
    }]
})


export default router;