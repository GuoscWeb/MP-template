let info = uni.getStorageSync('user_info')
let state = {
	loginStatus: uni.getStorageSync('user_info') ? true : false, //登录状态
	userInfo: info, //用户信息
}

export default state