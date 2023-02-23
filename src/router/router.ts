import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const HelloWorld = () => import('../components/HelloWorld.vue')
const Login = () => import('../views/index.vue')
// const main = () => import('../Layout/main/index.vue')

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default  router