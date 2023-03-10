/** Библиотека маршрутов приложения **/
import HomeView from "@/views/HomeView.vue"
import NotFound from "@/views/NotFoundView.vue"

/**
 * Список маршрутов для Vue роутера
 * @type [{path: string, component: object|function, name: string}]
 */
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/rules",
    name: "rules",
    component: () => import("@/views/RulesView.vue")
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("@/views/GameView.vue")
  },
  {
    path: "/admin/create",
    name: "Game creation",
    component: () => import("@/views/admin/GameCreationView.vue")
  },
  {
    path: "/admin/manage",
    name: "Game management",
    component: () => import("@/views/admin/GameManageView.vue")
  }
]

// В DEV окружении удобно иметь маршрут для проверки модулей и плагинов
if (import.meta.env.DEV) {
  routes.push({
    path: "/test",
    name: "Test",
    component: () => import("@/views/TestView.vue")
  })
}

// Добавляем маршрут для 404 через regexp в конец,
// он будет ловить любой маршрут не пойманный ранее.
routes.push({
  path: "/:pathMatch(.*)",
  name: "Error #404: Not Found",
  component: NotFound
})

export default routes
