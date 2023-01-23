/** Хранилище вопросов */
import { defineStore } from "pinia"

export const useQuestionsPackStore = defineStore('questionsPack', {
  state: () => ({
    pack: null
  }),
  getters: {
    ID() {
      return this.pack.ID
    },
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
      if (typeof data !== "string") {
        this.pack = data
        return
      }

      try {
        this.pack = JSON.parse(data)
      } catch (e) {
        this.pack = null
        console.error(e)
      }
    },
  }
})