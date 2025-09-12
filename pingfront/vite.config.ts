import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    proxy: {
      '/api':{
        target: 'http://localhost:8080',
        rewrite: (path) => path.replace(/^\/api/, ""),
        changeOrigin: true
      }
    }
  }
  // server: {
  //   host: "172.20.20.68",
  //   port: 80,
  //   strictPort: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://172.20.20.68:8080',
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //       changeOrigin: true
  //     }
  //   }
  // }
})
