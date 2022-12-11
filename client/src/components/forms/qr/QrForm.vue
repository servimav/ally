<script setup lang='ts'>
import { IQrCodeCreate, IQrCodeUpdate, IQrType } from '@/types';
import InputTextarea from '../inputs/InputTextarea.vue';
import { useQrForm } from './qrForm';

const $props = withDefaults(defineProps<{ type?: IQrType, save?: boolean }>(), {
    type: 'TEXT',
});

const $emit = defineEmits<{ (e: 'complete', type: 'create' | 'update', v: IQrCodeCreate | IQrCodeUpdate, updateId?: number): void }>()
const { form } = useQrForm($props, $emit)

/**
 * -----------------------------------------
 *	methods
 * -----------------------------------------
 */
function onSubmit() {
    let d = form.value.data;
    if (form.value.type === 'TEL')
        d = `tel:${form.value.data}`;
    else if (form.value.type === 'SMS')
        d = `smsto:${form.value.data}`;
    else if (form.value.type === 'EMAIL')
        d = `mailto:${form.value.data}`;
    else if (form.value.type === 'WHATSAPP')
        d = `https://wa.me/${form.value.data}`;
    else if (form.value.type === 'TELEGRAM')
        d = `https://t.me/${form.value.data}`;
    $emit('complete', 'create', { ...form.value, data: d });
}
</script>

<template>
    <Card class="p-4">
        <form class="space-y-2 text-primary-low dark:text-slate-200" @submit.prevent="onSubmit">
            <InputText v-if="save" v-model="form.title" id-key="input-qr-title" label="Titulo" placeholder="Mi Titulo"
                required />
            <!-- Data types-->
            <InputTextarea v-if="type === 'TEXT'" v-model="form.data" id-key="input-qr-data-text" label="Texto"
                placeholder="Su texto aqui" required :rows="2" />

            <InputText v-if="type === 'URL'" placeholder="https://www.example.com" v-model="form.data"
                id-key="input-qr-data-url" label="URL" required />

            <InputText type="tel" v-if="type === 'TEL'" placeholder="55555555" v-model="form.data"
                id-key="input-qr-data-tel" label="Telefono" required />
            <InputText type="tel" v-if="type === 'SMS'" placeholder="55555555" v-model="form.data"
                id-key="input-qr-data-sms" label="Telefono" required />
            <InputText type="tel" v-if="type === 'WHATSAPP'" placeholder="55555555" v-model="form.data"
                id-key="input-qr-data-whatsapp" label="Telefono" required />
            <InputText type="text" v-if="type === 'TELEGRAM'" placeholder="MyUser" v-model="form.data"
                id-key="input-qr-data-telegram" label="Usuario" required />
            <InputText type="email" v-if="type === 'EMAIL'" placeholder="myemail@email.com" v-model="form.data"
                id-key="input-qr-data-email" label="Email" required />

            <InputText type="text" v-if="type === 'WALLET'" v-model="form.data" id-key="input-qr-data-wallet"
                label="Wallet" required />
            <!-- / Data types-->

            <InputText v-if="save" v-model="form.slug" id-key="input-qr-slug" label="Slug" required />

            <div class="mt-4">
                <button class="btn-primary dark:bg-primary-low" type="submit">{{ save ? 'Guardar' : 'Generar QR'
                }}</button>
            </div>
        </form>
    </Card>
</template>
