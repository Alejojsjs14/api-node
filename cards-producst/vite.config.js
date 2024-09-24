import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/dev/api/products' : {
        target: 'https://kb5jdl3lek.execute-api.us-east-1.amazonaws.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
