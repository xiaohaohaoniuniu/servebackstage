import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
	state:{
		isLogin:false,
		nowUser:null,
		repairList:[]
	},
	mutations:{
		setLoginIng(state,res){
			state.nowUser = res;
		},
		nowIsLogin(state,res){
			state.isLogin = res;
		},
		repairList(state,res){
			state.repairList = res;
		},
		addrepair(state,data){
			state.repairList.push(data);
		},
		// admin
		delrepair(state,data){
           var index = state.repairList.indexOf(data);
           state.repairList.splice(index,1);
		}
	}
})
export {store}