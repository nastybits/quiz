/** Хранилище вопросов */
import { defineStore } from "pinia"

export const useQuestionPacks = defineStore('questionsPack', {
  state: () => ({
    /** @property {[object]} packs - Массив загруженных пакетов */
    packs: []
  }),
  actions: {
    /**
     * Инициализация пакетов вопросов
     * @param {[object]|JSON} data - Массив объектов пакетов вопросов
     */
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
     * @param {number} id - Идентификатор пакета
     * @return {object|null} - Объект пакета вопросов или null если не найден
     */
    getPack(id) {
      return this.packs.find(p => p.ID === id)
    }
  }
})