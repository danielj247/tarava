import path from "path";

console.log("============================");
console.log("============================");
console.log("============================");
console.log(
  path.join(path.dirname(require.resolve("@tarava/react")), "index.js"),
);
console.log("============================");
console.log("============================");
console.log("============================");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    path.join(path.dirname(require.resolve("@tarava/react")), "index.js"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
