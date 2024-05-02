import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      vue(),
      // basicSsl({
      //   /** name of certification */
      //   name: 'test',
      //   /** custom trust domains */
      //   domains: ['jamesky98.zapto.org'],
      //   /** custom certification directory */
      //   certDir: './cert'
      // })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    define: { "process.env": {} },
    server: {
      // https: {
      //   key: './cert/cloudflare.key',
      //   cert: './cert/cloudflare.cert'
      // },
      host: "0.0.0.0",
      // host: "host.docker.internal",
    },
  }
})
