<template>
  <div class="show-form card-container">
    <h1>表单</h1>
    <hr>
    <base-form  :option="option" :form-data="formData"></base-form>
    <hr>
    <h1>表格</h1>
    <hr>
    <base-table :option="option" :table-data="tableData"></base-table>
  </div>
</template>

<script>
import {option} from '@/components/option'
export default {
  name: 'show-form',
  props: {},
  data () {
    return {
      option,
      formData:{},
      tableData: []
    }
  },
  computed: { },
  methods: { }
}
</script>

<style lang="scss" scoped>
.show-form {
  background-color: #ffe;

}
</style>