<!--
 * @Descripttion: 404页面，5秒后返回首页
 * @params: 
 * @Author: Caoshuangna
 * @Date: 2019-10-10 11:23:03
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-03-09 14:31:13
 -->
<template>
  <div class="wapper">
    <div class="img-box">
      <img src="../../assets/404.png"
           class="img">
    </div>
  </div>
</template>
<style lang="less" scoped>
.wapper {
  position: relative;
  height: 100vh;
  background-color: #d7d8ca;
}
.img-box {
  .img {
    height: 100vh;
    max-width: 100vw;
    width: 100vw;
  }
}
</style>
<script>
export default {
  mounted () {
    let that=this;
    setTimeout(()=> {
      that.$router.push('/home')
      }, 5000)
  },
}
</script>
