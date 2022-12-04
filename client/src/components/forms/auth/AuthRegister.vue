<script setup lang='ts'>
import { useUserStore } from '@/store';
import { useNotification } from '@/helpers'
import { IUserRequestRegister } from '@/types';
import { ref } from 'vue';
import InputText from '../inputs/InputText.vue';

const User = useUserStore();

const form = ref<IUserRequestRegister>({
    email: '',
    password: '',
    name: '',
    password_confirmation: ''
})
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */

async function onSubmit() {
    try {
        const resp = await User.register(form.value);
    } catch (error) {
        useNotification().axiosError(error);
    }
}
</script>

<template>
    <form>
        <div class="space-y-2">

            <InputText v-model="form.name" label="Nombre" />
            <InputText v-model="form.email" label="Email" type="email" />
            <InputText v-model="form.password" label="Contraseña" type="password" />
            <InputText v-model="form.password_confirmation" label="Repita Contraseña" type="password" />

        </div>
        <div class="my-10">
            <button type="submit" @click.prevent="onSubmit"
                class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90">
                Sign In</button>
        </div>
    </form>

</template>
