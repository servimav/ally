<script setup lang='ts'>
import { useUserStore } from '@/store';
import { useNotify } from '@/helpers'
import { IUserRequestLogin, IUserResponseAuth } from '@/types';
import { ref } from 'vue';
import InputText from '../inputs/InputText.vue';

const User = useUserStore();
const $emit = defineEmits<{ (e: 'auth', val: IUserResponseAuth): void }>()

const form = ref<IUserRequestLogin>({
	email: '',
	password: ''
})
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */

async function onSubmit() {
	try {
		const resp = await User.login(form.value);
		$emit('auth', resp);
	} catch (error) {
		useNotify().axiosError(error);
	}
}
</script>

<template>
	<form>
		<div class="space-y-2">
			<InputText id-key="login-email" v-model="form.email" label="Email" type="email" required />
			<InputText id-key="login-password" v-model="form.password" label="Contraseña" type="password" required />
		</div>
		<div class="my-10">
			<button type="submit" @click.prevent="onSubmit" class="btn-primary">
				Login</button>
		</div>
	</form>

</template>
