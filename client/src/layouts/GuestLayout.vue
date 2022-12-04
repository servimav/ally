<script setup lang='ts'>
import { ref } from 'vue';
import { mdiAccount, mdiGithub, mdiApplication, mdiShare, mdiWeatherNight } from '@mdi/js';
import { share } from '@/helpers'
import NavBar from '@/components/layouts/NavBar.vue';
import SidebarLeft from '@/components/layouts/sidebar/SidebarLeft.vue';
import SidebarGroup from '@/components/layouts/sidebar/SidebarGroup.vue';
import SidebarLink from '@/components/layouts/sidebar/SidebarLink.vue';
import { ROUTE_NAME } from '@/router';

const sidebar = ref(false);

</script>

<template>
    <div>
        <NavBar class="z-30" v-model:sidebar-menu="sidebar" />
        <!-- Navbar end -->
        <SidebarLeft v-model="sidebar">
            <SidebarGroup>
                <SidebarLink label="Ingresar" :icon="mdiAccount" :to="{ name: ROUTE_NAME.AUTH }" />
                <SidebarLink label="GitHub" :icon="mdiGithub" />
                <SidebarLink label="Compartir" :icon="mdiShare" @click="share" />
            </SidebarGroup>

        </SidebarLeft>
        <div class="pt-16 lg:ml-64">
            <router-view />
        </div>
    </div>
</template>
