<script setup lang='ts'>
import { mdiMenu, mdiClose, mdiAccount } from '@mdi/js';
import { ref } from 'vue';

defineProps<{ sidebarMenu: boolean }>()
const $emit = defineEmits<{ (e: 'update:sidebarMenu', val: boolean): void }>()

const profileMenu = ref(false);
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
                            <a href="#"
                                class="bg-primary hover:bg-primary-low text-white px-3 py-2 rounded-md text-sm font-medium"
                                aria-current="page">Dashboard</a>

                            <a href="#"
                                class="text-gray-300 hover:bg-primary-low hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

                            <a href="#"
                                class="text-gray-300 hover:bg-primary-low hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                            <a href="#"
                                class="text-gray-300 hover:bg-primary-low hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    <!-- Profile dropdown -->
                    <div class="relative ml-3">
                        <div>
                            <button type="button"
                                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                :aria-expanded="profileMenu" aria-haspopup="menu"
                                @click.prevent="(profileMenu = !profileMenu)">
                                <span class="sr-only">Open profile menu</span>
                                <svg class="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" :d="mdiAccount" />
                                </svg>
                            </button>
                        </div>

                        <div :class="{ 'hidden': !profileMenu }"
                            class="absolute right-0 z-40 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg"
                            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <div class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Your
                                Profile</div>
                            <div class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Settings
                            </div>
                            <div class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">Sign out
                            </div>
                        </div>
                        <div v-if="profileMenu" class="fixed top-0 left-0 w-screen h-screen bg-transparent"
                            @click="profileMenu = !profileMenu">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>

