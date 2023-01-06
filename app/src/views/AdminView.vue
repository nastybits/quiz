<template>
  <div class="container-fluid">
    <div class="row">
      <div class="sidebar md-2">
        <button class="btn" @click="setState('Start')">Начало</button>
        <button class="btn" @click="setState('Rules')">Правила</button>
        <button class="btn" @click="setState('Question')">Вопросы</button>
        <button class="btn" @click="toggleMusic('volchok')">Волчек</button>
        <button class="btn" @click="toggleMusic('volchok2')">Волчек 2</button>
        <hr>
        <button v-if="state.questionIdx >= 0 && !state.showAnswer && !isTimerActive && !state.showQuestion" class="btn" @click="askQuestion">Внимание вопрос!</button>
        <button v-if="state.showQuestion && !state.showAnswer" class="btn" @click="answer(true)">Верный ответ</button>
        <button v-if="!isTimerActive && state.showQuestion && !state.showAnswer" class="btn" @click="startTimer">Время!</button>
        <button v-if="isTimerActive" class="btn" @click="resetTimer">Сброс</button>
        <button v-if="state.showQuestion && !state.showAnswer" class="btn" @click="answer(false)">Не верный ответ</button>
        <button v-if="state.showAnswer" class="btn" @click="showQuestion">Показать текст вопроса</button>
        <button v-if="state.showAnswer" class="btn" @click="nextQuestion">Следующий вопрос</button>
        <hr>
        <h1 v-if="isTimerActive" class="page__title">{{ time }}</h1>
      </div>
      <div class="md-10">
        <iframe class="frame" src="http://127.0.0.1:5173"></iframe>
        <div v-if="currentQuestion" style="font-size: 20px">
          <p style="font-size: 20px">{{currentQuestion.question}}</p>
          <p>{{currentQuestion.answer}}</p>
          <p>{{currentQuestion.comment}}</p>
        </div>
      </div>
    </div>
    <div class="sounds">
      <audio ref="meeting" src="/audio/meeting.mp3"></audio>
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
      <audio ref="volchok" src="/audio/volchok.mp3"></audio>
      <audio ref="volchok2" src="/audio/volchok2.mp3"></audio>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie"

import {useQuestionsStore} from "@/stores/questions";
import audio from "@/mixins/audio"
import QuizQuestion from "@/components/QuizQuestion.vue"

export default {
  name: "AdminView",
  mixins: [audio],
  components: {
    QuizQuestion
  },
  data() {
    return {
      state: { type: "Start" },
      time: this.$consts.ANSWER_TIME,
      isTimerActive: false,
      currentPlay: null
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
      return this.questions[this.state.questionIdx]
    }
  },
  watch: {
    state(obj) {
      if (obj.type === "Start") {
        this.stop("meeting")
        this.play("meeting")
      }
      Cookies.set("state", JSON.stringify(obj), { expires: 1, SameSite: "LAX" })
    }
  },
  methods: {
    toggleMusic(ref) {
      this.stopAll()
      if (ref === this.currentPlay) {
        return
      }
      this.currentPlay = ref
      this.play(ref)
    },
    setState(type) {
      if (type === "Question") {
        this.stopAll()
        this.play("gong")
      }
      switch (type) {
        case "Rules": this.state = { type: "Rules" }; break
        case "Question": this.state = { type: "Question", questionIdx: 0, showQuestion: false, showAnswer: false }; break
        default: this.state = { type: "Start" };
      }
      this.resetTimer()
    },
    /** Отобразить формулировку вопроса
     * @return {void}
     **/
    askQuestion() {
      this.play("gong")
      this.state.showQuestion = true
      this.state = Object.assign({}, this.state)
    },
    /** Действия при принятии ответа
     * @param isRight {boolean} - Верный или неверный был ответ
     * @return {void}
     **/
    answer(isRight) {
      this.resetTimer()
      this.state.showAnswer = true
      this.state = Object.assign({}, this.state)
      const name = this.currentQuestion.music.split(".")
      this.play(name[0])
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
    showQuestion() {
      this.state.showAnswer = false
      this.state = Object.assign({}, this.state)
    },
    /** Переход к следующему вопросу
     * @return {void}
     **/
    nextQuestion() {
      this.state.showAnswer = false
      this.state.showQuestion = false
      const name = this.currentQuestion.music.split(".")
      this.resetTimer()
      this.state.questionIdx++
      this.state = Object.assign({}, this.state)
      this.stopAll()
      this.play("gong")
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  margin-bottom: 10px;
}

.sidebar {
  padding-top: 20px;
}

.frame {
  width: 100%;
  height: 700px;
}
</style>