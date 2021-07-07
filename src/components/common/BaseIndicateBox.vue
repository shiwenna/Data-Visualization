<!--
 * @Descripttion: 地图详情指示框 
 * @params: title：标题，subtitle：副标题，colorstatus：颜色状态可选参数：fault-红色、finished-绿色，dataList：数据列表
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-05-21 13:53:32
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-07 14:03:29
-->
<template>
  <div class="line-station"
       :class="{[activeclass]:true,[colorstatus]:true}">
    <span class="line-station-circle">
      <i></i><span></span></span>
    <div class="line-station-border">
      <svg version="1.1"
           id="图层_3"
           style="height: 6vh;vertical-align: top;"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:xlink="http://www.w3.org/1999/xlink"
           x="0px"
           y="0px"
           viewBox="0 0 423.5 121.3"
           enable-background="new 0 0 423.5 121.3"
           xml:space="preserve">
        <g>
          <path d="M419.1 121 h-2.3 V16 c0-4.9-4-8.9-8.9-8.9 H2.2 V4.9">
          </path>
        </g>
      </svg>
    </div>
    <div class="line-station-content station-scale">
      <div class="line-station-top">
        <span class="">{{title}}</span>
        <span class="right">{{subtitle}}</span>
      </div>
      <div class="line-station-info">
        <div class="line-station-info-item"
             v-for="(item,index) in dataList">
          <div class="item-inner">
            <span class="item-inner-title">{{item.name}}</span>
            <span class="item-inner-text">{{item.value}}</span>
          </div>
        </div>
      </div>
      <div class="line-station-info-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '工位2'
    },
    colorstatus: {
      type: String,
      default: ''
    },
    subtitle: {
      type: [String, Number],
      default: '2010-06-01'
    },
    dataList: {
      type: Array,
      default () {
        return [
          {
            name: "型号",
            value: "SYS540H5"
          }, {
            name: "订单编号",
            value: "MO18042901098"
          }, {
            name: "产品唯一码",
            value: "LD1805012"
          }, {
            name: "生产进度",
            value: "100%"
          }
        ]
      }
    }
  },
  data () {
    return {
      classType: '',
      activeclass: '',

    }
  },

  mounted () {
    this.$nextTick(function () {
      this.activeclass = 'active'
    })
  },
  created () {
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
.line-station {
  position: absolute;
  // width: 1.7708333333vw;
  // height: 1.7708333333vw;
}

.line-station svg path,
.line-station svg polyline {
  fill:transparent;
  stroke:#3ABEEB; 
  stroke-linejoin: round;
}

.line-station svg g path,
.line-station svg polyline {
  stroke-dasharray: 1000;
  stroke-dashoffset: -1000;
  stroke-width: 3;
  -webkit-transition: stroke-dashoffset .8s;
  transition: stroke-dashoffset .8s;
}

.line-station-circle {
  width: 1.7708333333vw;
  height: 1.7708333333vw;
  line-height: 1.7708333333vw;
  text-align: center;
  position: absolute;
  z-index: 1;
  opacity: 0;
  border-radius: 50%;
  background-color: rgba(42, 188, 253, 0.35);
}
.line-station-circle i {
  width: 1.0416666667vw;
  height: 1.0416666667vw;
  border: 0.1302083333vw solid #fcffff;
  background-color: #4ffffd;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  -webkit-animation: proactive3 2s ease-in-out infinite;
  -o-animation: proactive3 2s ease-in-out infinite;
  animation: proactive3 2s ease-in-out infinite;
}
.line-station-content {
  width: 18.2291666667vw;
  background-size: 100%;
}
.line-station-content.station-scale {
  position: absolute;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  perspective-origin: 50% 50%;
  perspective: 800px;
  -webkit-transform-style: preserve-3d;
  -webkit-transition: all ease-out 0.3s;
  transition: all ease-out 0.3s;
  overflow: hidden;
  height: 0;
  opacity: 0;
}
.line-station-top {
  // height: 3.9583333333vw;
  line-height: 2.4739583333vw;
  background-image: url(../../assets/img/h-proLine-box-top.png);
  background-position: center top;
  background-size: 100%;
  color: #1fcdff;
  font-size: 1.7592592593vh;
  font-weight: bold;
  padding: 1.484375vw 2.8645833333vw 0 2.8645833333vw;
}
.line-station-top .right {
  float: right;
}
.line-station-info {
  margin-bottom: -2.1354166667vw;
}
.line-station-info-item {
  background-image: url(../../assets/img/h-proLine-box-center.png);
  background-repeat-y: repeat;
  background-size: 100%;
  line-height: 3.2407407407vh;
  min-height: 3.2407407407vh;
  color: #bbf6ff;
  font-size: 0.8333333333vw;
  padding: 0 1.8229166667vw 0 1.8229166667vw;
}
.line-station-info-item .item-inner {
  display: inline-block;
  width: 100%;
  height: 100%;
  // padding: 0 0.78125vw;
  vertical-align: top;
}
.line-station-info-item .item-inner-title {
  padding-top: 0.5555555556vh;
  font-size: 1.2037037037vh;
  line-height: 1.6666666667vh;
  display: block;
  float: left;
  width: 7em;
  vertical-align: top;
  word-break: break-all;
  text-align: right;
}
.line-station-info-item .item-inner-text {
  display: block;
  margin-left: 6em;
  padding-top: 0.5555555556vh;
  line-height: 1.6666666667vh;
  font-size: 1.4814814815vh;
  word-break: break-all;
}
.line-station-info-item:last-child {
  color: #fff;
  font-weight: bold;
  height: 3.2407407407vh;
  line-height: 3.2407407407vh;
  background: none;
}
.line-station-info-item:last-child .item-inner {
  padding-top: 0.1851851852vh;
  background-image: url(../../assets/img/h-proBox-active.png);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 110%;
}
.line-station-info-item:last-child .item-inner-text {
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
}
.line-station-info-bottom {
  z-index: -1;
  background-image: url(../../assets/img/h-proLine-box-bottom.png);
  background-position: center bottom;
  background-size: 100%;
  height: 3.3854166667vw;
}

.line-station.active .station-scale {
  height: auto;
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  opacity: 1;
}
// .line-station.station1 {
//   left: 9.5%;
//   top: 52%;
// }
// .line-station.station1 .line-station-border {
//   position: absolute;
//   right: 0.625vw;
//   bottom: 50%;
//   margin-bottom: -3px;
//   z-index: 0;
// }
// .line-station.station1 .line-station-content {
//   bottom: 11vh;
//   left: -17vh;
// }
// .line-station.station2 {
//   left: 23.5%;
//   top: 69%;
// }
// .line-station.station2 .line-station-border {
//   position: absolute;
//   right: 0;
//   top: 0.8854166667vw;
//   margin-bottom: -3px;
//   z-index: 0;
// }
// .line-station.station2 .line-station-content {
//   top: 9vh;
//   right: -4vh;
// }
// .line-station.station2 svg g path {
//   stroke-dashoffset: -1000;
//   -webkit-transition: stroke-dashoffset 0.6s;
//   transition: stroke-dashoffset 0.6s;
// }
// .line-station.station3 {
//   left: 46%;
//   top: 48%;
// }
// .line-station.station3 .line-station-border {
//   position: absolute;
//   left: 50%;
//   top: 0.8854166667vw;
//   margin-bottom: -3px;
//   z-index: 0;
// }
// .line-station.station3 .line-station-content {
//   top: 7vh;
//   left: -8vh;
// }
// .line-station.station4 {
//   left: 60%;
//   top: 28%;
// }
.line-station .line-station-border {
  position: absolute;
  position: absolute;
  left: 1vw;
  top: 0.7vw;
  /* margin-left: 1.844vw; */
  /* margin-bottom: 1.844vw; */
  z-index: 0;
}
.line-station .line-station-content {
  top: 4.5vh;
  right: -32vh;
}
// .line-station svg g path {
//   stroke-dashoffset: -1000;
//   -webkit-transition: stroke-dashoffset 1s;
//   transition: stroke-dashoffset 1s;
// }


// .line-station.station5 {
//   left: 48%;
//   top: 24%;
// }
// .line-station.station5 .line-station-border {
//   position: absolute;
//   right: 0.625vw;
//   bottom: 50%;
//   margin-bottom: -3px;
//   z-index: 0;
// }
// .line-station.station5 .line-station-content {
//   bottom: 3vh;
//   left: -20vh;
// }

.line-station.active svg g path,
.line-station.active svg polyline {
  stroke-dashoffset: 0 ;
  
}

.line-station.finished .line-station-circle {
  background-color: rgba(0, 198, 96, 0.35);
}
.line-station.active .line-station-circle {
  transition: all ease-out 0.1s;
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
}
.line-station.finished .line-station-circle i {
  background-color: #01fab7;
  -webkit-animation: proactive2 2s ease-in-out infinite;
  -o-animation: proactive2 2s ease-in-out infinite;
  animation: proactive2 2s ease-in-out infinite;
}
.line-station.finished .line-station-top {
  color: #01fab7;
  background-image: url(../../assets/img/h-proLine-box-top-finish.png);
}
.line-station.finished .line-station-info-item {
  background-image: url(../../assets/img/h-proLine-box-center-finish.png);
}
.line-station.finished .line-station-info-item:last-child {
  background-image: none;
}
.line-station.finished .line-station-info-item:last-child .item-inner {
  background-image: url(../../assets/img/h-proBox-finish.png);
}
.line-station.finished .line-station-info-bottom {
  background-image: url(../../assets/img/h-proLine-box-bottom-finish.png);
}
.line-station.finished svg path,
.line-station.finished svg polyline {
  stroke: #01fab7;
}

@-webkit-keyframes proactive2 {
  0% {
    background-color: #01fab7;
    transform: scale(0.9);
  }
  100% {
    background-color: #00c660;
    transform: scale(1);
  }
}
@-webkit-keyframes proactive3 {
  0% {
    background-color: #4ffffd;
    transform: scale(0.9);
  }
  100% {
    background-color: #005696;
    transform: scale(1);
  }
}



.line-station.fault .line-station-circle {
  // background-color: rgba(0, 198, 96, 0.35);
  background-color: rgba(200, 76, 50, 0.5)
  // color: #ff5908;
}
.line-station.fault .line-station-circle i {
  background-color: #dd3211;
  -webkit-animation: proactive4 2s ease-in-out infinite;
  -o-animation: proactive4 2s ease-in-out infinite;
  animation: proactive4 2s ease-in-out infinite;
}
.line-station.fault .line-station-top {
  color: #dd3211;
  background-image: url(../../assets/img/h-proLine-box-top-fault.png);
}
.line-station.fault .line-station-info-item {
  background-image: url(../../assets/img/h-proLine-box-center-fault.png);
}
.line-station.fault .line-station-info-item:last-child {
  background-image: none;
}
.line-station.fault .line-station-info-item:last-child .item-inner {
  background-image: url(../../assets/img/h-proBox-active-fault.png);
}
.line-station.fault .line-station-info-bottom {
  background-image: url(../../assets/img/h-proLine-box-bottom-fault.png);
}
.line-station.fault svg path,
.line-station.fault svg polyline {
  stroke: #dd3211 ;
  // stroke: #f3a923
}

@-webkit-keyframes proactive4 {
  0% {
    background-color: #dd3211;
    transform: scale(0.9);
  }
  100% {
    background-color: #fdee29;
    transform: scale(1);
  }
}

.right {
  float: right;
}
</style>
