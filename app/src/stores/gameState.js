/** Хранилище состояния текущей игры. TODO Заменить реализацию через Cookies на реализацию через БД */
import { defineStore } from "pinia"
import { consts } from "../plugins/consts"
import Cookie from "js-cookie"

export const useGameState = defineStore("gameState", {
  state: () => ({
    ID: null,
    PackID: null,
    Team: null,
    Round: null,
    RoundState: null,
    QuestionIdx: null,
  }),
  actions: {
    // Запуск состояния
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
    // Переход к следующему раунду
    nextRound() {
      this.update({
        Round: this.Round + 1,
        RoundState: consts.ROUND_STATES.INTRO,
        QuestionIdx: this.QuestionIdx + 1
      })
    },
    // Обновление состояния
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
    // Удаление состояния
    reset() {
      Cookie.remove("gameState")
      this.$reset()
    },
    log() {
      console.log(this.ID, this.PackID, this.Team, this.Round, this.RoundState, this.QuestionIdx)
    },
    // Восстановление состояния из Cookies
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