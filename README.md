<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-02-24 14:10:31
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-05-19 14:43:59
 -->
# big-data-front-vue


### 简介

> 2021/05/21更新

大屏展示系统。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### 目录结构
```
'|-- big-data-front-vue',
  '    |-- .gitignore',
  '    |-- babel.config.js',
  '    |-- package-lock.json',
  '    |-- package.json',
  '    |-- README.md',
  '    |-- vue.config.js',//后台地址配置
  '    |-- yarn-error.log',
  '    |-- yarn.lock',
  '    |-- build',
  '    |   |-- module.js', //根目录运行node build/module 生成页面views和router
  '    |-- public',
  '    |   |-- favicon.ico',
  '    |   |-- index.html',
  '    |-- src',
  '        |-- App.vue',
  '        |-- main.js',
  '        |-- store.js',
  '        |-- assets',
  '        |   |-- 404.png',
  '        |   |-- border.png',
  '        |   |-- icon_fail_red.png',
  '        |   |-- logo_qd.png',
  '        |   |-- success.png',
  '        |   |-- title.png',
  '        |   |-- css',
  '        |   |-- modules',
  '        |-- axios',
  '        |   |-- index.js',//axios 进出口拦截器
  '        |-- components',
  '        |   |-- index.js',
  '        |   |-- common',//通用组件例如header、footer
  '        |   |-- errorpage',
  '        |       |-- 404.vue',
  '        |-- mixins',
  '        |   |-- common.js',
  '        |   |-- public.js',
  '        |-- router',
  '        |   |-- router.js',
  '        |   |-- modules',//具体页面路由信息
  '        |-- styles',
  '        |   |-- global.less',
  '        |-- views',
  '            |-- Home.vue',
```


### 多屏适配注意事项

1.整体的布局还是使用百分比

2.使用rem的最佳场景是,遇到例如多列带有图片的列表,常常需要图片固定宽高比

3.字体一般情况建议使用px

4.出现1px像素线的地方，仍旧使用border-width:1px;而不是border-width:.1rem


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
