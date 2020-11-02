<template>
	<div class="search">
		<van-tabs v-model="active">
		  <van-tab title="综合">
			  <van-list
			    v-model="loading"
			    :finished="finished"
			    finished-text="没有更多了"
			    @load="onLoad"
			  >
			   <van-row v-for="item in list">
				   <div class="search_nav" @click="seaCon(item.goods_id)">
					   <div class="search_img">
						   <img :src="item.goods_small_logo" alt="">
					   </div>
					   <div class="search_title">
						   <p>   
						   {{item.goods_name}}
						   </p>
						   <p>{{item.goods_price}}</p>
					   </div>
				   </div>
				    <!-- <div v-show="item.length<=0"></div> -->
			   </van-row>
			   <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
			  </van-list>
		  </van-tab>
		  <van-tab title="销售">内容 2</van-tab>
		  <van-tab title="价格">内容 3</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"Search",
		data(){
			return{
				search:"",
				pagenum:"",
				pagesize:"",
				query:"",
				 active: 0,
				   list: [],
				   loading: false,
				   finished: false,
			}
		},
		created() {
			// this.search=this.$route.query.id;
			this.query=this.$route.query.querys;
			// console.log(this.query)
			axios
				.get(
					// "https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid="+ this.search
					"https://api-hmugo-web.itheima.net/api/public/v1/goods/search?query="+this.query
				)
				.then((res) => {
					// console.log(res.data.message.goods)
					this.list = res.data.message.goods;
				})
				.catch((err) => {
					console.log(err);
				});
		},
		 methods: {
		    onLoad() {
		      // 异步更新数据
		      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
		      setTimeout(() => {
		        for (let i = 0; i < 10; i++) {
		          this.list.push(this.list.length + 1);
		        }
		
		        // 加载状态结束
		        this.loading = false;
		
		        // 数据全部加载完成
		        if (this.list.length >= this.list.length) {
		          this.finished = true;
		        }
		      }, 1000);
		    },
			
			seaCon(id){
				this.$router.push({
					path:"/detail",
					query:{id:id}
				})
			}
		  }
	}
</script>

<style scoped>
	.van-tabs__content{
		width: 100%;
	}
	.van-list{
		width: 100%;
		overflow: auto;
		height: 27rem;
	}
	.search_title{
		width: 61%;
	}
	.search_nav{
		width: 100%;
		display: flex;
		box-sizing: border-box;
		/* border-bottom: 1px solid #919191; */
	}
	.search_img{
		width: 30%;
	}
	.search_img img{
		width: 5rem;
	}
	.search_title p:nth-child(1){
		font-size: 0.7rem;
		text-align: left;
		width: 100%;
		margin-left: 2%;
		padding-left: 1rem;
		 text-overflow: -o-ellipsis-lastline;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  display: -webkit-box;
		  -webkit-line-clamp: 2;
		  line-clamp: 2;
		  -webkit-box-orient: vertical;
		
	}
	.search_title p:nth-child(2){
		font-size: 0.7rem;
		text-align: left;
		color: red;
		padding-left: 1rem;
		margin-top: 1rem;
	}
</style>
