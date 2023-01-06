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

<script>
import Cookies from "js-cookie"
import TheMeeting from "@/components/TheMeeting.vue"
import TheRules from "@/components/TheRules.vue"
import QuizQuestion from "@/components/QuizQuestion.vue"

window.stateInterval = null

export default {
  name: "HomeView",
  components: {
    TheMeeting,
    TheRules,
    QuizQuestion
  },
  data() {
    return {
      state: { type: "Start" },
      time: 0
    }
  },
  methods: {
    checkState() {
      const data = Cookies.get("state")
      if (data) {
        this.state = JSON.parse(data)
      }
    }
  },
  mounted() {
    window.stateInterval = setInterval(() => {
      this.checkState()
    }, 1000)
  },
  unmounted() {
    clearInterval(window.stateInterval)
  }
}
</script>

<style lang="scss" scoped>

</style>
