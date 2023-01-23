<template>
  <Page :title="`Раунд ${roundNumber}`">
    <QuizQuestion/>
  </Page>
</template>

<script setup>
import Page from "@/components/Page.vue"
import QuizQuestion from "@/components/QuizQuestion.vue"
import { ref } from "vue"

// Номер раунда
const roundNumber = ref(1)
</script>

<style lang="scss" scoped>

</style>