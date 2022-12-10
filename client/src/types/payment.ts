export type IPaymentMethodType = 'CRYPTO' | 'WALLET' | 'CARDS';

export interface IPaymentMethod {
    id: number;
    name: string;
    image: string;
    active: boolean;
    fav: boolean;
    type: IPaymentMethodType;
}

export interface IUserPayment {
    payment_id: number;
    data: string;
}
