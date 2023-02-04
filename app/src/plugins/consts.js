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
    COMPLETE: 6
  },
  ROUND_STATES_MAP: [
    "Раунд начинается",
    "Показан вопрос",
    "Показан вопрос и формулировка",
    "Идет время для ответа",
    "Показан ответ",
    "Показан ответ и комментарий",
    "Раунд завершен"
  ]
})

// Для использования не только внутри приложения
export { consts }

export default function install(app) {
  app.config.globalProperties.$consts = consts
}


