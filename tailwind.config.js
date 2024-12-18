/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#CA8A04', // yellow-600
          secondary: '#1F2937',
          accent: '#4B5563',
        },
      },
    },
  },
  plugins: [],
};