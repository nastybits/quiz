<template>
  <Page :title="`Раунд ${route.params.qID}`">

  </Page>
</template>

<script setup>
import Page from "@/components/Page.vue"
import { ref } from "vue"
import { useRoute } from "vue-router"

// Номер раунда
const route = useRoute()
const roundNumber = 1
</script>

<style lang="scss" scoped>

</style>