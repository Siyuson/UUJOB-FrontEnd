const routes = [
    {
        name: 'Login',
        path: '/login',
        meta: {keepAlive: false},
        component: () => import('@/view/LoginRegister.vue')
    },

    {
        name: 'Home',
        path: '/home',
        meta: {keepAlive: true},
        component: () => import('@/view/Home.vue')
    },

    {
        name: 'Myspace',
        path: '/myspace',
        meta: {keepAlive: true},
        component: () => import('@/view/Myspace.vue'),
        children:[
    
       
       
          {
            path: '/myspace/myProfile',
            name: 'myProfile',
            component: () => import('@/components/myspace/MyProfile.vue')
          },
       
         
        ]
        
    },
    {
        name: 'FaultPage',
        path: '/:catchAll(.*)',
        component: () => import('@/view/404.vue')
    },
    
];

export default routes