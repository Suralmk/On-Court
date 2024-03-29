/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
        secondary: '#00ff00',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

