<template>
	<view>
		<comp-header>
			<view slot="leftBtn">
				<view style="display: flex; align-items: center">
					<image class="wh32" src="../../static/icon/home-select.png"></image>
				</view>
			</view>
		</comp-header>
		<comp-tabbar></comp-tabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'This is GSC！'
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="less"></style>
