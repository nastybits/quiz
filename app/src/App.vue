<!-- Точка входа -->
<template>
  <div class="wrapper">
    <div class="middle">
      <RouterView/>
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
</template>

<script setup>
import { onMounted } from "vue"
import { RouterView } from 'vue-router'
import { useQuestionPacks } from "@/stores/questionPacks"
import packs from '@/data/questionsData'

/** Загрузка вопросов
 * @return {void}
 */
function loadQuestions() {
  const packStore = useQuestionPacks()
  packStore.init(packs)
  console.log(packStore.packs)
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
