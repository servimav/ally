import { RouteRecordRaw } from 'vue-router';
import { ROUTE_NAME } from './names';
import MainLayout from '@/layouts/MainLayout.vue';


export const routes: RouteRecordRaw[] = [
    {
        path: '',
        component: MainLayout,
    }
];
