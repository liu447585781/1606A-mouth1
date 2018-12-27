import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/containers/login'
import Index from '@/containers/index'
import Recom from '@/containers/recom'
import Station from '@/containers/station'

import Video from '@/containers/video'
import My from '@/containers/my'
import Friend from '@/containers/friend'
import Number from '@/containers/number'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/index/recom'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            children: [{
                path: '/index/recom',
                name: 'Recom',
                component: Recom,
            }, {
                path: '/index/station',
                name: 'Station',
                component: Station,
            }]
        },
        {
            path: '/video',
            name: 'Video',
            component: Video
        },
        {
            path: '/my',
            name: 'My',
            component: My
        },
        {
            path: '/friend',
            name: 'Friend',
            component: Friend
        },
        {
            path: '/number',
            name: 'Number',
            component: Number,
            children: [{
                path: '/number/login',
                name: 'Login',
                component: Login,
            }]
        }
    ]
})