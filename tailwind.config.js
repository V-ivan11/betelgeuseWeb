/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'fontlogo': ['fontlogo', 'sans-serif'],
      },
      colors:{
        'primary': '#0F172B',
        'secondary': '#EDF2F4',
        'tertiary': '#F15025',
        'quaternary': '#1A936F',
        'quinary': '#FCBF449'
      }
    },
  },
  plugins: [],
}