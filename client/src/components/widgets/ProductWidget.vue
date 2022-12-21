<script setup lang='ts'>
import { IProduct } from '@/types';

defineProps<{ product: IProduct, full?: boolean }>()
</script>

<template>
    <Card class="p-2 cursor-pointer">
        <div class="relative">
            <div class="flex w-full min-h-[150px] h-full">
                <img :src="product.image" :alt="product.title" class="w-full self-center" />
            </div>
            <div class="absolute top-1 bg-slate-200 right-1 p-1 border rounded-md text-center">${{
                    Number(product.price).toFixed(2)
            }}</div>
        </div>
        <div class="mt-2 p-2 bg-slate-200 text-center">{{ product.title }}</div>
        <div class="mt-2 p-2 bg-slate-200 text-justify" v-if="full">{{ product.description }}</div>
    </Card>
</template>
