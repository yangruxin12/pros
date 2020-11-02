<template>
  <div class="me">
      <header>
        <!-- 标题 -->
        <div class="title">
        		   <van-nav-bar left-text="购物商城" right-text="按钮" @click-right="onClickRight" />
        </div>
          <div class="photo">

          </div>
          <div class="nickname">YANGASD1</div>
          
          <div class="header_bar">
              <div class="header_bar_item">
                <span class="shop_num">0</span>
                <p>收藏的店铺</p>
              </div>
              <div class="header_bar_item">
                <span class="shoucang_num">0</span>
                <p>收藏的商品</p>
              </div>
              <div class="header_bar_item">
                <span class="foot_num">0</span>
                <p>我的足迹</p>
              </div>
          </div>
      </header>
      <!-- 我的订单 -->
      <div class="order">
          <h4 class="order_title"><span></span> 我的订单 </h4>
          <div class="order_detail">
                <div class="order_detail_item">
                      <p>全部订单</p>
                </div>
                <div class="order_detail_item">
                      <p>代付款</p>
                </div>
                <div class="order_detail_item">
                     
                      <p>待收货</p>
                </div>
                <div class="order_detail_item">
                     
                      <p>退款退货</p>
                </div>
          </div>
      </div>
      <!-- 其他栏 -->
      <div class="else_bar">
           <p>收货地址管理</p>
           <p>联系客服</p>
           <p>意见反馈</p>
           <p>关于我们</p>
           <p>把应用推荐给其他人</p>
      </div>
  </div>
</template>

<script>
// import {CHANGETAB} from "../store/modules/mutation-type"
export default {
    name:'Me',
	methods:{
		onClickRight() {
			Toast('按钮');
		}
	}
}
</script>

<style scoped>
	/deep/ .van-nav-bar__text {
		color: #FFFFFF;
	}
	/deep/  .van-nav-bar .van-icon {
		color: #FFFFFF;
	}
	.van-nav-bar{
		background-color: #FF0000;
	}
   .me{
     width: 100%;
     height:100%;
     background: #EAF1E9;

   }
   header{
     width:100%;
     height: 200px;
     background: red;
     position:relative;
   }
   .title{
     text-align: center;
     font-size:18px;
     height:35px;
     line-height: 35px;
     color:white;
   }
   .photo{
     width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-68%);
    text-align: center;
    background: #fff;
    border-radius: 20px;
   }
   .photo img{
     width: 80%;
     margin-top:15%;
   }
   .nickname{
     color:#fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,130%);
   }
   .header_bar{
     width: 97%;
    height: 80px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: -29%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    font-size: 16px;
   }
   .header_bar .header_bar_item{
      text-align: center;
   }
   .header_bar_item span{
     color:red;
   }
   .header_bar_item p{
     margin-top:5px;
   }
   .order{
     width:100%;
     height:100px;
     margin:0 auto;
     background: white;
 
   }
   .order .order_title{
     height: 37px;
     line-height: 37px;
     display: flex;
     margin-top:70px;
     font-size:20px;
     font-weight:500;
     border-bottom:1px solid #e6e6e6;
   }
   .order .order_title span{
     width:5px;
     height:15px;
     background:red;
     margin:auto 5px;
   }
   .order_detail{
     display:flex;
     justify-content:space-around;
   }
   .order_detail .order_detail_item{
     text-align:center;
     margin-top:5px;
   }
   .order_detail .order_detail_item img{
     width:25px;
   }
   .order_detail .order_detail_item p{
     font-size:16px;
     width:100%;
   }
   .else_bar{
     width:100%;
     margin:15px auto;
     background:#fff;
   }
   .else_bar p{
     height:40px;
     line-height: 40px;
     padding-left:15px;
     font-size:16px;
	 text-align: left;
     border-bottom: 1px solid #e6e6e6;

   }
</style>