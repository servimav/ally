<script setup lang='ts'>
defineProps<{ modelValue: boolean }>()
const $emit = defineEmits<{ (e: 'update:model-value', v: boolean): void }>()
</script>

<template>
    <div v-if="modelValue" class="fixed top-0 left-0 w-screen h-screen bg-transparent"
        @click="$emit('update:model-value', false)">
    </div>
</template>
