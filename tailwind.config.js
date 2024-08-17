/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  safelist: [
    'bg-grid-pattern',
    'bg-grid-pattern-hover',
  ],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-3360deg)',
          },
        },
      },
      animation:{
        'border-spin': 'border-spin 25s linear infinite',
      },
      backgroundImage: {
        'grid-pattern': `
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-pattern': '30px 30px',
      },
      colors:{
        'customblue': '#05081C',
        'start-color': '#ad5389',
        'end-color': '#3c1053',
        'text-color' : '#3399FF'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'serif'],
      },
    },
  },
  plugins: [],
}
