<script setup lang='ts'>
import ProductForm from '@/components/forms/ProductForm.vue';
import MyLink from '@/components/widgets/MyLink.vue';
import ProductWidget from '@/components/widgets/ProductWidget.vue';
import { useNotify } from '@/helpers';
import { useService } from '@/services';
import { IProduct } from '@/types';
import { ref, onBeforeMount } from 'vue';

const { product } = useService();
const { axiosError } = useNotify()
const form = ref(false);
const products = ref<IProduct[]>([])
const selected = ref<IProduct>();

function select(p: IProduct) { selected.value = p; form.value = true; }

async function loadData() {
    selected.value = undefined;
    form.value = false;
    try {
        const resp = await product.index();
        products.value = resp.data;
    } catch (error) {
        axiosError(error);
    }
}

onBeforeMount(async () => {
    await loadData();
})
</script>

<template>
    <div class="p-2">
        <MyLink type="catalog" class="mb-2" />

        <Card class="p-2 max-w-md" v-if="form">
            <ProductForm :update="selected" @completed="loadData" @cancel="loadData" />
        </Card>
        <template v-else>
            <button class="btn-primary-low dark:bg-primary dark:text-slate-100 dark:border-primary-low"
                @click.prevent="() => { form = true }">Añadir Oferta</button>

            <div class="mt-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                <ProductWidget :product="p" v-for="(p, k) in products" :key="`prod-${p.id}-${k}`" @click="select(p)" />
            </div>
        </template>

    </div>
</template>
