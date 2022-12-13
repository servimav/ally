import type { IIconLabelLink, IQrType } from '@/types';
import { mdiContacts, mdiLink, mdiPencil, mdiSend, mdiWhatsapp, mdiWifi, mdiFood, mdiMessage, mdiPhone, mdiEmail } from '@mdi/js';

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
    }, /*{
        icon: mdiContacts,
        label: 'Contacto',
        type: 'VCARD'
    }, */{
        icon: mdiPhone,
        label: 'Teléfono',
        type: 'TEL'
    }, {
        icon: mdiMessage,
        label: 'Mensaje',
        type: 'SMS'
    }, {
        icon: mdiEmail,
        label: 'Email',
        type: 'EMAIL'
    }, {
        icon: mdiWhatsapp,
        label: 'Whatsapp',
        type: 'WHATSAPP'
    }, {
        icon: mdiSend,
        label: 'Telegram',
        type: 'TELEGRAM'
    }
]
