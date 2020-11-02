<template>
	<div class="seen">
		<div class="title">
				   <van-nav-bar left-text="购物车" right-text="按钮" @click-right="onClickRight" />
		</div>
		<!-- 添加地址 -->
		<div class="site">
			<p @click="siteChick">添加收货地址</p>
		</div>
		<div class="shopping">
			购物车
		</div>
		<SeenCon></SeenCon>
	</div>
</template>

<script>
import {Toast} from 'vant';
	import axios from "axios";
	let Contnet = () => import("../components/AboutCon/Content.vue");
	let ConterSide = () => import("../components/AboutCon/Conter_side.vue");
	let SeenCon = () => import("../components/seen/Seen_con.vue");
	export default {
		name: "About",
		data() {
			return {
				value:'',
				collect:""
			}
		},
		components:{
			ConterSide,
			SeenCon
		},
		methods: {
			onClickRight() {
				Toast('按钮');
				
			},
			siteChick(){
				this.$router.push({
					path:"/site"
				})
			}
		}
	}
</script>

<style scoped>
	.van-nav-bar {
		background-color: red;
	}
	
/deep/  .van-nav-bar__text{
		color: #FFFFFF;
	}
 /deep/ .van-nav-bar .van-icon {
		color: #FFFFFF;
	}
	
	.title{
		background-color: #FF0000;
	}
	/* 地址 */
	.site{
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: center;
		 align-items: center;   
	}
	.site p{
		width: 60%;
		margin: 0 auto;
		height: 2rem;
		color: #42B983;
		border: 1px solid #42B983;
		line-height: 2rem;
	}
	/* 购物车 */
	.shopping{
		color: red;
		height: 1.3rem;
		text-align: left;
		font-size: 0.8rem;
		line-height: 1.3rem;
		border-bottom: 1px solid red;
		border-top: 1px solid red;
		width: 100%;
	}
	.comm{
		width: 100%;
	}
	.comm img{
		width: 5rem;
	}
</style>
