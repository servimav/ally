<script setup lang='ts'>
import type { IPaymentMethod } from '@/types'
defineProps<{ method: IPaymentMethod; label?: string }>()
</script>

<template>
    <Card
        class="dark:bg-primary-low dark:text-gray-300 hover:border-primary-low hover:border hover:shadow-slate-500 hover:shadow-xl dark:hover:text-slate-200 dark:hover:shadow-sm text-center cursor-pointer">
        <img :src="method.image" :alt="`${method.name}-${method.type}-logo`" />
        <span v-if="label">{{ label }}</span>
        <span v-else>{{ method.name }}</span>
    </Card>
</template>
