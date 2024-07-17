/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGray: '#4C545C',
        gray: '#9EABB2',
        ios:'#26BBA4',
        mac:'#6174FF'
      },
      letterSpacing :{
        '-0.59': '-0.59px',
      },
      spacing: {
        '150': '150px', 
      },
      spacing: {
        '730': '730px', 
      },
    },
  },
  plugins: [],
}