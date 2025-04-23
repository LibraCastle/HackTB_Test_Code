// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue' // 你的首页（假设你有）

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
