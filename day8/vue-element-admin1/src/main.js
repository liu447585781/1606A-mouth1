import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog' // error log
import './permission' // permission control
import './mock' // simulation data

import * as filters from './filters' // global filters

import permission from './directive/permission/index'
import VCharts from 'v-charts'

Vue.use(VCharts)
Vue.directive('permission', permission)

Vue.use(Element, {
    size: Cookies.get('size') || 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

//日期格式化过滤器
Vue.filter('formatDate', function(value) {
    let date = new Date();
    date.setTime(value)
    let year = date.getFullYear(),
        month = (date.getMonth() + 1).toString().padStart(2, 0),
        day = date.getDate().toString().padStart(2, 0),
        hour = date.getHours().toString().padStart(2, 0),
        min = date.getMinutes().toString().padStart(2, 0),
        sec = date.getSeconds().toString().padStart(2, 0)
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
})

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})