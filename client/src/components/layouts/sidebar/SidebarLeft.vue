<script setup lang='ts'>
import OverlayVue from '@/components/containers/Overlay.vue'
defineProps<{ modelValue: boolean }>()
defineEmits<{ (e: 'update:model-value', v: boolean): void }>();
</script>

<template>
    <div class="z-20 navbar-menu relative ">
        <nav :class="{ 'show': modelValue }"
            class="pt-[6rem] lg:translate-x-0 sidebar h-screen fixed left-0 top-0 flex w-64 -translate-x-full flex-col overflow-y-auto bg-primary-low dark:bg-primary pb-8 sm:max-w-sm">
            <slot></slot>
        </nav>
    </div>
    <!-- <div class="h-screen bg-transparent sm:hidden" v-if="modelValue" @click="$emit('update:model-value', false)"></div> -->
    <OverlayVue :model-value="modelValue" @update:model-value="v => $emit('update:model-value', v)" />
    <div class="mx-auto lg:ml-80"></div>
</template>


<style scoped>
ul.breadcrumb li+li::before {
    content: "\276F";
    padding-left: 8px;
    padding-right: 4px;
    color: inherit;
}

ul.breadcrumb li span {
    opacity: 60%;
}

.sidebar {
    -webkit-transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
    transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
}

.show {
    transform: translateX(0) !important;
}

.sidebar ul li a.active {
    background: #1f2937;
    background-color: #1f2937;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    visibility: hidden;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #374151;
    visibility: hidden;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #374151;
    visibility: hidden;
}
</style>
