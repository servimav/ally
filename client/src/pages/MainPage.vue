<script setup lang='ts'>
import QrTypeIcons from '@/components/containers/QrTypeIcons.vue';
import { BASIC_TYPES } from '@/helpers/const'
</script>

<template>
    <div class="p-2 space-y-2">
        <QrTypeIcons :types="BASIC_TYPES" />
    </div>
</template>
