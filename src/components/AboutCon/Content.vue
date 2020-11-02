<template>
	<div class="content">
		
		<van-tree-select height="100%" :items="items" :main-active-index.sync="active">
		  <template #content>
			<div v-for="(item,index) in itemsCon"  v-if="active === index">
				<div v-for="(items,indexs) in item.children" class="nav_title">
					<p class="title">{{items.cat_name}}</p>
					<div class="nav_titles">
						<div v-for="(itemss,indexss) in items.children" class="nav_classify">
							<img :src="itemss.cat_icon" alt="">
							<p>{{itemss.cat_name}}</p>
						</div>
					</div>
				</div>
			</div>
		  </template>
		</van-tree-select>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		name:"Content",
		  data() {
		    return {
				active:0,
		      items: [],
			  itemsCon:''
		    };
		  },
		  created() {
		  	axios
		  		.get(
		  			"https://api-hmugo-web.itheima.net/api/public/v1/categories"
		  		)
		  		.then((res) => {
					this.itemsCon= res.data.message;
					var arr = res.data.message;
					console.log(this.itemsCon);
					for(let a=0;a<arr.length;a++){
						var obj = {text:""}
						 obj.text = arr[a].cat_name;
						 this.items.push(obj)
					}
		  		})
		  		.catch((err) => {
		  			console.log(err);
		  		});
		  }
	}
</script>

<style scoped>
	.van-tree-select{
		height: 40rem;
		overflow: auto;
	}
	.van-tree-select__nav{
		height: 40rem;
		overflow: auto;
	}
	.van-tree-select__content{
		height: 40rem;
		overflow: auto;
	}
	.title {
		margin: 0.7rem;
		font-size: 0.8rem;
	}
	.nav_titles{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content:flex-start;
	}
	.nav_titles div:last-child {
	    margin-right: auto;
	}
	.nav_classify{
	width: 26%;
	}
	.nav_classify img{
		width: 100%;
	}
</style>
