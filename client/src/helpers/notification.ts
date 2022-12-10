import { AxiosError } from 'axios';
import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core'
import { useUserStore } from '@/store';
import { useRoute, useRouter } from 'vue-router';
import { ROUTE_NAME } from '@/router';
/**
 * INotification
 */
export interface INotification { type?: 'warning' | 'error' | 'success' | 'info'; message: string };
/**
 * useNotify
 */
export const useNotify = createGlobalState(
    () => {

        const $router = useRouter();
        const $route = useRoute();

        /**
         * notifications
         */
        const notifications = ref<INotification[]>([]);
        /**
         * axiosError
         * @param message
         */
        function axiosError(err: AxiosError | unknown) {
            const typedError = err as AxiosError;
            const message = typedError.response?.data;
            const stringMsg = String(message);

            const User = useUserStore();

            if (typedError.response?.status === 401) {
                User.logout();
                if ($route.name !== ROUTE_NAME.AUTH) {
                    void $router.push({ name: ROUTE_NAME.AUTH })
                }
                error('No tiene privilegios');
            } else
                error(stringMsg);
            return stringMsg;
        }
        /**
         * error
         * @param message
         */
        function error(message: string, timer = 3000) {
            push({
                message, type: 'error'
            }, timer)
        }
        /**
         * success
         * @param message
         */
        function success(message: string, timer = 3000) {
            push({
                message, type: 'success'
            }, timer)
        }
        /**
         * warning
         * @param message
         */
        function warning(message: string, timer = 3000) {
            push({
                message, type: 'warning'
            }, timer)
        }
        /**
         * push
         * @param m
         * @param timer
         */
        function push(m: INotification, timer = 3000) {
            notifications.value.push(m);
            setTimeout(() => notifications.value.pop(), timer)
        }
        return {
            notifications,
            // Methods
            axiosError,
            error, push, success, warning
        }
    }
)
