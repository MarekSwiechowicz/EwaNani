/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#e8ddd4',
          DEFAULT: '#ddd2c6',
          dark: '#c9beb1',
        },
        mint: '#98c1a9',
        blush: '#ffb4b4',
        charcoal: '#333333',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};