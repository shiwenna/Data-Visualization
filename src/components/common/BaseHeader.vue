<!--
 * @Descripttion: Header 头部
 * @params: value:默认选中项名称，subTitle：标题项列表
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-24 15:13:47
 -->
<template>
  <div>
    <header>
      <ul class="tab">
        <li class="tab-select"
            :class="tabCls(item)"
            v-for="(item,index) in subTitle"
            :key="index"
            @click="handleChange(index)">
          <p>{{item.name}}</p>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default:''
    },
    subTitle: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    return {
      activeKey: this.value,
    }
  },

  mounted () {
    if(this.value){
      if(this.subTitle.find(_=>_.name==this.value).path){
      this.$router.push({
        path: this.subTitle.find(_=>_.name==this.value).path
      })  
      }
    }
  },
  created () {
    // this.subTitle.length%2!==0 && this.subTitle.splice(this.subTitle.length/2, 0, {name:this.title,index:this.subTitle.length+1})
  
  },
  methods: {
    handleChange (index) {
      const nav = this.subTitle[index];
      this.activeKey = nav.name;
      this.$emit('input', nav.name);
      this.$emit('on-click', nav.name);
      this.$router.push({
        path: nav.path
      })
    },
    tabCls (item) {
      return [
        {
          [`isTitle`]: item.isTitle,
          [`isActive`]: item.name === this.activeKey,
          // [`${prefixCls}-tab-focused`]: item.name === this.focusedKey,
        }
      ];
    },
  }
}
</script>

<style lang="less" scoped>
header {
  padding-top: 10px;
  min-height: 10%;
  box-sizing: border-box;
}
ul.tab {
  display: flex;
  justify-content: center;
}
.tab > .tab-select {
  color: #9fceff;
  width: 198px;
  height: 44px;
  font-size: 16px;
  text-align: center;
  line-height: 44px;
  margin-left: -20px;
  margin-top: 44px;
  cursor: pointer;
  background-image: url(../../assets/img/tab2.png);
}
.tab > .tab-select > p {
  padding: 0 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}
.tab > .isActive {
  color: #ffd375;
  background-image: url(../../assets/img/tab1.png);
}

.tab > .isTitle {
  background-image: url(../../assets/img/tab3.png);
  width: 310px;
  height: 88px;
  line-height: 88px;
  font-size: 26px;
  margin-top: 0;
  color: #fff;
  margin-left: -30px;
  margin-right: -10px;
}
.tab > .isTitle ~ li {
  background-image: url(../../assets/img/tab2Right.png);
}
.tab > .isTitle ~ .isActive {
  background-image: url(../../assets/img/tab1Right.png);
}
</style>

