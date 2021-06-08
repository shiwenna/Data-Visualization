<!--
 * @Descripttion: 动态点1 
 * @params: top：距离上边位移（vw)，left：距离左边位移（vw)，colorstatus：颜色状态可选参数：fault-红色、finished-绿色
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-05-21 13:53:32
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-06-08 15:52:28
-->
<template>
  <div class="line-station" 
       :style="styles" 
       :class="colorstatus">
    <span class="line-station-circle"
          style="display: inline;">
          <i></i>
          <span></span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    colorstatus: {
      type: String,
      default: ''
    },
    top: {
      type: [String, Number],
      default: '3'
    },
    left: {
      type: [String, Number],
      default: '3'
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
    styles () {
      let style = {};
      if (this.top) {
        style.top = `${this.top}vw`;
      }
      if (this.left) {
        style.left = `${this.left}vw`;
      }
      return style;
    },
  }
}
</script>

<style lang="less" scoped>
.line-station {
  position: absolute;
  width: 25px;
  height: 25px;
}

.line-station-circle {
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  position: absolute;
  z-index: 1;
  display: none;
  border-radius: 50%;
  background-color: rgba(42, 188, 253, 0.35);
}
.line-station-circle i {
  width: 13px;
  height: 13px;
  border: 0.1302083333vw solid #fcffff;
  background-color: #4ffffd;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  -webkit-animation: proactive3 2s ease-in-out infinite;
  -o-animation: proactive3 2s ease-in-out infinite;
  animation: proactive3 2s ease-in-out infinite;
}

.line-station.finished .line-station-circle {
  background-color: rgba(0, 198, 96, 0.35);
}
.line-station.finished .line-station-circle i {
  background-color: #01fab7;
  -webkit-animation: proactive2 2s ease-in-out infinite;
  -o-animation: proactive2 2s ease-in-out infinite;
  animation: proactive2 2s ease-in-out infinite;
}

@-webkit-keyframes proactive2 {
  0% {
    background-color: #01fab7;
    transform: scale(0.9);
  }
  100% {
    background-color: #00c660;
    transform: scale(1);
  }
}
@-webkit-keyframes proactive3 {
  0% {
    background-color: #4ffffd;
    transform: scale(0.9);
  }
  100% {
    background-color: #005696;
    transform: scale(1);
  }
}



.line-station.fault .line-station-circle {
  // background-color: rgba(0, 198, 96, 0.35);
  background-color: rgba(200, 76, 50, 0.5)
  // color: #ff5908;
}
.line-station.fault .line-station-circle i {
  background-color: #dd3211;
  -webkit-animation: proactive4 2s ease-in-out infinite;
  -o-animation: proactive4 2s ease-in-out infinite;
  animation: proactive4 2s ease-in-out infinite;
}


@-webkit-keyframes proactive4 {
  0% {
    background-color: #dd3211;
    transform: scale(0.9);
  }
  100% {
    background-color: #fdee29;
    transform: scale(1);
  }
}

</style>
