<!--
 * @Descripttion: BorderB 基础边框-大 
 * @params: flex：弹性布局
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-19 16:33:52
 -->
<template>
  <div :style="styles">
    <div class="main-details">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flex: {
      type: [String, Number]
    },
  },
  data () {
    return {
    }
  },

  mounted () {
  },
  created () {
  },
  methods: {
  },
  computed: {
    styles () {
      let style = {};
      if (this.flex) {
        style.flex = `${this.flex}`;
      }
      return style;
    },
  }
}
</script>

<style lang="less" scoped>
.main-details {
  min-height: 500px;
  min-width: 50%;
  height: 90%;
  position: relative;
  border: 1.5em solid transparent;
  border-image: url(../../assets/img/bord-map.png) 25 25 round;
  margin: 20px 0;
  // padding: 20px 0;
}
</style>

