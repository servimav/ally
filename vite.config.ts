import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: resolve(__dirname, 'client', 'public'),
    plugins: [vue()],
    resolve: {
        alias: {
            // @ts-ignore
            '@': fileURLToPath(new URL('client/src', import.meta.url)),
        }
    },
    root: 'client',
    build: {
        outDir: '../public/ui/',
        emptyOutDir: true,
    },
    // base: '/ui/'
})
