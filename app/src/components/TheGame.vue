<!-- Комонент отвечающий за игру и переключение ранудов -->
<template>
  <div class="round">
    <div class="round__header"></div>
    <div class="round__body"></div>
    <div class="round__footer"></div>
  </div>
  <audio
      v-for="(a, i) of audioFiles"
      style="display: none"
      :ref="el => { audios[i] = el }"
      :src="`/audio/${a.src}`"
      :key="i"
  />
  <QBtn
      v-for="(a, i) of audioFiles"
      :label="a.name"
      :title="a.name"
      :key="'aBtn' + i"
      @click="player.play(i)"
  />
</template>

<script setup>
import QBtn from "@/components/ui/QBtn.vue"
import {ref, onMounted} from "vue"
// import { useGameState } from "@/stores/gameState"
// import { useQuestionPacks } from "@/stores/questionPacks"
import {useAudio} from "@/composables/audio"

// const game = useGameState()
// const pack = useQuestionPacks()
const audioFiles = [
  {name: "meeting", src: "meeting.mp3"},
  {name: "sig1", src: "sig1.mp3"},
  {name: "sig2", src: "sig2.mp3"},
  {name: "sig3", src: "sig3.mp3"},
  {name: "gong", src: "gong.mp3"},
  {name: "music1", src: "music1.mp3"},
  {name: "music2", src: "music2.mp3"},
  {name: "music3", src: "music3.mp3"},
  {name: "pause1", src: "pause1.mp3"},
  {name: "pause2", src: "pause2.mp3"},
  {name: "pause3", src: "pause3.mp3"},
  {name: "pause4", src: "pause4.mp3"},
  {name: "volchok", src: "volchok.mp3"},
  {name: "volchok2", src: "volchok2.mp3"}
]

const audios = ref([])
let player = null

onMounted(() => {
  player = useAudio(audios.value)
})

</script>

<style scoped>

</style>