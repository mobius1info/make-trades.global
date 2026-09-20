/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f7fa',
          100: '#e8edf3',
          200: '#c9d4e0',
          300: '#9fb0c4',
          400: '#6b819a',
          500: '#475868',
          600: '#324150',
          700: '#1f2b37',
          800: '#141d27',
          900: '#0a0f16',
          950: '#05080c',
        },
        accent: {
          50: '#e6fff7',
          100: '#b3ffe9',
          200: '#80ffdb',
          300: '#4dffcd',
          400: '#1affc9',
          500: '#00e6b8',
          600: '#00b894',
          700: '#008a6f',
          800: '#005c4a',
          900: '#002e25',
        },
        gold: {
          400: '#f5c451',
          500: '#e6a817',
          600: '#b8830f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
