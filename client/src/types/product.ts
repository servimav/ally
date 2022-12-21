export interface IProduct {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
}


export interface IProductForm extends Omit<IProduct, 'image'|'id'> {
    image?: File;
}
