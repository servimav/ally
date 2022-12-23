<script setup lang='ts'>
import { useNotify, share } from '@/helpers';
import { useUserStore } from '@/store';
import { mdiContentCopy, mdiShare } from '@mdi/js';
import { useClipboard } from '@vueuse/core';
import { baseURL } from '@/services'
import { computed } from 'vue';

const $props = defineProps<{ type: 'qr' | 'payment' | 'catalog' }>()

const { copy, copied, isSupported } = useClipboard();
const { error, success } = useNotify();
const User = useUserStore();

const myUrl = computed(() => {
    switch ($props.type) {
        case 'payment':
            return `${baseURL}/payme/${User.profile?.nick}`;
        case 'catalog':
            return `${baseURL}/cat/${User.profile?.nick}`;
        case 'qr':
            return `${baseURL}/qr/${User.profile?.nick}`
        default: return ''
    }
})

/**
 * copyData
 */
async function copyData() {
    if (isSupported.value) {
        await copy(myUrl.value);
        if (copied.value) {
            success('Enlace copiado');
        }
    } else {
        error('Su dispositivo no soporta la función')
    }
}

function shareMyLink() {
    switch ($props.type) {
        case 'catalog':
            return share(`Catálogo de ${User.profile?.name}`, myUrl.value);
        case 'payment':
            return share(`Métodos de Pago de ${User.profile?.name}`, myUrl.value);
        default:
            return
    }
}
</script>

<template>

    <div class="p-4 text-primary bg-yellow-300">
        <span class="float-right ml-2">
            <div class="cursor-pointer" @click="copyData">
                <BaseIcon :path="mdiContentCopy" size="16" class="fill-primary" />
            </div>
            <div class="cursor-pointer" @click="shareMyLink">
                <BaseIcon :path="mdiShare" size="16" class="fill-primary" />
            </div>
        </span>
        <span>
            Su Enlace:
            <b>{{ myUrl }}</b>
        </span>
    </div>
</template>
