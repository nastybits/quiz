<template>
  <Page title="Добро пожаловать!" subtitle="На первые и единственные ежегодные зимние игры!">
    Вы участвуете в лучшей на свете пародии на игру &laquo;ЧТО?ГДЕ?КОГДА?&raquo;.
    В ней вам необходимо будет отвечать на вопросы. Все вопросы идеально проверены и отобраны лучшими экспертами
    в области подобных игр ;)
  </Page>
</template>

<script setup>
import Cookies from "js-cookie"
import Page from "@/components/Page.vue"
import { ref, onMounted, onUnmounted } from "vue"

// Состояния приложения
let state = ref({ type: "Start" })

/** Проверка сохраненного состояния
 * @return {void}
 */
function checkState() {
  let data = Cookies.get("state")
  if (!data) {
    return
  }
  try {
    data = JSON.parse(data)
  } catch (e) {
    console.error(e)
    return
  }
  state.value = data
}

onMounted(() => {
  window.stateInterval = setInterval(() => {
    checkState()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(window.stateInterval)
})
</script>

<style lang="scss" scoped>

</style>
