import { IUserProfile } from './user';

export type IPaymentMethodType = 'CRYPTO' | 'WALLET' | 'BANK';

export interface IPaymentMethod {
    id: number;
    name: string;
    image: string;
    fav: boolean;
    type: IPaymentMethodType;
}

export interface IUserPaymentData {
    payment_id: number;
    data: string;
    name: string;
}
export interface IUserPayment {
    id: number;
    methods: IUserPaymentData[];
    user?: IUserProfile;
}
