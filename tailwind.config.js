/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#0b1220',
          800: '#111a2e',
          700: '#1c2842',
          600: '#2a3a5c',
        },
        brand: {
          50: '#fff8e6',
          100: '#ffe9b8',
          200: '#ffd780',
          300: '#ffc04d',
          400: '#ffb01f',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        ada: {
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
        },
        asphalt: {
          100: '#f1f3f7',
          200: '#e2e6ee',
          300: '#cdd4e0',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
