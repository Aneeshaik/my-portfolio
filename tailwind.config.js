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
      backgroundImage: {
        'grid-pattern': `
        linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), 
        linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-pattern': '30px 30px',
      },
      colors:{
        customblue: '#0F172A'
      },
    },
  },
  plugins: [],
}
