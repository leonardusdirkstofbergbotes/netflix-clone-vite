import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active-link',
    routes: [
        {
            path: '/',
            redirect: '/browse'
        },
        {
            path: '/login',
            component: () => import('../views/Auth/Login/Login.vue')
        },
        {
            path: '/register',
            component: () => import('../views/Auth/Register/Register.vue')
        },
        {
            path: '/forgot-password',
            component: () => import('../views/Auth/ForgotPassword/ForgotPassword.vue')
        },
        {
            path: '/browse',
            component: () => import('../views/Browse/Browse.vue')
        }
    ],
});

router.beforeEach((to, from, next) => {
    if (!isAuthenticated()) {
        if (to.path == '/login' || to.path == '/register' || to.path == '/forgot-password') return next();
        return next('/login');
    }

    if (to.path == '/login' || to.path == '/register' || to.path == '/forgot-password') return next('/browse');
    return next();
});

const isAuthenticated = () => {
    return true;
    return !!localStorage.getItem("token");
}

export default router;
