<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-05-19 15:07:45
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-05-20 09:56:43
-->
<template>
        <div class="t-progress">
          <!-- 小于30%添加class名称 less -->
          <div class="progress-wrapper less">
            <div class="progressbar active "
                 style="width: 10%"></div>
          </div>
          <span class="percent">90%</span>
        </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    flex: {
      type: [String, Number]
    },
  },
  data () {
    return {
      classType: '',
    }
  },

  mounted () {
    this.$nextTick(function () {

    })
  },
  created () {
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
/* 进度条 start */
.t-progress .progress-wrapper {
  display: inline-block;
  width: 90%;
  height: 1.5vh;
  background-color: #041025;
  border-radius: 0.462962963vh;
  overflow: hidden;
  vertical-align: middle;
}

.t-progress .progress-wrapper .progressbar {
  position: relative;
  height: 100%;
  border-radius: 0.462962963vh;
  background: -webkit-linear-gradient(left, #0c4dde, #258fe0);
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #0c4dde, #258fe0);
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #0c4dde, #258fe0);
  /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #0c4dde, #258fe0);
  /* 标准的语法 */
  -webkit-transition: width .6s ease;
  -o-transition: width .6s ease;
  transition: width .6s ease;
}

.t-progress .progress-wrapper .progressbar:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  -webkit-background-size: 1.1458333333vw 1.1458333333vw;
  background-size: 1.1458333333vw 1.1458333333vw;
  border-radius: 0.462962963vh;
}

/* 少于30%时 */
.progress-wrapper.less .progressbar {
  background: -webkit-linear-gradient(left, #f13f0b, #ffb220);
  /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #f13f0b, #ffb220);
  /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #f13f0b, #ffb220);
  /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #f13f0b, #ffb220);
  /* 标准的语法 */
}

.t-progress .progressbar.active:before {
  -webkit-animation: progress-bar-stripes 1s linear infinite;
  -o-animation: progress-bar-stripes 1s linear infinite;
  animation: progress-bar-stripes 1s linear infinite;
}

@-webkit-keyframes progress-bar-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1.1458333333vw 0;
  }
}
@-o-keyframes progress-bar-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1.1458333333vw 0;
  }
}
@keyframes progress-bar-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1.1458333333vw 0;
  }
}
 .percent {
    float: right;
    margin-top: 0.3703703704vh;
    color: #0ab6fd;
    font-size: 1.4814814815vh;
    font-weight: bold;
}
/* 进度条 end */
</style>
