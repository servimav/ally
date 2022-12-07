<script lang="ts" setup>
import NotificationContainer from '@/components/containers/NotificationContainer.vue';
import { useNotify } from './helpers';
import { useUserStore } from '@/store';
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTE_NAME } from './router';

const { load, isAuth, getProfile } = useUserStore()
const { notifications } = useNotify();
const $router = useRouter();


onBeforeMount(async () => {
    load();
    if (isAuth) { getProfile(); void $router.push({ name: ROUTE_NAME.MAIN }); }
})

</script>

<template>
    <router-view />
    <NotificationContainer :notifications="notifications" />
</template>
