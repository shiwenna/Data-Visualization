/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-06-03 11:23:45
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-19 14:42:02
 */
export default function loadBDMap (v, ak, tp, poly) {
  return new Promise((resolve, reject) => {
    if (tp !== 'webgl') {
      //聚合API依赖基础库,因此先加载基础库再加载聚合API
      asyncLoadBaiduJs(v, ak, tp)
        .then(() => {
          //调用加载第三方组件js公共方法加载其他资源库
          //加载聚合API
          ///MarkerClusterer_min.js依赖TextIconOverlay.js。因此先加载TextIconOverlay.js
          // asyncLoadJs('http://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay.js')
          //   .then(() => {
          asyncLoadJs('//api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js')
            // asyncLoadJs(poly)
            .then(() => {
              resolve()
              return true
            })
            .catch(err => { reject(err) })
          // })
          // .catch(err => { reject(err) })
        })
        .catch(err => {
          reject(err)
        })
    } else if (tp == 'webgl') {
      asyncLoadBaiduGlJs(v, ak, tp)
        .then(() => {
          //调用加载第三方组件js公共方法加载其他资源库
          //加载聚合API
          asyncLoadJs('https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.58/dist/mapvgl.min.js')
            .then(() => {
          asyncLoadJs('https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.58/dist/mapvgl.threelayers.min.js')
            .then(() => {
              resolve()
              return true
            })
            .catch(err => { reject(err) })
          })
          .catch(err => { reject(err) })
        })
        .catch(err => {
          reject(err)
        })
    }
  })
}
/**
 * @description 加载百度地图基础组件js
 * @param {string} v 百度地图版本号 默认版本号3.0
 * @param {string} ak 百度密钥  默认秘钥WPOQci8ySGioCEGt2zMtgjrLofr937E7
 * @param {string} tp 百度type
 */
export function asyncLoadBaiduJs (v, ak, tp) {
  return new Promise((resolve, reject) => {
    if (typeof BMap !== 'undefined') {
      resolve(BMap)
      return true
    }
    window.onBMapCallback = function () {
      resolve(BMap)
    }
    tp = tp == undefined ? '' : tp
    ak = ak == undefined ? 'WPOQci8ySGioCEGt2zMtgjrLofr937E7' : ak
    v = v == undefined ? '3.0' : v
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `http://api.map.baidu.com/api?v=${v}&type=${tp}&ak=${ak}&callback=onBMapCallback`
    script.onerror = reject
    document.head.appendChild(script)
  })
}
/**
 * @description 加载百度地图基础组件js
 * @param {string} v 百度地图版本号 默认版本号3.0
 * @param {string} ak 百度密钥  默认秘钥WPOQci8ySGioCEGt2zMtgjrLofr937E7
 * @param {string} tp 百度type
 */
export function asyncLoadBaiduGlJs (v, ak, tp) {
  return new Promise((resolve, reject) => {
    if (typeof BMapGL !== 'undefined') {
      resolve(BMapGL)
      return true
    }
    window.onBMapCallback = function () {
      resolve(BMapGL)
    }
    tp = tp == undefined ? '' : tp
    ak = ak == undefined ? 'WPOQci8ySGioCEGt2zMtgjrLofr937E7' : ak
    v = v == undefined ? '1.0' : v
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `http://api.map.baidu.com/api?v=${v}&type=${tp}&ak=${ak}&callback=onBMapCallback`
    script.onerror = reject
    document.head.appendChild(script)
  })
}

/**
 * @description 加载第三方组件js公共方法
 * @param {string} url
 */
export function asyncLoadJs (url) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.head.appendChild(script)
    script.onload = () => {
      resolve()
    }
    script.onerror = reject
  })
}