<template>
	<div class="detail_food">
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" dot />
			<van-goods-action-icon icon="cart-o" text="购物车" badge="" @click="onClickcart" />
			<van-goods-action-icon icon="shop-o" text="店铺" badge="" />
			<van-goods-action-button type="warning" text="加入购物车" @click="onClickIcon" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	export default {
		name: "Detail_food",
		data() {
			return {

			}
		},
		methods: {
			onClickcart() {
				this.$router.push({
					path: '/seen'
				})
			},


			onClickIcon() {
				this.cartData = JSON.parse(localStorage.getItem("name"));

				if (this.cartData) {
					//有东西
					var that = this;
					// var abc = "";
					// 判断购物车是否有此商品
					var cartIsShop = this.cartData.some(function(item, index, self) {
						return item.cat_id == that.$store.state.contents.cat_id;
					});
					if (cartIsShop) {
						this.$toast("你已经将此商品添加至购物车了");
					} else {
						this.cartData.push(this.$store.state.contents);
						this.$toast("添加购物车成功");
					}
				} else {
					// 没有东西
					this.cartData = [];
					//没有数据
					this.cartData.push(this.$store.state.contents);
				}
				localStorage.setItem("name", JSON.stringify(this.cartData));
			}
		},
	}
</script>
<style>
	.detail_food {
		position: fixed;
		z-index: 9999;
	}
</style>
