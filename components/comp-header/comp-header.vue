<template>
	<view>
		<view class="custom-header" :style="{ height: customHeight + 'px', background: bgColor, color: fontColor }">
			<view :style="{ height: statusHeight + 'px' }"></view>
			<view class="nav-top" :style="{ height: customHeight - statusHeight + 'px' }">
				<view class="nav-left">
					<view v-if="isBack" @click="goBack"><u-icon name="arrow-left" color="#000000" size="42rpx"></u-icon></view>
					<slot name="leftBtn"></slot>
				</view>
				<view>
					<text v-if="title != ''" class="nav-title">{{ title }}</text>
				</view>
			</view>
		</view>
		<view v-if="isBlock" :style="{ height: customHeight + 'px' }"></view>
	</view>
</template>

<script>
import { GET_SYSTEM_INFO } from '@/store/getter-types.js';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			statusHeight: null,
			customHeight: null,
			navHeight: null
		};
	},
	computed: {
		...mapGetters([GET_SYSTEM_INFO])
	},
	created() {
		this.statusHeight = this.GET_SYSTEM_INFO.statusBarHeight;
		this.customHeight = this.GET_SYSTEM_INFO.customBar;
	},
	props: {
		isBack: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ''
		},
		bgColor: {
			type: String,
			default: '#ffffff'
		},
		fontColor: {
			type: String,
			default: '#000000'
		},
		isBlock: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		goBack() {
			this.$Router.back(1);
		}
	}
};
</script>

<style lang="less" scoped>
.custom-header {
	z-index: 999;
	position: fixed;
	width: 100%;
	.nav-top {
		display: flex;
		align-items: center;
		justify-content: center;
		.nav-left {
			position: absolute;
			left: 20rpx;
			text {
				font-size: 60rpx;
			}
		}
	}
	.nav-title {
		font-size: 34rpx;
		font-weight: bold;
	}
}
</style>
