<script setup lang='ts'>
import { computed } from 'vue';
import { RouteLocationRaw, useRoute, useRouter } from 'vue-router';
import BaseIcon from '../../BaseIcon.vue';

const $router = useRouter();
const $route = useRoute();
const $props = defineProps<{ label?: string; to?: RouteLocationRaw, href?: string; icon?: string }>();

const active = computed(() => $props.to && $route == $props.to)

function goTo() {
    if ($props.to) void $router.push($props.to);
}
</script>

<template>
    <li class="cursor-pointer">
        <div @click="goTo" class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" :href="href">
            <span class="select-none mr-4" v-if="icon">
                <BaseIcon :path="icon" />
            </span>
            <span class="select-none" v-if="label">{{ label }}</span>
            <span class="select-none" v-else>
                <slot />
            </span>
        </div>
    </li>
</template>
