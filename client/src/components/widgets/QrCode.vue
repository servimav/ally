<script setup lang='ts'>
import { ref } from 'vue';
import { IQrCode } from '@/types'
import VueQrcode from 'vue-qrcode';

const $props = withDefaults(defineProps<{ qr: IQrCode, scale?: number, withImage?: boolean }>(), {
    scale: 1
});

const url = ref('');

function onChange(v: string) {
    url.value = v;
}

function download() {
    const name = 'image.png';
    const a = document.createElement('a');
    a.download = name;
    a.href = url.value;
    document.body.append();
    a.click()
    a.remove()
}
</script>

<template>
    <figure class="inline-block text-[0px] relative" @click="download">
        <vue-qrcode :value="qr.data" :scale="scale" :quality="1" :color="{ dark: '#000000ff', light: '#ffffffff' }"
            type="image/png" @change="onChange" />
        <img v-if="withImage"
            class="bg-transparent left-1/2 h-1/6 overflow-hidden absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/6"
            src="/vite.svg" alt="Logo QR" />
    </figure>
</template>
