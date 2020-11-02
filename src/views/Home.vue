<template>
  <div class="home">
	  <!-- 标题 -->
	<div class="title">
		<van-nav-bar left-text="购物商城" right-text="按钮" @click-right="onClickRight" />
	</div>
	
	<!-- 搜索 -->
	<div class="searth">
			<input type="text" value="搜索" @click="Searth">
	</div>
		<!-- 轮播图 -->
		<div class="slide">
			<van-swipe :autoplay="3000" :height="195">
			  <van-swipe-item v-for="(image, index) in images" :key="index" @click="Slide(image.goods_id)">
			    <img :src="image.image_src" style="width: 100%;"/>
			  </van-swipe-item>
			</van-swipe>
		</div>
		<!-- 导航分类 -->
		<div class="nav">	
			<div v-for="item in nav">
				<p><img @click="AboutsNav" :src="item.image_src" alt=""></p>
				<!-- <p>{{item.name}}</p> -->
			</div>
		</div>
		<!-- 内容 -->
		<Floor></Floor>
  </div>
</template>

<script>
import axios from "axios";

let Floor = () => import("../components/floor/Floor.vue");
let TabBarMain = () => import("../components/tabbar/TabBarMain.vue");

import {EventBus} from "../utils/event-bus.js"
// import { request } from "../assets/network.js";
export default {
  name: 'Home',
  data() {
      return {
        value: '',
		images:'',
		nav:'',
      };
    },
	components:{
		Floor,
		TabBarMain
	},
	created(){
		// [轮播图
		axios
			.get(
				"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
			)
			.then((res) => {
				// console.log(res.data.message);
				this.images = res.data.message;
			})
			.catch((err) => {
				console.log(err);
			});
			// 导航
			axios
				.get(
					"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"
				)
				.then((res) => {
					// console.log(res.data.message);
					this.nav = res.data.message;
				})
				.catch((err) => {
					console.log(err);
				});
	},
    methods: {
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast('取消');
      },
	  onClickRight() {
	  	Toast('按钮');
	  },
	  Searth(){
	  	this.$router.push({
	  		path:'/searth'
	  	})
	  },
	  Slide(image){
		  console.log(image);
		  // EventBus.$emit("detail",image)
		  this.$router.push({path:'/detail',query:{id:image}})
	  },
	  AboutsNav(){
		   this.$router.push({path:'/about'})
	  }
    },
}
</script>
<style scoped>	

	/deep/ .van-nav-bar__text {
		color: #FFFFFF;
	}
	/deep/  .van-nav-bar .van-icon {
		color: #FFFFFF;
	}
	.van-nav-bar{
		background-color: #FF0000;
	}
	@import url("../assets/base.css");
	.van-search{
		background-color: #FF0000;
	}
	.title{
		background-color: #FF0000;
	}
	.nav{
		display: flex;
		justify-content: space-around;
		margin: 0.5rem 0;
	}
	.nav div{
		width: 23%;
	}
	.nav div p:nth-child(1) img{
		width: 3rem;
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
</style>
