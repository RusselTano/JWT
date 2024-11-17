import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/signin',
      component: SignInView,
    },
    {
      path: '/signup',
      component: SignUpView,
    },
    {
      path: '/profile',
      component: ProfileView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
})

export default router
