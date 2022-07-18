<template>
  <div class="home">
    <base-form :formData="formData" :option="option"></base-form>
    <base-table :tableData="tableData" :option="option"></base-table>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm"
import BaseTable from "@/components/BaseTable";
import {option} from '@/components/BaseForm/module/option'
export default {
  name: 'Home',
  components: {
    BaseForm,
    BaseTable
  },
  data() {
    return {
      option,
      formData: {

      },
      tableData: []
    }
  }
}
</script>
<style lang="scss" scoped>

</style>