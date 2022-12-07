export type IQrType = 'TEXT' | 'URL' | 'VCARD' | 'WIFI' | 'TEL' | 'WHATSAPP' | 'TELEGRAM' | 'WALLET';

export interface IQrCode {
    id: number;
    type: IQrType;
    title: string;
    slug: string;
    description: string;
    data: string;
    public: boolean;
}

/**
 * IQrCodeCreate
 */
export interface IQrCodeCreate {
    type: IQrType;
    title: string;
    slug?: string;
    description: string;
    data: string;
    public?: boolean;
}
/**
 * IQrCodeUpdate
 */
export type IQrCodeUpdate = Partial<Omit<IQrCode, 'id'>>

/**
 * IQrWifiData
 */
export interface IQrWifiData {
    ssid: string;
    password: string;
    type: 'WEP' | 'WPA' | 'blank';
    hidden: boolean
}
