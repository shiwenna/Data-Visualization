/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-10-10 11:02:35
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-05-27 13:16:04
 */
import Vue from 'vue'
import App from './App.vue'
import '@/styles/global.less'
import router from './router/router'
import store from './store'
import '@/components'
import Axios from '@/axios'

// import echarts from 'echarts' //引入echarts
// Vue.prototype.$echarts = echarts

Vue.prototype.$axios = Axios
Vue.config.productionTip = false;
Vue.prototype.store = store;
new Vue({
  store,
  router,
  render: h => h(App),
  data: {
     Bus: new Vue()
   }
}).$mount('#app')
