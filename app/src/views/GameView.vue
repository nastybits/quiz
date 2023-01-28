<!-- Компонент главного экрана игры -->
<template>
  <Page title="Игра">
    <template #footer>
      <AudioUtil :audios="audios"/>
    </template>
  </Page>
</template>

<script setup>
import AudioUtil from "@/components/utils/AudioUtil.vue"
import Page from "@/components/Page.vue"

const audios = [
  { name: "meeting", src: "meeting.mp3" },
  { name: "sig1", src: "sig1.mp3" },
  { name: "sig2", src: "sig2.mp3" },
  { name: "sig3", src: "sig3.mp3" },
  { name: "gong", src: "gong.mp3" },
  { name: "music1", src: "music1.mp3" },
  { name: "music2", src: "music2.mp3" },
  { name: "music3", src: "music3.mp3" },
  { name: "pause1", src: "pause1.mp3" },
  { name: "pause2", src: "pause2.mp3" },
  { name: "pause3", src: "pause3.mp3" },
  { name: "pause4", src: "pause4.mp3" },
  { name: "volchok", src: "volchok.mp3" },
  { name: "volchok2", src: "volchok2.mp3" }
]

</script>

<style scoped>

</style>