<template>
	<Tabbar>
    <!--  在html中使用别名:
     1:~assets/images/tabbar/jinpai.png
     2:@/assets/images/tabbar/home.png -->
          <tabbar-item path="/home" title_active_color="red">
 <!--           <img src="@/assets/images/tabbar/home.png" slot="item_icon">
            <img src="@/assets/images/tabbar/homez.png" slot="item_icon_active" /> -->
			<van-icon name="wap-home-o" slot="item_icon" size="25"/>
			<van-icon name="wap-home" slot="item_icon_active" size="25" color="red"/>
            <p slot="item_title">首页</p>
          </tabbar-item>
          <tabbar-item path="/about" title_active_color="blue">
   <!--         <img src="~assets/images/tabbar/jinpai.png" slot="item_icon">
            <img src="~assets/images/tabbar/jinpaiz.png" slot="item_icon_active"> -->
			<van-icon name="comment-o" slot="item_icon" size="25"/>
			<van-icon name="comment" slot="item_icon_active" size="25" color="red"/>
            <p slot="item_title">分类</p>
          </tabbar-item>
          <tabbar-item path="/seen">
        <!--    <img src="~assets/images/tabbar/time.png" slot="item_icon">
            <img src="~assets/images/tabbar/timez.png" slot="item_icon_active"> -->
			<van-icon name="cart-o" slot="item_icon" size="25"/>
			<van-icon name="cart" slot="item_icon_active" size="25" color="red"/>
            <p slot="item_title">购物车</p>
          </tabbar-item>
          <tabbar-item path="/me">
    <!--        <img src="~assets/images/tabbar/me.png" slot="item_icon">
            <img src="~assets/images/tabbar/mez.png" slot="item_icon_active"> -->
			<van-icon name="friends-o" slot="item_icon" size="25"/>
			<van-icon name="friends" slot="item_icon_active" size="25" color="red"/>
            <p slot="item_title">我的</p>
          </tabbar-item>
    </Tabbar>
</template>
<script>
let Tabbar = ()=>import ("./TabBar");
let TabbarItem = ()=>import ("./TabBarItem");
	export default {
		name:"TabBarMain",
		components:{
          Tabbar,
          TabbarItem
       }
	}
</script>
<style scoped>
</style>