<!--
 * @Descripttion: 列表轮播
 * @params: listData：数据列表，flex：flex布局
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-05-20 16:10:24
 -->
<template>
  <div :style="styles"
       style='overflow: hidden;'>
    <!-- <swiper ref="mySwiper"
            :style="styles"
            :options="swiperOptions">
      <swiper-slide v-for="(item,index) in listData"
                    :key="index"> -->

        <!-- 未开始订单li成添加class名称todo -->
        <li class="list-item todo">
          <div class="order-no">
            <span class="order-icon"></span>
            <span>订单号</span>
            <span>ADI225625</span>
            <p class="customer">客户： <strong>A365</strong></p>
          </div>
          <div class="delivery-time">
            <span>2018-04-19</span>
            <span class="order-status">待生产</span>
            <p class="num">数量: <strong>70</strong>&nbsp;/100</p>
          </div>
        </li>
        <li class="list-item">
          <div class="order-no">
            <span class="order-icon"></span>
            <span>订单号</span>
            <span>ADI225625</span>
            <p class="customer">客户： <strong>A365</strong></p>
          </div>
          <div class="delivery-time">
            <span>2018-04-19</span>
            <span class="order-status">进行中</span>
          </div>
          <!-- <div class="t-progress">
            <span class="percent">30%</span> -->
            <!-- 小于30%添加class名称 less -->
            <!-- <div class="progress-wrapper less">
              <div class="progressbar active"
                   style="width: 30%"></div>
            </div>
            <p class="num">数量: <strong>30</strong>&nbsp;/100</p>
          </div> -->
        </li>

        <!-- 已完订单li成添加class名称finished -->
        <li class="list-item finished">
          <div class="order-no">
            <span class="order-icon"></span>
            <span>订单号</span>
            <span>ADI225625</span>
            <p class="customer">客户： <strong>A365</strong></p>
          </div>
          <div class="delivery-time">
            <span>2018-04-19</span>
            <span class="order-status">已完成</span>
            <p class="num">数量: <strong>100</strong>&nbsp;/100</p>
          </div>
        </li>

      <!-- </swiper-slide>
    </swiper> -->
  </div>
</template>

<script>
import dataDictionary from "@/mixins/data-dictionary";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  mixins: [dataDictionary],
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    listData: {
      type: Array,
      default () {
        return []
      }
    },
    maxHeight: {
      type: [String, Number],
      default: 16
    },
  },
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 15,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        loopedSlides: 6,
      }
    }
  },

  mounted () {
  },
  created () {
  },
  methods: {

  },
  computed: {
    styles () {
      let style = {};
      if (this.maxHeight) {
        style.maxHeight = `${this.maxHeight}vw`;
      }
      return style;
    },
    // swiper () {
    //   return this.$refs.mySwiper.$swiper
    // }
  }
}
</script>

<style lang="less" scoped>
 .list-item {
  padding: 1.2037037037vh 0.625vw 0.7407407407vh 0.8854166667vw;
  // margin-bottom: 0.9259259259vh;
  background-color: #15273f;
  border: 1px solid #15273f;
  border-radius: 0.2314814815vh;
  -webkit-transition: 0.4s ease;
  -o-transition: 0.4s ease;
  transition: 0.4s ease;
}
 .list-item.todo .order-no .order-icon {
  background: url(../../assets/img/t-order-icon-2.png) no-repeat center;
  background-size: 100% 100%;
}
 .order-no .order-icon {
  display: inline-block;
  width: 2.037037037vh;
  height: 2.037037037vh;
  background: url(../../assets/img/t-order-icon.png) no-repeat center;
  background-size: 100% 100%;
  vertical-align: middle;
}
 .order-no {
   color: #fff;
    font-size: 1.4814814815vh;
     > span {
  margin-right: 0.78125vw;
  line-height: 1;
}
 }

 .list-item.finished .order-no .order-icon {
  background: url(../../assets/img/t-order-icon-1.png) no-repeat center;
  background-size: 100% 100%;
}
 .order-status {
  font-size: 0.7291666667vw;
  color: #ffaf14;
  font-weight: bold;
  margin-left: 1.171875vw;
}
 .list-item.finished .order-status {
  color: #09cffe;
}
 .list-item.todo .order-status {
  color: #ff5908;
}
 .order-no .customer {
  float: right;
}
p {
  margin: 0;
}
 .order-no strong {
  font-size: 1.6666666667vh;
  color: #00ffc6;
}
 .list-item.finished .delivery-time,
 .list-item.todo .delivery-time {
  margin: 1.2962962963vh 0 0.462962963vh 0;
}
 .delivery-time {
  font-size: 1.2962962963vh;
  color: rgba(255, 255, 255, 0.5);
  margin: 0.9259259259vh 0 0.8333333333vh 0;
  padding-left: 1.9791666667vw;
  // width: 100%;
  overflow: hidden;
}
 .num {
  float: right;
  font-size: 1.3888888889vh;
  line-height: 1.9444444444vh;
  color: #fff;
}
.num strong {
    color: #ffaf14;
}
</style>

