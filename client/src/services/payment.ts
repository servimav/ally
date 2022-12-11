import { AxiosInstance } from 'axios';
import type { IPaymentMethod, IUserPayment, IUserPaymentData } from '@/types'

export function useUserPayment(api: AxiosInstance) {
    /**
     * baseUrl
     */
    const baseUrl = '/api/payments';

    return {
        /**
         * index
         * @returns
         */
        index: () => api.get<IUserPayment>(baseUrl),
        /**
         * store
         * @param p
         * @returns
         */
        store: (methods: IUserPaymentData[]) => api.post<IUserPayment>(baseUrl, { methods }),
        /**
         * available
         * @returns
         */
        available: () => api.get<IPaymentMethod[]>(`${baseUrl}/available`),
        /**
         * byNick
         * @param nick
         * @returns
         */
        byNick: (nick: string) => api.get<IUserPayment>(`${baseUrl}/by-nick`, { params: { nick } }),
    }

}
