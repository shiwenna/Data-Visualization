<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-01 17:26:12
-->
<template>
  <BaseBorderS :title='"黄岛区服务中心服务数量趋势图"'>
    <template v-slot:content>
      <div class="select-area-eCharts">
        <BaseSelect @change="changeYear" :option="selectOption1" :defaults="selYear"></BaseSelect>
        <BaseSelect @change="changeMonth" :option="selectOption2" :defaults="selMonth"></BaseSelect>
      </div>
      <div id="eCharts_2" class='eCharts_2' style=""></div>
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
    name: 'NumberTrend',
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
        option: {},
        selYear: '2020',
        selMonth: '6',
        selectOption1: [
          { label: '2016年', value: '2016' },
          { label: '2017年', value: '2017' },
          { label: '2018年', value: '2018' },
          { label: '2019年', value: '2019' },
          { label: '2020年', value: '2020' }
        ],
        selectOption2: [
          { label: '1月', value: '1' },
          { label: '2月', value: '2' },
          { label: '3月', value: '3' },
          { label: '4月', value: '4' },
          { label: '5月', value: '5' },
          { label: '6月', value: '6' },
          { label: '7月', value: '7' },
          { label: '8月', value: '8' },
          { label: '9月', value: '9' },
          { label: '10月', value: '10' },
          { label: '11月', value: '11' },
          { label: '12月', value: '12' }
        ],
      }
    },
    methods: {
      drawCharts(id, option) {
        let myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option);
      },
      changeYear(val) {
        this.$emit('changeYear', val)
      },
      changeMonth(val) {
        this.$emit('changeMonth', val)
      },
      setOption() {
        let serviceData = this.eChartsOptions.data;
        this.option = {
          grid: {
            top: '15%',
            left: '10%',
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
            name: "(数量)",
            nameTextStyle: {
              color: "#B3D8F7",
              fontSize: 14
            },
            type: 'value',
            min: 0,
            max: 1000,
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
          series: [
            {
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
                  res.push(990);
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
      }
    },
    created() {
    },
    mounted() {
      this.setOption()
    },
    watch: {
      option: {
        deep: true,
        handler(val) {
          this.option = val;
          this.drawCharts('eCharts_2', this.option);
        }
      },
      eChartsOptions: {
        deep: true,
        handler(val) {
          this.setOption()
        }
      }
    }
  }
</script>

<style scoped>
  #eCharts_2 {
    width: 33.5vw;
    height: 29vh;
  }

  .select-area-eCharts {
    position: absolute;
    right: -2%;
    top: -2%;
    z-index: 99999;
  }

  select {
    width: 120px;
    height: 32px;
    border: 1px solid #267cd4;
    background-color: transparent;
    color: #fff;
    line-height: 32px;
    font-weight: 400;
    margin: 0 10px;
  }
</style>