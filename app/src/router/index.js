/** Маршрутизатор Vue (https://router.vuejs.org/ru/)

 ---------------------------
 @author Podosenov Dmitriy
 @email podosenov.dn@gmail.com
 @date 16.06.2021
 **/

import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    // При навигации стрелками браузера сохраняем позицию прокрутки
    // При навигации через ссылки отматываем к началу документа
    return savedPosition || { left: 0, top: 0 }
  }
})

export default router

