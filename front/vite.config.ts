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
    plugins: [react()],
})
