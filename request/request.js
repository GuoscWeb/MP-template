import store from '@/store/index'
import * as commonFunc from '@/utils/comfunc.js'
export default {
	header: {
		storeId: 10001,
		platform: 'WXMP',
	},
	send(options = {}) {
		// loading加载
		uni.showLoading({ title: '加载中' });
		// 请求方式 
		this.header['Access-Token'] = store.state.userInfo.token || ''
		options.header = this.header
		options.method = options.method || "POST";
		// options.data = {
		// 	"token": ,
		// 	...options.data
		// };


		// 发起Promise请求
		// return new Promise((resolve, reject) => {
		// 	uni.request(options).then(data => {
		// 		console.log(data);
		// 		let [error, res] = data;
		// 		// setTimeout(() => {
		// 		// 	commonFunc.toast(JSON.stringify(res.data), 6000);
		// 		// }, 300)
		// 		if (error != null) {
		// 			reject(error);
		// 		} else {
		// 			// 响应拦截、根据后端的状态码来写，可以自行判断和封装
		// 			if (res.data.status == 200) {
		// 				resolve(res.data);
		// 			} else {
		// 				reject(res.data);
		// 				setTimeout(() => {
		// 					uni.showToast({
		// 						icon: 'none',
		// 						title: res.data.message,
		// 						duration: 2000
		// 					});
		// 				}, 30)
		// 				if (res.data.status == 401) {
		// 					uni.removeStorageSync('user_info')
		// 				}
		// 			}
		// 		}
		// 	}).catch(err => {
		// 		reject(err);
		// 	}).finally(() => {
		// 		uni.hideLoading()
		// 	});
		// });
		return new Promise((resolve, reject) => {
			uni.request(Object.assign({}, options, {
				success(res) {
					if (res.statusCode == 200) {
						if (res.data.status == 200) {
							resolve(res.data);
						} else {
							// http请求成功，接口报错
							reject(res.data);
							/* 401为登录过期状态码，清空登录缓存 */
							console.log('http请求成功，接口报错');
							setTimeout(() => { commonFunc.toast(res.data.message) }, 30)
							if (res.data.status == 401) { uni.removeStorageSync('user_info') }
						}
					} else {
						// http请求失败的时候
						console.log('http请求失败');
						uni.showModal({ title: 'http请求失败', content: JSON.stringify(res), showCancel: false });
						reject(res)
					}
				},
				// uni.request请求失败的时候
				fail(err) {
					console.log('uni.request请求失败');
					uni.showModal({ title: 'uni.request请求失败', content: JSON.stringify(res), showCancel: false });
					reject(err)
				},
				complete() {
					uni.hideLoading()
				}
			}))
		})
	},
	post(url = "", data = {}) {
		return this.send({
			url: url,
			data: data
		});
	},
	get(url = "", data = {}) {
		return this.send({
			url: url,
			data: data,
			method: "GET"
		});
	}
};