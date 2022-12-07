<script setup lang='ts'>
import CardIcon from '@/components/widgets/CardIcon.vue';
import { IIconWidget } from '@/helpers';
import { ROUTE_NAME } from '@/router';
import { IQrType } from '@/types';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store';

defineProps<{ types: IIconWidget[] }>();
const $router = useRouter();
const { isAuth } = useUserStore();

function goToGenerate(type?: IQrType) {
    if (isAuth)
        void $router.push({ name: ROUTE_NAME.MAIN_GENERATE, params: { type } })
    else
        void $router.push({ name: ROUTE_NAME.QR_GENERATE, params: { type } })

}

</script>

<template>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        <CardIcon :icon="(t.icon as string)" class="cursor-pointer" :label="t.label" v-for="(t ,key) in types"
            :key="`qr-${key}`" @click="goToGenerate(t.type)" />
    </div>
</template>
