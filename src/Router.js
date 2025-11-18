import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import CubosMarcaComponent from "./components/CubosMarcaComponent.vue";

const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/cubos/:marca", component: CubosMarcaComponent },
    { path: "/login", component: LoginComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router