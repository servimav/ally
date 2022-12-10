import { AxiosInstance } from 'axios';
import { IUserPayment } from '@/types'

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
        index: () => api.get<IUserPayment[]>(baseUrl),
        /**
         * store
         * @param p
         * @returns
         */
        store: (p: IUserPayment[]) => api.post<IUserPayment[]>(baseUrl, p),
        /**
         * available
         * @returns
         */
        available: () => api.get<IUserPayment[]>(`${baseUrl}/available`),
    }

}
