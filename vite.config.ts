import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react(), svgr()],
//   server: {
//     port: 3000,
//     proxy: {
//       '/api': {
//         target: 'https://devzone.blueboxonline.co.uk',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//         secure: false // В зависимости от того, используется ли самоподписанный сертификат
//       }
//     }
//   }
// })

//--------last-----
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  server: {
    port: 3000
  }
})
