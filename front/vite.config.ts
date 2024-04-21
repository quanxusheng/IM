import { defineConfig } from 'vite'
import { join } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': join(__dirname, 'src')
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => {
                    return path.replace(/^\/api/, '')
                }

            }
        }
    },

    plugins: [react()],
})
