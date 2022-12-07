<script setup lang='ts'>
import { onBeforeMount, ref } from 'vue';
import { useService } from '@/services';
import { useNotify } from '@/helpers'
import { IQrCode } from '@/types';
import QrWidget from '@/components/widgets/QrWidget.vue';

const { qr } = useService();
const { axiosError } = useNotify();

const myQr = ref<IQrCode[]>([])

onBeforeMount(async () => {
    try {
        const resp = await qr.list();
        myQr.value = resp.data;
    } catch (error) {
        axiosError(error);
    }
})
</script>

<template>
    <div class="p-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            <QrWidget :qr="qr" v-for="(qr, key) in myQr" :key="`my-qr-${key}-${qr.id}`" />
        </div>
    </div>
</template>
