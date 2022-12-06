import { $api } from './axios'
import { useQrService } from './qr';
import { useAuthService } from './user';

/**
 * useService
 * @returns
 */
function useService() {
    return {
        auth: useAuthService($api),
        qr: useQrService($api),
    }
}

export { $api, useService }
