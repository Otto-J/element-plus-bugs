/* eslint-disable @typescript-eslint/no-var-requires */
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(path.dirname(""), "src"),
        "~": path.resolve(path.dirname(""), "src"),
      },
    },
    plugins: [
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
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/assets/styles/element.scss" as *;`,
      },
    },
  },
});
