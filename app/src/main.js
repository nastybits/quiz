import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

/** Плагины */
import constants from "@plugins/consts" // Константы приложения
import uniqIDs from "@plugins/uniqID" // Уникальный идентификатор компонента

/** Глобальные компоненты */
/** UI */
import QBtn from "@/components/ui/QBtn.vue"
/** Инпуты */
import QInput from "@/components/inputs/QInput.vue"

/** Глобальные стили */
import 'modern-normalize/modern-normalize.css';
import '@/assets/scss/style.scss'

const app = createApp(App)

app
  .use(constants)
  .use(uniqIDs)
  .use(createPinia())
  .use(router)

app
  .component("Btn", QBtn)
  .component("Ipt", QInput)

app.mount('#app')
