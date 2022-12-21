import { AxiosInstance } from 'axios';
import type { IPaymentMethod, IProduct, IProductForm, IUserPayment, IUserPaymentData, IUserProfile } from '@/types'

export function useProductsService(api: AxiosInstance) {
    /**
     * baseUrl
     */
    const baseUrl = '/api/products';

    return {
        /**
         * index
         * @returns
         */
        index: () => api.get<IProduct[]>(baseUrl),
        /**
         * store
         * @param p
         * @returns
         */
        store: (params: IProductForm) => api.post<IUserPayment>(baseUrl, params, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }),
        /**
         * update
         * @param id
         * @param p
         * @returns
         */
        update: (id: number, params: Partial<IProductForm>) => api.post<IUserPayment>(`${baseUrl}/${id}`, params, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }),
        /**
         * remove
         * @param id
         * @returns
         */
        remove: (id:number) => api.delete(`${baseUrl}/${id}`),
        /**
         * byNick
         * @param nick
         * @returns
         */
        byNick: (nick: string) => api.get<{user:IUserProfile, products: IProduct[]}>(`${baseUrl}/by-nick`, {
            params: { nick },
        }),
    }

}
