<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-07-26 10:43:30
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-26 16:24:35
-->
<template>
  <div class="right-first-box" :style="`width:${100/num}%`">
    <span>{{title}}</span>
    <button class="normal-button" :class="status">
      {{value}}
    </button>
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
    status: {
      type: String,
      default: 'default'
    },
    num: {
      type: [String, Number],
      default: '3'
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
.right-first-box {
  // width: 50%;
  display: inline-block;
  padding-top: 10px;
  > span {
    color: rgb(5, 224, 204);
    min-width: 100px;
    display: inline-block;
  }
}

.normal-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 35px;
  margin: 5px;
  padding: 5px 10px;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  -webkit-appearance: none;
  border: none;
  color: white;
  font-weight: bolder;
  min-width: 135px;
  
}
.default{
  background: linear-gradient(180deg, #074353, #08b8ae);
  
}
.info{
  background: linear-gradient(180deg, #0C498A, #67A2E1);
  
}
.danger{
  background: linear-gradient(180deg, #9B2732, #FF5E6B);
  
}

</style>

