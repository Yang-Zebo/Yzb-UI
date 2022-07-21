<template>
  <div class="sub-menu">
    <template v-for="{ name, children, meta } in subMenuList">
      <el-submenu
          v-if="children && children.length > 0"
          :key="name"
          :index="name"
      >
        <template slot="title">
          <i :class="meta.icon"></i>
          <span>{{ meta.title }}</span>
        </template>
        <sub-menu :subMenuList="children"></sub-menu>
      </el-submenu>
      <el-menu-item v-else :key="name" :index="name" @click="to(name)">
        <i :class="meta.icon"></i>
        <span>{{ meta.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'sub-menu',
  props: {
    subMenuList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return { }
  },
  methods: {
    to(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>