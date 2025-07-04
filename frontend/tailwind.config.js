/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FFF0F7',
          100: '#FFE1EF',
          200: '#FFC3DF',
          300: '#FFA5D0',
          400: '#FF87C0',
          500: '#FF69B4', // Primary color
          600: '#E54C9A',
          700: '#CC2E81',
          800: '#B31067',
          900: '#99004D',
        },
        teal: {
          50: '#EFFCFB',
          100: '#DEF9F7',
          200: '#BEF3EF',
          300: '#9EECE7',
          400: '#7DE6DF',
          500: '#4ECDC4', // Secondary color
          600: '#33B5AC',
          700: '#299E94',
          800: '#1F877D',
          900: '#156F65',
        },
        purple: {
          50: '#F5F0FF',
          100: '#EBE0FF',
          200: '#D7C2FF',
          300: '#C3A3FF',
          400: '#AF85FF',
          500: '#9A66FF',
          600: '#8547FF',
          700: '#7028FF',
          800: '#6A0DAD', // Accent color
          900: '#5C0999',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};