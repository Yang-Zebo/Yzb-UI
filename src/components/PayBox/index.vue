<template>
  <div class="payment-password-box">
    <template v-for="(item, index) in digit">
      <el-input
        type="password"
        :key="item"
        :class="`pwd-class-${index}`"
        :readonly="index !== currentIndex"
        :ref="`paymentRef`"
        :maxlength="1"
        oninput="value=value.replace(/\D/g,'')"
        v-model.number="passwordVal[index]"
        @keydown.native="keydownHandle($event, index)"
      ></el-input>
    </template>
  </div>
</template>

<script>
export default {
  name: 'pay-box',
  props: {
    digit: {
      type: Number,
      default: 6
    },
    passwordVal: {
      type: Array,
      default: () => {
        return []
      }
    },
    dialogVisible: {
      type: Boolean
    }
  },
  data() {
    return {
      refList: [],
      // 当前能按的按钮
      currentIndex: 0,
      numArr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    }
  },
  computed: {},
  watch: {
    dialogVisible(n) {
      if (!n) {
        this.currentIndex = 0
      } else {
        this.refList[0].focus()
      }
    }
  },
  methods: {
    // 获取6个input ref 组成的数组
    getIptRef() {
      this.refList = this.$refs['paymentRef']
      // 给第一个输入框聚焦
      this.refList[0].focus()
    },
    keydownHandle(e, index) {
      if (e.code === 'Backspace') {
        if (
          this.passwordVal[this.currentIndex] === '' &&
          this.currentIndex >= 1
        ) {
          this.currentIndex -= 1
          this.refList[this.currentIndex].focus()
          this.passwordVal[this.currentIndex] = ''
        }
      } else if (this.numArr.includes(e.key)) {
        if (
          (this.passwordVal[this.currentIndex] ||
            this.passwordVal[this.currentIndex] === 0) &&
          this.currentIndex < this.digit - 1
        ) {
          this.currentIndex += 1
          this.refList[this.currentIndex].focus()
        }
      }
    }
  },
  mounted() {
    this.getIptRef()
  }
}
</script>

<style scoped lang="scss">
.payment-password-box {
  display: inline-block;
  border: 1px solid #ddd;
  .el-input {
    padding: 8px 0;
    width: 50px;
    height: 34px;
    margin-right: 0px;
    border-radius: 0px;
    background-color: #fff;
    ::v-deep .el-input__inner {
      padding: 5px 40%;
      text-align: center;
      height: 34px;
      font-size: 20px;
      outline: none;
      border: none;
      border-right: 1px solid #ddd;
      border-radius: 0;
    }
  }
  ::v-deep div:last-child .el-input__inner {
    border: none !important;
  }
}
</style>
