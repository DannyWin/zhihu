import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Main from '../views/Main.vue';
import Login from '../views/Login.vue';
import Recommand from '../views/Recommand.vue';
import Follow from '../views/Follow.vue';
import Hot from '../views/Hot.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/',
                name: 'Main',
                component: Main,
                children: [
                    { path: '/', name: 'Recommand', component: Recommand },
                    {
                        path: '/recommand',
                        name: 'Recommand',
                        component: Recommand
                    },
                    { path: '/follow', name: 'Follow', component: Follow },
                    { path: '/hot', name: 'Hot', component: Hot }
                ]
            },
            {
                path: '/question/:id',
                name: 'Question',
                component: () => import('../views/Question.vue')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
