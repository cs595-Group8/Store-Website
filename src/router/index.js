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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileDetails.vue')
    },
    {
      path: '/saved-items',
      name: 'saved-items',
      component: () => import('../views/SavedItems.vue')
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: () => import('../views/CreateAccount.vue')
    }
  ]
})

export default router
