<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2021-05-19 15:07:45
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-05-20 10:10:16
-->
<template>
  <div class="production-model">
    <p class="table-title">
      <!-- <img src="images/t-model.png"> -->
      生产TOP5型号
    </p>
    <table class="chart-table">
      <thead>
        <tr>
          <th>型号</th>
          <th>计划数</th>
          <th>完成数</th>
          <th>完成率</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>510E</td>
          <td>100</td>
          <td>90</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>510E</td>
          <td>100</td>
          <td>90</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>510E</td>
          <td>100</td>
          <td>90</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>510E</td>
          <td>100</td>
          <td>90</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>510E</td>
          <td>100</td>
          <td>90</td>
          <td>90%</td>
        </tr>
      </tbody>
    </table>
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
.production-model .table-title {
  font-size: 1.4814814815vh;
  color: #b2d6ff;
}
p {
  margin: 0;
}
.production-model table {
  margin-top: 0.462962963vh;
  text-align: center;
  width: 100%;
  border-spacing: 0.1041666667vw 0.2083333333vw;
  border-collapse: separate;
}
.production-model thead tr th:first-child,
.production-model tbody tr td:first-child {
  border-top-left-radius: 0.2604166667vw;
}
.production-model table thead tr th {
  background-color: #182c47;
  color: #ffffff;
  font-size: 1.2962962963vh;
  line-height: 1.0416666667vw;
  padding: 0.625vw 0;
  text-align: center;
  font-weight: normal;
}
.production-model table tbody tr:first-child td {
  color: #ff5807;
}
.production-model thead tr th:first-child,
.production-model tbody tr td:first-child {
  border-top-left-radius: 0.2604166667vw;
}
.production-model table tbody tr td {
  background-color: #12243c;
  color: #ffffff;
  font-size: 0.7291666667vw;
  line-height: 1.0416666667vw;
  padding: 0.3645833333vw 0;
  text-align: center;
  border: 1px solid transparent;
}
.production-model table tbody tr:nth-child(2) td {
  color: #ffaf14;
}
</style>
