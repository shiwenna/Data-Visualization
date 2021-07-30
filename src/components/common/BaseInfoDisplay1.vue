<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-07-26 10:43:30
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-26 16:15:29
-->
<template>
  <!-- <div> -->
    <button class="van-button">
      <div class="van-button__content">
        <i class="van-button__icon"></i>
        <span class="van-button__text">{{title}}
        </span>
        <span class="van-button__num">
          {{value}}
        </span>
        <!-- <span class="van-button__text">人</span> -->
      </div>
    </button>
  <!-- </div> -->
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
.van-button {
  width: 195px;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 44px;
  margin: 10px 13px;
  padding: 15px;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  -webkit-transition: opacity .2s;
  transition: opacity .2s;
  -webkit-appearance: none;
  background-color: #1b73768a;
  border: 1px solid #05E0CC;
}
.van-button__icon{
  position:absolute;
  top:0;
  left:0;
  /* width: 0px;
  height: 0px; */
  /* border-radius: 8px 0 0 0; */
  border-top:15px solid #05E0CC;
  border-right:15px solid transparent;
}
.van-button__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 100%;
  color:#05E0CC;
}
.van-button__num{
  font-size: 20px;
  font-weight: bolder;
  color:white;
  margin-left:15px;
  
}
</style>

