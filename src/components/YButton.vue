<template>
  <button class="y-button">
    <slot>按钮</slot>
  </button>
</template>

<script>
export default {
  name: 'YButton',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style scoped lang="scss">
.y-button {
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  border: ;
}
</style>
