<script setup lang='ts'>
import { useNotify } from '@/helpers';
import { useService } from '@/services'
import { IProduct, IProductForm } from '@/types';
import { ref, onBeforeMount } from 'vue';
import { serialize } from 'object-to-formdata';
import InputImage from './inputs/InputImage.vue';
import InputTextarea from './inputs/InputTextarea.vue';

const $props = defineProps<{ update?: IProduct }>();
const $emits = defineEmits<{ (e: 'completed'): void, (e: 'cancel'): void }>();
const { product } = useService()

const { error, success, axiosError } = useNotify()

const form = ref<IProductForm>({
    description: '', image: undefined,
    price: 0, title: '',
})

async function onSubmit(remove = false) {
    try {
        const formData = serialize(form.value, {
            nullsAsUndefineds: true,
            booleansAsIntegers: true,
        });
        if ($props.update) {
            if (remove) {
                await product.remove($props.update.id);
                success('Producto Eliminado');
            }
            else {
                await product.update($props.update.id, (formData as Partial<IProductForm>));

                success('Producto Actualizado');
            }
            $emits('completed');

        } else {
            if (remove) {
                $emits('cancel');
            } else {
                await product.store((formData as unknown as IProductForm));
                success('Producto Guardado');
                $emits('completed');
            }
        }
    } catch (err) {
        axiosError(err)
    }
    form.value.image = undefined;
}

function handleImage(params: File | null) {
    if (params) {
        const size = params.size;
        if (size > 1000000)
            error('La imagen debe ser menor de 1Mb')
        else form.value.image = params;
    }
}

onBeforeMount(() => {
    if ($props.update) {
        form.value = {
            description: $props.update?.description,
            price: $props.update?.price,
            title: $props.update?.title,
        }
    }
})

</script>

<template>
    <form @submit.prevent="onSubmit(false)" autocomplete="off">
        <div class="space-y-2">
            <InputImage @update:model-value="handleImage" :img="update?.image" />
            <InputText id-key="input-product-title" label="Nombre" v-model="form.title" type="text" placeholder="Nombre"
                required />
            <InputTextarea id-key="input-product-description" label="Detalles" v-model="form.description"
                placeholder="Detalles" required />
            <InputText id-key="input-product-number" label="Precio" v-model="form.price" type="price" required />
            <div class="my-10">
                <button type="submit" class="btn-primary">Guardar</button>
                <button class="btn bg-error text-white mt-2" @click.prevent="onSubmit(true)">{{ update ? 'Eliminar' :
                        'Cancelar'
                }}</button>
            </div>
        </div>
    </form>
</template>
