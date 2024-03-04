import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      // 自动导入 ElementPlus 组件
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    // ↓路径别名
    alias: {
      '@': resolve(__dirname, '.', 'src')
    }
  },
  // 引用全局 scss 变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "@/styles/index.scss";
          `
      }
    }
  },
  // 本地代理调试
  server: {
    host: '0.0.0.0' /* 设置为0.0.0.0则所有的地址均能访问 */,
    port: 3000 /* 设置端口 */,
    proxy: {
      '/api': {
        target: 'http://101.132.251.60:8899', // 后台服务器地址
        changeOrigin: true /* 允许跨域 */,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
