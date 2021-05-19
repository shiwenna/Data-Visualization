<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-01 17:26:12
-->
<template>
  <BaseBorderS :title='"服务满意度趋势图"'>
    <template v-slot:content>
      <div id="eCharts_1" class='eCharts_1' style=""></div>
    </template>
  </BaseBorderS>
</template>

<script>
  // 引入基本模板
  let echarts = require("echarts/lib/echarts");
  require("echarts/lib/chart/bar");
  require("echarts/lib/chart/line");
  require("echarts/lib/component/grid");

  export default {
    name: 'SatisfactionTrend',
    props: {
      eChartsOptions: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        option: {}
      }
    },
    methods: {
      drawCharts(id, option) {
        let myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option);
      },
    },
    created() {
    },
    mounted() {
      let serviceData = this.eChartsOptions.data;
      this.option = {
        grid: {
          top: '15%',
          left: '5%',
          right: '5%',
          bottom: '10%'
        },
        xAxis: [{
          name: "(月)",
          nameTextStyle: {
            color: "#B3D8F7",
            fontSize: 14
          },
          type: 'category',
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#B3D8F7"
            }
          },
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }],
        yAxis: [{
          name: "(满意度)",
          nameTextStyle: {
            color: "#B3D8F7",
            fontSize: 14
          },
          type: 'value',
          min: 0,
          max: 100,
          splitNumber: 5,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#B3D8F7"
            }
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#B3D8F7"
            }
          }
        }],
        series: [{
          type: 'line',
          showAllSymbol: true,
          symbol: 'circle',
          color: '#fff',
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: '#B3D8F7',
              width: 2,
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                1, 0, 0., 1,
                [{
                  offset: 0,
                  color: '#71C9FF80'
                },
                  {
                    offset: 1,
                    color: '#68E28780'
                  }
                ]
              )
            }
          },
          data: serviceData
        },
          {
            type: 'bar',
            data: (function () {
              let res = [];
              let len = 12;
              while (len--) {
                res.push(99);
              }
              return res;
            })(),
            itemStyle: {
              normal: {
                color: '#122B6064'
              }
            },
            barWidth: 32, // 柱图宽度
          }]
      }
    },
    watch: {
      option: {
        deep: true,
        handler(val) {
          this.option = val;
          this.drawCharts('eCharts_1', this.option);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  #eCharts_1 {
    width: 33.5vw;
    height: 29vh;
  }
</style>