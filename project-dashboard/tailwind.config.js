/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Industry-inspired colors
        'cement-blue': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        'cement-terracotta': {
          50: '#fdf2f0',
          100: '#fbe6e2',
          200: '#f5cec5',
          300: '#edaf9e',
          400: '#e58e76',
          500: '#dd6b4b',
          600: '#c84b31',
          700: '#a53a28',
          800: '#863026',
          900: '#702c25',
        },
        'cement-green': {
          50: '#f1f8f6',
          100: '#dceee7',
          200: '#bbd9cc',
          300: '#92beab',
          400: '#689d87',
          500: '#4b7d69',
          600: '#3d664f',
          700: '#2d6a4f',
          800: '#265842',
          900: '#193d2c',
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'card-hover': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};