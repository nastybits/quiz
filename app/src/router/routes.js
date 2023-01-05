/** Библиотека маршрутов приложения **/
import HomeView from "@/views/HomeView.vue"
import AdminView from "@/views/AdminView.vue"
import RulesView from "@/views/RulesView.vue"
import NotFound from "@/views/NotFoundView.vue"

let routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView
    },
    {
        path: "/admin",
        name: "Admin",
        component: AdminView
    },
    {
        path: "/rules",
        name: "Rules",
        component: RulesView
    },
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
