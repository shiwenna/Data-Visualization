<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-29 10:07:11
-->
<template>
  <!-- <BaseBorderS :title='"机构入住老人分析"'>
    <template v-slot:content> -->
  <div id="eCharts_2"
       class='eCharts_2'
       style=""></div>
  <!-- </template>
  </BaseBorderS> -->
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");

require("echarts/lib/chart/bar");
require("echarts/lib/chart/pictorialBar");
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
      "textStyle": {
        "color": "#c0c3cd",
        "fontSize": 12
      },
      // "toolbox": {
      //   "show": false,
      //   "feature": {
      //     "saveAsImage": {
      //       "backgroundColor": "#031245"
      //     },
      //     "restore": {}
      //   },
      //   "iconStyle": {
      //     "borderColor": "#c0c3cd"
      //   }
      // },
      // "legend": {
      //   "top": 10,
      //   "itemWidth": 8,
      //   "itemHeight": 8,
      //   "icon": "circle",
      //   "left": "center",
      //   "padding": 0,
      //   "textStyle": {
      //     "color": "#c0c3cd",
      //     "fontSize": 12,
      //     "padding": [
      //       2,
      //       0,
      //       0,
      //       0
      //     ]
      //   }
      // },
      "color": [
        "#63caff",
        "#49beff",
        "#03387a",
        "#03387a",
        "#03387a",
        "#6c93ee",
        "#a9abff",
        "#f7a23f",
        "#27bae7",
        "#ff6d9d",
        "#cb79ff",
        "#f95b5a",
        "#ccaf27",
        "#38b99c",
        "#93d0ff",
        "#bd74e0",
        "#fd77da",
        "#dea700"
      ],
      "grid": {
        "containLabel": true,
        "left": 20,
        "right": 20,
        "bottom": 10,
        "top": 40
      },
      "xAxis": {
        "nameTextStyle": {
          "color": "#c0c3cd",
          "padding": [
            0,
            0,
            -10,
            0
          ],
          "fontSize": 12
        },
        "axisLabel": {
          "color": "#c0c3cd",
          "fontSize": 12,
          "interval": 0
        },
        "axisTick": {
          "lineStyle": {
            "color": "#384267",
            "width": 1
          },
          "show": true
        },
        "splitLine": {
          "show": false
        },
        "axisLine": {
          "lineStyle": {
            "color": "#384267",
            "width": 1,
            "type": "dashed"
          },
          "show": true
        },
        "data": [
          "垣曲县网格",
          "迎泽区网格",
          "山西省文明办",
          "妇幼两癌",
          "平遥数字城管"
        ],
        "type": "category"
      },
      "yAxis": {
        "nameTextStyle": {
          "color": "#c0c3cd",
          "padding": [
            0,
            0,
            -10,
            0
          ],
          "fontSize": 12
        },
        "axisLabel": {
          "color": "#c0c3cd",
          "fontSize": 12
        },
        "axisTick": {
          "lineStyle": {
            "color": "#384267",
            "width": 1
          },
          "show": true
        },
        "splitLine": {
          "show": true,
          "lineStyle": {
            "color": "#384267",
            "type": "dashed"
          }
        },
        "axisLine": {
          "lineStyle": {
            "color": "#384267",
            "width": 1,
            "type": "dashed"
          },
          "show": true
        },
        "name": ""
      },
      "series": [
        {
          "data": [
            200,
            85,
            112,
            50,
            305
          ],
          "type": "bar",
          "barMaxWidth": "auto",
          "barWidth": 30,
          "itemStyle": {
            "color": {
              "x": 0,
              "y": 0,
              "x2": 0,
              "y2": 1,
              "type": "linear",
              "global": false,
              "colorStops": [
                {
                  "offset": 0,
                  "color": "#0b9eff"
                },
                {
                  "offset": 1,
                  "color": "#63caff"
                }
              ]
            }
          },
          "label": {
            "show": true,
            "position": "top",
            "distance": 10,
            "color": "#fff"
          }
        },
        {
          "data": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "type": "pictorialBar",
          "barMaxWidth": "20",
          "symbol": "diamond",
          "symbolOffset": [
            0,
            "50%"
          ],
          "symbolSize": [
            30,
            15
          ]
        },
        {
          "data": [
            200,
            85,
            112,
            50,
            305
          ],
          "type": "pictorialBar",
          "barMaxWidth": "20",
          "symbolPosition": "end",
          "symbol": "diamond",
          "symbolOffset": [
            0,
            "-50%"
          ],
          "symbolSize": [
            30,
            12
          ],
          "zlevel": 2
        },
        {
          "data": [
            500,
            300,
            600,
            100,
            700
          ],
          "type": "bar",
          "barMaxWidth": "auto",
          "barWidth": 30,
          "barGap": "-100%",
          "label": {
            "show": true,
            "position": "top",
            "distance": 10,
            "color": "#fff"
          },
          "zlevel": -1
        },
        {
          "data": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "type": "pictorialBar",
          "barMaxWidth": "20",
          "symbol": "diamond",
          "symbolOffset": [
            0,
            "50%"
          ],
          "symbolSize": [
            30,
            15
          ],
          "zlevel": -2
        },
        {
          "data": [
            500,
            300,
            600,
            100,
            700
          ],
          "type": "pictorialBar",
          "barMaxWidth": "20",
          "symbolPosition": "end",
          "symbol": "diamond",
          "symbolOffset": [
            0,
            "-50%"
          ],
          "symbolSize": [
            30,
            12
          ],
          "zlevel": -1
        }
      ],
      "tooltip": {
        "trigger": "axis",
        "show": false
      }
    }
  },
  watch: {
    option: {
      deep: true,
      handler (val) {
        this.option = val;
        this.drawCharts('eCharts_2', this.option);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.eCharts_2 {
  width: 450px;
  height: 155px;
}
</style>