/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extends:{
      fontFamily: {
        sans: ['Montserrat',...defaultTheme.fontFamily.sans],
        font:['Bebas Neue','sans-serif']
       
      },  
    }
    
  },
  plugins: [],
}
