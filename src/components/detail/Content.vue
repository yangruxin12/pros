<template>
	<div class="content" >
		<div class="price">
			<span>￥</span>{{this.$store.state.contents.goods_price}}
		</div>
		<div class="title">
			<div>
				{{this.$store.state.contents.goods_name}}
			</div>
			
			<div>
				<p v-show="collect"><van-icon name="star" color="red" @click="Icon" size="1rem"/></p>
				<p v-show="!collect"><van-icon name="star-o"  @click="Icon" size="1rem"/></p>
				<p style="font-size: 0.8rem;">收藏</p>
			</div>
		</div>
		<div class="con">
			<div style="text-align: left; color: red; font-size: 0.6rem; padding: 0.3rem 0.5rem;">图片详情</div>
			<div v-html="this.$store.state.contents.goods_introduce"></div>
		</div>
	</div>
</template>

<script>
	import {Toast} from 'vant';
	import axios from "axios";
	export default {
		name: "Content",
		data() {
			return {
				content:"",
				contents:"",
				checked: true,
				collect:false
			}
		},
		components: {
			
		},
		created() {
			// 轮播图
			// console.log(this.$route.query.id)
			this.detail = this.$route.query.id
			axios
				.get(
					"https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=" + this.detail
				)
				.then((res) => {
					console.log(res.data.message)
					this.content = res.data.message;
					 this.$store.state.contents= res.data.message;
					console.log(this.$store.state.contents)
				})
				.catch((err) => {
					console.log(err);
				});
			
			axios
				.get(
					"https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=" + this.detail
				)
				.then((res) => {

					this.contents = res.data.message.pics;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		methods: {
			Icon(){
				console.log(this.$store.state)
				this.collect=!this.collect
				if(!this.collect){
					// localStorage.setItem("collect","true")
				}
			}
		},
	}
</script>

<style scoped>
	.content{
		height: 100%;
		position: relative;
	}
	.content .price{
		margin-top: -1.5rem;
		position: absolute;
		text-align: left;
		color: red;
	}
	.title{
		display: flex;
	}
	.title div{
		border-bottom: 6px solid #C8C8C8;
	}
	.title div:nth-child(1){
		flex: 8.5;
		font-size: 0.9rem;
		border-right: 1px solid #000000;

		height: 58px;
		overflow: hidden;
	}
	.title div:nth-child(2){
		flex: 1.5;
		
	}
	.con{
		
	}
	.con img{
		width: 100%;
		height: 10rem;
	} 
</style>
