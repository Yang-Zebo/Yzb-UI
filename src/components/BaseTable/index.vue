<template>
  <div ref="base-table" class="table">
    <el-table
      ref="el-table"
      :data="tableData"
      v-loading="tableLoading">

    </el-table>
  </div>
</template>

<script>
export default {
  name: 'base-table',
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  components: { },
  data () {
    return {
      tableLoading: false
    }
  },
  computed: { },
  methods: { }
}
</script>

<style lang="scss" scoped>

</style>