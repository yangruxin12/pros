<template>
  <div class="about">
	  <div class="title">
		   <van-nav-bar left-text="分类" right-text="按钮" @click-right="onClickRight" />
	  </div>
	  
	  <!-- 搜索 -->
	  <div class="searth">
		<input type="text" value="搜索" @click="Searth">
	  </div>
	
		<!-- <Contnet></Contnet> -->
		<ConterSide></ConterSide>
  </div>
</template>

<script>
	import {Toast} from 'vant';
	import axios from "axios";
	let Contnet = () => import("../components/AboutCon/Content.vue");
	let ConterSide = () => import("../components/AboutCon/Conter_side.vue");
	export default {
		name: "About",
		data() {
			return {
				value:''
			}
		},
		components: {
			Contnet,
			ConterSide
		},
		created() {

		},
		methods: {
			onClickLeft() {
				this.$router.push({
					path: '/home'
				})
			},
			onClickRight() {
				Toast('按钮');
			},
			Searth(){
				this.$router.push({
					path:'/searth'
				})
			}
		},
	}
</script>
<style scoped>
	.van-nav-bar {
		background-color: red;
	}
	
	/deep/ .van-nav-bar__text {
		color: #FFFFFF;
	}
	/deep/  .van-nav-bar .van-icon {
		color: #FFFFFF;
	}
	.searth{
		width: 100%;
		height: 2rem;
		background-color: #FF0000;
	}
	.searth input{
		width: 90%;
		border-radius: 1rem;
		height: 80%;
		line-height: 1.5rem;
		font-size: 0.7rem;
		text-align: center;
		color: #C8C8C8;
		border: none;
	}
	
	/* 标题 搜索 */
	
	.title{
		background-color: #FF0000;
	}
</style>
