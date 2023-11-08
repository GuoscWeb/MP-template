import * as types from './action-types.js'

const actions = {
	/* 修改登录状态 */
	[types.CHANGE_LOGIN_STATUS]({
		commit
	}, data) {
		commit(types.CHANGE_LOGIN_STATUS, data)
	},

	/* 监听登录状态 */
	[types.WATCH_LOGIN_STATUS]({
		commit
	}, data) {
		commit(types.WATCH_LOGIN_STATUS)
	},
	/* 保存设备信息 */
	[types.SAVE_SYSTEM_INFO]({
		commit
	}, data) {
		commit(types.SAVE_SYSTEM_INFO, data)
	},
}

export default actions