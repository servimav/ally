<script setup lang='ts'>
import { useNotify } from '@/helpers';
import { useService } from '@/services';
import { usePaymentStore } from '@/store';
import type { IUserPayment, IUserPaymentData } from '@/types';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import QrCode from '@/components/widgets/QrCode.vue';
import { mdiClose, mdiContentCopy } from '@mdi/js';
import { useClipboard } from '@vueuse/core';

const $route = useRoute();
const { axiosError, success, error } = useNotify()
const { payment } = useService()
const { list, getById } = usePaymentStore()

const userPayment = ref<IUserPayment>();
const selected = ref<IUserPaymentData>();

const { copy, copied, isSupported } = useClipboard({ source: selected.value?.data });

/**
 * copyData
 */
async function copyData() {
    if (isSupported.value) {
        await copy(selected.value?.data);
        if (copied.value) {
            success('Copiado correctamente');
        }
    } else {
        error('Su dispositivo no soporta la función')
    }
}


function select(p: IUserPaymentData) {
    selected.value = p;
}

async function loadData(nick: string) {
    try {
        const resp = await payment.byNick(nick);
        userPayment.value = resp.data;
    } catch (error) {
        axiosError(error)
    }
}

onBeforeMount(async () => {
    const nick = $route.params.nick.toString() ?? '';
    await list();
    await loadData(nick);
})
</script>

<template>
    <div class="p-4 sm:px-16 md:p-24 lg:px-32 min-h-screen bg-primary-low relative">
        <div class="p-2 sm:p-8">
            <!-- User info -->
            <div class="w-36 mx-auto rounded-full bg-white">
                <img src="/vite.svg" class="w-full" />
            </div>
            <div class="mt-2 text-white text-2xl text-center">{{ userPayment?.user?.name }}</div>
            <!-- / User info -->
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                <li v-for="(m, k) in userPayment?.methods" :key="`${m.payment_id}-${k}`"
                    class="flex items-center border shadow-lg p-2 bg-slate-200 rounded-md cursor-pointer"
                    @click="select(m)">
                    <div class="w-8">
                        <img :src="getById(m.payment_id)?.image" />
                    </div>
                    <div class="pl-4">{{ m.name }}</div>
                </li>
            </ul>
        </div>

        <!-- Popup -->
        <div class="absolute top-0 left-0 h-screen w-screen" @click="selected = undefined" v-if="selected"></div>
        <div class="absolute top-0 left-0 p-4 sm:px-16 md:px-48 lg:px-64 xl:px-96 w-screen" v-if="selected">
            <Card class="text-center w-full z-20">
                <div class="float-right ml-2 cursor-pointer w-4 h-4" @click.prevent="selected = undefined">
                    <BaseIcon :path="mdiClose" size="16" />
                </div>
                <QrCode :data="selected.data" :scale="12" downloadable class="mt-4" />
                <div class="flex items-center border shadow-lg p-2 rounded-md">
                    <div class="w-8">
                        <img :src="getById(selected.payment_id)?.image" />
                    </div>
                    <div class="pl-4">{{ selected.name }}</div>
                </div>

                <div class="mt-2 p-2 bg-yellow-300">
                    <span class="float-right ml-2 cursor-pointer" @click="copyData">
                        <BaseIcon :path="mdiContentCopy" size="16" />
                    </span>
                    <span>
                        {{ selected.data }}
                    </span>
                </div>
            </Card>
        </div>
        <!-- Popup -->

    </div>
</template>
