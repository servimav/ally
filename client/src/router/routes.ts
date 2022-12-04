import { RouteRecordRaw } from 'vue-router';
import { ROUTE_NAME } from './names';
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { AuthGuard } from './authGuard';
import GuestLayoutVue from '@/layouts/GuestLayout.vue';


export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: GuestLayoutVue,
		children: [
			{
				path: '',
				name: ROUTE_NAME.GUEST_HOME,
				component: () => import('@/pages/MainPage.vue')
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
	},
	// {
	//     path: '/:catchAll(.*)*',
	//     component: () => import('@/pages/ErrorNotFound.vue'),
	// },
];
