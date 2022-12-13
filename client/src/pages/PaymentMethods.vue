<script setup lang='ts'>
import { onBeforeMount, computed, ref } from 'vue';
import UserPaymentForm from '@/components/forms/payment/UserPaymentForm.vue';
import MyPaymentLink from '@/components/widgets/MyPaymentLink.vue';
import { useNotify } from '@/helpers';
import { usePaymentStore } from '@/store';
import type { IUserPaymentData } from '@/types';
const { axiosError } = useNotify();
const Payment = usePaymentStore();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const myMethods = computed(() => Payment.myMethods);
const selected = ref<{ method: IUserPaymentData; key: number }>();
const form = ref(false);

function getMethod(id: number) {
    return Payment.getById(id);
}

function onSelect(p: IUserPaymentData, key: number) {
    selected.value = {
        method: p,
        key
    }
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
        <MyPaymentLink class="mb-2" />
        <button class="btn-primary-low
                dark:bg-primary dark:text-slate-100 dark:border-primary-low"
            @click.prevent="() => { selected = undefined; form = true }" v-if="!form">Añadir</button>
        <UserPaymentForm :update="selected" v-if="form" @completed="onComplete" />

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2" v-else>
            <li v-for="(m, k) in myMethods.methods" :key="`${m.payment_id}-${k}`"
                class="flex items-center border shadow-lg p-2 bg-white rounded-md cursor-pointer dark:bg-primary-low dark:border-slate-300 dark:text-slate-200"
                @click="onSelect(m, k)">
                <div class="w-8">
                    <img :src="getMethod(m.payment_id)?.image" />
                </div>
                <div class="pl-4">{{ m.name }}</div>
            </li>
        </ul>
    </div>

</template>

<style scoped>
.pm {
    min-height: 6rem;
}
</style>
