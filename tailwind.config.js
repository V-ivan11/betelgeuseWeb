/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'fontlogo': ['fontlogo', 'sans-serif'],
      },
      colors:{
        'primary': '#FFF',
        'secondary': '#18213E',
        'tertiary': '#F15025',
        'quaternary': '#EFF3F4',
        'quinary': '#1E535F'
      },
      backgroundImage:{
        'main': "url('images/chery.png')",
      }
    },
  },
  plugins: [],
}