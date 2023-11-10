<template>
	<view style="z-index: 999; position: fixed; bottom: 0; height: 120rpx; width: 100%">
		<!-- 自定义底部tabbar -->
		<u-tabbar :value="currentTab" :mid-button="false" activeColor="#F1573D" safeAreaInsetBottom fixed placeholder border>
			<u-tabbar-item v-for="(item, index) in tabBarList" :key="index" :text="item.text" @click="handleTabBar(item.pagePath, item.itemIndex)">
				<image class="wh24" slot="active-icon" :src="item.selectedIconPath"></image>
				<image class="wh24" slot="inactive-icon" :src="item.iconPath"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
import { GET_SYSTEM_INFO } from '@/store/getter-types.js';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			currentTab: 0,
			tabBarList: []
		};
	},
	created() {
		this.tabBarList = this.$store.state.tabBarList;
		this.currentTab = this.$store.state.currentTab;
	},
	computed: {
		...mapGetters([GET_SYSTEM_INFO])
	},
	props: {},
	methods: {
		handleTabBar(path, index) {
			this.$Router.pushTab({ path });
		}
	}
};
</script>

<style lang="less" scoped></style>
