/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          400 : "#f9cdb3",
          "background" : "#f4f1ee"
        },
        secondary : {
          400 : "#c17130",
          800 : "#748cab"
        },
      }
    },
  },
  plugins: [],
}

