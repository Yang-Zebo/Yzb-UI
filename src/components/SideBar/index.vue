<template>
  <div class="side-bar">
    <div class="web-title">My Layout</div>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="active">
      <sub-menu :subMenuList="routes"></sub-menu>
    </el-menu>
  </div>
</template>

<script>
import SubMenu from './module/SubMenu.vue'
import { routes } from '@/router'
export default {
  name: 'side-bar',
  props: {
    active: {
      type: String,
      default: ''
    }
  },
  components: {
    SubMenu
  },
  data () {
    return {
      routes
    }
  },
  computed: {
  },
  methods: { }
}
</script>

<style lang="scss" scoped>
.side-bar {
  width: 200px;
  height: 100%;
  background-color: #545c64;
  .web-title {
    height: 60px;
    line-height: 55px;
    text-align: center;
    font-size: 28px;
    color: #fff;
  }
  .el-menu {
    border-right: none;
  }
}
</style>