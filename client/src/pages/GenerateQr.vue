<script setup lang='ts'>
import { useRoute } from 'vue-router';
import QrForm from '@/components/forms/qr/QrForm.vue';
import QrCode from '@/components/widgets/QrCode.vue';
import { onBeforeMount, ref } from 'vue';
import { IQrCodeCreate, IQrCodeUpdate, IQrType } from '@/types';

const $route = useRoute();

const type = ref<IQrType>('TEXT');
const qr = ref<string>()

function onComplete(t: 'create' | 'update', v: IQrCodeCreate | IQrCodeUpdate) {
    qr.value = v.data
}

onBeforeMount(() => {
    type.value = $route.params.type.toString() ? $route.params.type.toString() as IQrType : 'TEXT';
})
</script>

<template>
    <div class="p-2">
        <QrForm :type="type" @complete="onComplete" />

        <div class="text-center mt-4 p-2">
            <QrCode :data="qr" v-if="qr" :scale="10" downloadable />
        </div>
    </div>
</template>
