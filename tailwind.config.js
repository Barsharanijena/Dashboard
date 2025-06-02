/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#E056D7',
          purple: '#7948EA',
        },
        dark: {
          DEFAULT: '#1A1625',
          lighter: '#2D2A37',
          darker: '#15111F',
        },
      },
    },
  },
  plugins: [],
} 