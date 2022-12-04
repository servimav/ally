import { AxiosError } from 'axios'

export function useNotification() {
    return {
        axiosError: (err: AxiosError | unknown) => {
            console.log(err)
        }
    }
}
