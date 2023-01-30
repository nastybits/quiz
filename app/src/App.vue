<!-- Точка входа в приложение -->
<template>
  <div class="wrapper">
    <div class="middle">
      <RouterView/>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { RouterView } from "vue-router"
import { useQuestionPacks } from "@/stores/questionPacks"
import { useGameState} from "@/stores/gameState"
import packs from "@/data/questionsData"

/** Инициализация приложения */
onMounted(() => {
  const packStore = useQuestionPacks()
  const gameStore = useGameState()
  // Загружаем вопросы из js файла (TODO: Заменить логику на загрузку из БД когда будет готов бэк)
  packStore.init(packs)
  // Пробуем восстановить предыдущую сессию
  gameStore.restoreFromCookies()
})
</script>
