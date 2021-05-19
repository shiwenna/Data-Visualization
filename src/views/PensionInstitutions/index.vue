<template>
  <div class="dis-flex"
       style="flex: 1;">
    <div class="dis-flex dis-flex-column" style="width: 25%;">
      <BaseBorderS :flex="0" :title="'基础数据'">
        <template v-slot:content>
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
      <InAnalysis :eChartsOptions="eChartsOptions_1" style="width: 50%; height: 45%;"></InAnalysis>
      <BaseBorderS style="width: 50%; height: 45%;" :flex="0" :title="'星级养老机构展示'">
        <template v-slot:content>
          <!--<BaseCarousel :imgList="carouselData"></BaseCarousel>-->
          <BaseSwiper :carouselData="carouselData"></BaseSwiper>
        </template>
      </BaseBorderS>
      <InSort :eChartsOptions="eChartsOptions_2" style="width: 100%; height: 55%;"></InSort>
    </div>
  </div>
</template>

<script>
  import InAnalysis from './InAnalysis'
  import InSort from './InSort'

  export default {
    name: 'PensionInstitutions',
    components: {
      InAnalysis,
      InSort
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
            label: '困难老人入住补贴',
            value: '1,000'
          },
          {
            label: '养老综合责任险',
            value: '1,000'
          },
          // {
          //   label: '养老护理员岗位综合补贴',
          //   value: '1,000'
          // },
          {
            label: '养老机构从业人员补助',
            value: '1,000'
          }
        ],
        carouselData: [
          require('../../assets/img/carousel_1.png'),
          require('../../assets/img/carousel_1.png'),
          require('../../assets/img/carousel_1.png'),
          require('../../assets/img/carousel_1.png'),
        ],
        eChartsOptions_1: {
          data: [
            {
              value: 400,
              name: '自理'
            },
            {
              value: 330,
              name: '半自理'
            },
            {
              value: 270,
              name: '失能'
            }
          ]
        },
        eChartsOptions_2: {
          data: [
            {
              name: "养老机构A",
              value: 191
            },
            {
              name: "养老机构B",
              value: 176
            },
            {
              name: "养老机构C",
              value: 154
            },
            {
              name: "养老机构D",
              value: 148
            },
            {
              name: "养老机构E",
              value: 136
            },
            {
              name: "养老机构F",
              value: 121
            },
            {
              name: "养老机构G",
              value: 120
            },
            {
              name: "养老机构H",
              value: 107
            },
            {
              name: "养老机构I",
              value: 98
            },
            {
              name: "养老机构J",
              value: 87
            }
          ]
        }
      }
    },
    methods: {

    },
    created() {

    }
  }
</script>

<style lang="less" scoped>
  .dis-flex.dis-flex-column > div {
    height: 45%;
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
























