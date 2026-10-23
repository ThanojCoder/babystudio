/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          150: '#EFECE6',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          850: '#201D1B',
          900: '#1C1917',
          950: '#0C0A09',
        },
        gold: {
          50: '#FDFBF5',
          100: '#F9F4E5',
          200: '#F1E5C4',
          300: '#E7D19B',
          400: '#DAB868',
          500: '#C59B27',
          600: '#B08225',
          700: '#8C631A',
        },
        champagne: {
          50: '#FDFCF9',
          100: '#FAF6ED',
          200: '#F3EAD8',
          300: '#E8D7B8',
          400: '#D9C093',
          500: '#C29F62',
        },
        ivory: {
          50: '#FEFDFB',
          100: '#FAF8F3',
          200: '#F4EFE6',
          300: '#ECE3D4',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px -6px rgba(0, 0, 0, 0.05)',
        'medium': '0 12px 35px -8px rgba(0, 0, 0, 0.08)',
        'luxury': '0 20px 45px -10px rgba(184, 134, 11, 0.1)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
};
