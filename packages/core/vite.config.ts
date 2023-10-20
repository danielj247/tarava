import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

module.exports = defineConfig({
  plugins: [
    dts({
      exclude: ["vite.config.ts"],
    }),
  ],

  build: {
    sourcemap: true,

    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "@tarava/core",
      fileName: "index",
    },
  },

  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
