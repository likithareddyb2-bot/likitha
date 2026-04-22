/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0b0f19',
          800: '#111827',
          700: '#1f2937',
        },
        primary: {
          500: '#6366f1',
          400: '#818cf8',
        },
        accent: '#f43f5e',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 2s infinite alternate',
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
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(99, 102, 241, 0.4)' },
          '100%': { boxShadow: '0 0 25px rgba(99, 102, 241, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
