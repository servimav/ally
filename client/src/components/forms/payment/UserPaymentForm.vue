<script setup lang='ts'>
import PaymentTypeSelector from './PaymentTypeSelector.vue';
import PaymentMethod from '@/components/widgets/PaymentMethod.vue';
import type { IPaymentMethod, IUserPaymentData } from '@/types';
import { ref, computed } from 'vue';
import { usePaymentStore } from '@/store';
import { useNotify } from '@/helpers';

const Payment = usePaymentStore();
const { axiosError } = useNotify();
const $props = defineProps<{ update?: IUserPaymentData }>()
const $emit = defineEmits<{ (e: 'completed', v: IUserPaymentData): void }>()
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const select = ref(true);
const selected = ref<IPaymentMethod>()
const form = ref<IUserPaymentData>({
    data: '',
    name: '',
    payment_id: 0
})

const label = computed(() => {
    switch (selected.value?.type) {
        case 'CARDS':
            return `Tarjeta`;
        case 'CRYPTO':
            return `Wallet ${selected.value.name}`;
        case 'WALLET':
            return `Link ${selected.value.name}`;
        default: return ''
    }
});
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */

/**
 * onSelectType
 * @param t
 */
function onSelectType(t: IPaymentMethod) {
    setTimeout(() => {
        selected.value = t;
        form.value.payment_id = t.id;
        select.value = false;
    }, 500)
}
/**
 * onSubmit
 */
async function onSubmit(cancel = false) {
    if (selected.value) {
        try {
            if ($props.update) {
                if (cancel)
                    await Payment.remove(form.value);
                else
                    await Payment.update(form.value);
            }
            else {
                if (!cancel)
                    await Payment.store(form.value);
            }
            $emit('completed', form.value);
        } catch (error) {
            axiosError(error)
        }
    }
}
if ($props.update) {
    form.value = $props.update;
    select.value = false;
    selected.value = Payment.getById(form.value.payment_id);
}
</script>

<template>
    <form @submit.prevent="onSubmit(false)">
        <Card>
            <PaymentMethod v-if="selected" :method="selected" class="w-16" @click="select = true" />
            <PaymentTypeSelector v-if="select" @select="onSelectType" />
            <InputText id-key="input-wallet-name" label="Nombre" v-model="form.name" type="text" placeholder="Nombre"
                required />
            <InputText id-key="input-wallet-data" :label="label" v-model="form.data" type="text" required />
            <button class="btn-primary mt-2">Guardar</button>
            <button class="btn bg-error text-white mt-2" @click.prevent="onSubmit(true)">{{ update ? 'Eliminar' :
                    'Cancelar'
            }}</button>
        </Card>
    </form>
</template>


<style scoped>
/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    visibility: hidden;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #374151;
    visibility: hidden;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #374151;
    visibility: hidden;
}
</style>
