import { IUserProfile, IUserRequestLogin, IUserRequestRegister, IUserRequestUpdate, IUserResponseAuth } from '@/types';
import { AxiosInstance } from 'axios';

export function useAuthService(api: AxiosInstance) {
    /**
     * baseUrl
     */
    const baseUrl = '/api/auth';

    return {
        /**
         * login
         * @param p
         * @returns
         */
        login: (p: IUserRequestLogin) => api.post<IUserResponseAuth>(`${baseUrl}/login`, p),
        /**
         * profile
         * @returns
         */
        profile: () => api.get<IUserProfile>(`${baseUrl}`),
        /**
         * register
         * @param p
         * @returns
         */
        register: (p: IUserRequestRegister) => api.post<IUserResponseAuth>(`${baseUrl}/register`, p),
        /**
         * update
         * @param p
         * @returns
         */
        update: (p: IUserRequestUpdate) => api.post<IUserResponseAuth>(`${baseUrl}/update`, p, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
    }
}
