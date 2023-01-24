/** Хранилище состояния текущей игры. TODO Заменить реализацию через Cookies на реализацию через БД */
import { defineStore } from "pinia"
import { consts } from "../plugins/consts"

export const useGameState = defineStore("gameState", {
  state: () => ({
    ID: null,
    Pack: null,
    Team: null,
    Round: null,
    RoundState: null,
    QuestionIdx: null,
  }),
  actions: {
    // Запуск состояния
    start(options) {
      this.id = options.id
      this.team = options.team
      this.pack = options.pack
      this.Round = 1
      this.RoundState = consts.ROUND_STATES.INTRO
      this.questionIdx = 0
    },
    // Обновление состояния
    update() {},
    // Удаление состояния
    end() {},
    // Сохранение состояния в Cookies
    saveToCookies() {},
    // Восстановление состояния из Cookies
    restoreFromCookies(id) {}
  }
})