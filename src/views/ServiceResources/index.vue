<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-06-10 15:37:35
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-22 14:31:11
--> 
<template>
  <div class="dis-flex"
       style="flex: 1;">
    <div class="dis-flex dis-flex-column"
         style="width: 30%;">
      <div class="main-left-top">
        <div class="service-organization">
          <p>服务组织</p>
          <div class="item item-left">
            <span>助老大食堂</span>
            <span>8<span>家</span></span>
          </div>
          <div class="item item-right">
            <span>服务驿站</span>
            <span>20<span>家</span></span>
          </div>
          <div class="item item-top">
            <span>养老机构</span>
            <span>87<span>家</span></span>
          </div>
          <div class="item item-bottom">
            <span>合作服务商</span>
            <span>5<span>家</span></span>
          </div>
          <div class="item item-center">
            <span>居家养老服务中心</span>
            <span>146<span>家</span></span>
          </div>
        </div>
      </div>
      <BaseBorderS flex="0 0 55%"
                   :title='"服务组织占比"'>
        <template v-slot:content>
          <customizedPie></customizedPie>
        </template>
      </BaseBorderS>
    </div>
    <div class="dis-flex dis-flex-column"
         style="width: 70%;padding-right:30px">
      <BaseBorderB flex="0 0 90%">
        <template v-slot:content>
          <glBaiduMap></glBaiduMap>
        </template>
      </BaseBorderB>

    </div>

  </div>
</template>
    
<script>
import customizedPie from './customizedPie'
import glBaiduMap from './glBaiduMap'
export default {
  name: 'ServiceResources',
  components: {
    customizedPie,
    glBaiduMap
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
    
<style lang="less" scoped>
.main-left-top {
  position: relative;
  padding: 10px;
  height: 500px;
  flex: 0 0 40%;
}
.service-organization {
  background-image: url(../../assets/img/serviceOrganization.png);
  width: 480px;
  // height: 400px;
  background-size: contain;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  line-height: 400px;
  font-size: 28px;
  color: #ffd375;
}
.item {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  position: absolute;
  width: 110px;
  height: 165px;
  background-image: url(../../assets/img/VectorIntelligenceObject.png);
}
.item-left {
  top: -30px;
  left: 90px;
}
.item-right {
  bottom: 130px;
  right: 10px;
}
.item-top {
  top: -30px;
  right: 90px;
}
.item-bottom {
  bottom: 130px;
  left: 10px;
}
.item-center {
  bottom: 40px;
  left: 180px;
}
.item > span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  text-align: center;
}
.item > span > span {
  font-size: 16px;
}
.item > span:first-child {
  font-size: 16px;
  color: #9bdef0;
  line-height: 30px;
    margin-top: 50px;
}
.item > span:last-child {
  font-size: 34px;
  color: #fff;
  line-height: 35px;
}
</style>