import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import { Form, Table } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Form);
Vue.use(Table);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})