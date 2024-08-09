/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors:{
        startblue: '#0F172A',
        endblue: '#18334F',
        darkblue: '#0F1628'
      },
    },
  },
  plugins: [],
}
