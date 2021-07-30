<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-07-26 10:43:30
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-26 13:17:07
-->
<template>
  <div>
    <span>总服务次数 </span>
    <button class="num-button"
            v-for="(item,index) in '12345'.split('')"
            :key="index"> {{item}}
    </button>
    <span>次</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    subTitle: {
      type: Array,
      default () {
        return []
      }
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
.num-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 44px;
  margin: 5px;
  padding: 5px 10px;
  font-size: 30px;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
  -webkit-appearance: none;
  background-color: #08b8ae;
  border: 1px solid #08b8ae;
  color: white;
  font-weight: bolder;
}
</style>

