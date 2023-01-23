<template>
  <Page title="Добро пожаловать!" subtitle="На первые и единственные ежегодные зимние игры!">
    Вы участвуете в лучшей на свете пародии на игру &laquo;ЧТО?ГДЕ?КОГДА?&raquo;.
    В ней вам необходимо будет отвечать на вопросы. Все вопросы идеально проверены и отобраны лучшими экспертами
    в области подобных игр ;)
    <template #footer>
      <Btn label="Продолжить" title="Продолжить" @click="router.push('/rules')"/>
    </template>
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
