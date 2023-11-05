import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

export default defineConfig({
  base: "/", //设置项目的根目录
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: "less" })],
      // 如果需要自定义主题色，则需要配置importStyle: 'less',并安装less: npm install less --save-dev
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: 'true; @import "@/style/theme.less"',
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  server: {
    port: 5100,
  },
});
