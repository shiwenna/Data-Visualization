/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-01-16 10:31:45
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-03 15:28:42
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


let store = {
  searchBack: ''
}

store = new Vuex.Store({
  state: {
    searchBack: '',
    baseSelectStatus: false
  },
  actions: {
    saveBaseSelectStatus: ({commit, state}, config = {}) => {
      commit('setBaseSelectStatus', (state, {
        baseSelectStatus: config
      }))
    }
  },
  mutations: {
    setBaseSelectStatus: function (state, action) {
      state.baseSelectStatus = action.baseSelectStatus
    }
  }
});

export default store;  
