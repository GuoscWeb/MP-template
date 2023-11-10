import Vue from 'vue'
import App from './App'
import store from '@/store/index.js'
import {
	router
} from '@/router/index.js'
import utils from '@/utils/utils.js'
import * as commonFunc from '@/utils/comfunc.js'
import * as https from '@/request/api/index.js'
import uView from 'uview-ui';
import dayjs from 'dayjs'
// import VConsole from 'vconsole';
Vue.use(uView);
Vue.use(router)
Vue.prototype.$dayjs = dayjs
Vue.prototype.$utils = utils
Vue.prototype.$commonFunc = commonFunc
Vue.prototype.$https = https
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()