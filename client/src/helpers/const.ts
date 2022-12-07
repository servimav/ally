import { ROUTE_NAME } from '@/router';
import { IIconLabelLink, IQrType } from '@/types';
import { mdiContacts, mdiCreditCard, mdiLink, mdiPencil, mdiSend, mdiWhatsapp, mdiWifi, mdiFood, mdiMessage, mdiPhone, mdiBitcoin, mdiListBoxOutline } from '@mdi/js';

export interface IIconWidget extends IIconLabelLink {
    type?: IQrType;
}

export const BASIC_TYPES: IIconWidget[] = [
    {
        icon: mdiPencil,
        label: 'Texto',
        type: 'TEXT'
    },
    {
        icon: mdiLink,
        label: 'URL',
        type: 'URL'
    },
    {
        icon: mdiWifi,
        label: 'WiFi',
        type: 'WIFI'
    }, {
        icon: mdiContacts,
        label: 'Contacto',
        type: 'VCARD'
    }, {
        icon: mdiPhone,
        label: 'Teléfono',
        type: 'TEL'
    }, {
        icon: mdiMessage,
        label: 'Mensaje',
        type: 'SMS'
    }, {
        icon: mdiWhatsapp,
        label: 'Whatsapp',
        type: 'WHATSAPP'
    }, {
        icon: mdiSend,
        label: 'Telegram',
        type: 'TELEGRAM'
    }, {
        icon: mdiCreditCard,
        label: 'Transfermovil'
    }, {
        icon: mdiFood,
        label: 'Menú'
    }, {
        icon: mdiListBoxOutline,
        label: 'Ofertas'
    }, {
        icon: mdiBitcoin,
        label: 'Wallet'
    }
]
