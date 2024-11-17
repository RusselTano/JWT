import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { useUser } from '@/shared/stores'
import { isNotAuthenticatedGuard, isAuthenticatedGuard } from '@/shared/guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/signin',
      beforeEnter: [isNotAuthenticatedGuard],
      component: SignInView,
    },
    {
      path: '/signup',
      beforeEnter: [isNotAuthenticatedGuard],
      component: SignUpView,
    },
    {
      path: '/profile',
      beforeEnter: [isAuthenticatedGuard],
      component: ProfileView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
})

router.beforeEach(async() => {
  const userStore = useUser();
  if(!userStore.loaded){
    await userStore.fecthCurrentUser();
  }
});
// router.beforeEach((to, from, next) => {
//   const userStore = useUser();
//   if(!userStore.loaded){
//     userStore.fecthCurrentUser().then(() => {
//       if(to.path === '/signin' || to.path === '/signup'){
//         if(userStore.isLoggedIn){
//           next({path: '/'});
//         }
//         else{
//           next();
//         }
//       }
//       else if(to.path === '/profile'){
//         if(userStore.isLoggedIn){
//           next();
//         }
//         else{
//           next({path: '/signin'});
//         }
//       }
//       else{
//         next();
//       }
//     });
//   }
// });

export default router
