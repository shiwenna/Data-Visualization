<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-07-26 10:43:30
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-26 10:56:47
-->
<template>
  <!-- <div> -->
  <div class="module-wrapper">
    <div class="module-top"></div>
    <div class="module-content">
      <div class="absolute-content">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="module-bottom"></div>

  </div>
  <!-- </div> -->
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
</style>

