<script lang="ts" setup>
import NotificationContainer from '@/components/containers/NotificationContainer.vue';
import { useNotify } from './helpers';
import { useUserStore } from '@/store';
import { onBeforeMount } from 'vue';

const { load, isAuth, getProfile } = useUserStore()
const { notifications } = useNotify();

onBeforeMount(async () => {
    if (!isAuth) { load(); await getProfile(); }
})

</script>

<template>
    <router-view />
    <NotificationContainer :notifications="notifications" />
</template>
