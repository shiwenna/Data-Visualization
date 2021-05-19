<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-05-27 15:53:29
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-01 17:26:12
--> 
<template>
  <BaseBorderS flex="1"
               :title='"老年人基础信息"'>
    <template v-slot:content>
      <div id="eCharts_1"
           class='eCharts_1'
           style=""></div>
      <p class="charts-title">{{eChartsOptions.eCharts_1&&eChartsOptions.eCharts_1.title}}</p>
      <div id="eCharts_2"
           class='eCharts_2'
           style=""></div>
      <p class="charts-title">{{eChartsOptions.eCharts_2&&eChartsOptions.eCharts_2.title}}</p>
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
    // eCharts_2: {
    //   type: Object,
    //   default () {
    //     return {}
    //   }
    // },
  },
  data () {
    return {
      // eChartsVal: {},
      option: {},
      option1: {}
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
    let symbol = {
      symbolRepeat: 'fixed',
      symbolMargin: '3%',
      symbolSize: 18,
      symbolPosition: 'start',
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC',
      symbolBoundingData: undefined,
    }

    this.option = {
      grid: {
        left: 50,
        top: 10,
        bottom: 10,
        right: 40
      },
      tooltip: {
        trigger: 'item',
        textStyle: {
          fontSize: 14
        },
        formatter: '{b0}:{c0}人'
      },
      xAxis: {
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: [{
        type: 'category',
        inverse: false,
        data: {},
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#9BDEF0',
            fontSize: 11.25
          }
        }
      },

      ],
      series: [
        Object.assign({
          type: 'pictorialBar',
          symbolClip: 'true',
          label: {
            normal: {
              show: true,
              position: 'insideRight',
              offset: [40, 0],
              color: '#fff',
              formatter: function (params) {
                return `${params.value}人`;
              }
            }
          },
          data: {},
          z: 10
        }, symbol),
        Object.assign({
          type: 'pictorialBar',
          itemStyle: {
            normal: {
              opacity: 0.2
            }
          },
          animationDuration: 0,
          data: {},
          z: 5
        }, symbol)
      ]
    };


    let placeHolderStyle = {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
      },
      emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
      }
    };


    let dataStyle = {
      normal: {
        formatter: '{c}%',
        position: 'center',
        show: true,
        textStyle: {
          fontSize: '22',
          fontWeight: 'normal',
          color: '#fff'
        }
      }
    };


    this.option1 = {
      title: [{
        show: true,
        text: '',
        left: '30%',
        top: '55%',
        textAlign: 'center',
        textStyle: {
          fontWeight: 'normal',
          fontSize: '12',
          color: '#fff',
          textAlign: 'center',
        },
      }, {
        show: true,
        text: '',
        left: '70%',
        top: '55%',
        textAlign: 'center',
        textStyle: {
          color: '#fff',
          fontWeight: 'normal',
          fontSize: '12',
          textAlign: 'center',
        },
      }],
      series: [

        //外圈的边框
        {
          // name: '总人数',
          type: 'pie',
          hoverAnimation: false, //鼠标经过的特效
          radius: ['85%', '88%'],
          center: ['30%', '50%'],
          startAngle: 0,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 100,
            itemStyle: {
              normal: {
                color: "#2773E6",
              }
            },
          }]
        },
        {
          type: 'pie',
          hoverAnimation: false,
          radius: ['85%', '88%'],
          center: ['70%', '50%'],
          startAngle: 225,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 100,
            itemStyle: {
              normal: {
                color: "#2773E6",
              }
            },
          },

          ]
        },
        {
          type: 'pie',
          hoverAnimation: false, //鼠标经过的特效
          radius: ['80%', '90%'],
          center: ['30%', '50%'],
          startAngle: 225,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: "75",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#26C9D3'
                }, {
                  offset: 1,
                  color: '#43ED54'
                }]),
              },
            },
            label: dataStyle,
          }, {
            value: "25",
            itemStyle: placeHolderStyle,
          },
          ]
        },
        {
          type: 'pie',
          hoverAnimation: false,
          radius: ['80%', '90%'],
          center: ['70%', '50%'],
          startAngle: 225,
          labelLine: {
            normal: {
              show: false
            }
          },
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: 25,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FFB239'
                }, {
                  offset: 1,
                  color: '#F1F421'
                }]),
              }
            },
            label: dataStyle,
          }, {
            value: 75,
            itemStyle: placeHolderStyle,
          },
          ]
        },
      ]
    };
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

        this.setOptions(this.option1, {
          title: [{ text: val.eCharts_2.data[0].text }, { text: val.eCharts_2.data[1].text }],
          series: [{}, {}, { data: [{ value: +val.eCharts_2.data[0].value }, { value: (100 - val.eCharts_2.data[0].value) }] },
          { data: [{ value: +val.eCharts_2.data[1].value }, { value: (100 - val.eCharts_2.data[1].value) }] }]        });
        this.drawCharts('eCharts_2', this.option1)

      }
    }
  }
}
</script>
    
<style>
.eCharts_1 {
  width: 400px;
  height: 18vh;
  margin: 0 auto;
}
.eCharts_2 {
  width: 400px;
  height: 12vh;
  margin: 0 auto;
}
</style>