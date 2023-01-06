import {defineStore} from 'pinia'
import Cookie from "js-cookie"

import { questions, dumbQuestions } from "./qusteionsData";

export const useQuestionsStore = defineStore('questions', {
  state: () => ({
      questions: questions
  }),
  getters: {
    answered: (state) => state.questions.filter(el => !el.done),
    jsonState: (state) => {
      const jsonState = []
      for (const q of state.questions) {
        jsonState.push({id: q.id, done: !!q.done})
      }
      try {
        return JSON.stringify(jsonState)
      } catch (e) {
        console.error(e)
      }
    }
  },
  actions: {
    save(data) {
      this.questions = data
      Cookie.set("questions", this.jsonState())
    },
    load() {
      let jsonState = Cookie.get("questions")
      if (!jsonState) {
        return
      }

      try {
        jsonState = JSON.parse(jsonState)
      } catch (e) {
        console.error(e)
      }

      const tmp = []
      for (const q of this.questions) {
        const storedQuestion = jsonState.find(el => el.id === q.id)
        const obj = {
            id: q.id,
            title: q.title,
            text: q.text,
            question: q.question,
            answer: q.answer,
            comment: q.comment,
            img: q.img,
            music: q.music,
            done: !!q.done
        }
        if (storedQuestion) {
            obj.done = storedQuestion.done
        }
        tmp.push(obj)
      }

      this.questions = tmp
    }
  }
})