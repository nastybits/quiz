<template>
  <div class="page">
    <div class="page__body">
      <h1 class="page__title">Раунд {{ currentQuestionIdx + 1}}</h1>
      <quiz-question :question="currentQuestion" :showQuestion="showQuestion" :showAnswer="showAnswer"/>
      <h1 v-if="isTimerActive" class="page__title">{{ time }}</h1>
    </div>
    <div class="page__footer">
      <div class="controls">
        <button v-if="!showAnswer && !isTimerActive && !showQuestion" class="btn" @click="askQuestion">Внимание вопрос!</button>
        <button v-if="showQuestion && !showAnswer" class="btn" @click="answer(true)">Верный ответ</button>
        <button v-if="!isTimerActive && showQuestion && !showAnswer" class="btn" @click="startTimer">Время!</button>
        <button v-if="isTimerActive" class="btn" @click="resetTimer">Сброс</button>
        <button v-if="showQuestion && !showAnswer" class="btn" @click="answer(false)">Не верный ответ</button>
        <button v-if="showAnswer" class="btn" @click="showAnswer = false">Показать текст вопроса</button>
        <button v-if="showAnswer" class="btn" @click="nextQuestion">Следующий вопрос</button>
      </div>
      <div class="sounds">
        <audio ref="sig1" src="/audio/sig1.mp3"></audio>
        <audio ref="sig2" src="/audio/sig2.mp3"></audio>
        <audio ref="sig3" src="/audio/sig3.mp3"></audio>
        <audio ref="gong" src="/audio/gong.mp3"></audio>
        <audio ref="music1" src="/audio/music1.mp3"></audio>
        <audio ref="music2" src="/audio/music2.mp3"></audio>
        <audio ref="music3" src="/audio/music3.mp3"></audio>
        <audio ref="pause1" src="/audio/pause1.mp3"></audio>
        <audio ref="pause2" src="/audio/pause2.mp3"></audio>
        <audio ref="pause3" src="/audio/pause3.mp3"></audio>
        <audio ref="pause4" src="/audio/pause4.mp3"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuestionsStore } from "@/stores/questions"
import QuizQuestion from "@/components/QuizQuestion.vue"

export default {
  name: "AdminView",
  components: {
    QuizQuestion
  },
  data() {
    return {
      currentQuestionIdx: 0,
      showQuestion: false,
      showAnswer: false,
      time: this.$consts.ANSWER_TIME,
      isTimerActive: false
    }
  },
  setup() {
    const store = useQuestionsStore()
    const questions = store.questions
    window.timer = null

    return { questions }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIdx]
    }
  },
  methods: {
    askQuestion() {
      this.play("gong")
      this.showQuestion = true
    },
    /** Действия при принятии ответа
     * @param isRight {boolean} - Верный или неверный был ответ
     * @return {void}
     **/
    answer(isRight) {
      this.resetTimer()
      this.showAnswer = true
      const name = this.currentQuestion.music.split(".")
      this.play(name[0])
    },
    /** Проигрывание выбранного файла
     * @param ref {string} - Имя файла для проигрывания
     * @return {void}
    **/
    play(ref) {
      if (this.$refs[ref]) {
        this.$refs[ref].play()
      }
    },
    /** Остановка проигрывания выбранного файла
     * @param ref {string} - Имя файла для проигрывания
     * @return {void}
     **/
    stop(ref) {
      if (this.$refs[ref]) {
        this.$refs[ref].pause()
        this.$refs[ref].currentTime = 0.0
      }
    },
    /** Начало обратного отсчета времени для ответа
     * @return {void}
     **/
    startTimer() {
      if (this.isTimerActive) {
        return
      }
      this.isTimerActive = true
      this.play('sig1')
      window.timer = setInterval(() => {
        this.time -= 1
        if (this.$consts.ANSWER_TIME / 2 === this.time) {
          this.play('sig2')
        }
        if (this.time === 0) {
          this.play('sig3')
          clearInterval(window.timer)
          this.time = this.$consts.ANSWER_TIME
          this.isTimerActive = false
        }
      }, 1000)
    },
    /** Сброс обратного отсчета времени для ответа
     * @return {void}
     **/
    resetTimer() {
      clearInterval(window.timer)
      this.time = this.$consts.ANSWER_TIME
      this.isTimerActive = false
    },
    /** Переход к следующему вопросу
     * @return {void}
     **/
    nextQuestion() {
      this.showAnswer = false
      this.showQuestion = false
      const name = this.currentQuestion.music.split(".")
      this.stop(name[0])
      this.resetTimer()
      this.currentQuestionIdx++
      this.play("gong")
    }
  }
}
</script>

<style scoped>
.sounds {
  display: none;
}

.controls {
  display: flex;
  width: 100%;
  justify-content: center;
}

.controls button {
  margin: 0 10px;
}
</style>