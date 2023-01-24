<template>
  <Page :title="`Раунд ${route.params.qID}`"></Page>
</template>

<script setup>
import Page from "@/components/Page.vue"
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<style lang="scss" scoped>

</style>