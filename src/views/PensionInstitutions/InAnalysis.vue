<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-01 17:26:12
-->
<template>
  <BaseBorderS :title='"机构入住老人分析"'>
    <template v-slot:content>
      <div id="eCharts_1" class='eCharts_1' style=""></div>
    </template>
  </BaseBorderS>
</template>

<script>
  // 引入基本模板
  let echarts = require("echarts/lib/echarts");
  require("echarts/lib/chart/pictorialBar");
  require("echarts/lib/chart/pie");
  require("echarts/lib/component/title");
  require("echarts/lib/component/tooltip");
  require("echarts/lib/component/grid");
  require("echarts/lib/component/legend");

  export default {
    name: 'InAnalysis',
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
      let iconList = [
        'image://' + require('../../assets/img/icon10.png'),
        'image://' + require('../../assets/img/icon6.png'),
        'image://' + require('../../assets/img/icon7.png'),
      ];
      let legendList = this.eChartsOptions.data.map((item, index) => {
        return {
          name: item.name,
          icon: iconList[index],
          textStyle: {
            color: '#fff'
          }
        }
      });
      this.option = {
        legend: {
          orient: 'vertical',
          bottom: 'middle',
          itemHeight: 25,
          left:'80%',
          itemGap: 15,
          data: legendList
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '80%',
          center: ['40%', '50%'],
          color: ['#E8F301', '#68E288', '#79CDFF'],
          data: this.eChartsOptions.data.sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          label: {
            normal: {
              formatter: ['{b|{b}}', '{d|{d}%}'].join('\n'),
              rich: {
                d: {
                  color: '#fff',
                  fontSize: 22,
                  fontWeight: 'bold',
                  lineHeight: 30
                },
                b: {
                  color: 'rgb(98,137,169)',
                  fontSize: 18,
                  fontWeight: 'bold',
                  lineHeight: 40
                },
              },
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgb(98,137,169)',
              },
              smooth: 0,
              length: 0,
              length2: 50,

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