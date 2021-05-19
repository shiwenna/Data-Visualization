<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-01 17:26:12
-->
<template>
  <BaseBorderS :title='"养老机构入住老人数排序top10"'>
    <template v-slot:content>
      <div id="eCharts_2" class='eCharts_2' style=""></div>
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
    name: 'InSort',
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
      let data = this.eChartsOptions.data || [],
        xAxisData = [],
        seriesData1 = [],
        barTopColor = [
          '#68E287', '#68E287', '#68E287', '#71C9FF', '#71C9FF', '#71C9FF', '#71C9FF', '#71C9FF', '#71C9FF', '#71C9FF'
        ],
        barBottomColor = [
          '#68E28780', '#68E28780', '#68E28780', '#71C9FF80', '#71C9FF80', '#71C9FF80', '#71C9FF80', '#71C9FF80', '#71C9FF80', '#71C9FF80'
        ];
      data.forEach(item => {
        xAxisData.push(item.name);
        seriesData1.push(item.value);
      });
      this.option = {
        grid: {
          top: '10%',
          bottom: '5%'
        },
        xAxis: {
          data: xAxisData,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            margin: 25,
            align: 'center',
            formatter: function(params, index) {
              return '{b|' + params + '}';
            },
            textStyle: {
              fontSize: 14,
              color: '#ffffff',
              rich: {
                b: {
                  height: 20,
                  fontSize: 14,
                  color: '#ffffff'
                }
              }
            },
            interval: 0
          },
        },
        yAxis: {
          nameTextStyle: {
            color: "#fff"
          },
          name: "(人)",
          splitLine: {
            show: true,
            lineStyle: {
              color: '#71C9FF',
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            }
          }
        },
        series: [{
          name: '柱顶部',
          type: 'pictorialBar',
          symbolSize: [36, 10],
          symbolOffset: [0, -5],
          z: 12,
          itemStyle: {
            normal: {
              color: function(params) {
                return barTopColor[params.dataIndex];
              }
            }
          },
          label: {
            show: true,
            position: 'top',
            fontSize: 16
          },
          symbolPosition: 'end',
          data: seriesData1,
        }, {
          name: '柱底部',
          type: 'pictorialBar',
          symbolSize: [36, 10],
          symbolOffset: [0, 5],
          z: 12,
          itemStyle: {
            normal: {
              color: function(params) {
                return barTopColor[params.dataIndex];
              }
            }
          },
          data: seriesData1
        }, {
          name: '第一圈',
          type: 'pictorialBar',
          symbolSize: [47, 16],
          symbolOffset: [0, 11],
          z: 11,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: barTopColor[0],
              borderWidth: 1
            },
          },
          data: seriesData1
        }, {
          name: '第二圈',
          type: 'pictorialBar',
          symbolSize: [62, 22],
          symbolOffset: [0, 17],
          z: 10,
          itemStyle: {
            normal: {
              color: 'transparent',
              borderColor: barBottomColor[0],
              borderWidth: 1
            }
          },
          data: seriesData1
        }, {
          name: '本体',
          type: 'bar',
          itemStyle: {
            normal: {
              color: function(params) {
                return new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [{
                    offset: 1,
                    color: barBottomColor[params.dataIndex]
                  },
                    {
                      offset: 0,
                      color: barTopColor[params.dataIndex]
                    }
                  ]
                );
              },
              opacity: 0.8
            }
          },
          z: 16,
          silent: true,
          barWidth: 36,
          barGap: '-100%', // Make series be overlap
          data: seriesData1
        }]
      };
    },
    watch: {
      option: {
        deep: true,
        handler(val) {
          this.option = val;
          this.drawCharts('eCharts_2', this.option);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  #eCharts_2 {
    width: 71vw;
    height: 36vh;
  }
</style>