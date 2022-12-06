import { AxiosError } from 'axios';
import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core'
/**
 * INotification
 */
export interface INotification { type?: 'warning' | 'error' | 'success' | 'info'; message: string };
/**
 * useNotify
 */
export const useNotify = createGlobalState(
    () => {
        /**
         * notifications
         */
        const notifications = ref<INotification[]>([]);
        /**
         * axiosError
         * @param message
         */
        function axiosError(message: AxiosError | unknown) {
            console.log({ message })
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
