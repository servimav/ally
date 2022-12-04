<script setup lang='ts'>
import { useUserStore } from '@/store';
import { useNotification } from '@/helpers'
import { IUserRequestLogin } from '@/types';
import { ref } from 'vue';

const User = useUserStore();

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
    } catch (error) {
        useNotification().axiosError(error);
    }
}
</script>

<template>
    <form>
        <div class="mb-6">
            <div class="text-gray-200 py-2 text-justify w-full">
                <label for="#login-email">Email</label>
            </div>
            <input id="login-email" type="email" placeholder="Email" v-model="form.email"
                class="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
        </div>
        <div class="mb-6">
            <div class="text-gray-200 py-2 text-justify w-full">
                <label for="#login-password">Password</label>
            </div>
            <input id="login-password" type="password" placeholder="Password" v-model="form.password"
                class="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none" />
        </div>
        <div class="mb-10">
            <button type="submit" @click.prevent="onSubmit"
                class="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90">
                Sign In</button>
        </div>
    </form>

</template>
