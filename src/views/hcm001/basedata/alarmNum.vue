<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-29 13:25:04
-->
<template>
  <!-- <BaseBorderS :title='"机构入住老人分析"'>
    <template v-slot:content> -->
  <div id="eCharts_1"
       class='eCharts_1'
       style=""></div>
  <!-- </template>
  </BaseBorderS> -->
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/radar");

require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");

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
      // backgroundColor: '#ffffff00',
      // color: ['#5E8FF7', '#00CDFF', '#FFC42A', '#0061FF'],
      grid: {
        left: '6%',
        right: '5%',
        top: '35%',
        bottom: '1%',
        containLabel: true
      },
     
      radar: {
            radius: "40%", //大小
            nameGap: 1, // 图中工艺等字距离图的距离
            center: ["70%", "30%"], // 图的位置
            name: {
              textStyle: {
                color: "rgba(101, 213, 255, 1)",
                fontSize: 16
              },
              formatter: function(name) {
              return name;
              }
            },
            indicator: [
              {"name":'报警类型1',"max":"100"},
              {"name":'报警类型2',"max":"100"},
              {"name":'报警类型3',"max":"100"},
              {"name":'报警类型4',"max":"100"},
              {"name":'报警类型5',"max":"100"},
              {"name":'报警类型6',"max":"100"},
              
              ],
            axisLine: {
              lineStyle: {
               
                color: "rgba(153, 209, 246, 0.5)"
              }
            },
            splitArea: {
              show: false,
              areaStyle: {
                color: "rgba(255,0,0,0)" // 图表背景的颜色
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "rgba(153, 209, 246, 0.4)" // 设置网格的颜色
              }
            }
          },
      xAxis: [{
          data: [ '01', '02','03','04','05','06','07','08','09',
            '10', '11', '12','13','14','15','16','17','18', '19',
            '20','21', '22','23','24',
          ],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: '#ffffff00',
              width: 1,
              type: 'dotted',
              shadowColor: '#4670F0',
              shadowBlur: 0,
              shadowOffsetY: 10,
            },
            // symbolOffset:[0,-5]
          },
          // offset: 15,
          // axisTick: {
          //   inside: false,
          //   show: true, //隐藏X轴刻度
          //   alignWithLabel: true,
          //   lineStyle: {
          //     color: '#ffffff00',
          //     length: 0,
          //     width: 3,
          //     length: 2,
          //     shadowColor: '#4670F0',
          //     shadowBlur: 0,
          //     shadowOffsetY: 8,
          //   },
          // },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff', //X轴文字颜色
              fontSize: 12,
            },
          },
          // boundaryGap: true,
        },
        {},
      ],
      yAxis: [
        {
          show: true,
          type: 'value',
          axisLabel: {
            textStyle: {
              color: "#fff"
            },

          },
          splitLine: {

            lineStyle: {
              color: "#0c2c5a"
            }
          },
          axisLine: {
            show: false
          }
        },
      ],
      series: [


        {
          name: '目标值',
          type: 'bar',
          barWidth: 14,
          itemStyle: {
            normal: {
              barBorderRadius: [10, 10, 0, 0],
              borderWidth: 1,
              borderColor: '#040850',
              shadowColor: '#51FFBF',
              shadowBlur: 2,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(81, 255, 152, 1)' },
                { offset: 1, color: 'rgba(0, 108, 255, 0)' },
              ]),
            },
          },
          // symbol:'circle',
          // symbolSize:10,
          // symbolPosition:'end',
          data: [5, 3, 1, 5, 4, 3, 4, 3, 2, 8, 3, 5, 4.2, 3.5, 2.9, 5, 5, 3, 4, 3, 2, 4, 3, 5],
        },
        // 
        {
              name: "报警类型分析",
              type: "radar",
              symbol: "angle",
              itemStyle: {
                normal: {
                  areaStyle: { type: "default" }
                }
              },
              data: [
                {
                  symbol: "circle",
                  symbolSize: 5,
                  value: [70,42,63,84,75,34],
                  areaStyle: { color: "rgba(64, 205, 241, 0.2)" },
                  itemStyle: {
                    normal: {
                      borderWidth:1,
                      color: "RGBA(0, 34, 66, 1)",
                      borderColor: "rgba(146, 225, 255, 1)"
                    }
                  },
                  lineStyle: {
                    color: "rgba(146, 225, 255, 1)",
                    width: 1
                  }
                }
              ]
            }
      ],
    };
  },
  watch: {
    option: {
      deep: true,
      handler (val) {
        this.option = val;
        this.drawCharts('eCharts_1', this.option);
      }
    }
  }
}
</script>

<style lang="less" scoped>
#eCharts_1 {
  width: 450px;
  height: 250px;
}
</style>