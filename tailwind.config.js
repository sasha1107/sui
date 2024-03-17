/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lib/components/**/*.{jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "375px",
    },
    colors: {
      primary: "#04C09E",
    },
  },
  plugins: [],
};
