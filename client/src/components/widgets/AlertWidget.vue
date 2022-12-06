<script setup lang='ts'>
import { computed } from 'vue';
import { mdiClose } from '@mdi/js'
import { INotification } from '@/helpers';
const $props = defineProps<{ notification: INotification }>();

const style = computed(() => {
    switch ($props.notification.type) {
        case 'error':
            return `border-red-600 bg-error text-slate-200`;
        case 'info':
            return `border-blue-400 bg-info text-primary`;
        case 'success':
            return `border-green-700 bg-success text-white`;
        case 'warning':
            return `text-primary bg-warning border-yellow-500`;
        default:
            return ``
    }
})
</script>

<template>
    <div :class="style" class="border rounded-md p-4">
        <span>{{ notification.message }} </span>
        <span class="float-right mt-1 cursor-pointer">
            <BaseIcon :path="mdiClose" size="16" />
        </span>
    </div>
</template>
