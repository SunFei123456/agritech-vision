import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import DataOverview from '../pages/DataOverview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/data-overview',
    name: 'DataOverview',
    component: DataOverview
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
