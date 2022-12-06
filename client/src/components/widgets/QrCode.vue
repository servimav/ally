<script setup lang='ts'>
import { ref } from 'vue';
import VueQrcode from 'vue-qrcode';

withDefaults(defineProps<{ data: string, scale?: number, withImage?: boolean; downloadable?: boolean }>(), {
    scale: 1
});

const url = ref('');
const showDownload = ref(false);

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
    <div class="relative">
        <figure class="inline-block text-[0px]">
            <vue-qrcode :value="data" :scale="scale" :quality="1" :color="{ dark: '#000000ff', light: '#ffffffff' }"
                type="image/png" @change="onChange" @click="(showDownload = !showDownload)" />
            <img v-if="withImage"
                class="bg-transparent left-1/2 h-1/6 overflow-hidden absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/6"
                src="/vite.svg" alt="Logo QR" />s
        </figure>

        <div v-if="(showDownload && downloadable)"
            class="z-20 w-3/4 mx-auto shadow-lg border bg-white p-4 left-1/2 overflow-hidden absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
            ¿Desea descargar la imagen?

            <div class="mt-4">
                <button
                    class="p-2 cursor-pointer hover:bg-primary focus:bg-primary text-center bg-primary-low text-gray-200 rounded-sm"
                    @click.prevent="download">
                    Descargar</button>
            </div>
        </div>
    </div>

</template>
