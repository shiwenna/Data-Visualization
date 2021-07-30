<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-07-26 10:43:30
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-27 09:15:27
-->
<template>
  <div class="module-wrapper">
    <div class="module-top">
      <div class="inner-title">
        <span>{{title}}</span>
        <span class="title-line"></span>
      </div>
    </div>
    <div class="module-content">
      <div class="absolute-content">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="module-bottom"></div>

  </div>

</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: '123'
    },
    title: {
      type: String,
      default: '标题内容'
    },
  },
  data () {
    return {
      activeKey: this.value,
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
// .inner-title {
//     position: absolute;
//     top: 0;
//     left: 0.8854166667vw;
//     right: 0.8854166667vw;
//     color: #e5e5e6;
//     padding: 1.3888888889vh 0 1.3888888889vh 0;
//     border-bottom: 1px solid #05fadf;
//     z-index: 2;
// }
// .inner-title:after {
//     content: '';
//     position: absolute;
//     bottom: -0.3240740741vh;
//     width: 5.3125vw;
//     height: 0.6481481481vh;
//     background: url(../images/title-light.png) no-repeat center;
//     background-size: 100% 100%;
//     -webkit-animation: light 5s linear infinite;
//     -o-animation: light 5s linear infinite;
//     animation: light 5s linear infinite;
// }
</style>

