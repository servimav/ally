<script setup lang='ts'>
import { useUserStore } from '@/store';
import { useNotify } from '@/helpers'
import { IUserRequestRegister, IUserResponseAuth } from '@/types';
import { onBeforeMount, ref, computed } from 'vue';

const User = useUserStore();
const $emit = defineEmits<{ (e: 'complete', val: IUserResponseAuth): void }>();
const { axiosError, success } = useNotify();

const form = ref<IUserRequestRegister>({
    email: '',
    password: '',
    name: '',
    nick: '',
    password_confirmation: ''
});

const profile = computed(() => User.profile)

/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */

async function onSubmit() {
    try {
        const resp = await User.update(form.value);
        success('Perfil actualizado');
        $emit('complete', resp)
    } catch (error) {
        axiosError(error);
    }
}

onBeforeMount(async () => {
    const resp = await User.getProfile();
    if (profile.value) {
        form.value = {
            email: profile.value.email,
            name: profile.value.name,
            nick: profile.value.nick,
            password: '',
            password_confirmation: '',
        }
    }
})
</script>

<template>
    <form>
        <div class="space-y-2">

            <InputText id-key="profile-name" v-model="form.name" label="Nombre" required />
            <InputText id-key="profile-nick" v-model="form.nick" label="Nick" required />
            <InputText id-key="profile-email" v-model="form.email" label="Email" type="email" required />
            <InputText id-key="profile-password" v-model="form.password" label="Contraseña" type="password" />
            <InputText id-key="profile-password-confirmation" v-model="form.password_confirmation"
                label="Repita Contraseña" type="password" />

        </div>
        <div class="my-10">
            <button type="submit" @click.prevent="onSubmit" class="btn-primary">
                Guardar</button>
        </div>
    </form>

</template>
