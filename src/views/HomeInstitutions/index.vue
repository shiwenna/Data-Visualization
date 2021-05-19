<template>
  <div class="dis-flex"
       style="flex: 1;">
    <div class="dis-flex dis-flex-column" style="width: 25%;">
      <BaseBorderS :flex="0" :title="'基础数据'">
        <template v-slot:content>
          <p class="info">点击数据同“机构养老”同样可弹出详情列表</p>
          <div class="basis-data-box">
            <div class="basis-data" v-for="item in basisData">
              <div></div>
              <p>{{item.label}}</p>
              <p>
                <span>{{item.value}}</span>
                <span>{{item.unit}}</span>
              </p>
            </div>
          </div>
        </template>
      </BaseBorderS>
      <BaseBorderS :flex="0" :title="'区养老机构补助补贴发放金额'">
        <template v-slot:content>
          <div class="dis-flex dis-flex-column" style="position: absolute; width: 100%; height: 100%;">
            <BasePriceTag
                v-for="(item, index) in priceData"
                :key="index"
                :label="item.label"
                :value="item.value">
            </BasePriceTag>
          </div>
        </template>
      </BaseBorderS>
    </div>
    <div class="dis-flex" style="width: 75%; display: flex; flex-flow: wrap;">
      <SatisfactionTrend :eChartsOptions="eChartsOptions_1" style="width: 50%; height: 45%;"></SatisfactionTrend>

      <NumberTrend :eChartsOptions="eChartsOptions_2"
                   @changeYear="changeYear"
                   @changeMonth="changeMonth"
                   style="width: 50%; height: 45%;"></NumberTrend>

      <ServiceSort
          :eChartsOptions="eChartsOptions_3"
          style="width: 50%; height: 55%;"></ServiceSort>

      <TypeProportion
          :eChartsOptions="eChartsOptions_4"
          @changeType="changeType"
          style="width: 50%; height: 55%;"></TypeProportion>
    </div>
  </div>
</template>

<script>
  import SatisfactionTrend from './SatisfactionTrend'
  import NumberTrend from './NumberTrend'
  import ServiceSort from './ServiceSort'
  import TypeProportion from './TypeProportion'

  export default {
    name: 'HomeInstitutions',
    components: {
      SatisfactionTrend,
      NumberTrend,
      ServiceSort,
      TypeProportion
    },
    data() {
      return {
        basisData: [
          {
            label: '养老机构总数',
            value: 55,
            unit: '家'
          },
          {
            label: '社区居家服务驿站总数',
            value: 192,
            unit: '张'
          },
          {
            label: '服务人员总数',
            value: 180,
            unit: '人'
          },
          {
            label: '服务老人总数',
            value: 93.7,
            unit: '%'
          },
        ],
        priceData: [
          {
            label: '运营补贴',
            value: '1,000'
          },
          {
            label: '助老卡补贴',
            value: '1,000'
          },
          {
            label: '建设补贴',
            value: '1,000'
          }
        ],
        eChartsOptions_1: {
          data: [
            81, 92, 87, 79, 94, 86, 88, 94, 96, 81, 90, 86
          ]
        },
        eChartsOptions_2: {
          data: [
            831, 902, 817, 799, 904, 816, 808, 984, 916, 851, 920, 836
          ]
        },
        eChartsOptions_3: {
          xData: [
            'XXXX服务中心', 'XXXX服务中心', 'XXXX服务中心', 'XXXX服务中心', 'XXXX服务中心'
          ],
          yData: [
            99, 86, 78, 54, 42
          ]
        },
        eChartsOptions_4: {
          data: [

          ]
        }
      }
    },
    methods: {
      changeYear (data) {
        this.getEChartsOptions2()
      },
      changeMonth (data) {
        this.getEChartsOptions2()
      },
      changeType (data) {
        this.getEChartsOptions4()
      },
      getEChartsOptions2 () {
        let arr = [];
        for (let i = 0; i < 12; i++) {
          let val = Math.floor(Math.random() * 200 + 800);
          arr.push(val)
        }
        this.$set(this.eChartsOptions_2, 'data', [...arr]);
      },
      getEChartsOptions4 () {
        let _arr = [
          {
            name: '助乐',
            value: Math.floor(Math.random() * 100),
          },
          {
            name: '助急',
            value: Math.floor(Math.random() * 100),
          },
          {
            name: '助医',
            value: Math.floor(Math.random() * 100),
          },
          {
            name: '助洁',
            value: Math.floor(Math.random() * 100),
          },
          {
            name: '助浴',
            value: Math.floor(Math.random() * 100),
          },
          {
            name: '助餐',
            value: Math.floor(Math.random() * 100),
          },
        ];
        this.$set(this.eChartsOptions_4, 'data', [..._arr]);
      },
      sort (a, b) {
        return a.value - b.value
      }
    },
    created() {

    }
  }
</script>

<style lang="less" scoped>
  .dis-flex.dis-flex-column > div {
    height: 45%;
  }

  .info {
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffc555;
    text-align: right;
    margin-top: -1.5vh;
  }

  .dis-flex.dis-flex-column > div:last-child {
    height: 55%;
  }

  .padding {
    box-sizing: border-box;
  }

  .main-details.sml {
    position: relative;
    min-height: 75%;
  }

  .main-details > div {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .basis-data-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: absolute;
    left: 0;
    top: 0;
  }

  .basis-data {
    width: 50%;
    height: 60%;
    margin: -10% 0;
    position: relative;
    p {
      color: #B3D8F7;
      font-size: 14px;
      font-weight: 400;
      margin-top: 5vh;
      text-align: center;
      position: relative;
      z-index: 9;
      span:first-child {
        color: #fff;
        font-size: 26px;
      }
      span:last-child {
        color: #fff;
        font-size: 12px;
      }
    }
    p:last-child {
      margin-top: 1vh;
    }
    p:last-child {
      margin-top: 1vh;
    }
    div {
      width: 60%;
      height: 100%;
      position: absolute;
      left: 20%;
      top: 0;
      background-image: url(../../assets/img/VectorIntelligenceObject.png);
    }
  }
</style>
























