<script setup lang='ts'>
import { onBeforeMount, computed, ref } from 'vue';
import UserPaymentForm from '@/components/forms/payment/UserPaymentForm.vue';
import PaymentMethod from '@/components/widgets/PaymentMethod.vue';
import { useNotify } from '@/helpers';
import { usePaymentStore } from '@/store';
import type { IPaymentMethod, IUserPaymentData } from '@/types'
const { axiosError } = useNotify();
const Payment = usePaymentStore();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const myMethods = computed(() => Payment.myMethods);
const selected = ref<IUserPaymentData>();
const form = ref(false);

function getMethod(id: number) {
    return Payment.getById(id);
}

function onSelect(p: IUserPaymentData) {
    selected.value = p;
    form.value = true
}

async function onComplete() {
    form.value = false;
    selected.value = undefined;
    await Payment.listMine()
}

onBeforeMount(async () => {
    try {
        await Payment.list();
        await Payment.listMine();
    } catch (error) {
        axiosError(error)
    }
})
</script>

<template>
    <div class="p-2">
        <button class="btn-primary-low" @click.prevent="() => { selected = undefined; form = true }"
            v-if="!form">Añadir</button>
        <UserPaymentForm :update="selected" v-if="form" @completed="onComplete" />

        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 mt-2" v-else>
            <div v-for="(m, k) in myMethods.methods" :key="`${k}`">
                <PaymentMethod class="w-full" :method="(getMethod(m.payment_id) as IPaymentMethod)"
                    v-if="getMethod(m.payment_id)" :label="m.name" @click="onSelect(m)" />
            </div>
        </div>
    </div>

</template>
