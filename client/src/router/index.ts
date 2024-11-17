import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ProfileView from '@/views/ProfileView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { useUser } from '@/shared/stores'

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

router.beforeEach(() => {
  const userStore = useUser();
  if(!userStore.loaded){
    userStore.fecthCurrentUser();
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
