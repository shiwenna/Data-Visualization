/*
 * @Descripttion: 路由文件。modules中路由无需另引入，且其中路由遵循XXXX.router.js命名规则
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-09-18 14:06:18
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-27 16:06:14
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/hcm001/Home.vue'

let routerList = [];
function importAll (r) {
  r.keys().forEach(
    (key) => routerList = routerList.concat(r(key).default)
  )
}

importAll(require.context('./modules', true, /\.router\.js$/))

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    // {
    //   component: BaceHome,
    //   path: '/',
    //   children: [
        {
          path: '/',
          name: '/',
          component: Home
        },
        {
          path: '/hcm001',
          name: 'hcm001',
          component: Home,
          children: [...routerList]
        },
        // ...routerList,

      // ]
    // },
    {
      path: '*',
      name: '',
      component: () => import('@/components/errorpage/404')
    }
  ]
})
