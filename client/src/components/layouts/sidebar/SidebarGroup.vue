<script setup lang='ts'>
defineProps<{ label?: string }>()
</script>

<template>
    <div class="px-4 pb-6">
        <h3 class="mb-2 text-xs font-medium uppercase text-gray-500" v-if="label">
            {{ label }}
        </h3>
        <ul class="mb-8 text-sm font-medium">
            <slot />
        </ul>
    </div>
</template>
