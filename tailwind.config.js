/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    colors:{
      white: '#FFFFFF',
      offwhite: '#f5f5f4',
      black: '#1C1C1C',
      pureblack: '#000000',
      gray:{
        light: '#D4D4D2',
        dark: '#505050',
        clickNum: '#848484',
        clickOp: '#F8F8F8'
      },
      orange: '#FF9500',
    },
    extend:{
      screens:{
        '3xl': '2100px',
      }
    },
  },
  plugins: [],
}

