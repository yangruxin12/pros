import Vue from 'vue'
import Vuex from 'vuex'
import * as types from "./modules/mutation-types";
import modulesA  from "./modules/moduleA";
import modulesB  from "./modules/moduleB";
import mutations from "./modules/mutations";
import actions from "./modules/actions";
import getters from "./modules/getters";
Vue.use(Vuex)


// 总结:
// 模块内的mutations,actions,getters都是直接交给Store,而模块内的状态需要统过store.state.模块名.状态获取
export default new Vuex.Store({
  state: {
	contents:""
  },
  mutations,
  actions,
  getters,
  modules: {
  	modelea:modulesA,
  	modeleb:modulesB
  }
})
