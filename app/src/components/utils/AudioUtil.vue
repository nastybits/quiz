<!-- Компонент для подключения аудио на страницу. Не отображается в интерфейсе пользователя -->
<template>
  <div class="audio-util">
    <QBtn
        v-for="(a, i) of audios"
        :label="a.name"
        :title="a.name"
        :key="'aBtn' + i"
        :class="{active: currentPlay === a.name}"
        @click="toggle(a.name)"
    />
    <div class="hidden-sounds">
      <audio v-for="(a, i) of audios" ref="elements" :src="`/audio/${a.src}`" :key="i"></audio>
    </div>
  </div>
</template>

<script setup>
import {defineProps, ref} from "vue"
import QBtn from "@/components/ui/QBtn.vue"

const props = defineProps({
  /** @property {object[]} audios - Массив объектов загружаемых аудио */
  audios: {
    type: Array,
    required: true
  }
})

const elements = ref(null)
const currentPlay = ref(null)

function play(el) {
  el.play()
}

function stop(el) {
  el.pause()
  el.currentTime = 0.0
}

/**
 * Переключение проигрывания аудио
 * @param {string} name - Имя аудио
 */
function toggle(name) {
  const idx = props.audios.findIndex(a => a.name === name)
  if (idx === -1 || !elements) {
    return
  }

  elements.value.forEach(el => {
    stop(el)
  })

  if (name && name !== currentPlay.value) {
    play(elements.value[idx])
    currentPlay.value = name
    return
  }

  stop(elements.value[idx])
  currentPlay.value = null
}
</script>

<style scoped>
.hidden-sounds {
  display: none;
}

.q-btn.active {
  background: white;
  color: black;
}
</style>