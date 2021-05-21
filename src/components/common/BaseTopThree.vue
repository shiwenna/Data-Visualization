<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-05-19 15:07:45
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-05-20 09:54:53
-->
<template>

  <div class="team-info-wrapper h-rowMoudle">
  <div class="h-moudleOut best">
									<div class="h-moudle">
										<div class="inner-title clearfix">
											<strong>某班某组</strong>
											<div class="pull-right count-box">
												计划总数<span class="count">  6200</span>（件）
											</div>
										</div>
										<div class="team-content clearfix">
											<div class="t-item">
												<div class="t-cont">
													<strong>200</strong>
													<p>在制数量</p>
												</div>
											</div>
											<div class="t-item">
												<div class="t-cont  finish-count">
													<strong>198</strong>
													<p>完成数量</p>
												</div>
											</div>
											<div class="t-item">
												<div class="t-cont">
													<strong>98%</strong>
													<p>合格数量</p>
												</div>
											</div>
										</div>
									<slot name="content"></slot>
									</div>
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
.team-info-wrapper {
  // height: 24%;
  margin-top: -1.0416666667vw;
}

.team-info-wrapper .h-moudleOut {
  // height: 100%;
  // width: 100%;
}

.team-info-wrapper .inner-title {
  margin-bottom: 1.3888888889vh;
  line-height: 5.7407407407vh;
  font-size: 1.4814814815vh;
  color: #b2d6ff;
  border-bottom: 1px solid #24344a;
}

.team-info-wrapper .inner-title strong {
  position: relative;
}

.team-info-wrapper .inner-title strong:after {
  display: none;
  content: '';
  position: absolute;
  top: -2.3148148148vh;
  right: -1.4583333333vw;
  width: 2.7777777778vh;
  height: 2.7777777778vh;
  background: url(../../assets/img/best.png) no-repeat center;
  background-size: 100% 100%;
}

.team-info-wrapper .inner-title .count-box {
  margin-top: -0.462962963vh;
  font-size: 1.2962962963vh;
  color: #a7c9f0;
}

.team-info-wrapper .inner-title .count {
  font-size: 2.7777777778vh;
  color: #ff5908;
  font-weight: bold;
}

.team-info-wrapper .team-content {
  margin-left: -0.2864583333vw;
  margin-right: -0.2864583333vw;
}

.team-info-wrapper .team-content .t-item {
  float: left;
  width: 33.33%;
  padding: 0 0.2864583333vw;
  box-sizing: border-box;
}

.team-info-wrapper .team-content .t-cont {
  padding-top: 0.9259259259vh;
  width: 100%;
  height: 6.4814814815vh;
  background-color: #15273f;
  border-radius: 0.8854166667vw;
  overflow: hidden;
  text-align: center;
  font-size: 1.9444444444vh;
  color: #fff;
}

.team-info-wrapper .team-content .t-cont p {
  font-size: 1.4814814815vh;
  color: #0ab6fd;
}

.h-moudleOut {
  padding: 1.0416666667vw 0.46875vw 0;
  // float: left;
  overflow-y: hidden;
}

.h-moudleOut .h-moudle {
  margin-top: 0;
  height: 90%;
}
.h-moudle {
  background-color: #111d30;
  border-radius: 0.2604166667vw 0.2604166667vw 0 0;
  box-shadow: 0 0 0.78125vw rgba(0, 0, 0, 0.4);
  margin-top: 0.2604166667vw;
  padding: 0 0.9375vw 0.9375vw 0.9375vw;
}

.h-moudle:first-child {
  margin-top: 0;
}

.clearfix {
  *zoom: 1;
}

.clearfix:before,
.clearfix:after {
  display: table;
  line-height: 0;
  content: "";
}

.clearfix:after {
  clear: both;
}
.pull-right {
    float: right;
}
.team-info-wrapper .h-moudleOut.best .h-moudle {
  border: 1px solid #259bff;
  background-color: #0f213a;
}

.team-info-wrapper .h-moudleOut.best .t-cont {
  background-color: #172a43;
}

.team-info-wrapper .h-moudleOut.best .finish-count {
  color: #01fab7;
  font-size: 2.5vh;
  line-height: 1.2;
}

.team-info-wrapper .h-moudleOut.best .inner-title strong:after {
  display: block;
}

</style>
