export function getLocation() {
	return new Promise((resovle, reject) => {
		uni.getLocation({
			isHighAccuracy: true,
			type: 'gcj02',
			complete: e => {
				switch (e.errMsg) {
					case 'getLocation:ok':
						console.log('同意授权位置信息');
						resovle(e)
						break;
					case 'getLocation:fail:ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF':
						console.log('提示打开手机系统定位');
						uni.showModal({
							title: '“中油速配”需要获取你的地理位置',
							content: '无法获取您的位置信息，我们需要您的位置信息判断运营区域，为您提供速配服务，请打开系统定位',
							confirmText: '我知道了',
							showCancel: false
						});
						break;
					case 'getLocation:fail auth deny':
						console.log('拒绝授权位置信息');
						uni.showModal({
							title: '“中油速配”需要获取你的地理位置',
							content: '无法获取您的位置信息，我们需要您的位置信息判断运营区域，为您提供速配服务',
							success: res => {
								if (res.confirm) {
									uni.openSetting();
								}
							}
						});
						break;
					default:
						break;
				}
			}
		});
	})
}
/**
 * 显示消息提示框
 * @param {String} title 提示的内容，长度与 icon 取值有关。
 * @param {Number} duration 提示的延迟时间，单位毫秒，默认：2000
 */
export function toast(title, duration = 2000) {
	uni.showToast({
		title: String(title),
		icon: 'none',
		duration
	})
}