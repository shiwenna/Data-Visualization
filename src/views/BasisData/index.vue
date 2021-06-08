<template>
  <div class="dis-flex"
       style="flex: 1;">
    <div class="dis-flex dis-flex-column"
         style="width: 25%;">
      <BaseBorderS flex="0"
                   :title='"基础数据"'>
        <template v-slot:content>
          <div class="corona-box">
            <div id="Corona"
                 class="background-corona"></div>
          </div>
          <div class="corona-total">
            <p class="corona-total-title">西海岸总面积</p>
            <p class="corona-total-data">65.4km²</p>
          </div>
          <BaseDataBox top='4'
                       left='0'
                       :title='"西海岸总人口"'
                       :num="'88.7'">
          </BaseDataBox>
          <BaseDataBox top='0'
                       left='13'
                       :title='"老年人口"'
                       :num="'12.9'">
          </BaseDataBox>
          <BaseDataBox top='10'
                       left='13'
                       :title='"老龄化占比"'
                       :num="'14'">
          </BaseDataBox>
        </template>
      </BaseBorderS>
      <genderAge :eChartsOptions="eChartsOptions_1"></genderAge>
    </div>
    <div class="dis-flex dis-flex-column"
         style="width: 50%;">
      <BaseBorderB flex="2">
        <template v-slot:content>
          <heatBaiduMap></heatBaiduMap>
          <base-point-1></base-point-1>
          <base-indicate-box style="left: 60%;top: 28%;" :status="'finished'"></base-indicate-box>
        </template>
      </BaseBorderB>
      <BaseDataFloatO flex="1"
                      :listData="[{
          name: '养老设施覆盖率',
          num: '75',
          unit: '%'
        },
        {
          name: '农村留守老人数',
          num: '62',
          unit: '人'
        },
        {
          name: '空巢老人占比',
          num: '9',
          unit: '%'
        }]">
      </BaseDataFloatO>
    </div>
    <div class="dis-flex dis-flex-column"
         style="width: 25%;">
      <!-- <BaseBorderS flex="1"
                   :title='"老年人自理能力占比"'> -->
      <!-- <template v-slot:content> -->
      <!-- <threeQuartersRing></threeQuartersRing> -->
      <!-- </template> -->
      <!-- </BaseBorderS> -->

      <!-- <base-top-three>
      <template v-slot:content>
      <base-progress></base-progress>

      </template>
      </base-top-three> -->
      <!-- <base-tabel-top-5></base-tabel-top-5> -->
      <base-list-swiper-2 :listData='listData'></base-list-swiper-2>
      <BaseBorderS flex="2"
                   :title='"居家服务订单"'>
        <template v-slot:content>
          <BaseListSwiper :listData='listData'> </BaseListSwiper>
        </template>
      </BaseBorderS>
    </div>
  </div>

</template>
    
<script>
import genderAge from './genderAge'
import heatBaiduMap from './heatBaiduMap'
import threeQuartersRing from './threeQuartersRing'
export default {
  name: 'BasisData',
  components: {
    genderAge,
    heatBaiduMap,
    threeQuartersRing
    // genderAge: () => import('./BasisData/genderAge')
  },
  data () {
    return {
      eChartsOptions_1: {
      },
      listData: []
    }
  },
  methods: {
    loginIn () {
      this.$axios.post('/datacenter/datacenter/api/search?lv=1&app_id=81b95d53d1f1f749b2e7bc561dc19830fb224f04&app_secret=7d353f73a6a5764549a7e58df6bffd35', {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(
        res => {
          if (res && res.code == "200") {
            // if (res.user.userGroup === "OTES_STUDENT") {
            //   sessionStorage.setItem("stuUser", JSON.stringify(res));
            //   sessionStorage.setItem('sooId', res.user.sooId)
            //   this.$router.push('/')
            // }
          } else if (res && res.code == "400") {
            // this.$message.error(res.msg)
          }
        },
        err => {

          err.msg && this.$message.error(err.msg);
        }
      )
    },
  },
  created () {
    setTimeout(() => {
      this.eChartsOptions_1 = {
        eCharts_1: {
          title: '老年人年龄分布',
          yAxisData: [
            '60-69',
            '70-79',
            '80-99',
            '86-99',
            '86-99',
            '100以上',
          ],
          data: [100, 250, 100, 88, 55, 99]
        },
        eCharts_2: {
          title: '老年人性别占比',
          data: [
            { text: '男', value: '55' },
            { text: '女', value: '45' }]
        },
      },
        this.listData = [{
          name: '王富贵',
          addr: '黄岛区金水路128号社区街道',
          title: '管道维修',
          person: '丁春蕾',
          time: '2020-05-06',
          status: '1',
        },
        {
          name: '杨女士',
          addr: '黄岛区漓江路128号社区街道',
          title: '惠民送时',
          person: '王贵和',
          time: '2020-06-03',
          status: '2',
        },
        {
          name: '徐红娟',
          addr: '黄岛区金水路75号社区街道',
          title: '养老保姆',
          person: '蒋秀霞',
          time: '2020-06-10',
          status: '3',
        }, {
          name: '李仁娣',
          addr: '黄岛区辽阳路',
          title: '管道维修',
          person: '徐桂珍',
          time: '2020-06-12',
          status: '4',
        }, {
          name: '吴喜梅',
          addr: '黄岛区合肥路566号',
          title: '惠民送时',
          person: '刘春',
          time: '2020-07-06',
          status: '1',
        }
        ]
    }, 1000)
    // this.loginIn ();
  }
}
</script>
    
<style lang="less" scoped>
.corona-box {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.corner-box {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.background-corona {
  background-image: url(../../assets/img/corona.png);
  height: 280px;
  width: 280px;
  transform: rotateZ(0deg);
  animation: rotate 5s linear infinite;
  margin: auto;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.corona-total {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.corona-total-title {
  font-size: 16px;
  color: #dfffff;
  text-align: center;
}
.corona-total-data {
  font-size: 32px;
  color: #fff;
  text-align: center;
}
</style>