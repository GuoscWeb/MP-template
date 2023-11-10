<script>
export default {
	onLaunch: function () {
		console.log(process.env.ENV_TYPE);
		// 判断是否有新版本，如果有，清除登录缓存
		const updateManager = uni.getUpdateManager();
		updateManager.onCheckForUpdate(function (res) {
			console.log('是否有新版本：', res.hasUpdate);
			if (res.hasUpdate) {
				uni.removeStorageSync('user_info');
				updateManager.onUpdateReady(function () {
					uni.showModal({
						title: '更新提示',
						content: '新版本已经准备好，是否重启应用？',
						success(res1) {
							if (res1.confirm) {
								// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
								updateManager.applyUpdate();
							}
						}
					});
				});
				updateManager.onUpdateFailed(function (resFailed) {
					console.log(resFailed);
				});
			}
		});
		// 获取设备信息
		let systemInfo = uni.getSystemInfoSync();
		let custom = wx.getMenuButtonBoundingClientRect();
		let customBar = custom.bottom + custom.top - systemInfo.statusBarHeight;
		systemInfo.customBar = customBar;
		this.$store.dispatch('SAVE_SYSTEM_INFO', systemInfo);
	},
	onShow: function () {
		console.log('App Show');
	},
	onHide: function () {
		console.log('App Hide');
	}
};
</script>
<style lang="scss">
@import 'uview-ui/theme.scss';
@import './static/css/base.css';
.u-tabbar__content {
	height: 120rpx;
}
/*每个页面公共css */
body {
	background: #fafafa;
	color: #333333;
}
</style>
