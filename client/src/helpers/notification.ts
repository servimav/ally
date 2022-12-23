import { AxiosError } from 'axios';
import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core'
import { useUserStore } from '@/store';
import { ROUTE_NAME } from '@/router';
import { useRouter } from 'vue-router';
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
        /**
         * notifications
         */
        const notifications = ref<INotification[]>([]);
        /**
         * axiosError
         * @param message
         */
        function axiosError(err: AxiosError | unknown, text = 'Ha ocurrido un error') {
            const typedError = err as AxiosError;
            console.log({ typedError })
            const message = typedError.response?.data;
            const stringMsg = String(message);

            const User = useUserStore();

            if (typedError.response?.status === 401) {
                User.logout();
                error('Debe autenticarse');
                void $router.push({ name: ROUTE_NAME.AUTH })
            } else
                error(stringMsg ? stringMsg : text);
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
