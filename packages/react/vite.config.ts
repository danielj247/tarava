import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["vite.config.ts"],
    }),
  ],

  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },

  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "@tarava/react",
      fileName: "index",
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
