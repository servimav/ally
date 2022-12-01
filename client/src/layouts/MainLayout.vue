<script setup lang='ts'>
import { ref } from 'vue';
import { mdiAccount } from '@mdi/js'
import NavBar from './NavBar.vue';
import SidebarLeft from './SidebarLeft.vue';
import SidebarGroup from '@/components/layouts/SidebarGroup.vue';
import SidebarLink from '@/components/layouts/SidebarLink.vue';

const sidebar = ref(true);
</script>

<template>
    <div class="h-screen">
        <NavBar class="z-30" v-model:sidebar-menu="sidebar" />
        <!-- Navbar end -->
        <SidebarLeft v-model="sidebar">
            <SidebarGroup label="Label">
                <SidebarLink label="Hello" :icon="mdiAccount" />
            </SidebarGroup>
        </SidebarLeft>
    </div>
</template>
