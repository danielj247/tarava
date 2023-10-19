import path from "path";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    path.join(path.dirname(require.resolve("@tarava/vue")), "**/*.js"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
