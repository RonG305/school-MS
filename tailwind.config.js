/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": 'Roboto, sans-serif',
        "Poppins": "Poppins, sans-serif"
      },

      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  plugins: [],
}