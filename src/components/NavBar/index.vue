<template>
  <div class="navbar-box">
    <div class="navbar"></div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {},
  components: { },
  data () {
    return { }
  },
  computed: { },
  methods: { }
}
</script>

<style lang="scss" scoped>
.navbar-box {
  height: 60px;
  overflow: hidden;
}
.navbar {
  height: 55px;
  box-shadow: 0px 0px 5px 5px rgba($color: #000000, $alpha: 0.2);
}
</style>