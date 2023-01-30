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
        :label="track.title"
        :title="track.title"
        :key="i"
        @click="track.toggle()"
    />
  </template>
  <div v-if="audio.currentTrack.value">Сейчас играет: {{ audio.currentTrack.value.name }} | {{ audio.currentTrack.value.duration }}</div>
</template>

<script setup>
import QBtn from "@/components/ui/QBtn.vue"
import { useAudio } from "@/composables/audio"

const files = [
  {name: "meeting", title: "Приветствие", src: "meeting.mp3"},
  {name: "sig1", title: "Писк 1", src: "sig1.mp3"},
  {name: "sig2", title: "Писк 2", src: "sig2.mp3"},
  {name: "sig3", title: "Писк 3", src: "sig3.mp3"},
  {name: "gong", title: "Гонг", src: "gong.mp3"},
  {name: "music1", title: "Музыка 1", src: "music1.mp3"},
  {name: "music2", title: "Музыка 2", src: "music2.mp3"},
  {name: "music3", title: "Музыка 3", src: "music3.mp3"},
  {name: "pause1", title: "Музыка 4", src: "pause1.mp3"},
  {name: "pause2", title: "Музыка 5", src: "pause2.mp3"},
  {name: "pause3", title: "Музыка 6", src: "pause3.mp3"},
  {name: "pause4", title: "Музыка 7", src: "pause4.mp3"},
  {name: "volchok", title: "Волчок 1", src: "volchok.mp3"},
  {name: "volchok2", title: "Волчок 2", src: "volchok2.mp3"}
]

const audio = useAudio(files)
function toggle(track) {
  if (audio.currentTrack.value && track.name === audio.currentTrack.value.name) {
    audio.currentTrack.value.stop()
    return
  }
  audio.stopAll()
  track.play()
}

</script>

<style scoped>

</style>