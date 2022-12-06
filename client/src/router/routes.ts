import { RouteRecordRaw } from 'vue-router';
import { ROUTE_NAME } from './names';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { AuthGuard } from './authGuard';
import GuestLayoutVue from '@/layouts/GuestLayout.vue';
import QrLayoutVue from '@/layouts/QrLayout.vue';


export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: GuestLayoutVue,
        children: [
            {
                path: '',
                name: ROUTE_NAME.GUEST_HOME,
                component: () => import('@/pages/MainPage.vue')
            }, {
                path: '/generate/:type',
                name: ROUTE_NAME.QR_GENERATE,
                component: () => import('@/pages/GenerateQr.vue')
            }
        ],
    }, {
        path: '/dashboard',
        component: MainLayout,
        beforeEnter: AuthGuard,
        children: [
            {
                path: '',
                name: ROUTE_NAME.MAIN,
                component: () => import('@/pages/MainPage.vue')
            }
        ],
    }, {
        path: '/auth',
        name: ROUTE_NAME.AUTH,
        component: AuthLayout,
    }, {
        path: '/qr',
        component: QrLayoutVue,
        children: [
            { path: ':name/:slug', name: ROUTE_NAME.PUBLIC_QR, component: () => import('@/pages/PublicQrPage.vue') },
        ]
    },
    // {
    //     path: '/:catchAll(.*)*',
    //     component: () => import('@/pages/ErrorNotFound.vue'),
    // },
];
