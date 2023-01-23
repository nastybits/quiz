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
import { useQuestionsPackStore } from "@/stores/questionsPack"
import questionsData from '@/data/questionsData'

/** Загрузка вопросов
 * @return {void}
 */
function loadQuestions() {
  const pack = useQuestionsPackStore()
  pack.init(questionsData[0])
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
