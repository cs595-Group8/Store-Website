import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile-details',
      name: 'profile-details',
      component: () => import('../views/ProfileDetails.vue')
    },
    {
      path: '/saved-items',
      name: 'saved-items',
      component: () => import('../views/SavedItems.vue')
    },
    {

      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: () => import('../views/CreateAccount.vue')
    }
  ]
})

export default router
