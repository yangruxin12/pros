<template>
	<div class="Conter_side"  v-if="itemsCon.length">
			<van-col span="6">
				<van-sidebar v-model="activeKey" >
					<div v-for="(item,index) in itemsCon">
						<van-sidebar-item :title="item.cat_name"/>
					</div>		
				</van-sidebar>
			</van-col>
			<van-col span="20">
					<div v-for="(items,index) in itemsCon[activeKey].children" >
						<p class="title">{{items.cat_name}}</p>
						<div class="Conter_sides"> 
							<div v-for="(items,index) in items.children" class="Conter_sides_div" @click="Conter_sides(items.cat_name)">
								<img :src="items.cat_icon" alt="">
								<p>{{items.cat_name}}</p>
							</div>	
						</div>
					</div>		
			</van-col>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name:"ConterSide",
	  data() {
	    return {
			itemsCon:[],
	      activeKey: 0,
	    };
	  },
	  methods:{
		  Conter_sides(id){
			  console.log(id)
			  this.$router.push({
				  path:"/searth",
				  query:{querys:id}
			  })
		  }
	  },
	  created() {
	  	axios
	  		.get(
	  			"https://api-hmugo-web.itheima.net/api/public/v1/categories"
	  		)
	  		.then((res) => {
				// console.log(res)
				console.log(res.data.message)
	  			this.itemsCon= [...res.data.message];
	  		})
	  		.catch((err) => {
	  			console.log(err);
	  		});
	  }
	};
</script>

<style scoped>
	.Conter_side{
		display: flex;
	}
	.Conter_sides{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content:flex-start;
	}
	.Conter_sides_div{
		font-size: 0.8rem;
		width: 26%;
	}
	.Conter_sides_div img{
		width: 100%;
	}
	.Conter_sides_div:last-child {
	    margin-right: auto;
	}
	.title {
		margin: 0.7rem;
		font-size: 0.8rem;
	}
	.van-col--6{
		height: 27rem;
		overflow: auto;
	}
	.van-col--20{
		overflow: auto;
		height: 27rem;
	}
</style>
