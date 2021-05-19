<template>
  <div class="base-select">
    <div class="show" @click.stop="clickSelect">
      <div v-if="showOptionValue">{{showOptionLabel}}</div>
      <div v-else>请选择</div>
      <i class="icon" ref="icon"></i>
    </div>
    <ul class="list" :class="className" ref="list">
      <li v-if="option.length === 0">请选择</li>
      <li v-else="option.length" :data-value="item.value" v-for="(item, index) in option" @click="selectVal">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BaseSelect',
    data() {
      return {
        show: false,
        storeShow: false,
        showOptionLabel: '',
        showOptionValue: '',
        className: ''
      }
    },
    props: {
      // 下拉选项
      option: {
        type: Array,
        default: []
      },
      // 有无默认值
      defaults: {
        type: [String, Number],
        default: ''
      }
    },
    methods: {
      // 下拉框显示隐藏
      changeShow() {
        console.log('：改变值运行此函数次数');
        let _this = this;
        if (this.show) {
          this.$refs.icon.style.rotateZ = '180deg';
          this.$refs.list.style.height = this.$refs.list.childElementCount * 36 + 'px';
          setTimeout(() => {
            _this.className = 'base-select-list'
          }, 475)
        } else {
          this.$refs.icon.style.rotateZ = '0deg';
          this.$refs.list.style.height = '0';
          this.className = '';
        }
      },
      changeOptionValue () {
        this.option.map(item => {
          if (item.value === this.showOptionValue) {
            if (this.showOptionLabel !== item.label) {
              this.showOptionLabel = item.label;
              this.changeEvent()
            }
          }
        });
        this.show = false
      },
      async clickSelect() {
        this.storeShow = this.show;
        await this.changeStore();
        this.show = !this.storeShow;
      },
      selectVal(e) {
        this.showOptionValue = e.target.dataset.value;
        this.changeOptionValue()
      },
      changeEvent() {
        this.$emit('change', this.showOptionValue)
      },
      changeStore () {
        return new Promise(res => {
          this.$store.dispatch('saveBaseSelectStatus', !this.selectStatus);
          res()
        })
      }
    },
    mounted() {
      let _this = this;
      // 赋默认值
      if (this.defaults !== null && this.defaults !== undefined && this.option.length) this.showOptionValue = this.defaults;
      // 点击页面其他位置关闭下拉框
      this.globalClick(() => {
        _this.show = false
      });
    },
    created () {
      this.__proto__.globalClick = function (callback) {
        document.getElementById('app').addEventListener('click', function () {
          callback()
        })
      }
    },
    watch: {
      show () {
        this.changeShow();
      },
      showOptionValue () {
        this.changeOptionValue()
      },
      selectStatus () {
        this.$refs.icon.style.rotateZ = '0deg';
        this.$refs.list.style.height = '0';
        this.className = '';
        this.show = false
      }
    },
    computed: {
      // 监听vuex中的状态变化
      selectStatus() {
        return this.$store.state.baseSelectStatus
      }
    }
  }
</script>

<style lang="less" scoped>
  * {
    font-size: 14px;
    font-weight: 400;
    user-select:none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .base-select {
    display: inline-block;
    margin: 0 15px;
    overflow: inherit;
    position: relative;
  }

  .show {
    width: 160px;
    height: 36px;
    border: 1px solid #267cd4;
    color: #fff;
    line-height: 36px;
    padding: 0 15px 0 10px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
  }

  i {
    display: inline-block;
    border-color: #fff transparent transparent transparent;
    border-style: solid;
    border-width: 7px 7px 0 7px;
    height: 0;
    margin-top: 14px;
    transition: all 0.5s;
  }

  ul {
    width: 160px;
    height: 0;
    max-height: 284px;
    overflow-y: hidden;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    box-sizing: border-box;
    z-index: 999;
    transition: all 0.5s;
    position: absolute;
    top: 36px;

  }

  // 自定义滚动条
  .base-select-list {
    overflow-y: auto;
  }
  .base-select-list::-webkit-scrollbar {/*滚动条整体样式*/
    width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .base-select-list::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #535353;
  }
  .base-select-list::-webkit-scrollbar-track {/*滚动条里面轨道*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #EDEDED;
  }



  li {
    height: 36px;
    color: #fff;
    background: #365F8A;
    line-height: 35px;
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
    padding: 0 15px 0 10px;
  }

  li:hover {
    color: #365F8A;
    background: #fff;
  }
</style>