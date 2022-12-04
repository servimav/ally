<script setup lang='ts'>
import AuthLogin from '@/components/forms/auth/AuthLogin.vue';
import AuthRegister from '@/components/forms/auth/AuthRegister.vue';
import SocialAuth from '@/components/forms/auth/SocialAuth.vue';
import { ref } from 'vue';

const login = ref(true);
</script>

<template>
    <div class="bg-primary-low sm:bg-white min-h-screen pt-10 sm:py-none">
        <div class="container mx-auto">
            <div class="flex flex-wrap">
                <div class="w-full px-4">
                    <div
                        class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-primary-low sm:py-10 px-10 text-center sm:px-12 md:px-[60px]">
                        <div class="mb-10 text-center md:mb-16">
                            <a href="javascript:void(0)" class="mx-auto inline-block max-w-[160px]">
                                <img src="/vite.svg" alt="logo" />
                            </a>
                        </div>

                        <AuthLogin v-if="login" />
                        <AuthRegister v-else />


                        <SocialAuth />

                        <a href="javascript:void(0)"
                            class="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline">
                            Forget Password?
                        </a>
                        <p class="text-base text-[#adadad]">
                            Not a member yet?
                            <a href="javascript:void(0)" @click="login = !login" class="text-white hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ====== Forms Section End -->

</template>

