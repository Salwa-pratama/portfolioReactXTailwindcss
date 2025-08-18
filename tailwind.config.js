/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}", "./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "40px",
    },
    // Custom Theme
    extend: {
      // Custom Font
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      // Custom Colors
      colors: {
        primary: "#dc2626",
        dark: "#0f172a",
        midnight: "#06091f",
        secondary: "#64748b",
      },
      // Custom screen
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
