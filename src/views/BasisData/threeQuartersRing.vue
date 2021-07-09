<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-07 16:21:09
--> 
<template>
  <!-- <BaseBorderS flex="1"
               :title='"老年人自理能力占比"'>
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
require("echarts/lib/chart/pie");
require("echarts/lib/component/title");
require("echarts/lib/component/grid");

export default {
  name: 'genderAge',
  props: {
    eChartsOptions: {
      type: Object,
      default () {
        return {

        }
      }
    },

  },
  data () {
    return {
      option: {},
    }
  },
  methods: {
    drawCharts (id, option) {
      let myChart = echarts.init(document.getElementById(id));

      myChart.setOption(option);
    },
    setOptions (target, source) {

      for (let key in source) {

        if (!target.hasOwnProperty(key)) {
          Object.assign(target, { [key]: source[key] });
          continue;
        }

        if (Array.isArray(source[key])) {
          let tempArr = source[key];
          tempArr.forEach((item, index) => {
            if (Object.prototype.toString.call(item) === '[object Object]') {
              if (Array.isArray(target[key]) && !target[key][index]) {
                target[key].push(item);
              } else {
                //todo 
                let arrayKey;
                for (arrayKey in item) {
                  if (Array.isArray(item[arrayKey]) && Object.prototype.toString.call(item[arrayKey][0]) === '[object Object]') {
                    let tempArr = item[arrayKey];
                    tempArr.forEach((arrayItem, arrayIndex) => {
                      if (Object.prototype.toString.call(arrayItem) === '[object Object]') {
                        Object.assign(target[key][index][arrayKey][arrayIndex], arrayItem);
                      }
                    })
                  } else {
                    Object.assign(target[key][index], item);
                  }
                }
              }
            } else {
              target[key][index] = item;
            }
          })
        }

        if (Object.prototype.toString.call(source[key]) === '[object Object]') {
          Object.assign(target[key], source[key]);
        }
      }
      return target;
    }

  },
  created () {

  },
  mounted () {
    let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
    let color = ['#00e473','#009DFF','#ffc300','#FF8700'];
    let chartData = [{
    name: "自理",
    value: 50
  },
  {
    name: "半自理",
    value: 35
  },
  {
    name: "失能",
    value: 15
  }
    ];
    let arrName = [];
    let arrValue = [];
    let sum = 0;
    let pieSeries = [],
      lineYAxis = [];

    // 数据处理
    chartData.forEach((v, i) => {
      arrName.push(v.name);
      arrValue.push(v.value);
      sum = sum + v.value;
    })

    // 图表option整理
    chartData.forEach((v, i) => {
      pieSeries.push({
        name: '学历',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [90 - i * 20 + '%', 80 - i * 20 + '%'],
        center: ["30%", "50%"],
        label: {
          show: false
        },
        data: [{
          value: v.value,
          name: v.name
        }, {
          value: sum - v.value,
          name: '',
          itemStyle: {
            color: "rgba(0,0,0,0)"
          }
        }]
      });
      pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [90 - i * 20 + '%', 80 - i * 20 + '%'],
        center: ["30%", "50%"],
        label: {
          show: false
        },
        data: [{
          value: 7.5,
          itemStyle: {
            color: "#154173"
          }
        }, {
          value: 2.5,
          name: '',
          itemStyle: {
            color: "rgba(0,0,0,0)"
          }
        }]
      });
      v.percent = (v.value / sum * 100).toFixed(1) + "%";
      lineYAxis.push({
        value: i,
        textStyle: {
          rich: {
            circle: {
              color: color[i],
              padding: [0, 5]
            }
          }
        }
      });
    })
    this.option = {
      // backgroundColor: '#fff',
      color: color,
      grid: {
         top: '2%',
        bottom: '67%',
        left: "30%",
        containLabel: false
      },
      yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: function (params) {
            let item = chartData[params];
            return '{percent|' + item.percent+'} {line|}{circle|●}{name|' + item.name + '}'
          },
          interval: 0,
          inside: true,
          textStyle: {
            color: "#333",
            fontSize: 14,
            rich: {
              line: {
                width: 130,
                        height: 1,
                        backgroundColor: "#9BDDEF"
              },
              name: {
                color: '#fff',
                fontSize: 14,
              },

              percent: {
                color: '#9BDDEF',
                fontSize: 14,
              },
              value: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 500,
                padding: [0, 0, 0, 20]
              },
              unit: {
                fontSize: 14
              }
            }
          },
          show: true
        },
        data: lineYAxis
      }],
      xAxis: [{
        show: false
      }],
      series: pieSeries

    };
    this.drawCharts('eCharts_3', this.option);

  },
  watch: {
    eChartsOptions: {
      deep: true,
      handler (val) {
        this.eChartsOptions = val
        this.setOptions(this.option, {
          yAxis: [{ data: val.eCharts_3.yAxisData }],
          series: [{ data: val.eCharts_3.data, symbolBoundingData: Math.max(...val.eCharts_3.data) },
          { data: val.eCharts_3.data }]        });
        this.drawCharts('eCharts_3', this.option);



      }
    }
  }
}
</script>
    
<style lang="less" scoped>
.eCharts_3 {
  width: 400px;
  height: 16vh;
  // margin: 0 auto;
  // position: fixed;
  // top: 19%;
}
</style>