<script setup lang='ts'>
import OverlayVue from '@/components/containers/Overlay.vue';
defineProps<{ modelValue: boolean, closeOutside?: boolean }>();
const $emit = defineEmits<{ (e: 'update:model-value', v: boolean): void }>()
</script>

<template>
    <div v-if="modelValue" class="absolute right-0 z-40 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg"
        role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        <!-- Active: "bg-gray-100", Not Active: "" -->
        <div class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Your
            Profile</div>
        <div class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Settings
        </div>
        <div class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Sign out
        </div>
    </div>
    <OverlayVue v-if="closeOutside" :model-value="modelValue"
        @update:model-value="v => $emit('update:model-value', v)" />
</template>
