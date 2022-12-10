<script setup lang='ts'>
import { onBeforeMount, ref } from 'vue';
import { useNotify } from '@/helpers';
import { usePaymentStore } from '@/store';
import PaymentTypeSelector from '@/components/forms/payment/PaymentTypeSelector.vue';

const { axiosError } = useNotify();
const { myMethods, listMine, list } = usePaymentStore()
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

onBeforeMount(async () => {
    try {
        await list();
        await listMine();
    } catch (error) {
        axiosError(error)
    }
})
</script>

<template>
    <div class="p-2">
        <button class="btn-primary">Button</button>
    </div>

    <div class="absolute z-30 p-2">
        <PaymentTypeSelector />
    </div>
</template>
