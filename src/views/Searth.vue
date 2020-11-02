<template>
	<div class="search">
		<van-nav-bar left-text="搜索中心" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<div class="search_input">
			<form action="/">
				<van-search v-model="value" show-action placeholder="请输入搜索关键词" @input="onSeachs" @cancel="onCancel" />
			</form>
		</div>
		<SearthCon v-if="value<=0"></SearthCon>
		<div v-else v-for="item in list" class="list" @click="onChi(item.goods_id)">
			<p>{{item.goods_name}}</p>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
let SearthCon=()=>import ("../components/search/SearchCon.vue");
// let TabBarMain = () => import("../components/tabbar/TabBarMain.vue");
	import axios from "axios";
	export default {
		name: "Search",
		data() {
			return {
				value: '',
				list:[]
			};
		},
		components:{
			SearthCon
		},
		methods: {
			onCancel() {
				Toast('取消');
			},
			onSeachs(val){
				console.log(val.length)
				axios
					.get(
						"https://api-hmugo-web.itheima.net/api/public/v1/goods/search?query="+val
					)
					.then((res) => {
						console.log(res.data.message.goods)
						this.list=res.data.message.goods
						
					})
					.catch((err) => {
						console.log(err);
					});
			},
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				Toast('按钮');
			},
			onChi(image){
				this.$router.push({path:'/detail',query:{id:image}})
			}
		},
		computed:{}
	}
</script>


<style>
	.list{
		height: 1rem;
		padding: 1rem;
		font-size: 0.8rem;
		text-align: left;
		border-bottom: 1px solid #000000;
	}
	.list p{
		height: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	/* 取消颜色 */
	.van-search__action{
		color: #FFFFFF;
	}
	/* 搜索框背景 */
	.van-search{
		width: 100%;
		background-color: red;
	}
	/* 搜索框边框 */
	.van-search__content{
		border-radius: 4rem;
	}
	.search {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		z-index: 999999;
		position: fixed;
	}

	.van-nav-bar {
		background-color: red;
	}

	.van-nav-bar .van-icon {
		color: #FFFFFF;
	}

	.van-nav-bar__text {
		color: #FFFFFF;
	}
</style>
