import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {ViteSSGOptions} from "vite-ssg";

const ssgOption:ViteSSGOptions = {
  dirStyle:"nested",

}

// https://vitejs.dev/config/
export default defineConfig({
  build:{outDir:'./dist',manifest:true},

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssgOptions: ssgOption,
})
