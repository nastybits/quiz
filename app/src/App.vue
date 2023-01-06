<!-- Точка входа -->
<template>
  <div class="wrapper">
    <div class="middle">
      <RouterView/>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: "App",
  components: {
    RouterView
  }
}
</script>

<style scoped>

</style>
