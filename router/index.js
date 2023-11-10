import {
	createRouter
} from 'uni-simple-router';
import store from '@/store/index.js'
import utils from '@/utils/utils.js'


const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	applet: {
		animationDuration: 300 //默认 300ms
	},
	routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	store.dispatch('WATCH_LOGIN_STATUS')
	if (to.meta.auth && !store.state.loginStatus) {
		next({
			name: 'Login',
			params: {
				url: to.fullPath,
				name: to.name,
			},
			NAVTYPE: 'push'
		});
	} else {
		// 员工角色如果访问Home重定向到Order
		if (store.state.userInfo.roleId !== 10000 && to.name == "Home") {
			next({ name: 'Order' });
		} else {
			next();
		}
	}
});
// 全局路由后置守卫
router.afterEach((to, from) => {
	// console.log('跳转结束')
})


export {
	router
}