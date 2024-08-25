/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'expand': 'expand 1s ease-in-out',
        'fade-in-out': 'fade-in-out 3s ease-in-out infinite', // Infinite loop
      },
      keyframes: {
        'expand': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in-out': {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      fontFamily: {
        signature: ['"Fredericka the Great"', 'cursive'],
      },
    },
  },
  plugins: [],
}
