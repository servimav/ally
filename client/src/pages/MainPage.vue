<script setup lang='ts'>
import QrTypeIcons from '@/components/containers/QrTypeIcons.vue';
import { BASIC_TYPES } from '@/helpers/const';
import { IQrCode } from '@/types';

const qr: IQrCode = {
    data: 'tel:53375180',
    description: 'Hello My Friend',
    id: 1,
    public: true,
    slug: '', title: 'My QR TEl', type: 'VCARD'
}
</script>

<template>
    <div class="p-2 space-y-2">
        <QrTypeIcons :types="BASIC_TYPES" />
    </div>
</template>
