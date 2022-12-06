import { ROUTE_NAME } from '@/router';
import { IIconLabelLink } from '@/types';
import { mdiContacts, mdiCreditCard, mdiLink, mdiPencil, mdiSend, mdiWhatsapp, mdiWifi, mdiFood, mdiMessage, mdiPhone, mdiBitcoin, mdiListBoxOutline } from '@mdi/js';

export const BASIC_TYPES: IIconLabelLink[] = [
    {
        icon: mdiPencil,
        label: 'Texto',
        link: { name: ROUTE_NAME.QR_GENERATE, params: { type: 'TEXT' } }
    },
    {
        icon: mdiLink,
        label: 'URL',
        link: { name: ROUTE_NAME.QR_GENERATE, params: { type: 'URL' } }
    },
    {
        icon: mdiWifi,
        label: 'WiFi',
        link: { name: ROUTE_NAME.QR_GENERATE, params: { type: 'WIFI' } }
    }, {
        icon: mdiContacts,
        label: 'Contacto',
        link: { name: ROUTE_NAME.QR_GENERATE, params: { type: 'VCARD' } }
    }, {
        icon: mdiPhone,
        label: 'Teléfono',
        link: { name: ROUTE_NAME.QR_GENERATE, params: { type: 'TEL' } }
    }, {
        icon: mdiMessage,
        label: 'Mensaje',
        link: { name: ROUTE_NAME.QR_GENERATE, params: { type: 'SMS' } }
    }, {
        icon: mdiWhatsapp,
        label: 'Whatsapp',
        link: { name: ROUTE_NAME.QR_GENERATE, params: { type: 'WHATSAPP' } }
    }, {
        icon: mdiSend,
        label: 'Telegram',
        link: { name: ROUTE_NAME.QR_GENERATE, params: { type: 'TELEGRAM' } }
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
