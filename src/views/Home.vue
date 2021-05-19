<!--
 * @Descripttion: 首页
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-10 11:23:03
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-24 15:08:08
 -->
<template>
  <div>
    <div class='home'>
      <BaseHeader :value="'老年人整体数据'" :subTitle="subTitle"></BaseHeader>
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
      subTitle:[{
          name: "老年人整体数据",
          index: 0,
          path: '/basisdata',
        },
        {
          name: "养老服务资源",
          index: 1,
           path: '/serviceresources'
        },
        {
          name: "西海岸新区养老",
          index: 2,
          isTitle: true
        },
        {
          name: "机构养老",
          path: '/pensionInstitutions',
          index: 3
        },
        {
          name: "居家养老",
          path: './homeInstitutions',
          index: 4
        }]
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
  background-color: #08072e;
  background-position: top center;
  background-size: 100% 100%;
  display: flex;
  flex-flow: column;
  background-image: url(../assets/img/background.png);
}

</style>
