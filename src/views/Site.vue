<template>
	<div class="site">
		<van-nav-bar left-text="新增地址" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<!-- 输入任意文本 -->
		<van-field v-model="text" label="收货人" />
		<!-- 输入手机号，调起手机号键盘 -->
		<van-field v-model="tel" type="tel" label="手机号码" />
		<!-- 允许输入正整数，调起纯数字键盘 -->
		<van-field v-model="digit" type="digit" label="地区信息" />
		<!-- 允许输入数字，调起带符号的纯数字键盘 -->
		<van-field v-model="number" type="text" label="详细地址" />
		<!-- 输入密码 -->
		<van-field v-model="password" type="text" label="邮编" />
	</div>
</template>

<script>
	import {
			Toast
		} from 'vant';
		import axios from "axios";
		export default {
			name: "site",
			data() {
				return {
					tel: '',
					      text: '',
					      digit: '',
					      number: '',
					      password: '',
				};
			},
			methods: {
				onClickLeft() {
					this.$router.push({
						path: '/seen'
					})
				},
				onClickRight() {
					Toast('按钮');
				},
			},
		}
</script>

<style scoped>
	/deep/ .van-nav-bar {
		background-color: red;
	}
	
	/deep/ .van-nav-bar .van-icon {
		color: #FFFFFF;
	}
	
	/deep/ .van-nav-bar__text {
		color: #FFFFFF;
	}
</style>
