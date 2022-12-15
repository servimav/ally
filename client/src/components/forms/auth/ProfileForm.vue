<script setup lang='ts'>
import { useUserStore } from '@/store';
import { useNotify } from '@/helpers'
import { IUserRequestUpdate, IUserResponseAuth } from '@/types';
import { onBeforeMount, ref, computed } from 'vue';
import { serialize } from 'object-to-formdata';
import InputImage from '@/components/forms/inputs/InputImage.vue';

const User = useUserStore();
const $emit = defineEmits<{ (e: 'complete', val: IUserResponseAuth): void }>();
const { axiosError, success, error } = useNotify();

const form = ref<IUserRequestUpdate>({
    email: '',
    avatar: undefined,
    password: '',
    name: '',
    nick: '',
    password_confirmation: ''
});

const profile = computed(() => User.profile);

/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */
function onNickUpdate(nick: string) {
    let s = nick.replace(' ', '-').toLocaleLowerCase();
    form.value.nick = s;
}
async function onSubmit() {
    try {
        if (form.value.password !== form.value.password_confirmation) {
            error('La contraseña no coincide');
        } else {
            if (form.value.nick) {
                const lastIndex = form.value.nick.length - 1;
                if (lastIndex && form.value.nick[lastIndex] === '-')
                    form.value.nick = form.value.nick.slice(0, lastIndex)
            }

            const formData = serialize(form.value, {
                nullsAsUndefineds: true,
                booleansAsIntegers: true,
            });
            console.log({ formData: form.value.nick })
            const resp = await User.update(formData as IUserRequestUpdate);
            success('Perfil actualizado');
            $emit('complete', resp);
        }
    } catch (err) {
        axiosError(err);
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
            avatar: undefined
        }
    }
})
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div class="space-y-2">

            <InputImage @update:model-value="v => form.avatar = v" />
            <InputText id-key="profile-name" v-model="form.name" label="Nombre" required />
            <InputText id-key="profile-nick" :model-value="form.nick" @update:modelValue="onNickUpdate" label="Nick"
                required />
            <InputText id-key="profile-email" v-model="form.email" label="Email" type="email" required />
            <InputText id-key="profile-password" v-model="form.password" label="Cambiar Contraseña" type="password" />
            <InputText id-key="profile-password-confirmation" v-if="form.password" v-model="form.password_confirmation"
                label="Repita Contraseña" type="password" />

        </div>
        <div class="my-10">
            <button type="submit" class="btn-primary">Guardar</button>
        </div>
    </form>

</template>
