<script setup lang='ts'>
import { useUserStore } from '@/store';
import { useNotify } from '@/helpers'
import { IUserRequestRegister, IUserResponseAuth } from '@/types';
import { ref } from 'vue';

const User = useUserStore();
const $emit = defineEmits<{ (e: 'auth', val: IUserResponseAuth): void }>()


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
		$emit('auth', resp)
	} catch (error) {
		useNotify().axiosError(error);
	}
}
</script>

<template>
	<form>
		<div class="space-y-2">

			<InputText id-key="register-name" v-model="form.name" label="Nombre" />
			<InputText id-key="register-email" v-model="form.email" label="Email" type="email" />
			<InputText id-key="register-password" v-model="form.password" label="Contraseña" type="password" />
			<InputText id-key="register-password-confirmation" v-model="form.password_confirmation"
				label="Repita Contraseña" type="password" />

		</div>
		<div class="my-10">
			<button type="submit" @click.prevent="onSubmit" class="btn-primary">
				Crear Cuenta</button>
		</div>
	</form>

</template>
