<script setup lang='ts'>
import { onBeforeMount, ref } from 'vue';
import { mdiAccount, mdiGithub, mdiApplication, mdiShare, mdiWeatherNight, mdiHome } from '@mdi/js';
import { BASIC_TYPES, useTheme, share } from '@/helpers'
import NavBar from '@/components/layouts/NavBar.vue';
import SidebarLeft from '@/components/layouts/sidebar/SidebarLeft.vue';
import SidebarGroup from '@/components/layouts/sidebar/SidebarGroup.vue';
import SidebarLink from '@/components/layouts/sidebar/SidebarLink.vue';
import { ROUTE_NAME } from '@/router';
import { onBeforeRouteUpdate } from 'vue-router';

const sidebar = ref(false);

function toggleDark() {
    useTheme().toggleDark();
}

onBeforeMount(() => {
    if (useTheme().is() === 'dark')
        useTheme().setDark();
});
onBeforeRouteUpdate(() => { sidebar.value = false })

</script>

<template>
    <div>
        <NavBar class="z-30" v-model:sidebar-menu="sidebar" />
        <!-- Navbar end -->
        <SidebarLeft v-model="sidebar">
            <SidebarGroup label="Ajustes">
                <SidebarLink label="Inicio" :icon="mdiHome" :to="{ name: ROUTE_NAME.MAIN }" />
                <SidebarLink label="Cuenta" :icon="mdiAccount" :to="{ name: ROUTE_NAME.MAIN_PROFILE }" />
                <SidebarLink label="Mis QR" :icon="mdiApplication" :to="{ name: ROUTE_NAME.MAIN_MYQR }" />
                <SidebarLink label="GitHub" :icon="mdiGithub" />
                <SidebarLink label="Modo Oscuro" :icon="mdiWeatherNight" @click="toggleDark" />
                <SidebarLink label="Compartir" :icon="mdiShare" @click="share" />
            </SidebarGroup>
            <SidebarGroup label="Crear Qr">
                <SidebarLink :label="t.label" v-for="(t, key) in BASIC_TYPES" :key="`sidebar-type-${key}`"
                    :icon="t.icon" />
            </SidebarGroup>
        </SidebarLeft>
        <div class="pt-16 lg:ml-64">
            <router-view />
        </div>
    </div>
</template>
