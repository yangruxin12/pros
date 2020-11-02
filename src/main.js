import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { Search,Swipe, SwipeItem, GoodsAction, GoodsActionIcon, GoodsActionButton,NavBar,Checkbox, CheckboxGroup,Icon  } from 'vant';
// import { TreeSelect,Sidebar, SidebarItem,Col,Row,Tab, Tabs,List,Field } from 'vant';

// Vue.use(TreeSelect);
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);
// Vue.use(Search);
// Vue.use(Swipe);
// Vue.use(SwipeItem);
// Vue.use(GoodsAction);
// Vue.use(GoodsActionButton);
// Vue.use(GoodsActionIcon);
// Vue.use(NavBar);
// Vue.use(Checkbox);
// Vue.use(CheckboxGroup);
// Vue.use(Icon);
// Vue.use(Sidebar);
// Vue.use(SidebarItem);
// Vue.use(Col);
// Vue.use(Row);
// Vue.use(Tab);
// Vue.use(Tabs);
// Vue.use(List);
// Vue.use(Field);


import flexible from "./assets/flexible.js";
flexible();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
