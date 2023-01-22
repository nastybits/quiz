<template>
  <div class="page container">
    <div class="page__body">
      <TheMeeting v-if="state.type === 'Start'" key="=s"/>
      <TheRules v-if="state.type === 'Rules'" key="r"/>
      <div v-if="state.type === 'Question'" key="q">
        <h1 class="page__title">Раунд {{ state.questionIdx + 1}}</h1>
        <quiz-question :questionIdx="state.questionIdx" :showQuestion="state.showQuestion" :showAnswer="state.showAnswer"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Cookies from "js-cookie"
import { ref, onMounted, onUnmounted } from "vue"
import TheMeeting from "@/components/TheMeeting.vue"
import TheRules from "@/components/TheRules.vue"
import QuizQuestion from "@/components/QuizQuestion.vue"

// Состояния приложения
let state = ref({ type: "Start" })

/** Проверка сохроаненного состояния
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
