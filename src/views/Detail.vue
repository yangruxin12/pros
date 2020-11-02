<template>
	<div class="detail">

		<van-nav-bar left-text="商品详情" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />

		<!-- 轮播图 -->
		<Slide></Slide>
		<!-- 内容 -->
		<Content></Content>
		<!-- 商品导航 -->
		<DetailFood></DetailFood>

	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	import {
		EventBus
	} from "../utils/event-bus.js"
	let Slide = () => import('../components/detail/slide.vue')
	let DetailFood = () => import('../components/detail/Detail_food.vue')
	let Content = () => import('../components/detail/Content.vue')
	import axios from "axios";
	export default {
		name: "Detail",
		data() {
			return {

			}
		},
		components: {
			DetailFood,
			Slide,
			Content
		},
		created() {

		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			onClickRight() {
				Toast('按钮');
			},
		},
	}
</script>

<style scoped>
	.detail {
		width: 100%;
		height: 100%;
		z-index: 99999;
		background-color: #FFFFFF;
	}

	.slide {
		border-bottom: 1px solid #C8C8C8;
	}

	.van-nav-bar {
		background-color: red;
	}

	/deep/ .van-nav-bar__text {
		color: #FFFFFF;
	}
	/deep/  .van-nav-bar .van-icon {
		color: #FFFFFF;
	}

</style>
