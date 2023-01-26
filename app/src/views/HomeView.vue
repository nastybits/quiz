<template>
  <Page title="Добро пожаловать!">
    <Btn label="Создать игру" title="Создать игру" @click="router.push('/admin/create')" lg/>
  </Page>
</template>

<script setup>
import Btn from "@/components/ui/QBtn.vue"
import Page from "@/components/Page.vue"
import { useRouter } from "vue-router"

const router = useRouter()
</script>
