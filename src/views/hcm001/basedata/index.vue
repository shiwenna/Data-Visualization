<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-07-27 15:19:55
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-30 09:12:57
-->
<template>
  <div>
    <div class="t-content">
      <div class="left-box">
        <base-line-box-1>
          <template v-slot:content>
            <base-info-display-1 :title="'补助老人数'"
                                 :value="'13253'"></base-info-display-1>
            <base-info-display-1 :title="'当前签约数'"
                                 :value="'2345'"></base-info-display-1>
            <base-info-display-1 :title="'服务组织数'"
                                 :value="'1243'"></base-info-display-1>
            <base-info-display-1 :title="'服务老人数'"
                                 :value="'1123'"></base-info-display-1>
          </template>
        </base-line-box-1>
        <br>
        <base-line-box-2 :title="'区/街道签约人数(补助老人、签约老人数)'">
          <template v-slot:content>
            <br>
            <signNum></signNum>
          </template>
        </base-line-box-2>
        <br>
        <base-line-box-2 :title="'报警（24h报警高峰期、报警分类）'">
          <template v-slot:content>
            <br>
            <base-info-display-2 :title="'报警次数'"
                                 :value="'123'"
                                 :status="'info'"></base-info-display-2>
            <base-info-display-2 :title="'已处理'"
                                 :value="'123'"></base-info-display-2>
            <base-info-display-2 :title="'未处理'"
                                 :value="'123'"
                                 :status="'danger'"></base-info-display-2>
            <br>
            <alarmNum></alarmNum>
          </template>
        </base-line-box-2>
      </div>
      <div class="middle-box">
        <h2>适老化改造数量<span class="title-num">12,345</span><span class="num-unit">次</span>
        </h2>
        <heatBaiduMap></heatBaiduMap>
      </div>

      <div class="right-box">
        <base-line-box-1>
          <template v-slot:content>
            <base-info-display-3></base-info-display-3>
            <base-info-display-2 :title="'今日服务次数'"
                                 :value="'123'"
                                 :num="'2'"></base-info-display-2>
            <base-info-display-2 :title="'本月服务人次'"
                                 :value="'123'"
                                 :num="'2'"></base-info-display-2>
          </template>
        </base-line-box-1>
        <br>
        <base-line-box-2 :title="'服务次数（近几天）曲线图'">
          <template v-slot:content>
            <br>
            <serviceNum></serviceNum>
          </template>
        </base-line-box-2>
        <br>
        <base-line-box-2 :title="'实际服务数量 （按大类）饼状图'">
          <template v-slot:content>
            <br>
            <serviceCategoryNum></serviceCategoryNum>
          </template>
        </base-line-box-2>
      </div>
    </div>

  </div>
</template>
    
<script>
import heatBaiduMap from './heatBaiduMap'
import alarmNum from './alarmNum'
import signNum from './signNum'
import serviceNum from './serviceNum'
import serviceCategoryNum from './serviceCategoryNum'
export default {
  name: 'basedata',
  components: {
    heatBaiduMap,
    alarmNum,
    signNum,
    serviceNum,
    serviceCategoryNum
    // genderAge: () => import('./BasisData/genderAge')
  },
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  }
}
</script>
    
<style>
.middle-box > h2 {
  position: fixed;
  z-index: 1;
  margin-left: 800px;
}
</style>