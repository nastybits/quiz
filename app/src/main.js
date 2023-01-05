import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/** Плагины */
import constants from "@plugins/consts" // Константы приложения
import uniqIDs from "@plugins/uniqID" // Уникальный идентификатор компонента

import 'modern-normalize/modern-normalize.css';
import '@/assets/scss/style.scss'

const app = createApp(App)

app
    .use(createPinia())
    .use(router)
    .use(constants)
    .use(uniqIDs)

app.mount('#app')
