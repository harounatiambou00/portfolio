/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        kanit: ["kanit", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        kalnia: ["Kalnia", "serif"],
        josefin: ["Josefin Slab", "serif"],
      },
    },
  },
  plugins: [],
};
