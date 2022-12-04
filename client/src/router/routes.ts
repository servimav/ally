import { RouteRecordRaw } from 'vue-router';
import { ROUTE_NAME } from './names';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';


export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: ROUTE_NAME.MAIN,
                component: () => import('@/pages/MainPage.vue')
            }
        ],
    }, {
        path: '/auth',
        name: ROUTE_NAME.AUTH_LOGIN,
        component: AuthLayout,
    }, {
        path: '/:catchAll(.*)*',
        component: () => import('@/pages/ErrorNotFound.vue'),
    },
];
