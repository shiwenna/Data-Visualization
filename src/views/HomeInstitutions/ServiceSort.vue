<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-01 17:26:12
-->
<template>
  <BaseBorderS :title='"服务中心近3个月服务量top5"'>
    <template v-slot:content>
      <div id="eCharts_3" class='eCharts_3' style=""></div>
    </template>
  </BaseBorderS>
</template>

<script>
  // 引入基本模板
  let echarts = require("echarts/lib/echarts");
  require("echarts/lib/chart/pictorialBar");
  require("echarts/lib/chart/pie");
  require("echarts/lib/chart/bar");
  require("echarts/lib/component/title");
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/grid");

  export default {
    name: 'ServiceSort',
    props: {
      eChartsOptions: {
        type: Object,
        default: function () {
          return {
            data: [

            ]
          }
        }
      },
    },
    data() {
      return {
        option: {},
      }
    },
    methods: {
      drawCharts(id, option) {
        let myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option);
      }
    },
    created() {

    },
    mounted() {
      let xAxisData = this.eChartsOptions.xData || [],
        seriesData1 = this.eChartsOptions.yData || [],
        barTopColor = [
          '#68E287', '#68E287', '#68E287', '#71C9FF', '#71C9FF', '#71C9FF', '#71C9FF', '#71C9FF', '#71C9FF', '#71C9FF'
        ],
        barBottomColor = [
          '#68E28780', '#68E28780', '#68E28780', '#71C9FF80', '#71C9FF80', '#71C9FF80', '#71C9FF80', '#71C9FF80', '#71C9FF80', '#71C9FF80'
        ];
      this.option = {
        grid: {
          top: '10%',
          bottom: '5%',
          left: '20%',
          right: '5%'
        },
        xAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#71C9FF',
            }
          }
        },
        yAxis: {
          type: 'category',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#71C9FF',
              width: 2
            }
          },
          axisLabel: {
            show: true,
            formatter: function (params) {
              return params
            },
            textStyle: {
              rich: {
                b: {
                  height: 20,
                  fontSize: 14,
                  color: '#71C9FF'
                }
              }
            },
            interval: 0
          },
          data: xAxisData,
          inverse: true
        },
        series: [{
          name: '本体',
          type: 'bar',
          itemStyle: {
            normal: {
              color: function(params) {
                return new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [{
                    offset: 1,
                    color: barTopColor[params.dataIndex]
                  },
                    {
                      offset: 0,
                      color: barBottomColor[params.dataIndex]
                    }
                  ]
                );
              },
              borderStyle: 'solid',
              borderColor: '#fff',
              borderWidth: '1',
              label: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 500
                }
              },
              opacity: 0.8
            }
          },
          z: 16,
          silent: true,
          barWidth: 22,
          barGap: '-100%',
          data: seriesData1
        }]
      };
    },
    watch: {
      option: {
        deep: true,
        handler(val) {
          this.option = val;
          this.drawCharts('eCharts_3', this.option);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  #eCharts_3 {
    width: 33.5vw;
    height: 36vh;
  }
</style>