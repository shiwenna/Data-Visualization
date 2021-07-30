<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-29 13:38:12
-->
<template>
  <!-- <BaseBorderS :title='"机构入住老人分析"'>
    <template v-slot:content> -->
  <div id="eCharts_4"
       class='eCharts_4'
       style=""></div>
  <!-- </template>
  </BaseBorderS> -->
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// require("echarts/lib/chart/radar");
require("echarts/lib/chart/pie");

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
    this.option =   {
    // backgroundColor:"#031d33",
          tooltip: {},

legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        // top: 0,
        // bottom: 20,
        textStyle: {
          color: '#fff',
          fontSize: 12,
        },
        data: ['rose 1', 'rose 2', 'rose 3', 'rose 4', 'rose 5', 'rose 6'],
      },
          series: [
           
            {
          name: '面积模式',
          type: 'pie',
          radius: [25, 70],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 3
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 38, name: 'rose 2' },
            { value: 32, name: 'rose 3' },
            { value: 30, name: 'rose 4' },
            { value: 28, name: 'rose 5' },
            { value: 26, name: 'rose 6' },

          ]
        }
          ]
        }
  },
  watch: {
    option: {
      deep: true,
      handler (val) {
        this.option = val;
        this.drawCharts('eCharts_4', this.option);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.eCharts_4 {
  width: 450px;
  height: 230px;
}
</style>