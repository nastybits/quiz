/** Хранилище состояния текущей игры. TODO Заменить реализацию через Cookies на реализацию через БД */
import { defineStore } from "pinia"
import { consts } from "@/plugins/consts"
import Cookie from "js-cookie"
import { useQuestionPacks } from "@/stores/questionPacks"

export const useGameState = defineStore("gameState", {
  state: () => ({
    ID: null,
    PackID: null,
    Team: null,
    Round: null,
    RoundState: null,
    QuestionIdx: null,
  }),
  getters: {
    /**
     * Получение текущего пакета вопросов
     * @return {null|object} - Текущий пакет вопросов из useQuestionPacks
     */
    pack() {
      const packs = useQuestionPacks()
      return packs.getPack(this.ID) || null
    },
    /**
     * Получение текущего вопроса
     * @return {null|object} - Текущий вопрос пакета
     */
    question() {
      if (!this.pack) {
        return null
      }
      return this.pack.Questions[this.QuestionIdx]
    },
  },
  actions: {
    /**
     * Запуск состояния
     * @param {number} packID
     * @param {string} team
     */
    start(packID, team) {
      this.update({
        ID: "test",
        PackID: packID,
        Team: team,
        Round: 1,
        RoundState: consts.ROUND_STATES.INTRO,
        QuestionIdx: 0,
      })
    },
    /**
     * Переход к следующему раунду
     */
    nextRound() {
      if (!this.ID) {
        console.warn("Не выбрана игра")
        return
      }
      if (!this.RoundState !== consts.ROUND_STATES.TOTAL) {
        console.warn("Раунд не завершен")
        return
      }
      this.update({
        Round: this.Round + 1,
        RoundState: consts.ROUND_STATES.INTRO,
        QuestionIdx: this.QuestionIdx + 1
      })
    },
    /**
     * Обновление состояния
     * @param {object} opts
     */
    update(opts) {
      this.ID = opts.hasOwnProperty("ID") ? opts.ID : this.ID
      this.PackID = opts.hasOwnProperty("PackID") ? opts.PackID : this.PackID
      this.Team = opts.Team || this.Team
      this.Round = opts.Round || this.Round
      this.RoundState = opts.hasOwnProperty("RoundState") ? opts.RoundState : this.RoundState
      this.QuestionIdx = opts.hasOwnProperty("QuestionIdx") ? opts.QuestionIdx : this.QuestionIdx
      try {
        const state = JSON.stringify({
          id: this.ID,
          pid: this.PackID,
          t: this.Team,
          r: this.Round,
          rs: this.RoundState,
          qi: this.QuestionIdx
        })
        Cookie.set("gameState", state, { SameSite: "LAX" })
      } catch (e) {
        console.error(e)
      }
    },
    /**
     * Сброс состояния
     */
    reset() {
      Cookie.remove("gameState")
      this.$reset()
    },
    /**
     * Логирование
     */
    log() {
      console.log(this.ID, this.PackID, this.Team, this.Round, this.RoundState, this.QuestionIdx)
    },
    /**
     * Восстановление состояния из Cookie
     */
    restoreFromCookies() {
      const jsonState = Cookie.get("gameState")
      if (!jsonState) {
        return
      }
      try {
        const s = JSON.parse(jsonState)
        const opts = {
          ID: s.id,
          PackID: s.pid,
          Team: s.t,
          Round: s.r,
          RoundState: s.rs,
          QuestionIdx: s.qi
        }
        this.update(opts)
      } catch (e) {
        console.error(e)
      }
    }
  }
})