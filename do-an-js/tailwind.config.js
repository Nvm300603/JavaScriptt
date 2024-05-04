/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
'./public/index.html'
],
  theme: {
    extend: {
      width: {
        '1100' : '1100px'
      },
      backgroundColor: {
      },
      maxWidth:{
        '600':'600px'
      },
      cursor: {
        pointer: 'pointer'
      }
    },
  },
  plugins: [],
}