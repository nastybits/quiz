/** Плагин констант доступных во всем приложении **/
const consts = Object.freeze({
  DOMAIN: "quiz.loc",
  ERR_MESSAGE: "Произошла ошибка",
  // Точки разлома (должны соответствовать css аналогу в /src/assets/vars.scss)
  BREAKPOINTS: {
    xs: 520,
    sm: 980,
    md: 1500,
    lg: 1620,
    xl: 1800,
    xxl: 2100
  },
  LANG_EN: "en",
  LANG_RU: "ru",
  ANSWER_TIME: 60
})

export { consts } // Для использования не только внутри приложения
export default function install(app) {
  app.config.globalProperties.$consts = consts
}


