/** Хранилище вопросов */
import { defineStore } from "pinia"

export const useQuestionsPackStore = defineStore('questionsPack', {
  state: () => ({
    packs: [],
    pack: null
  }),
  getters: {
    Questions() {
      if (!this.pack) {
        return []
      }
      return this.pack.Questions
      /* set(val) {
        if (!this.pack) {
          console.error(new Error("Не выбран пакет вопросов"))
        }
        this.pack.Questions = val
      }*/
    }
  },
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
    }
  }
})