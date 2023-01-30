import { ref, onMounted, onBeforeUnmount } from "vue"

export function useAudio(files) {
  const currentTrack = ref(null)
  const tracks = ref([])

  const play = (name) => {
    const track = tracks.value.find(el => el.name === name)
    if (!track) {
      return
    }

    currentTrack.value = track
    track.el.play()
  }

  const stop = (name) => {
    const track = tracks.value.find(el => el.name === name)
    if (!track) {
      return
    }
    track.el.pause()
    track.el.currentTime = 0.0
    currentTrack.value = null
  }

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
      const body = document.querySelector("body")
      const audio = document.createElement("AUDIO")
      audio.src = `/audio/${f.src}`
      audio.id = f.name
      audio.style.display = "none"
      audio.addEventListener("timeupdate", (e) => {
        if (currentTrack.value) {
          currentTrack.value.time = e.target.currentTime
        }
      })
      audio.addEventListener("play", (e) => {
        currentTrack.value.duration = e.target.duration
      })
      audio.addEventListener("durationchange", e => {
        const tmp = tracks.value.find(el => el.name === f.name)
        if (tmp) {
          tmp.duration = e.target.duration
        }
      })
      tracks.value.push({
        name: f.name,
        title: f.title,
        el: body.appendChild(audio),
        isPlaying: false,
        time: 0,
        duration: audio.duration,
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