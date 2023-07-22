/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#4E31AA",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
        },
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "10rem",
      },
    },
  },
  plugins: [],
};
