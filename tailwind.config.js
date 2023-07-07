/** @type {import('tailwindcss').Config} */
export default {
  Purge: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'src/css/*.css',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0fa9e6",
          light: "#3fbaeb",
          dark: "#0c87b8",
        }
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      }
    },
  },
  plugins: [],
}