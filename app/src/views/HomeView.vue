<template>
  <Page title="Добро пожаловать!">
    <Btn label="Создать игру" title="Создать игру" @click="router.push('/rules')" lg/>
  </Page>
</template>

<script setup>
import Btn from "@/components/ui/QBtn.vue"
import Page from "@/components/Page.vue"
import { useRouter } from "vue-router"

const router = useRouter()
</script>

<style lang="scss" scoped>

</style>
