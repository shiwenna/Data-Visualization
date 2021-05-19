/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-01-16 11:39:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-17 14:06:58
 */
import axios from 'axios'
// import configParams from './config'


axios.defaults.timeout = 16000;//超时时间16秒

axios.interceptors.request.use(function (config) {
  // console.log('before request', config)
  // config.url = `${configParams.url}${config.url}`
  // config.params = {
  //   app_id: configParams.app_id,
  //   app_secret: configParams.app_secret,
  //   lv: configParams.lv,
  //   app_client: configParams.app_client,
  // }

  // 判断localStorage中是否存在api_token
  // if (config.url.indexOf('login') === -1 && config.url.indexOf('store/api/get/setting') === -1) {
  //   const token = localStorage.getItem('storeAuthorization');
  //   if (token && token !== 'undefined') {
  //     config.headers.token = token
  //   } else {
  //     Router.push('/login')
  //   }
  // }
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  if (response.status !== 200 || response.data.status !== 1) {
    // debugger
    // Router.push('/login')
    return Promise.reject(response.data)
  }
  // if(response.status === 401){

  // }
  return response.data
}, function (error) {
  // Do something with response error
  // message.error(error.message);

  // 无权限
  // if (error.response.status === 401) {
  //   Router.push('/login')
  //   return
  // }
  return Promise.reject(error)
})

axios.defaults.baseURL = '/api/'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

export default axios;
