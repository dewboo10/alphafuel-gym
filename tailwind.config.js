/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fire: {
          400: '#FFAA00',
          500: '#E8900A',
          600: '#C97500',
        },
        steel: {
          900: '#0A0A0A',
          800: '#111111',
          700: '#1A1A1A',
          600: '#222222',
          500: '#333333',
          400: '#555555',
          300: '#888888',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body: ['"Barlow"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'pulse-fire': 'pulseFire 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseFire: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232,144,10,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(232,144,10,0.7)' },
        }
      }
    },
  },
  plugins: [],
}
