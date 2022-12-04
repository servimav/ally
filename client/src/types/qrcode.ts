export type IQrType = 'TEXT' | 'URL' | 'VCARD' | 'WIFI';

export interface IQrCode {
    id: number;
    type: IQrType;
    title: string;
    slug: string;
    description: string;
    data: string;
    public: boolean;
}
