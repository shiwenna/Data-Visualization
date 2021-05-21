<!--
 * @Descripttion: 数据展示框 
 * @params: title：标题，num：数据，top：距离上边位移（vw)，left：距离左边位移（vw)
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-08 13:25:56
 -->
<template>
  <div class="suspension-data"
       :style="styles">
    <p class="suspension-title">{{title}}</p>
    <p class="suspension-num">{{num}}<span>万</span></p>
    <div class="corner-box">
      <i class="corner"></i>
      <i class="corner"></i>
      <i class="corner"></i>
      <i class="corner"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    num: {
      type: String,
      default: ''
    },
    top: {
      type: [String, Number]
    },
    left: {
      type: [String, Number]
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

  },
  computed: {
    styles () {
      let style = {};
      if (this.top) {
        style.top = `${this.top}vw`;
      }
      if (this.left) {
        style.left = `${this.left}vw`;
      }
      return style;
    },
  }
}
</script>

<style lang="less" scoped>
p.suspension-title {
  color: #9bdef0;
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  border-bottom: 1px solid #fff;
  line-height: 32px;
  margin: 5px auto;
  width: 60%;
}

p.suspension-num {
  color: #00f1ff;
  font-size: 24px;
  text-align: center;
  font-weight: 600;
}

.suspension-data {
  position: absolute;
  width: 150px;
  height: 80px;
  background: #ffffff10;
  transition: all 1s linear;
  animation: heart1 1.3s ease-in-out 2.7s infinite alternate;
}
@keyframes heart1 {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(5px, 8px);
  }
}
.suspension-data > p > span {
  font-size: 14px;
}
.corner {
  width: 10px;
  height: 10px;
  display: inline-block;
  position: absolute;
  border-style: solid;
  border-color: #00f1ff;
}
.suspension-data .corner:nth-child(1) {
  top: 0;
  left: 0;
  border-width: 1px 0 0 1px;
}
.suspension-data .corner:nth-child(2) {
  top: 0;
  right: 0;
  border-width: 1px 1px 0 0;
}
.suspension-data .corner:nth-child(3) {
  bottom: 0;
  right: 0;
  border-width: 0 1px 1px 0;
}
.suspension-data .corner:nth-child(4) {
  bottom: 0;
  left: 0;
  border-width: 0 0 1px 1px;
}
</style>

