/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← Needed for dark theme toggling
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '30%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 2.5s steps(25, end) forwards',
        blink: 'blink 0.7s step-end infinite',
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwindcss-animate')],
}
