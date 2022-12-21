<script setup lang='ts'>
import { useNotify } from '@/helpers';
import { useService } from '@/services';
import type { IProduct, IUserProfile } from '@/types';
import { onBeforeMount, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { ROUTE_NAME } from '@/router';
import ProductWidget from '@/components/widgets/ProductWidget.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const $route = useRoute();
const { error } = useNotify();
const { product } = useService();

const user = ref<IUserProfile>();
const products = ref<IProduct[]>([])
const selected = ref<IProduct>();

const sm = useBreakpoints(breakpointsTailwind).sm;


function select(p: IProduct) {
    selected.value = p;
}

async function loadData(nick: string) {
    try {
        const resp = await product.byNick(nick);
        user.value = resp.data.user;
        products.value = resp.data.products;

    } catch (err) {
        error('No hay enlaces para mostrar')
    }
}

onBeforeMount(async () => {
    const nick = $route.params.nick.toString() ?? '';
    await loadData(nick);
})
</script>

<template>
    <div class="p-4 min-h-screen bg-primary-low relative">

        <div class="p-2">
            <div class="p-2 text-slate-300 mb-4 text-center shadow-md">
                <RouterLink :to="{ name: ROUTE_NAME.MAIN_CATALOG }">
                    Crea tu Catálogo
                </RouterLink>
            </div>
            <!-- User info -->
            <div class="w-36 mx-auto rounded-full bg-white">
                <img :src="user?.avatar" :title="user?.name" class="w-full rounded-full object-cover" />
            </div>
            <div class="mt-2 text-white text-2xl text-center">{{ user?.name }}</div>
            <!-- / User info -->
            <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                <ProductWidget :full="sm" :product="p" v-for="(p, k) in products" :key="`prod-${p.id}-${k}`"
                    @click="select(p)" />
            </div>
        </div>

        <!-- Popup -->
        <div class="absolute top-0 left-0 h-screen w-screen" @click="selected = undefined" v-if="selected && !sm"></div>
        <div class="absolute top-0 left-0 p-4 sm:px-16 md:px-48 lg:px-64 xl:px-96 w-screen" v-if="selected && !sm">
            <Card class="text-center w-full z-20">
                <ProductWidget :product="selected" full />
            </Card>
        </div>
        <!-- Popup -->
    </div>
</template>
