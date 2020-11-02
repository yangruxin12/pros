<template>
	<div class="seen">
		<div class="seens">
			<div class="comm" v-if="collect" v-for="(item,index) in collect" v-model="collect">
				<div class="comm_l">
					<input type="checkbox" v-model="abc" :value="item" @change="bcd">
				</div>
				<div class="comm_img">
					<img :src="item.goods_big_logo" alt=""></div>
				<div class="comm_title">
					<p>{{item.goods_name}}</p>
					<p>
						<span style="color: red;">{{item.num*item.goods_price}}</span>
						<span>
							<van-stepper v-model="item.num" @plus="add(index)" @minus="min(index)" /></span>
						<!-- <span style="font-size: 0.7rem;" @click="delete(index)"><button>删除</button></span> -->
						<span style="font-size: 0.7rem;" @click="deletes(index)"><button>删除</button></span>
					</p>
				</div>
				<div class="bar">
					<van-submit-bar :price="pice" button-text="提交订单" @submit="onSubmit">
						<van-checkbox v-model="checked" @click="onSubmit1">全选</van-checkbox>
					</van-submit-bar>
				</div>
			</div>
			<div class="comm" v-else>
				没有商品
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	import axios from "axios";
	export default {
		name: "About",
		data() {
			return {
				value: 0,
				collect: [],
				checked: false,
				abc: []
			}
		},
		created() {
			var data = localStorage.getItem("name");
			if(data){
				this.collect = JSON.parse(data)
				// 添加属性
				for (var i = 0; i < this.collect.length; i++) {
					this.$set(this.collect[i], "num", 1);
					this.$set(this.collect[i], "add", true);
				}
				console.log(this.collect)
			}
		},
		computed: {
			pice() {
				var all = 0;
				for (var item of this.abc) {
					if (item.add == true) {
						all += item.num * item.goods_price * 100;
					} else {
						all += 0 * 100;
					}
				}
				return all;
			}
		},
		methods: {
			// 全选按钮
			onSubmit1() {
				if (this.checked) {
					// console.log(this.checked)
					this.abc = this.collect;
				} else {
					this.abc = []
				}
			},
			onSubmit() {
				Toast("按钮1")
			},
			onClickEditAddress() {
				Toast("按钮")
			},
			deletes(index) {
				console.log(this.abc.length)
				var names = localStorage.getItem("name");
				for(var i=0;i<this.abc.length;i++){
					if(this.abc[i].cat_id == this.collect[index].cat_id){
						console.log(i)
						this.abc.splice(i, 1);
					}
				}
				this.loc = JSON.parse(names);
				this.loc.splice(index, 1);
				this.collect.splice(index, 1);
					console.log(this.loc)
					console.log(this.collect)
				localStorage.setItem("name", JSON.stringify(this.loc));
				// this.$router.go(0)
			},
			add(index) {
				this.collect[index].num++;
			},
			min(index) {
				this.collect[index].num--;
			},
			bcd() {
				console.log(this.abc)
			}
		},
		watch: {
			abc(newName, oldName) {
				if (newName.length == this.collect.length) {
					this.checked = true;
				} else {
					this.checked = false;
				}
			}
		}
	}
</script>

<style scoped>
	.seen {
		position: absolute;
		padding-bottom: 7rem;
		height: 18rem;
		overflow: auto;
	}

	.van-submit-bar {
		bottom: 2.4rem;
		border: 1px solid #C8C8C8;
	}

	.comm {
		width: 100%;
		height: 6rem;
		border-bottom: 1px solid #C8C8C8;
		display: flex;
		justify-content: center;
		align-items: auto;
	}

	.comm img {
		width: 4rem;
		height: 4rem;
	}

	.comm_l {
		flex: 1;
		/* height: 2rem; */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.comm_img {
		flex: 3;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.comm_title {
		flex: 6;
	}

	.comm_title p {
		height: 50%;
	}

	.comm_title p:nth-child(1) {
		padding-top: 1rem;
		font-size: 0.7rem;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 2rem;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;

	}

	.comm_title p:nth-child(2) {
		display: flex;
		justify-content: space-around;
		align-items: center;

	}

	.comm_title p:nth-child(2) span {
		/* padding: 0.5rem; */
	}
</style>
