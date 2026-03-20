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
        // Primary brand red (from logo)
        brand: {
          50:  '#FFF1F1',
          100: '#FFD9D9',
          200: '#FFB3B3',
          300: '#FF7A7A',
          400: '#FF4040',
          500: '#E01C1C',
          600: '#C41010',
          700: '#A30D0D',
          800: '#7A0A0A',
          900: '#560707',
          950: '#320404',
        },
        // Dark scale (replaces navy — near-black charcoal)
        dark: {
          50:  '#F5F5F5',
          100: '#E8E8E8',
          200: '#D0D0D0',
          300: '#A8A8A8',
          400: '#808080',
          500: '#585858',
          600: '#404040',
          700: '#2E2E2E',
          800: '#1E1E1E',
          900: '#141414',
          950: '#0A0A0A',
        },
        // Keep navy alias pointing to dark for backwards compatibility
        navy: {
          50:  '#F5F5F5',
          100: '#E8E8E8',
          200: '#D0D0D0',
          300: '#A8A8A8',
          400: '#808080',
          500: '#585858',
          600: '#404040',
          700: '#2E2E2E',
          800: '#1E1E1E',
          900: '#141414',
          950: '#0A0A0A',
        },
        // Teal replaced by brand red accent interactions
        teal: {
          50:  '#FFF1F1',
          100: '#FFD9D9',
          200: '#FFB3B3',
          300: '#FF7A7A',
          400: '#FF5252',
          500: '#E01C1C',
          600: '#C41010',
          700: '#A30D0D',
          800: '#7A0A0A',
          900: '#560707',
        },
        medical: {
          light:  '#F7F7F7',
          border: '#E4E4E4',
          muted:  '#888888',
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
        'card':      '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover':'0 4px 12px rgba(0,0,0,0.10), 0 12px 40px rgba(0,0,0,0.10)',
        'nav':       '0 1px 0 rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
export default config
