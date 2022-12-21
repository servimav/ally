import { $api, baseURL } from './axios'
import { useQrService } from './qr';
import { useUserPayment } from './payment';
import { useAuthService } from './user';
import { useProductsService } from './product';

/**
 * useService
 * @returns
 */
function useService() {
    return {
        auth: useAuthService($api),
        payment: useUserPayment($api),
        product: useProductsService($api),
        qr: useQrService($api),
    }
}

export { $api, useService, baseURL }
