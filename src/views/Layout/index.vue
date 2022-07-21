<template>
  <div class="layout">
    <side-bar :active="active"></side-bar>
    <div class="layout-right">
      <nav-bar></nav-bar>
      <div class="layout-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar/index'
import NavBar from '@/components/NavBar/index'
export default {
  name: 'layout',
  components: {
    SideBar,
    NavBar
  },
  data () {
    return {
      active: 'ShowForm'
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  .layout-right {
    flex: 1;
    .layout-main {
      height: 100%;
      background-color: #eee;
      &::before {
        content: '';
        display: table;
      }
    }
  }
}
</style>