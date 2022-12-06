<script lang="ts" setup>
import NotificationContainer from '@/components/containers/NotificationContainer.vue';
import { useNotify } from './helpers';
const { notifications } = useNotify();

</script>

<template>
    <router-view />
    <NotificationContainer :notifications="notifications" />
</template>
