<!--
 * @Descripttion: 漂浮星空组件 背景透明 css3实现 使用后注意页面性能
 * @params:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-05-22 17:34:09
 -->
<template>
  <div>
    <div id="start1"></div>
    <div id="start2"></div>
    <div id="start3"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  mounted () {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
// 首先定义个mixin函数，参数是@n, 条件是只有@n > 0的时候才执行函数里的代码
.mixin(@n) when(@n > 0) {
  box-shadow+: ~`Math.round(Math.random() * 2000) + "px" + " " +
    Math.round(Math.random() * 2000) + "px #1a7ff2" `;
  .mixin((@n - 1));
}

#start1 {
  .mixin(200);
  width: 1px;
  height: 1px;
  animation: animStar 50s linear infinite;
  animation-delay: -10s;
}
#start2 {
  .mixin(100);
  width: 2px;/* px-to-viewport-ignore */
  height: 2px;/* px-to-viewport-ignore */
  animation: animStar 100s linear infinite;
  animation-delay: -8s;
}
#start3 {
  // /* px-to-viewport-ignore-next */
  .mixin(50);
  /* px-to-viewport-ignore-next */
  width: 3px;  /* px-to-viewport-ignore */
  /* px-to-viewport-ignore-next */
  height: 3px; /* px-to-viewport-ignore */
  animation: animStar 150s linear infinite;
  animation-delay: -5s;
}
@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>

