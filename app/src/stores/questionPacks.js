/** Хранилище вопросов */
import { defineStore } from "pinia"

export const useQuestionPacks = defineStore('questionsPack', {
  state: () => ({
    // Массив загруженных пакетов
    packs: []
  }),
  actions: {
    init(data) {
      if (typeof data === "string") {
        try {
          data = JSON.parse(data)
        } catch (e) {
          this.packs = []
          console.error(e)
          return
        }
      }
      if (Array.isArray(data)) {
        this.packs = data
      }
    },
    /**
     * Получить пакет вопросов по ID
     * @param {number} id - Идентификатор
     * @return {object} - Пакет вопросов
     */
    getPack(id) {
      return this.packs.find(p => p.ID === id)
    }
  }
})