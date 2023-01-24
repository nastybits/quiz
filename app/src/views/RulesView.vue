<!-- Компонент страницы с правилами игры -->
<template>
  <Page title="Правила игры">
    <ol class="rules">
      <li>Игра состоит из 14 вопросов идущих в случайном порядке.</li>
      <li>В начале раунда ведущий зачитывает текст вопроса.</li>
      <li>Затем звучит звуковой сигнал, дающий команде право начать обсуждение.</li>
      <li>На обсуждение вопроса дается 2 минуты.</li>
      <li>По истечении первой минуты звучит предупреждающий сигнал.</li>
      <li>По истечении второй минуты звучит звуковой сигнал после которого команда не может продолжать обсуждение.</li>
      <li>Капитан команды или выбранный им игрок должен дать ответ на вопрос.</li>
      <li>Ответ фиксируется ведущим, а затем озвучивается правильный ответ.</li>
    </ol>
    <template #footer>
      <Btn label="Продолжить" title="Продолжить" @click="router.push('/round/1/1')"/>
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
.rules {
  font-size: 25px;

  @include min-w($xxl) {
    font-size: 54px;
  }
}

.rules li {
  margin-bottom: 20px;
}
</style>