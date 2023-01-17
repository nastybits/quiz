export default {
  methods: {
    /** Проигрывание выбранного файла
     * @param ref {string} - Имя файла для проигрывания
     * @return {void}
     **/
    play(ref) {
      if (!ref) {
        return
      }
      if (this.$refs[ref]) {
        this.$refs[ref].play()
      }
    },
    /** Остановка проигрывания выбранного файла
     * @param ref {string} - Имя файла для проигрывания
     * @return {void}
     **/
    stop(ref) {
      if (!ref) {
        return
      }
      if (this.$refs[ref]) {
        this.$refs[ref].pause()
        this.$refs[ref].currentTime = 0.0
      }
    },
    stopAll() {
      const audioList = document.querySelectorAll("audio")
      for (const a of audioList) {
        a.pause()
        a.currentTime = 0.0
      }
    }
  }
}