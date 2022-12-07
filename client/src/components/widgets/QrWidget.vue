<script setup lang='ts'>
import { IQrCode } from '@/types';
import { computed } from 'vue';
import { mdiContacts, mdiLink, mdiPencil, mdiSend, mdiWhatsapp, mdiWifi, mdiFood, mdiMessage, mdiPhone, mdiBitcoin, mdiDelete } from '@mdi/js';

const $props = defineProps<{ qr: IQrCode }>();

const icon = computed(() => {
    switch ($props.qr.type) {
        case 'TEL':
            return mdiPhone;
        case 'TELEGRAM':
            return mdiSend;
        case 'TEXT':
            return mdiPencil;
        case 'URL':
            return mdiLink;
        case 'VCARD':
            return mdiContacts;
        case 'WALLET':
            return mdiBitcoin;
        case 'WHATSAPP':
            return mdiWhatsapp;
        case 'WIFI':
            return mdiWifi
    }
});
</script>

<template>
    <Card
        class="text-primary-low shadow-slate-400 dark:bg-primary dark:text-gray-300 hover:shadow-slate-500 hover:shadow-xl inline-flex p-2">
        <BaseIcon :path="icon" size="2rem" />
        <div class="ml-2 my-auto">
            <div class="text-sm">{{ qr.title }}</div>
            <div class="text-sm">{{ qr.description }}</div>
        </div>

        <div class="ml-auto my-auto cursor-pointer">
            <BaseIcon :path="mdiPencil" size="1rem" class="stroke-primary dark:stroke-slate-100" />
        </div>

        <div class="ml-2 my-auto cursor-pointer">
            <BaseIcon :path="mdiDelete" size="1rem" class="stroke-error dark:stroke-slate-100" />
        </div>
    </Card>
</template>
