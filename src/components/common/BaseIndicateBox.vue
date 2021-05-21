<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-05-21 13:53:32
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-05-21 15:00:48
-->
<template>
  <div class="h-station h-station3 h-staionActive">
    <span class="h-stationCicle"
          style="display: inline;">
          <i></i>
          <span></span>
    </span>
    <div class="h-stationBorder">
      <svg style="height: 7.8vh;vertical-align: top;"
           x="0px"
           y="0px"
           viewBox="0 0 623.5 65.3">
        <polyline points="0,0 0,600"
                  style="fill:transparent;stroke:#3ABEEB;stroke-width: 3;" />
      </svg>
    </div>
    <span class="h-stationCicle2" style="display: inline;"></span>
    <div class="h-stationTxt h-stationScale">
      <div class="h-stationT">
        <span class="">工位3</span>
        <span class="right">王日波</span>
      </div>
      <div class="h-stationList">
        <p><span>
            <i class="stationList-name">任务号：</i>
            <i class="stationList-data">MO18042901-8</i>
          </span></p>
        <p><span>
            <i class="stationList-name">摩擦板：</i>
            <i class="stationList-data">LD/00/LD1805012</i>
          </span></p>
        <p><span>
            <i class="stationList-name">吊装板：</i>
            <i class="stationList-data">00/TH/TH180417</i>
          </span></p>
        <p><span>
            <i class="stationList-name">扭矩：</i>
            <i class="stationList-data">30.25.3</i>
          </span></p>
      </div>
      <div class="h-stationB"></div>
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
    flex: {
      type: [String, Number]
    },
  },
  data () {
    return {
      classType: '',
    }
  },

  mounted () {
    this.$nextTick(function () {

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
.h-stationCicle {
  width: 1.7708333333vw;
  height: 1.7708333333vw;
  line-height: 1.7708333333vw;
  text-align: center;
  position: absolute;
  z-index: 1;
  display: none;
}

.h-stationCicle i {
  width: 1.0416666667vw;
  height: 1.0416666667vw;
  border: 0.1302083333vw solid #0e4495;
  background-color: #4ffffd;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  -webkit-animation: proactive2 2s ease-in-out infinite;
  -o-animation: proactive2 2s ease-in-out infinite;
  animation: proactive2 2s ease-in-out infinite;
}

.h-experient .h-stationCicle i {
  border-color: #fcffff;
  background-color: #00c660;
  -webkit-animation: proactive3 2s ease-in-out infinite;
  -o-animation: proactive3 2s ease-in-out infinite;
  animation: proactive3 2s ease-in-out infinite;
}

.h-fault .h-stationCicle i {
  border-color: #ffde1a !important;
  background-color: #dd3211;
  -webkit-animation: proactive4 2s ease-in-out infinite;
  -o-animation: proactive4 2s ease-in-out infinite;
  animation: proactive4 2s ease-in-out infinite;
}

@-webkit-keyframes proactive2 {
  0% {
    background-color: #4ffffd;
    transform: scale(0.9);
  }
  100% {
    background-color: #00c660;
    transform: scale(1);
  }
}
@-webkit-keyframes proactive3 {
  0% {
    background-color: #00c660;
    transform: scale(0.9);
  }
  100% {
    background-color: #4ffffd;
    transform: scale(1);
  }
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
.h-stationCicle span {
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}

.h-stationCicle2 {
  width: 1.7708333333vw;
  height: 1.7708333333vw;
  background: rgba(12, 89, 217, 0.35);
  position: absolute;
  border-radius: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: none;
}

.h-experient .h-stationCicle2 {
  background-color: rgba(42, 188, 253, 0.35);
}

.h-fault .h-stationCicle2 {
  background-color: rgba(200, 76, 50, 0.5) !important;
}

.h-station {
  position: absolute;
  width: 1.7708333333vw;
  height: 1.7708333333vw;
}

.h-station1 {
  left: 9.5%;
  top: 46%;
}

.h-station1 .h-stationBorder {
  position: absolute;
  right: 0.625vw;
  bottom: 50%;
  margin-bottom: -3px;
  z-index: 0;
}

.h-station2 .h-stationBorder {
  position: absolute;
  right: 0;
  top: 0.8854166667vw;
  margin-bottom: -3px;
  z-index: 0;
}

.h-station3 .h-stationBorder {
  position: absolute;
  left: 50%;
  top: 0.8854166667vw;
  margin-bottom: -3px;
  z-index: 0;
}

.h-station4 .h-stationBorder {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -3px;
  margin-bottom: -3px;
  z-index: 0;
}

.h-experient1 .h-stationBorder2 {
  position: absolute;
  right: 0.625vw;
  bottom: 50%;
  margin-bottom: -3px;
  z-index: 0;
}

.h-experient2 .h-stationBorder2 {
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 50%;
  margin-bottom: -3px;
  z-index: 0;
}

.h-experient3 .h-stationBorder2 {
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 50%;
  margin-bottom: -3px;
  z-index: 0;
}

.h-experient4 .h-stationBorder2 {
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 50%;
  margin-bottom: -3px;
  z-index: 0;
}

.h-station svg g path,
.h-station svg polyline {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  stroke-width: 3;
  -webkit-transition: stroke-dashoffset 1s;
  transition: stroke-dashoffset 1s;
}

.h-experient2 svg g path,
.h-experient3 svg g path,
.h-station2 svg g path,
.h-station4 svg g path {
  stroke-dashoffset: -1000;
  -webkit-transition: stroke-dashoffset 0.6s;
  transition: stroke-dashoffset 0.6s;
}

.h-station.h-staionActive svg g path,
.h-station.h-staionActive svg polyline {
  stroke-dashoffset: 0;
}

.h-fault svg path,
.h-fault svg polyline {
  stroke: #f3a923 !important;
}

.h-station1 .h-stationTxt {
  bottom: 11vh;
  left: -17vh;
}

.h-station2 .h-stationTxt {
  top: 12vh;
  right: -4vh;
}

.h-station3 .h-stationTxt {
  top: 7vh;
  left: -8vh;
}

.h-station4 .h-stationTxt {
  top: 1.5vh;
  right: -36vh;
}

.h-experient1 .h-stationTxt2 {
  bottom: 5.5vh;
  left: -12vh;
}

.h-experient2 .h-stationTxt2 {
  top: 26vh;
  left: 25.3vh;
}

.h-experient3 .h-stationTxt2 {
  top: 12.5vh;
  left: 15.5vh;
}

.h-experient4 .h-stationTxt2 {
  top: -5vh;
  left: 9.5vh;
}

.h-stationScale {
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

.h-stationTxt {
  width: 18.125vw;
  background-size: 100%;
}

.h-station.h-staionActive .h-stationScale {
  height: auto;
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  opacity: 1;
}

.h-stationT {
  // height: 3.9583333333vw;
  line-height: 2.4739583333vw;
  background-image: url(../../assets/img/h-proLine-box-top.png);
  background-position: center top;
  background-size: 100%;
  color: #01fab7;
  font-size: 1.7592592593vh;
  font-weight: bold;
  padding: 1.484375vw 2.8645833333vw 0 2.8645833333vw;
}

.h-fault .h-stationT {
  color: #ff5908;
}

.h-fault .h-stationT {
  background-image: url(../../assets/img/h-proLine-box-top-fault.png);
}

.h-stationList {
  margin-bottom: -2.1354166667vw;
}

.h-stationList p {
  background-image: url(../../assets/img/h-proLine-box-center.png);
  background-repeat-y: repeat;
  background-size: 100%;
  line-height: 1.5625vw;
  color: #bbf6ff;
  font-size: 0.8333333333vw;
  padding: 0 1.8229166667vw 0 1.8229166667vw;
}

.h-fault .h-stationList p {
  background-image: url(../../assets/img/h-proLine-box-center-fault.png);
}

.h-stationList p span {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 0.78125vw 0 0.78125vw;
  font-size: 0;
  vertical-align: top;
}

.h-stationList p span > i {
  font-style: normal;
  display: inline-block;
  vertical-align: top;
  font-size: 0.8333333333vw;
  line-height: 1.2;
  word-break: break-all;
}

.h-stationList p span > i.stationList-name {
  width: 28%;
  text-align: right;
}

.h-stationList p span > i.stationList-data {
  padding-left: 0.2604166667vw;
  width: 70%;
}

.h-stationList p.h-active,
.h-stationList p:last-child {
  color: #fff;
  font-weight: bold;
  height: 1.875vw;
  line-height: 1.875vw;
  background: none;
}

.h-stationList p.h-active,
.h-stationList p:last-child i {
  vertical-align: middle;
}

.h-stationList p.h-active span,
.h-stationList p:last-child span {
  background-image: url(../../assets/img/h-proBox-active.png);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 100%;
}

.h-fault .h-stationList p.h-active span,
.h-fault .h-stationList p:last-child span {
  background-image: url(../../assets/img/h-proBox-active-fault.png);
}

.h-stationB {
  background-image: url(../../assets/img/h-proLine-box-bottom.png);
  background-position: center bottom;
  background-size: 100%;
  height: 3.3854166667vw;
}

.h-fault .h-stationB {
  background-image: url(../../assets/img/h-proLine-box-bottom-fault.png);
}
.right {
    float: right;
}
</style>
