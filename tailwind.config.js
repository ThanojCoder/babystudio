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
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F0',
          200: '#F4ECE1',
          300: '#EBDDCA',
        },
        blush: {
          50: '#FFF5F5',
          100: '#FFE8E8',
          200: '#FFD3D3',
          300: '#FFAEA8',
          400: '#FF7F77',
          500: '#F0584D',
        },
        honey: {
          50: '#FFFDF0',
          100: '#FFF9D6',
          200: '#FFF0A3',
          300: '#FFE266',
          400: '#F5C92B',
          500: '#D9A70F',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E5EDE5',
          200: '#CBDBCB',
          300: '#A4BFA4',
          400: '#7F9F7F',
          500: '#5F825F',
        },
        lavender: {
          50: '#F9F7FD',
          100: '#F0EBFA',
          200: '#DFD3F4',
          300: '#C2ACEB',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.07)',
        'float': '0 20px 40px -15px rgba(220, 100, 100, 0.12)',
        'glow': '0 0 25px rgba(240, 88, 77, 0.18)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
