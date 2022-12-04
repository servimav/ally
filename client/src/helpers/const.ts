import { IIconLabelLink } from '@/types';
import { mdiContacts, mdiCreditCard, mdiLink, mdiPencil, mdiSend, mdiWhatsapp, mdiWifi, mdiFood, mdiMessage, mdiPhone, mdiWallet, mdiBitcoin, mdiListBoxOutline } from '@mdi/js';

export const BASIC_TYPES: IIconLabelLink[] = [
    {
        icon: mdiLink,
        label: 'Web'
    },
    {
        icon: mdiWifi,
        label: 'WiFi'
    }, {
        icon: mdiContacts,
        label: 'Contacto'
    }, {
        icon: mdiPencil,
        label: 'Texto'
    }, {
        icon: mdiPhone,
        label: 'Teléfono'
    }, {
        icon: mdiMessage,
        label: 'Mensaje'
    }, {
        icon: mdiWhatsapp,
        label: 'Whatsapp'
    }, {
        icon: mdiSend,
        label: 'Telegram'
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
        label: 'Crypto Wallet'
    }
]
