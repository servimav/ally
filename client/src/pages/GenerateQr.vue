<script setup lang='ts'>
import { useRoute } from 'vue-router';
import QrForm from '@/components/forms/qr/QrForm.vue';
import QrFormWifi from '@/components/forms/qr/QrFormWifi.vue';
import QrCode from '@/components/widgets/QrCode.vue';
import { onBeforeMount, ref } from 'vue';
import { IQrCodeCreate, IQrCodeUpdate, IQrType } from '@/types';
import { useUserStore } from '@/store';
import { useService } from '@/services'
import { useNotify } from '@/helpers';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */

const $route = useRoute();
const $service = useService();
const { isAuth } = useUserStore();
const Notify = useNotify();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const type = ref<IQrType>('TEXT');
const qr = ref<string>()
const showForm = ref(true);

/**
 * onComplete
 * @param t
 * @param v
 */
async function onComplete(t: 'create' | 'update', v: IQrCodeCreate | IQrCodeUpdate, updateId?: number) {
    // if (isAuth && v) {
    //     try {
    //         if (t === 'create')
    //             await $service.qr.create(v as IQrCodeCreate);
    //         else if (t === 'update' && updateId)
    //             await $service.qr.update(updateId, v as IQrCodeUpdate);
    //         Notify.success('Se ha guardado correctamente');
    //     } catch (error) {
    //         Notify.axiosError(error);
    //     }
    // }
    qr.value = v.data;
    showForm.value = false;
}

onBeforeMount(() => {
    type.value = $route.params.type.toString() ? $route.params.type.toString() as IQrType : 'TEXT';
})
</script>

<template>
    <div class="p-2">
        <div v-if="showForm" class="max-w-md">
            <QrFormWifi v-if="type === 'WIFI'" @complete="onComplete" />
            <QrForm v-else :type="type" @complete="onComplete" />
        </div>
        <div class="text-center mt-4 p-2 max-w-md">
            <QrCode :data="qr" v-if="qr" :scale="10" downloadable />
        </div>
    </div>
</template>
