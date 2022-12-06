<script setup lang='ts'>
import QrCode from '@/components/widgets/QrCode.vue';
import { IQrCode } from '@/types';
import { computed, onBeforeMount, ref } from 'vue';
import { breakpointsTailwind, useBreakpoints, useClipboard } from '@vueuse/core'
import { mdiContentCopy } from '@mdi/js';
import { useNotify } from '@/helpers';
import { useRoute } from 'vue-router';
import { useService } from '@/services';
/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */

const breakpoints = useBreakpoints(breakpointsTailwind);
const notify = useNotify();
const api = useService()
const $route = useRoute()
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const error = ref('');
const qr = ref<IQrCode | undefined>();

const dataTransformed = computed(() => {
    if (!qr.value) return '';
    if (qr.value.type === 'TEL')
        return qr.value.data.split(':').length > 1 ? qr.value.data.split(':')[1] : qr.value.data
    else if (qr.value.type === 'TELEGRAM' || qr.value.type === 'WHATSAPP' || qr.value.type === 'URL')
        return qr.value.data.split('//').length > 1 ? qr.value.data.split(':')[1] : qr.value.data
    return qr.value.data;
});

const scale = computed(() => {
    if (breakpoints.md)
        return 10;
    return 15
});

/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */

const { copy, copied, isSupported } = useClipboard({ source: dataTransformed.value });

/**
 * copyData
 */
async function copyData() {
    if (isSupported.value) {
        await copy();
        if (copied.value) {
            notify.success('Copiado correctamente');
        }
    } else {
        notify.error('Su dispositivo no soporta la función')
    }
}

onBeforeMount(async () => {
    const name = $route.params.name.toString();
    const slug = $route.params.slug.toString();
    try {
        const qr = await api.qr.public(name, slug)
    } catch (err) {
        error.value = notify.axiosError(err);
    }
})
</script>

<template>
    <Card v-if="qr">
        <div class="text-center">
            <div class="text-2xl mt-4">{{ qr.title }}</div>

            <QrCode :data="qr.data" :scale="scale" downloadable />

            <div class="mt-4 bg-amber-300 border text-primary p-2">
                <span>{{ dataTransformed }}</span>
                <span class="float-right mt-1 cursor-pointer" @click="copyData">
                    <BaseIcon :path="mdiContentCopy" size="16" class="fill-primary" />
                </span>
            </div>

            <div class="mt-4 text-justify text-sm font-light p-2 text-primary">{{ qr.description }}</div>
        </div>
    </Card>

    <Card v-else class="p-4">
        <div class="text-center text-xl"> No hay datos para mostrar</div>
        <div class="text-center text-md mt-4"> {{ error }}</div>
    </Card>
</template>
