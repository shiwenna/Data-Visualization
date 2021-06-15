/*
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-11 11:18:40
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-06-11 14:07:34
 */
// 作为配置文件，直接导出配置对象即可
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  // publicPath: '/weike/',//注意nginx对应配置
  devServer: {
    disableHostCheck: true,
    clientLogLevel: 'warning',
    // 代理器中设置/api,项目中请求路径为/api的替换为target
    proxy: {
      '/api/': {
        target: 'http://192.168.30.50:8082/hcss',
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
        //pathRewrite方法重写url
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  },
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //   } else {
  //     // 为开发环境修改配置...
  //   }
  // },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'border-radius-base': '8px',
          'border-radius-sm': '8px',
          // 'font-size-base': '1rem',
        },
        javascriptEnabled: true
      },
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 1920,
            viewportHeight: 1080,
            unitPrecision: 3,
            propList: [
              "*"
            ],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/,
            // include: /\/src\//
          })
        ]
      }
    }
  }
}
