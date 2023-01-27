<!-- Точка входа -->
<template>
  <div class="wrapper">
    <div class="middle">
      <RouterView/>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { RouterView } from 'vue-router'
import { useQuestionPacks } from "@/stores/questionPacks"
import { useGameState} from "@/stores/gameState"
import packs from '@/data/questionsData'

/** Загрузка вопросов
 * @return {void}
 */
function loadQuestions() {
  const packStore = useQuestionPacks()
  const gameStore = useGameState()
  packStore.init(packs)
  gameStore.restoreFromCookies()
}

/** Загрузка текущих показателей команды
 * @return {void}
 */
function loadScores() {}

/** Инициализация приложения */
onMounted(() => {
  loadQuestions()
  loadScores()
})
</script>
