/** Плагин констант доступных во всем приложении */
const consts = Object.freeze({
  HOST: "localhost",
  // Максимальное количество одновременно запущенных игр
  MAX_ACTIVE_GAMES: 10,
  // Состояния раунда
  ROUND_STATES: {
    INTRO: 0,
    QUESTION: 1,
    QUESTION_WORDING: 2,
    TIME: 3,
    ANSWER: 4,
    ANSWER_COMMENT: 5,
    TOTAL: 6
  }
})

// Для использования не только внутри приложения
export { consts }

export default function install(app) {
  app.config.globalProperties.$consts = consts
}


