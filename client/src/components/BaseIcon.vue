<script setup lang="ts">
import { computed } from "vue";

const $props = defineProps<{ path: string; size?: number, round?: boolean; }>()

const iconSize = computed(() => $props.size ?? 6);
</script>

<template>
    <svg :class="`h-${iconSize} w-${iconSize}`" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        <path :stroke-linecap="round ? 'round' : 'inherit'" :stroke-linejoin="round ? 'round' : 'inherit'" :d="path" />
    </svg>
</template>
