import { $api } from './axios'
import { useQrService } from './qr';
import { useUserPayment } from './payment';
import { useAuthService } from './user';

/**
 * useService
 * @returns
 */
function useService() {
    return {
        auth: useAuthService($api),
        payment: useUserPayment($api),
        qr: useQrService($api),
    }
}

export { $api, useService }
