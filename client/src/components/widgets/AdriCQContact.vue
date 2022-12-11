<script setup lang='ts'>
import { mdiEmail, mdiTwitter, mdiSend, mdiFacebook, mdiGithub } from '@mdi/js';

const links = [{
    icon: mdiTwitter,
    label: 'Twitter',
    link: 'https://twitter.com/AdriCQ95'
}, {
    icon: mdiGithub,
    label: 'Github',
    link: 'https://github.com/AdriCQ'
}, {
    icon: mdiSend,
    label: 'Telegram',
    link: 'https://t.me/AdriCQ'
}, {
    icon: mdiFacebook,
    label: 'Facebook',
    link: 'https://fb.me/servimavsrl'
}, {
    icon: mdiEmail,
    label: 'Email',
    link: 'mailto:adriancapote95@gmail.com'
}]
</script>

<template>
    <div class="text-center">
        <div class="p-2 space-x-1 mx-auto">
            <a :href="i.link" v-for="(i, k) in links" :key="`link-${k}`" class="inline-block text-center"
                target="_blank">
                <BaseIcon :path="i.icon" size="1.5rem" class="fill-primary-low hover:fill-primary dark:fill-white" />
            </a>
        </div>
    </div>
</template>
