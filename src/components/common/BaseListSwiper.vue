<!--
 * @Descripttion: 列表轮播
 * @params: listData：数据列表，flex：flex布局
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-28 13:36:46
 -->
<template>
  <div :style="styles"
       style='overflow: hidden;'>
    <swiper ref="mySwiper" :style="styles"
            :options="swiperOptions">
      <swiper-slide v-for="(item,index) in listData"
                    :key="index">
        <li class="news-item">
          <div class="list-item-header">
            <span class="title">老人姓名：{{item.name}}</span>
            <span class="addr">地址：{{item.addr}}</span>
          </div>
          <div class="list-item-body">
            <span class="status"
                  :class="`c${item.status}`">{{orderStatusValue[item.status]}}</span>
            <span class="title">{{item.title}}</span>
          </div>
          <div class="list-item-footer">
            <span class="person">联系人：{{item.person}}</span>
            <span class="time">下单时间：{{item.time}}</span>
          </div>
        </li>
      </swiper-slide>
   </swiper>
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
      default: 25
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
        loop : true,
        loopFillGroupWithBlank : true,
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
.news-item {
  background-color: rgba(103, 171, 255, 0.2);
  border-radius: 10px;
  padding: 0 20px;
  // margin-bottom: 20px;
  .list-item-header {
    padding: 8px 0;
    color: #9bdef0;
    font-size: 13px;
    border-bottom: 1px solid #1482da;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    span {
      padding-right: 15px;
    }
  }
  .list-item-body {
    margin: 10px 0;
    color: white;
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    span {
      margin-right: 8px;
    }
    .status {
      width: 80px;
      font-size: 14px;
      padding: 2px 10px;
    }
    .title {
    }
    .c1 {
      background-color: #f9af1f;
    }
    .c2 {
      background-color: #3da4ee;
    }
    .c3 {
      background: linear-gradient(to right, #3da4ee, #37b05a);
    }
    .c4 {
      background-color: #37b05a;
    }
  }
  .list-item-footer {
    color: #9bdef0;
    font-size: 14px;
    padding-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    span {
      padding-right: 20px;
    }
    .person {
      &::before {
        content: "";
        width: 25px;
        height: 20px;
        background: url(../../assets/img/person.png) no-repeat;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .time {
      &:before {
        content: "";
        width: 25px;
        height: 20px;
        background: url(../../assets/img/time.png) no-repeat;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>

