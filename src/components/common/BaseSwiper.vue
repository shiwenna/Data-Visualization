<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-06-09 11:23:27
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-09 13:46:52
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
    name: 'Carousel',
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      carouselData: {
        type: Array,
        default: []
      }
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      this.swiper.slideTo(0, 1000, false)
    }
  }
</script>

<style lang="less" scoped>
  .swiper-slide > img {
    width: 100%;
    height: 100%;
  }
</style>