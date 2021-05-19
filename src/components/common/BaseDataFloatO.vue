<!--
 * @Descripttion: 数据展示图1
 * @params: listData：数据列表，flex：flex布局
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-08 13:30:38
 -->
<template>
  <div :style="styles">
    <ul class="map-statistics">
      <li v-for="(item,index) in listData"
          :key="index">
        <span class="map-data">{{item.num}}<span>{{item.unit}}</span></span>
        <span class="map-title">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      default () {
        return []
      }
    },
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
ul.map-statistics {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.map-statistics > li {
  background-image: url(../../assets/img/statistics.png);
  width: 237px;
  height: 250px;
  position: relative;
}
.map-statistics > li > span {
  display: block;
  text-align: center;
  line-height: 120px;
}
.map-statistics > li > .map-title {
  color: #dfffff;
  font-size: 18px;
  position: relative;
  width: 100%;
  bottom: -180px;
  line-height: 60px;
}

.map-statistics > li > .map-data {
  color: #fff;
  font-size: 36px;
  transition: all 2s;
  position: absolute;
  // top: -20px;
  width: 100%;
  animation: heart 1.3s ease-in-out 2.7s infinite alternate;
}
@keyframes heart {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(0, 10px);
  }
}
.map-statistics > li > .map-data > span {
  font-size: 16px;
}
</style>

