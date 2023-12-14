/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /** ponemos el color de nuestro gusto 
         * en este caso seria el codigo de abajo
         * cada vez que pongamos primary en classname 
         * se pondra el color de abajo muy util */
        primary: '#f13a01'
      }
    },
  },
  plugins: [],
}
