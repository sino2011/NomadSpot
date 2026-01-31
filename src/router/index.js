import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
// Import ExploreView when you're ready, or use the placeholder below

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login,
      meta: { hideNavbar: true }
    },
    {
      path: '/home',
      name: 'Home',
      // This is "lazy loading" - it only loads the code when the user clicks
      component: HomeView
    },
    {
      path: '/explore',
      name: 'explore',
      // This is "lazy loading" - it only loads the code when the user clicks
      component: () => import('../views/ExploreView.vue')
    },
    {
      path: '/spirit',
      name: 'spirit',
      // This is "lazy loading" - it only loads the code when the user clicks
      component: () => import('../views/Spirit.vue')
    },
    {
      path: '/Blanco',
      name: 'Blanco',
      // This is "lazy loading" - it only loads the code when the user clicks
      component: () => import('../views/Blanco.vue')
    },
    {
      path: '/Owl',
      name: 'Owl',
      // This is "lazy loading" - it only loads the code when the user clicks
      component: () => import('../views/Owl.vue')
    },
    {
      path: '/Joy',
      name: 'Joy',
      // This is "lazy loading" - it only loads the code when the user clicks
      component: () => import('../views/Joy.vue')
    }
  ]
})

export default router