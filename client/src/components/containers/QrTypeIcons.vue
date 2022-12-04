<script setup lang='ts'>
import CardIcon from '@/components/widgets/CardIcon.vue';
import { IIconLabelLink } from '@/types';

defineProps<{ types: IIconLabelLink[] }>()

</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
        <CardIcon :icon="(t.icon as string)" class="cursor-pointer" :label="t.label" v-for="(t ,key) in types"
            :key="`qr-${key}`" />
    </div>
</template>
