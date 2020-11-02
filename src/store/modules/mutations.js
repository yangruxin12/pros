import * as types from "./mutation-types";
export default {
  	[types.CHANGEREG](state,payload){
       state.isShowRegister = payload;
  	}
}