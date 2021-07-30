<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-29 13:26:57
-->
<template>
  <!-- <BaseBorderS :title='"机构入住老人分析"'>
    <template v-slot:content> -->
  <div id="eCharts_3"
       class='eCharts_3'
       style=""></div>
  <!-- </template>
  </BaseBorderS> -->
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");

require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
// require("echarts/lib/component/toolbox");


export default {
  name: 'InAnalysis',
  props: {
    eChartsOptions: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      option: {}
    }
  },
  methods: {
    drawCharts (id, option) {
      let myChart = echarts.init(document.getElementById(id));
      myChart.setOption(option);
    },
  },
  created () {
  },
  mounted () {
    // let iconList = [
    //   // 'image://' + require('../../assets/img/icon10.png'),
    //   // 'image://' + require('../../assets/img/icon6.png'),
    //   // 'image://' + require('../../assets/img/icon7.png'),
    // ];
    // let legendList = this.eChartsOptions.data.map((item, index) => {
    //   return {
    //     name: item.name,
    //     icon: iconList[index],
    //     textStyle: {
    //       color: '#fff'
    //     }
    //   }
    // });
    this.option = {
      // backgroundColor:"#101e44",
      grid: {
        // top: 100,
        // containLabel: true
        left: '10%',
        top: '5%',
        bottom: '12%',
        right: '5%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(255,255,255,0)' // 0% 处的颜色
              }, {
                offset: 0.5,
                color: 'rgba(255,255,255,1)' // 100% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(255,255,255,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
        },
      },
      xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
          formatter: '{value}',
          fontSize: 12,
          // margin:20,
          textStyle: {
            color: "#7ec7ff"
          }
        },
        axisLine: {
          lineStyle: {
            color: "#243753"
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#243753"
          }
        },
        axisTick: {
          show: false
        },
        data: ['2021/07/20', '2021/07/22', '2021/07/23', '2021/07/24', '2021/07/25', '2021/07/26', '2021/07/27', '2021/07/28']
      }],
      yAxis: [
        {
          boundaryGap: false,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#7ec7ff"
            }
          },
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
            lineHeight: 40
          },
          splitLine: {
            lineStyle: {
              color: "#243753"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#283352"
            }
          },
          axisTick: {
            show: false
          }
        }
      ],
      series: [{
        name: "报名",
        type: "line",
        smooth: true,
        showSymbol: true,
        // symbolSize: 8,
        // zlevel: 3,
        // itemStyle:{
        //     color:'#19a3df',
        //     borderColor:"#a3c8d8"
        // },
        // lineStyle: {
        //     normal: {
        //         width:6,
        //         color: "#19a3df",
        //     }
        // },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                offset: 0,
                color: "rgba(88,255,255,0.5)"
              },
              {
                offset: 0.8,
                color: "rgba(88,255,255,0)"
              }
              ],
              false
            ),
          }
        },
        data: [1, 233, 100, 180, 199, 433, 210, 180]
      }]
    };
  },
  watch: {
    option: {
      deep: true,
      handler (val) {
        this.option = val;
        this.drawCharts('eCharts_3', this.option);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.eCharts_3 {
  width: 450px;
  height: 250px;
}
</style>