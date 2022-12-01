import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: routes, // short for `routes: routes`
})

export * from './names';
