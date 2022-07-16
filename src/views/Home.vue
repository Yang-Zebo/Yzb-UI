<template>
  <div class="home">
    <base-form :formData="data" :option="option"></base-form>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm"
import {option} from '@/components/BaseForm/module/option'
export default {
  name: 'Home',
  components: {
    BaseForm
  },
  data() {
    return {
      option,
      data: {}
    }
  }
}
</script>
