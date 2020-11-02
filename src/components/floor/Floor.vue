<template>
	<div class="content">
		<div class="con" v-for="item in content">
			<!-- 时尚女装 标题 -->
			<div class="top">
				<img :src="item.floor_title.image_src" alt="">
			</div>
			<!-- 内容 -->
			<div class="botton">
				<div class="con_left">

					<div class="con_img" v-for="(index,ins) in item.product_list" v-if="ins == 0" @click="homeClick(index.navigator_url)">
						<img :src="index.image_src" alt="">
					</div>
				</div>
				<div class="con_right">
					<div class="con_img" v-for="(index,ins) in item.product_list" v-if="ins !== 0" @click="homeClick(index.navigator_url)">
						<img :src="index.image_src" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	import axios from "axios";
	// import { request } from "../assets/network.js";
	export default {
		name: 'Floor',
		data() {
			return {

				content: ''
			};
		},
		created() {
			// 内容

			axios
				.get(
					"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"
				)
				.then((res) => {
					console.log(res.data.message);
					this.content = res.data.message;
				})
				.catch((err) => {
					console.log(err);
				});

		},
		methods: {
			// onSearch(val) {
			// 	Toast(val);
			// },
			// onCancel() {
			// 	Toast('取消');
			// },
			homeClick(ids){
				console.log(ids)
				// split('=')[1];
			let	id=ids.split('=')[1]
			console.log(id)
				this.$router.push({
					path:"/searth",
					query:{querys:id}
				})
			}
		},
	}
</script>

<style>
	.content .con {
		width: 95%;
		height: 13rem;
		margin: 0 auto;
	}

	.content .con .top {
		width: 100%;
		height: 2rem;
		color: red;
		text-align: left;
	}
		.content .con .top img{
			width: 100%;
			height: 100%;
		}

	.content .con .botton {
		width: 100%;
		height: 8rem;
		display: flex;
	}

	.content .con .botton .con_left .con_img img {
		height: 9.8rem;
		width: 100%
	}

	.content .con .botton .con_left {
		width: 33%;
		height: 10rem;
	}

	.content .con .botton .con_right {
		width: 66%;
		height: 10rem;
		display: flex;
		flex-wrap: wrap;
		margin-left: 0.5rem;
		justify-content: space-between; 
	}

	.content .con .botton .con_right .con_img {
		width: 48%;
		height: 5rem;
	}

	.content .con .botton img {
		width: 100%;
		height: 95%;
	}
</style>
