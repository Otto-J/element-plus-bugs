import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
          directives: true,
          version: "1.2.0-beta.1",
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
      "~/": new URL("./src/", import.meta.url).pathname,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/assets/element.scss" as *;`,
      },
    },
  },
});
