<script setup lang='ts'>
import type { IUserPayment } from '@/types';
import { usePaymentStore } from '@/store'
import { mdiDelete, mdiPencil } from '@mdi/js';

const { getById } = usePaymentStore()
const $props = defineProps<{ method: IUserPayment }>();
const paymentMethod = getById($props.method.payment_id);
</script>

<template>
    <Card
        class="text-primary-low shadow-slate-400 dark:bg-primary dark:text-gray-300 hover:shadow-slate-500 hover:shadow-xl inline-flex p-2"
        v-if="paymentMethod">
        <img :src="paymentMethod?.image" :alt="`${paymentMethod?.name}-${paymentMethod?.type}`" />
        <div class="ml-2 my-auto">
            <div class="text-sm">{{ paymentMethod?.name }}</div>
        </div>

        <div class="ml-auto my-auto cursor-pointer">
            <BaseIcon :path="mdiPencil" size="1rem" class="stroke-primary dark:stroke-slate-100" />
        </div>

        <div class="ml-2 my-auto cursor-pointer">
            <BaseIcon :path="mdiDelete" size="1rem" class="stroke-error dark:stroke-slate-100" />
        </div>
    </Card>
</template>
