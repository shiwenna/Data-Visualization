<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-12 11:34:12
--> 
<template>
  <div id="eCharts_1"
       class='eCharts_1'
       style=""></div>
</template>
    
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/component/legend");

export default {
  name: 'customizedPie',
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

    this.option = {
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
      },

      legend: {
        // type: 'scroll',
        // orient: 'vertical',
        // right: '5%',
        // top: '20%',
        left: 'center',
        top: 'bottom',
        padding: [15, 5, 5, 5],
        data: [
          { name: '养老机构', icon: `image://${require('../../assets/img/icon6.png')}` },
          { name: '居家养老服务中心', icon: `image://${require('../../assets/img/icon7.png')}` },
          { name: '服务驿站', icon: `image://${require('../../assets/img/icon8.png')}` },
          { name: '助老大食堂', icon: `image://${require('../../assets/img/icon9.png')}` },
          { name: '合作服务商', icon: `image://${require('../../assets/img/icon10.png')}` }
        ],
        textStyle: {
          color: '#fff',
          fontSize: 14
        },
        icon: 'rect',
        itemWidth: 26,
        itemHeight: 26,

      },
      visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
          //colorLightness: [0, 1]
        }
      },
      series: [{
        name: '访问来源',
        type: 'pie',
        radius: '70%',
        center: ['50%', '43%'],
        color: ['#9f3edd', '#1DB7E5', '#FE5050', '#FBFE27', 'rgb(131,249,103)'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [
          {
            value: 15,
            name: '养老机构'
          },
          {
            value: 25,
            name: '居家养老服务中心'
          },
          {
            value: 20,
            name: '服务驿站'
          },
          {
            value: 35,
            name: '助老大食堂'
          },
          {
            value: 15,
            name: '合作服务商'
          }
        ].sort(function (a, b) {
          return a.value - b.value
        }),
        roseType: 'radius',

        label: {
          normal: {
            formatter: ['{b|{b}}', '{c|{c}%}'].join('\n'),
            rich: {
              c: {
                color: '#FFFFFF',
                fontSize: 20,
                height: 40
              },
              b: {
                color: '#9BDEF0',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 5
              },
            },
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgb(98,137,169)',
            },
            smooth: 0.2,
            length: 0,
            length2: 20,
          }
        },
        itemStyle: {
          normal: {
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowBlur: 50,
          }
        }
      }]
    };
    this.drawCharts('eCharts_1', this.option);

  },
  watch: {
    eChartsOptions: {
      deep: true,
      handler (val) {
        this.eChartsOptions = val
        this.setOptions(this.option, {
          yAxis: [{ data: val.eCharts_1.yAxisData }],
          series: [{ data: val.eCharts_1.data, symbolBoundingData: Math.max(...val.eCharts_1.data) },
          { data: val.eCharts_1.data }]        });
        this.drawCharts('eCharts_1', this.option);

      }
    }
  }
}
</script>
    
<style lang="less" scoped>
.eCharts_1 {
  width: 500px;
  height: 35vh;
  margin: 0 auto;
}
</style>