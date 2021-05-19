<!--
 * @Descripttion:
 * @version:
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-01 17:26:12
-->
<template>
  <BaseBorderS :title='"六助服务类型占比"'>
    <template v-slot:content>
      <div class="select-area-eCharts">
        <BaseSelect @change="changeType" :option="selectOption1" :defaults="selType"></BaseSelect>
      </div>
      <div class="info">
        <p>下拉可选择"星级评定比例"</p>
        <p>"星级评定比例"也是环形比例图，分别是3星，4星，5星级（没有1,2星）</p>
      </div>
      <div id="eCharts_4" class='eCharts_4' style=""></div>
    </template>
  </BaseBorderS>
</template>

<script>
  // 引入基本模板
  let echarts = require("echarts/lib/echarts");
  require("echarts/lib/chart/pie");
  require("echarts/lib/component/grid");
  require("echarts/lib/component/legend");

  export default {
    name: 'TypeProportion',
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
        selType: '1',
        selectOption1: [
          { label: '六类服务类型占比', value: '1' },
          { label: '星级评定比例', value: '2' }
        ]
      }
    },
    methods: {
      drawCharts(id, option) {
        let myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option);
      },
      changeType (val) {
        this.$emit('changeType', val)
      },
      setOption () {
        let legendList = [];
        let colorList = ['#28A5F5', '#51D24E', '#C9CA21', '#E98A27', '#6D7DFE', '#E24982'];
        let iconList = [
          'image://' + require('../../assets/img/icon10.png'),
          'image://' + require('../../assets/img/icon6.png'),
          'image://' + require('../../assets/img/icon7.png'),
          'image://' + require('../../assets/img/icon8.png'),
          'image://' + require('../../assets/img/icon9.png'),
          'image://' + require('../../assets/img/icon11.png')
        ];
        let _colorList = ['#65C4FE', '#69E38E', '#E8F901', '#E8A22A', '#A079FE', '#FE79A5'];
        let serviceData = [];
        this.eChartsOptions.data.map((item, index) => {
          legendList.push({
            name: item.name,
            icon: iconList[index],
            textStyle: {
              color: '#fff',
              padding: [0, 10, 0, 0]
            }
          });
          let obj = Object.assign(item, {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                1, 0, 0, 1, [{
                  offset: 0,
                  color: colorList[index]
                }, {
                    offset: 1,
                    color: _colorList[index]
                }]
              )
            }
          });
          serviceData.push(obj)
        });
        this.option = {
          legend: {
            bottom:0,
            itemHeight: 25,
            left:'center',
            data: legendList,
          },
          series: [{
            type: 'pie',
            data: [{
              value: 100,
            }],
            itemStyle: {
              normal: {
                color: '#0E315F',
              }
            },
            radius: ['42%', '47%'],
            animation: false,
          },
            {
              type: 'pie',
              sort: 'desc',
              data: serviceData,
              label: {
                normal: {
                  color: '#fff',
                  formatter: '{d}%',
                  fontSize: 18
                }
              },
              labelLine: {
                lineStyle: {
                  color: '#fff',
                },
              },
              itemStyle: {
                normal: {
                  borderWidth: 4,
                  borderColor: '#0B2246'
                }
              },
              radius: ['50%', '70%']
            }
          ]
        };
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
          this.drawCharts('eCharts_4', this.option);
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

<style lang="less" scoped>
  #eCharts_4 {
    width: 33.5vw;
    height: 36vh;
  }
  .select-area-eCharts {
    position: absolute;
    right: -2%;
    top: -2%;
    z-index: 99999;
  }
  select {
    width: 140px;
    height: 32px;
    border: 1px solid #267cd4;
    background-color: transparent;
    color: #fff;
    line-height: 32px;
    font-weight: 400;
    margin: 0 10px;
  }

  .info {
    position: absolute;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 300;
    color: #ffc555;
    text-align: left;
    margin-top: -1.5vh;
    line-height: 24px;
    max-width: 300px;
  }
</style>