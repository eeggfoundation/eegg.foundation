import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1024,
        rollupOptions: {
            output: {
                manualChunks: {
                    web3: ['ethers', 'wagmi']
                },
            },
        },
    },
    define: {
        global: 'globalThis',
    },
    resolve: {
        alias: {
            process: 'process/browser',
            util: 'util',
        },
    },
    plugins: [
        react({
            jsxRuntime: 'classic',
        }),
    ],
})
