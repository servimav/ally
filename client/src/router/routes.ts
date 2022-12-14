import { RouteRecordRaw } from 'vue-router';
import { ROUTE_NAME } from './names';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { AuthGuard } from './authGuard';
import GuestLayoutVue from '@/layouts/GuestLayout.vue';
import QrLayoutVue from '@/layouts/QrLayout.vue';
import PublicPayment from '@/pages/PublicPayment.vue';
import PublicCatalogVue from '@/pages/PublicCatalog.vue';


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
                path: 'about',
                name: ROUTE_NAME.GUEST_ABOUT,
                component: () => import('@/pages/AboutUs.vue')
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
            }, {
                path: 'about',
                name: ROUTE_NAME.MAIN_ABOUT,
                component: () => import('@/pages/AboutUs.vue')
            },
            {
                path: 'my-qr',
                name: ROUTE_NAME.MAIN_MYQR,
                component: () => import('@/pages/MyQrPage.vue')
            },
            {
                path: 'generate/:type',
                name: ROUTE_NAME.MAIN_GENERATE,
                component: () => import('@/pages/GenerateQr.vue')
            },
            {
                path: 'catalog',
                name: ROUTE_NAME.MAIN_CATALOG,
                component: () => import('@/pages/CatalogPage.vue')
            },
            {
                path: 'profile',
                name: ROUTE_NAME.MAIN_PROFILE,
                component: () => import('@/pages/MyProfile.vue')
            },
            {
                path: 'payment',
                name: ROUTE_NAME.MAIN_PAYMENT,
                component: () => import('@/pages/PaymentMethods.vue')
            },
            {
                path: 'referals',
                name: ROUTE_NAME.MAIN_REFERAL,
                component: () => import('@/pages/ReferalsPage.vue')
            },
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
    }, {
        path: '/payme/:nick',
        component: PublicPayment,
        name: ROUTE_NAME.PUBLIC_PAYMENT,
    },{
        path: '/cat/:nick',
        component: PublicCatalogVue,
        name: ROUTE_NAME.PUBLIC_CATALOG,
    },
    // {
    //     path: '/:catchAll(.*)*',
    //     component: () => import('@/pages/ErrorNotFound.vue'),
    // },
];
