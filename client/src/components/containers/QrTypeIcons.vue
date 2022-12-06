<script setup lang='ts'>
import CardIcon from '@/components/widgets/CardIcon.vue';
import { ROUTE_NAME } from '@/router';
import { IIconLabelLink } from '@/types';
import { RouteLocationNamedRaw, useRouter } from 'vue-router';

defineProps<{ types: IIconLabelLink[] }>()
const $router = useRouter();

function goToGenerate(link?: RouteLocationNamedRaw) {
    if (link)
        void $router.push(link)
}

</script>

<template>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        <CardIcon :icon="(t.icon as string)" class="cursor-pointer" :label="t.label" v-for="(t ,key) in types"
            :key="`qr-${key}`" @click="goToGenerate(t.link)" />
    </div>
</template>
