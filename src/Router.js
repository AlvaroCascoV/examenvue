import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import CubosMarcaComponent from "./components/CubosMarcaComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";
import ComprasComponent from "./components/ComprasComponent.vue";
import InsertCompraComponent from "./components/InsertCompraComponent.vue";

const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/cubos/:marca", component: CubosMarcaComponent },
    { path: "/login", component: LoginComponent },
    { path: "/perfil", component: PerfilComponent },
    { path: "/compras", component: ComprasComponent },
    { path: "/insert", component: InsertCompraComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router