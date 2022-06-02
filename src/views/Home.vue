<template>
  <div class="home">
    <y-button></y-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    YButton: () => import('@/components/YButton.vue')
  }
}
</script>
