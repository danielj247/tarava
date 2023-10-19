import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5151,
  },

  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },

  plugins: [vue()],

  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "@tarava/vue",
      fileName: "index",
    },
  },
});
