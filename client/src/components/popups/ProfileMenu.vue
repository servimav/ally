<script setup lang='ts'>
import OverlayVue from '@/components/containers/Overlay.vue';
import { useUserStore } from '@/store';
import { ROUTE_NAME } from '@/router';
import { useRouter } from 'vue-router'
import { computed } from 'vue';

defineProps<{ modelValue: boolean, closeOutside?: boolean }>();
const $emit = defineEmits<{ (e: 'update:model-value', v: boolean): void }>();
const $router = useRouter()

const User = useUserStore();

function logout() { User.logout(); void $router.push({ name: ROUTE_NAME.GUEST_HOME }) }
</script>

<template>
    <div v-if="modelValue" class="absolute right-0 z-40 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg"
        role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
        <!-- Active: "bg-gray-100", Not Active: "" -->
        <div class="block hover:bg-slate-200 cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem"
            tabindex="-1" @click="() => $router.push({ name: ROUTE_NAME.MAIN_PROFILE })">Perfil</div>
        <div class="block hover:bg-slate-200 cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem"
            tabindex="-1" @click="logout">
            Salir
        </div>
    </div>
    <OverlayVue v-if="closeOutside" :model-value="modelValue"
        @update:model-value="v => $emit('update:model-value', v)" />
</template>
