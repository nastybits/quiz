import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

/** Plugins */
import constants from "@plugins/consts" // Константы приложения
import uniqIDs from "@plugins/uniqID" // Уникальный идентификатор компонента

/** UI */
// import QBtn from "@/components/ui/QBtn.vue"

/** Styles */
import 'modern-normalize/modern-normalize.css';
import '@/assets/scss/style.scss'

const app = createApp(App)

app
  .use(constants)
  .use(uniqIDs)
  .use(createPinia())
  .use(router)
  // .use(QBtn)

app.mount('#app')
