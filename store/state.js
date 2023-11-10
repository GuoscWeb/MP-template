import tabBar from '../config/tabBarList.js'
let info = uni.getStorageSync('user_info')
let state = {
	loginStatus: uni.getStorageSync('user_info') ? true : false, //登录状态
	userInfo: info, //用户信息
	tabBarList: tabBar['userBar'],
	currentTab: 0,
	systemInfo: {}, //设备信息
}

export default state