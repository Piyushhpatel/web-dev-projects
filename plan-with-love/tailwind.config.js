/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", "sans serif"],
      },
      colors:{
        'bluish': 'rgb(1,17,160)',
      }
    },
  },
  plugins: [],
}

