<!--
 * @Descripttion: BorderS 基础边框-小 
 * @params: flex：弹性布局，title：标题
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-07 15:44:34
 -->
<template>
  <div :style="styles" class="padding">
    <h4>{{title}}</h4>
    <div class="main-details"
         :class="[classType]"
         ref="companyStyle">
      <slot name="content"></slot>
    </div>
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
      // this.classType = this.$refs.companyStyle.clientWidth>1000 ? 'big':'sml';
      this.classType = this.$refs.companyStyle.clientWidth>600 ? 'big':'sml';
    })
  },
  created () {
  },
  methods: {

  },
  computed: {
    styles () {
      let style = {};
      if (this.flex) {
        style.flex = `${this.flex}`;
      }
      return style;
    },
  }
}
</script>

<style lang="less" scoped>
h4 {
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
  padding: 15px 0 5px 20px;
}
.padding{
padding: 5px 15px;
}
.main-details {
  // min-height: 70%;
  // min-width: 200px;
  position: relative;
  border: 1.5em solid transparent;
}
.big{
  border-image: url(../../assets/img/bord-b.png) 25 25 round;
}

.sml{
  border-image: url(../../assets/img/bord.png) 25 25 round;
}
</style>

