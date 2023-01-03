import store from '@/store';
import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'
 
const router = createRouter({
    history: createWebHistory(), 
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//       next();
//     } else {
//       let token = localStorage.getItem("token");
   
//       if (token === 'null' || token === '' || token!= store.state.userId) {
//         next('/login');
//       } else {
//         next();
//       }
//     }
//   });
 
export default router