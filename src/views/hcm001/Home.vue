<!--
 * @Descripttion: 首页
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-10 11:23:03
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-27 15:20:36
 -->
<template>
  <div>
    <div class='home'>
      <BaseHeader :value="'家庭养老床位'"
                  :subTitle="subTitle"></BaseHeader>
      <router-view />
      <!-- <BaseFloatStar></BaseFloatStar> -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      subTitle: []
    }
  },

  methods: {

  },
  created () {

  },
  mounted () {

  },
}
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  background-color: #05122a;
  background-position: top center;
  background-size: 100% 100%;
  display: flex;
  flex-flow: column;
  // background-image: url(../assets/img/background.png);
}
</style>
