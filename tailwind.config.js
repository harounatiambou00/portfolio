/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        playfair: ["Playfair Display", "serif"],
        kalnia: ["Kalnia", "serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        light: {
          bgColor: {
            main: "#ffffff",
          },
          textColor: {
            light: "#4b5563",
            main: "#374151",
          },
          primary: {
            main: "#023047",
          },
          secondary: {
            main: "#FBF8DD",
          },
          tertiary: {
            main: "#FBF8DD",
          },
        },
        dark: {
          bgColor: {
            main: "#000000",
          },
          textColor: {
            main: "#ffffff",
          },
        },
      },
    },
  },
  plugins: [],
};
