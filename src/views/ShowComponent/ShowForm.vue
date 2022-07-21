<template>
  <div class="show-form card-container">
    <h1>表单</h1>
    <hr>
    <base-form  :option="option" :form-data="formData"></base-form>
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
      formData:{}
    }
  },
  computed: { },
  methods: { }
}
</script>

<style lang="scss" scoped>

</style>