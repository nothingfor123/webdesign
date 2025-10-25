/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.25rem',      // 20px
        'xl': '1.563rem',     // 25px
        '2xl': '1.953rem',    // 31px
        '3xl': '2.441rem',    // 39px
        '4xl': '3.052rem',    // 49px
        '5xl': '3.815rem',    // 61px
        '6xl': '4.768rem',    // 76px
        '7xl': '5.96rem',     // 95px
      },
    },
  },
  plugins: [],
};
