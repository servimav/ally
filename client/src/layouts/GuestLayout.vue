<script setup lang='ts'>
import { ref, computed, onBeforeMount } from 'vue';
import { mdiAccount, mdiHelp, mdiHome, mdiShare, mdiInformation } from '@mdi/js';
import { share } from '@/helpers'
import NavBar from '@/components/layouts/NavBar.vue';
import SidebarLeft from '@/components/layouts/sidebar/SidebarLeft.vue';
import SidebarGroup from '@/components/layouts/sidebar/SidebarGroup.vue';
import SidebarLink from '@/components/layouts/sidebar/SidebarLink.vue';
import { ROUTE_NAME } from '@/router';
import { onBeforeRouteUpdate, useRouter } from 'vue-router';
import { useUserStore } from '@/store';

const User = useUserStore();
const $router = useRouter()

const isAuth = computed(() => User.isAuth)


const sidebar = ref(false);
onBeforeRouteUpdate(() => { sidebar.value = false });
onBeforeMount(() => { if (isAuth) void $router.push({ name: ROUTE_NAME.MAIN }) })

</script>

<template>
    <div>
        <NavBar class="z-30" v-model:sidebar-menu="sidebar" />
        <!-- Navbar end -->
        <SidebarLeft v-model="sidebar">
            <SidebarGroup>
                <SidebarLink label="Inicio" :icon="mdiHome" :to="{ name: ROUTE_NAME.GUEST_HOME }" />
                <SidebarLink label="Ingresar" :icon="mdiAccount" :to="{ name: ROUTE_NAME.MAIN }" />
                <SidebarLink label="Compartir" :icon="mdiShare" @click="share" />
                <SidebarLink label="Acerca de Ally" :icon="mdiInformation" :to="{ name: ROUTE_NAME.GUEST_ABOUT }" />
            </SidebarGroup>

        </SidebarLeft>
        <div class="pt-16 lg:ml-72">
            <router-view />
        </div>
    </div>
</template>
