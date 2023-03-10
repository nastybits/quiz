/** Плагин для генерации уникального идентификатора компонента **/

const DEFAULTS = {
  // Имя поля по которому можно получить доступ к UID внутри компонента
  uidProp: "uid",
  // Префикс, который будет сгенерирован для UID в HTML
  uidPrefix: "uid-"
}

const methods = {
  /** Генерация уникального идентификатора компонента с кастомным именем
   * Пример: $id('my-id') => 'uid-42-my-id'
   * @param {string} uidProp
   * @return {function}
   */
  $generateUid(uidProp) {
    return function $id(id = "") {
      return `${this[uidProp]}-${id}`
    }
  },

  /** Генерация ссылки на уникальный идентификатор компонента
   * Добавляет префикс '#' к сгенерированному ID
   * Пример: $idRef("my-id") => "#uid-42-my-id"
   * @param {string} id
   * @return {string}
   */
  $idRef(id) {
    return `#${this.$id(id)}`
  }
}

export default function install(app, options = {}) {
  const uidProp = options.uidProp || DEFAULTS.uidProp
  const uidPrefix = options.uidPrefix || DEFAULTS.uidPrefix

  // Добавляем уникальный идентификатор к компоненту
  let i = 0
  app.mixin({
    beforeCreate() {
      i += 1
      const uid = uidPrefix + i
      Object.defineProperties(this, {
        [uidProp]: { get() { return uid } }
      })
    }
  })

  app.config.globalProperties.$uid = methods.$generateUid(uidProp)
  app.config.globalProperties.$uidRef = methods.$idRef
}
