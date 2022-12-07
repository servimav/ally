<script setup lang='ts'>
import { IQrCodeCreate, IQrCodeUpdate, IQrType, IQrWifiData } from '@/types';
import { ref } from 'vue';
import InputTextarea from '../inputs/InputTextarea.vue';
import { useQrForm } from './qrForm';


const $props = withDefaults(defineProps<{ type?: IQrType, save?: boolean }>(), {
    type: 'TEXT',
});

const $emit = defineEmits<{ (e: 'complete', type: 'create' | 'update', v: IQrCodeCreate | IQrCodeUpdate, updateId?: number): void }>()
const { form } = useQrForm($props, $emit);
const wifi = ref<IQrWifiData>({
    hidden: false,
    password: '',
    ssid: '',
    type: 'blank'
})

/**
 * -----------------------------------------
 *	methods
 * -----------------------------------------
 */
function onSubmit() {
    form.value.data = `WIFI:S:${wifi.value.ssid};T:${wifi.value.type};P:${wifi.value.password};H:${wifi.value.hidden ? 'true' : 'false'};;`;
    $emit('complete', 'create', form.value);
}
</script>

<template>
    <Card class="p-4">
        <form class="space-y-2 text-primary-low dark:text-slate-200" @submit.prevent="onSubmit">
            <InputText v-if="save" v-model="form.title" id-key="input-qr-title" label="Titulo" placeholder="Mi Titulo"
                required />

            <InputText v-model="wifi.ssid" id-key="input-qr-wifi-ssid" label="SSID" required />
            <InputText v-model="wifi.type" id-key="input-qr-wifi-type" label="Security" required />
            <InputText v-model="wifi.password" id-key="input-qr-wifi-password" label="Password" required />

            <InputText v-if="save" v-model="form.slug" id-key="input-qr-slug" label="Slug" required />

            <div class="mt-4">
                <button class="btn-primary dark:bg-primary-low" type="submit">{{ save ? 'Guardar' : 'Generar QR'
                }}</button>
            </div>
        </form>
    </Card>
</template>
