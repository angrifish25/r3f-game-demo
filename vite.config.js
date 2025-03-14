import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: './',
    plugins: [react()],
    // server: {
    //     open: true,
    //     proxy: {
    //     "/base": {
    //         target: "http://localhost:19000",
    //         changeOrigin: true,
    //     },
    //     },
    // },
})
