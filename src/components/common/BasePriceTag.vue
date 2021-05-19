<!--
 * @Descripttion: 价格标签
 * @params: label：标签，value：值
 * @version:
 * @Date: 2020-06-04
 -->
<template>
  <div class="price-tag">
    <div>
      <i></i>
      {{label}}
    </div>
    <div>{{value}}</div>
  </div>
</template>

<script>
  export default {
    name: 'BasePriceTag',
    data() {
      return {}
    },
    props: {
      label: {
        type: String
      },
      value: {
        type: [String, Number]
      }
    },
    created() {

    }
  }
</script>

<style lang="less" scoped>
  .price-tag {
    min-height: 4vh;
    max-height: 6.5vh;
    height: 6.5vh;
    margin: 0.5vh;
    background: rgba(67, 110, 182, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.31);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 1.5vw;
    div {
      color: #fff;
      display: flex;
      flex-flow: column;
      justify-content: center;
      position: relative;
      i {
        display: block;
        width: 25px;
        height: 20px;
        background-image: url(../../assets/img/price_tag.png);
        background-size: 100% 100%;
        position: absolute;
        left: 0;
      }
    }
    div:first-child {
      font-size: 14px;
      font-weight: 400;
      padding-left: 35px;
    }
    div:last-child {
      font-size: 26px;
    }
  }
</style>