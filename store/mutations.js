import * as types from './action-types.js'

const mutations = {
	[types.CHANGE_LOGIN_STATUS](state) {
		state.loginStatus = !state.loginStatus
		console.log('CHANGE_LOGIN_STATUS', state.loginStatus);
	},
	[types.WATCH_LOGIN_STATUS](state) {
		let userInfo = uni.getStorageSync('user_info') ? true : false
		if (userInfo) {
			state.loginStatus = true
		} else {
			state.loginStatus = false
		}
	},
	[types.SAVE_SYSTEM_INFO](state, data) {
		state.systemInfo = data
	},
}

export default mutations