<script setup lang='ts'>
import { mdiMenu, mdiClose, mdiAccount, mdiGithub } from '@mdi/js';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store';
import { ROUTE_NAME } from '@/router';
import ProfileMenu from '@/components/popups/ProfileMenu.vue';

defineProps<{ sidebarMenu: boolean }>()
const $emit = defineEmits<{ (e: 'update:sidebarMenu', val: boolean): void }>()
const $router = useRouter();
const User = useUserStore();
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const profileMenu = ref(false);

function profileClick() {
    if (User.api_token) {
        profileMenu.value = !profileMenu.value;
    } else {
        void $router.push({ name: ROUTE_NAME.AUTH })
    }
}
</script>

<template>
    <nav class="bg-primary absolute top-0 w-screen">
        <div class="mx-auto max-w-7xl px-2 sm:px-6">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
                    <!-- Mobile menu button-->
                    <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                        @click="$emit('update:sidebarMenu', !sidebarMenu)" aria-controls="mobile-menu"
                        aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
                        <svg class="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" :d="mdiMenu" />
                        </svg>
                        <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" :d="mdiClose" />
                        </svg>
                    </button>
                </div>


                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="block h-8 w-auto sm:hidden" src="/vite.svg" alt="Ally Logo">

                        <img class="hidden h-8 w-auto lg:block" src="/vite.svg" alt="Ally Logo">
                    </div>
                    <div class="hidden sm:ml-8 sm:block">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <RouterLink :to="{ name: ROUTE_NAME.MAIN_MYQR }"
                                class="bg-primary hover:bg-primary-low text-white px-3 py-2 rounded-md text-sm font-medium"
                                aria-current="page">QR</RouterLink>

                            <RouterLink :to="{ name: ROUTE_NAME.MAIN_PAYMENT }"
                                class="text-gray-300 hover:bg-primary-low hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Pagos</RouterLink>

                            <RouterLink :to="{ name: ROUTE_NAME.MAIN_REFERAL }"
                                class="text-gray-300 hover:bg-primary-low hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Referidos</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div class="hidden md:block">
                        <button type="button"
                            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                            <span class="sr-only">Github</span>
                            <svg class="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" :d="mdiGithub" />
                            </svg>
                        </button>
                    </div>
                    <!-- Profile dropdown -->
                    <div class="relative ml-3">

                        <div>
                            <button type="button"
                                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                :aria-expanded="profileMenu" aria-haspopup="menu" @click.prevent="profileClick">
                                <span class="sr-only">Open profile menu</span>
                                <svg class="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" :d="mdiAccount" />
                                </svg>
                            </button>
                        </div>

                        <ProfileMenu v-model="profileMenu" close-outside />

                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>

