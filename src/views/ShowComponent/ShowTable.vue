<template>
  <div class="show-table card-container">
    <h1>表格</h1>
    <hr>
    <base-table :option="option" :table-data="tableData"></base-table>
  </div>
</template>

<script>
import {option} from '@/components/option'
export default {
  name: 'show-table',
  props: {},
  components: { },
  data () {
    return {
      option,
      tableData: []
    }
  },
  computed: { },
  methods: { }
}
</script>

<style lang="scss" scoped>

</style>