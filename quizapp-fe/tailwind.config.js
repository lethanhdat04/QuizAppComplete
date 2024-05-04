/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#2E4F4F",
        default: "#CBE4DE",
      },
      listStyleType:{
        latin: "lower-latin"
      }
    },
  },
  plugins: [],
}

