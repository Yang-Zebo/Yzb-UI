<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <el-option v-for="({label, value}, index) in dic" :key="index" :label="label" :value="value"></el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    dic: {
      type: Array,
      default: () => []
    },
    prop: String
  },
  components: { },
  data () {
    return {
    }
  },
  computed: { },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>