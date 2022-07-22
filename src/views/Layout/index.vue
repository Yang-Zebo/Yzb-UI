<template>
  <div class="layout">
    <side-bar></side-bar>
    <div class="layout-right">
      <nav-bar></nav-bar>
      <div class="layout-main">
        <router-view v-if="show"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar/index'
import NavBar from '@/components/NavBar/index'
export default {
  name: 'layout',
  provide() {
    return {
      refresh: this.refresh
    }
  },
  components: {
    SideBar,
    NavBar
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    refresh() {
      this.show = false
      this.$nextTick(() => (this.show = true))
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