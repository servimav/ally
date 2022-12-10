<script setup lang='ts'>
import { usePaymentStore } from '@/store';
import PaymentMethod from '@/components/widgets/PaymentMethod.vue';
import { onBeforeMount, computed } from 'vue';
import type { IPaymentMethod } from '@/types';

const gridClass = 'grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 gap-2';
const Payment = usePaymentStore();
const $emit = defineEmits<{ (e: 'select', p: IPaymentMethod): void }>()

const cardMethods = computed(() => Payment.cardMethods)
const cryptoMethods = computed(() => Payment.cryptoMethods)
const favMethods = computed(() => Payment.favMethods)
const walletMethods = computed(() => Payment.walletMethods)

onBeforeMount(async () => {
    await Payment.list();
})
</script>

<template>
    <Card class="p-2 space-y-2">
        <div class="text-2xl text-center">Favoritos</div>
        <div :class="gridClass">
            <PaymentMethod @click="$emit('select', m)" v-for="(m, k) in favMethods" :key="`fav-${m.id}-${k}`"
                :method="m" />
        </div>
        <div class="text-2xl text-center">Billeteras</div>
        <div :class="gridClass">
            <PaymentMethod @click="$emit('select', m)" v-for="(m, k) in walletMethods" :key="`wallet-${m.id}-${k}`"
                :method="m" />
        </div>
        <div class="text-2xl text-center">Tarjetas</div>
        <div :class="gridClass">
            <PaymentMethod @click="$emit('select', m)" v-for="(m, k) in cardMethods" :key="`cards-${m.id}-${k}`"
                :method="m" />
        </div>
        <div class="text-2xl text-center">Crypto</div>
        <div :class="gridClass">
            <PaymentMethod @click="$emit('select', m)" v-for="(m, k) in cryptoMethods" :key="`crypto-${m.id}-${k}`"
                :method="m" />
        </div>
    </Card>
</template>
