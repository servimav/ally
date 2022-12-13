<script setup lang='ts'>
import AuthLogin from '@/components/forms/auth/AuthLogin.vue';
import AuthRegister from '@/components/forms/auth/AuthRegister.vue';
// import SocialAuth from '@/components/forms/auth/SocialAuth.vue';
import { ROUTE_NAME } from '@/router';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const $router = useRouter();

const login = ref(true);

function onAuth() {
    void $router.push({ name: ROUTE_NAME.MAIN })
}
</script>

<template>
    <div class="bg-primary-low min-h-screen pt-10 sm:py-none">
        <div class="container mx-auto">
            <div class="flex flex-wrap">
                <div class="w-full px-2">
                    <div
                        class="relative mx-auto max-w-sm overflow-hidden rounded-lg p-10 sm:py-10 text-center sm:px-12 md:px-[60px]">
                        <div class="text-center md:mb-16">
                            <a href="javascript:void(0)" class="mx-auto inline-block max-w-[72px]">
                                <img src="/vite.svg" class="w-full" alt="logo" />
                            </a>
                        </div>

                        <AuthLogin v-if="login" @auth="onAuth" />
                        <AuthRegister v-else @auth="onAuth" />


                        <!-- <SocialAuth /> -->

                        <!-- <a href="javascript:void(0)"
                            class="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline">
                            ¿Olvidaste la Contraseña?
                        </a> -->
                        <p class="text-base text-[#adadad]">
                            <a href="javascript:void(0)" @click="login = !login" class="text-white hover:underline">
                                {{ login ? 'Crear Cuenta' : 'Ya tengo cuenta' }}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ====== Forms Section End -->

</template>

