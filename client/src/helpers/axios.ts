import axios, { AxiosRequestHeaders } from 'axios';
import { useUserStore } from '@/store'

let baseURL = 'http://localhost:8000';
if (window.location.hostname !== 'localhost')
    baseURL = window.location.origin;

const $api = axios.create({
    baseURL,
    withCredentials: true,
    timeout: 10000,
    timeoutErrorMessage: 'Error de conexion'
});


$api.interceptors.request.use(req => {
    const User = useUserStore();
    User.load();
    /* Append content type header if its not present */
    if (!(req.headers as AxiosRequestHeaders)['Content-Type']) {
        (req.headers as AxiosRequestHeaders)['Content-Type'] =
            'application/json';
    }

    /* Check if authorization is set */
    if (!(req.headers as AxiosRequestHeaders)['Authorization']) {
        const token = User.api_token;
        if (token && token.length > 0) {
            (req.headers as AxiosRequestHeaders).Authorization =
                'Bearer ' + token;
        }
    }

    return req;
})

export { baseURL, $api }
