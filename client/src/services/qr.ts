import { IQrCode, IQrCodeCreate, IQrCodeUpdate } from '@/types';
import { AxiosInstance } from 'axios';

export function useQrService(api: AxiosInstance) {
    /**
     * baseUrl
     */
    const baseUrl = '/api/qr/';

    return {
        /**
         * create
         * @param p
         * @returns
         */
        create: async (p: IQrCodeCreate) => api.post<IQrCode>(`${baseUrl}`, p),
        /**
         * remove
         * @param id
         * @returns
         */
        remove: async (id: number) => api.delete(`${baseUrl}`, { params: { id } }),
        /**
         * get
         * @param id
         * @returns
         */
        get: async (id: number) => api.get<IQrCode>(`${baseUrl}${id}`),
        /**
         * list
         * @returns
         */
        list: async () => api.get<IQrCode[]>(`${baseUrl}`),
        /**
         * public
         * @param userName
         * @param slug
         * @returns
         */
        public: async (userName: string, slug: string) => api.get<IQrCode>(`${baseUrl}${userName}/${slug}`),
        /**
         * update
         * @param id
         * @param p
         * @returns
         */
        update: async (id: number, p: IQrCodeUpdate) => api.patch<IQrCode>(`${baseUrl}${id}`, p),
    }
}
