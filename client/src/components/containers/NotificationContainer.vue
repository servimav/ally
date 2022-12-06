<script setup lang='ts'>
import AlertWidget from '@/components/widgets/AlertWidget.vue'
import { INotification } from '@/helpers';
const $props = defineProps<{ notifications: INotification[] }>();
</script>

<template>
    <div class="fixed bottom-0 right-0 w-full sm:w-1/2 md:w-5/12 lg:w-1/3 xl:w-1/4 p-2 z-40 space-y-2">
        <AlertWidget class="toast" :notification="n" v-for="(n, key) in notifications" :key="`alert-${key}`" />
    </div>
</template>


<style scoped>
.toast {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 1s, fadeout 0.5s 2.5s;
}

@keyframes fadein {
    from {
        transform: translateY(50px);
        opacity: 0;
    }

    to {
        transform: translateY(0px);
        opacity: 1;
    }
}
</style>
