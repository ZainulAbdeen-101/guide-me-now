
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
theme: {
    extend:{
      fontFamily: {
        sans: ['Montserrat',...defaultTheme.fontFamily.sans],
        font:['League Spartan', 'sans-serif']
       
      },  
      
    },
   
  },
  daisyui: {
    themes: ["light"],
     
  },
  plugins: [require("daisyui"),
  require('tailwind-scrollbar'),],
}
