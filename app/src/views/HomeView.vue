<!-- Компонент домашней страницы -->
<template>
  <Page title="Добро пожаловать!">
    <Btn label="Создать игру" title="Создать игру" @click="router.push('/admin/create')" lg/>
    <Btn label="Перейти к игре" title="Перейти к игре" @click="router.push('/game')" lg/>
  </Page>
</template>

<script setup>
import Btn from "@/components/ui/QBtn.vue"
import Page from "@/components/Page.vue"
import { useRouter } from "vue-router"

const router = useRouter()
</script>
