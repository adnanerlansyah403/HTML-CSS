/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
      container: {
          screens: {
              xl: "1170px"
          },
          center: true,
      },
      fontFamily: {
          'sans': ["Inter"],
      },
      extend: {
          fontFamily: {
              'poppins': ['Poppins', 'sans-serif'] 
          },
          colors: {
              primary: "#217BF4",
          },
      },
  },
  plugins: [],
}
