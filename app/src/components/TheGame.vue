<!-- Компонент отвечающий за игру и переключение ранудов -->
<template>
  <div class="round">
    <div class="round__header"></div>
    <div class="round__body"></div>
    <div class="round__footer"></div>
  </div>
  <template v-if="audio.tracks.value">
    <QBtn
        v-for="(track, i) of audio.tracks.value"
        :label="track.title+' '+(track.duration ? getTime(track.duration) : '')"
        :title="track.title"
        :key="i"
        :class="{ active: track.isPlaying }"
        @click="track.toggle()"
    />
  </template>
  <div v-if="audio.currentTrack && audio.currentTrack.value">
    Сейчас играет: {{ audio.currentTrack.value.name }} | {{ getTime(audio.currentTrack.value.time) }} | {{ getTime(audio.currentTrack.value.duration) }}</div>
</template>

<script setup>
import QBtn from "@/components/ui/QBtn.vue"
import { useAudio } from "@/composables/audio"

const audio = useAudio([
  {name: "meeting", title: "Приветствие", src: "meeting.mp3"},
  {name: "sig1", title: "Писк 1", src: "sig1.mp3"},
  {name: "sig2", title: "Писк 2", src: "sig2.mp3"},
  {name: "sig3", title: "Писк 3", src: "sig3.mp3"},
  {name: "gong", title: "Гонг", src: "gong.mp3"},
  {name: "music1", title: "Музыкальная пауза 1", src: "music1.mp3"},
  {name: "music2", title: "Музыкальная пауза 2", src: "music2.mp3"},
  {name: "music3", title: "Музыкальная пауза 3", src: "music3.mp3"},
  {name: "pause1", title: "Перерыв 1", src: "pause1.mp3"},
  {name: "pause2", title: "Перерыв 2", src: "pause2.mp3"},
  {name: "pause3", title: "Перерыв 3", src: "pause3.mp3"},
  {name: "pause4", title: "Перерыв 4", src: "pause4.mp3"},
  {name: "volchok", title: "Волчок 1", src: "volchok.mp3"},
  {name: "volchok2", title: "Волчок 2", src: "volchok2.mp3"}
])
console.log(audio.tracks.value)

function getTime(sec) {
  const t = []
  t[0] = Math.floor(sec % 60)
  t[1] = Math.floor(sec / 60 % 60)
  t[2] = Math.floor( sec / 60 / 60)
  t.forEach((el, i) => {
    if (el < 10) {
      t[i] = "0" + el
    }
  })
  return `${t[2]}:${t[1]}:${t[0]}`
}
</script>

<style scoped>
.q-btn.active {
  background: white;
  color: #333;
}
</style>