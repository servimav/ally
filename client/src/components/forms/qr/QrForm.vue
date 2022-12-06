<script setup lang='ts'>
import { ref, watch } from 'vue';
import { IQrCodeCreate, IQrType } from '@/types';
import InputTextarea from '../inputs/InputTextarea.vue';

const $props = withDefaults(defineProps<{ type?: IQrType, save?: boolean }>(), {
    type: 'TEXT',
});

const $emit = defineEmits<{ (e: 'complete', type: 'create' | 'update', v: IQrCodeCreate): void }>()

const form = ref<IQrCodeCreate>({
    data: '',
    description: '',
    title: '',
    type: 'TEXT',
    public: false,
    slug: 'mi-texto',
});
form.value.type = $props.type;

watch(() => form.value.title, (val: string) => {
    form.value.slug = val.replaceAll(' ', '-').toLocaleLowerCase();
})

/**
 * -----------------------------------------
 *	methods
 * -----------------------------------------
 */
function onSubmit() {
    let d = form.value.data;
    if (form.value.type === 'TEL')
        d = `tel:${form.value.data}`
    $emit('complete', 'create', { ...form.value, data: d });
}
</script>

<template>
    <Card class="p-4">
        <form class="space-y-2 text-primary-low" @submit.prevent="onSubmit">
            <InputText v-if="save" v-model="form.title" id-key="input-qr-title" label="Titulo" placeholder="Mi Titulo"
                required />
            <!-- Data types-->
            <InputTextarea v-if="type === 'TEXT'" v-model="form.data" id-key="input-qr-data-text" label="Texto"
                placeholder="Su texto aqui" required :rows="2" />

            <InputText v-if="type === 'URL'" placeholder="https://www.example.com" v-model="form.data"
                id-key="input-qr-data-url" label="URL" required />

            <InputText type="tel" v-if="type === 'TEL'" placeholder="55555555" v-model="form.data"
                id-key="input-qr-data-tel" label="Telefono" required />

            <InputText type="text" v-if="type === 'WALLET'" v-model="form.data" id-key="input-qr-data-wallet"
                label="Wallet" required />
            <!-- / Data types-->

            <InputText v-if="save" v-model="form.slug" id-key="input-qr-slug" label="Slug" required />

            <div class="mt-4">
                <button class="btn-primary" type="submit">{{ save ? 'Guardar' : 'Generar QR' }}</button>
            </div>
        </form>
    </Card>
</template>
