import { ref, onMounted, onBeforeUnmount } from "vue"

/** Composable компонент для управления аудио */
export function useAudio(files) {

  /** @property {object} currentTrack - Текущий проигрываемый трек */
  const currentTrack = ref(null)

  /** @property [{object}] Массив доступных треков */
  const tracks = ref([])

  /**
   * Начать проигрывание выбранного аудио
   * @param {string} name - Имя аудио
   */
  const play = (name) => {
    const track = tracks.value.find(el => el.name === name)
    if (!track) {
      return
    }
    currentTrack.value = track
    track.el.play()
  }

  /**
   * Остановить проигрывание выбранного аудио
   * @param {string} name - Имя аудио
   */
  const stop = (name) => {
    const track = tracks.value.find(el => el.name === name)
    if (!track) {
      return
    }
    track.el.pause()
    track.el.currentTime = 0.0
    currentTrack.value = null
  }

  /**
   * Остановить проигрывание всех аудио
   */
  const stopAll = () => {
    for (const track of tracks.value) {
      track.el.pause()
      track.el.currentTime = 0.0
      track.isPlaying = false
    }
    currentTrack.value = null
  }

  onMounted(() => {
    tracks.value = []
    for (const f of files) {
      const audio = document.createElement("AUDIO")
      audio.src = `/audio/${f.src}`
      audio.id = f.name
      audio.style.display = "none"

      // Обновляем время для текущего проигрываемого трека
      audio.addEventListener("timeupdate", (e) => {
        if (currentTrack.value) {
          currentTrack.value.time = e.target.currentTime
        }
      })

      // При изменении продолжительности обновляем значение duration у трека
      audio.addEventListener("durationchange", e => {
        const tmp = tracks.value.find(el => el.name === f.name)
        if (tmp) {
          tmp.duration = e.target.duration
        }
      })

      const body = document.querySelector("body")
      tracks.value.push({
        el: body.appendChild(audio),
        name: f.name,
        title: f.title,
        time: 0,
        duration: 0,
        isPlaying: false,
        play: function() {
          stopAll()
          currentTrack.value = this
          this.isPlaying = true
          this.el.play()
        },
        pause: function () {
          currentTrack.value = this
          this.isPlaying = true
          this.el.pause()
        },
        stop: function() {
          currentTrack.value = null
          this.el.pause()
          this.el.currentTime = 0.0
          this.isPlaying = false
        },
        toggle: function() {
          this.isPlaying && !this.el.ended
            ? this.stop()
            : this.play()
        }
      })
    }
  })

  onBeforeUnmount(() => {
    for (const f of files) {
      const el = document.querySelector("#" + f.name)
      if (el) {
        el.remove()
      }
    }
    // Удаляем ссылки на элементы, чтобы удалить слушателей событий
    tracks.value = []
  })

  return { tracks, currentTrack, play, stop, stopAll }
}