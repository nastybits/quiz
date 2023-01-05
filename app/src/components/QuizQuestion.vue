<template>
  <div :class="['question', {'question_with-media': !!question.img}]">
    <template v-if="!showAnswer">
      <img v-if="question.img" class="question__img" :src="'/img/' + question.img" alt="">
      <div class="question__body">
        <div class="question__text" v-html="question.text"/>
      </div>
      <Transition>
        <div v-if="showQuestion" class="question__footer">
          <h2 class="question__text">{{ question.question }}</h2>
        </div>
      </Transition>
    </template>
    <template v-if="showAnswer">
      <div class="question__body">
        <div class="question__text">
          Правильный ответ: <br>
          <h2 class="h2">{{ question.answer }}</h2>
        </div>
      </div>
      <div class="question__footer">
        <div class="question__text">
          <small>{{ question.comment }}</small>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "QuizQuestion",
  props: {
    question: {
      type: Object,
      required: true
    },
    showQuestion: {
      type: Boolean,
      default: false
    },
    showAnswer: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.question {
  width: 100%;
  font-family: $text-primary;
  text-align: center;
  @include min-w($xxl) {
    font-size: 70px;
  }
}

.question__body,
.question__footer {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 20px;
}

.question__text {
  width: 100%;
  font-size: 50px;
  max-width: 1000px;
  text-align: center;

  @include min-w($xxl) {
    font-size: 70px;
    max-width: 1500px;
  }
}

.question__answer {

}

.question__img {
  margin-right: 20px;
}

.question__footer {
  border-top: 1px solid white;
}

</style>