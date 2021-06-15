<!--
 * @Descripttion: 简单图片Swiper封装
 * @params: swiperOptions：Swiper(4-6)的配置选项，carouselData：数据数组
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-06-09 11:23:27
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-06-11 10:56:18
--> 
<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item, index) in carouselData" :key="index">
      <img :src="item" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'BaseSwiper',
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      carouselData: {
        type: Array,
        default () {
        return []
      }
      },
      swiperOptions: {
        type: Object,
        default () {
        return {}
      }
      }
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
      }
    },
    computed: {
      // swiper() {
      //   return this.$refs.mySwiper.$swiper
      // }
    },
    mounted() {
      // this.swiper.slideTo(0, 1000, false)
    }
  }
</script>

<style lang="less" scoped>
  .swiper-slide > img {
    width: 100%;
    height: 100%;
  }
</style>