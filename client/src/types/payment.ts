export interface IPaymentMethod {
    id: number;
    name: string;
    image: string;
}

export interface IUserPayment {
    payment_id: number;
    data: string;
}
