import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './assets/css/style.css';
import { router } from './router';
import App from './App.vue';
import CardVue from '@/components/containers/Card.vue';
import BaseIconVue from './components/BaseIcon.vue';

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.component('Card', CardVue);
app.component('BaseIcon', BaseIconVue);

app.mount('#app');
