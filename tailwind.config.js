/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Define the custom font
      },
    colors: {
      'custom-start': '#5c6bc0',
      'custom-end': '#512da8',
    },
  },
  },
  plugins: [],
}