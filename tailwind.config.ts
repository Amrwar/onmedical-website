import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#EEF1F8',
          100: '#D5DCF0',
          200: '#ADBAE1',
          300: '#7E91CB',
          400: '#556BB5',
          500: '#2F4C9F',
          600: '#1B3A8A',
          700: '#142C70',
          800: '#0E1F57',
          900: '#0B1A45',
          950: '#070F2B',
        },
        teal: {
          50:  '#F0FAFB',
          100: '#D9F2F5',
          200: '#B3E5EB',
          300: '#7FD0DB',
          400: '#42B4C4',
          500: '#0E96AA',
          600: '#0B7A8E',
          700: '#096073',
          800: '#08495A',
          900: '#063545',
        },
        medical: {
          light: '#F4F7FF',
          border: '#E0E7F5',
          muted:  '#6B7CA8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card':  '0 1px 3px rgba(11,26,69,0.06), 0 4px 16px rgba(11,26,69,0.06)',
        'card-hover': '0 4px 12px rgba(11,26,69,0.10), 0 12px 40px rgba(11,26,69,0.10)',
        'nav':   '0 1px 0 rgba(11,26,69,0.08), 0 2px 12px rgba(11,26,69,0.06)',
      },
    },
  },
  plugins: [],
}
export default config
