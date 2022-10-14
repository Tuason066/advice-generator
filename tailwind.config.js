/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: 'Manrope',
      },
      colors: {
        primary: {
          100: 'hsl(193, 38%, 86%)',
          200: 'hsl(150, 100%, 66%)',
        },
        neutral: {
          100: 'hsl(217, 19%, 38%)',
          200: 'hsl(217, 19%, 24%)',
          300: 'hsl(218, 23%, 16%)',
        },
      },
      boxShadow: {
        cyan100: '0 0 20px hsl(150, 100%, 66%)',
        cyan200: '0 0 30px hsl(150, 100%, 66%)',
      },
    },
  },
  plugins: [],
};
