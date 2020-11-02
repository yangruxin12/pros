<template>
	<div class="slide">
		<van-swipe :autoplay="3000" :height="300">
		  <van-swipe-item v-for="(image, index) in slide" :key="index">
		    <img :src="image.pics_big" style="width: 100%; height: 100%;"/>
		  </van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import {Toast} from 'vant';

	import axios from "axios";
	export default {
		name: "Slide",
		data(){
			return {
				slide:'',
				detail:''
			}
		},
		components:{
		
		},
		created() {
				// 轮播图
				console.log(this.$route.query.id)
				this.detail=this.$route.query.id
				axios
					.get(
						"https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id="+this.detail
					)
					.then((res) => {
						// console.log(res.data.message.pics)
						this.slide = res.data.message.pics;
					})
					.catch((err) => {
						console.log(err);
					});			
		},
		methods: {
			onClickLeft() {
				this.$router.push({path:'/home'})
			},
			onClickRight() {
				Toast('按钮');
			},
		},
	}
</script>

<style>
</style>
