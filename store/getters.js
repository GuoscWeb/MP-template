import * as types from './getter-types.js'
const getters = {
	[types.GET_LOGIN_STATUS](state) {
		return state.loginStatus
	},
	[types.GET_USER_INFO](state) {
		return state.userInfo
	},
	[types.GET_SYSTEM_INFO](state) {
		return state.systemInfo
	},
}
export default getters