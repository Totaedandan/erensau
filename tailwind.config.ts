import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00b5e2',
        'primary-dark': '#0099c4',
        'primary-light': '#33c6ea',
        accent: '#00b5e2',
        bg: '#f4f4f4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '-2px 16px 25px 0px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config
