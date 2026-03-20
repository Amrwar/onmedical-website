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
        brand: {
          50:  '#FFF1F1',
          100: '#FFD9D9',
          200: '#FFB3B3',
          300: '#FF7A7A',
          400: '#FF4444',
          500: '#E51919',
          600: '#CC1212',
          700: '#A80E0E',
          800: '#7F0A0A',
          900: '#580707',
          950: '#330404',
        },
        // Dark near-black charcoal
        ink: {
          50:  '#F8F8F8',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#C4C4C4',
          400: '#9A9A9A',
          500: '#717171',
          600: '#525252',
          700: '#3D3D3D',
          800: '#272727',
          900: '#171717',
          950: '#0D0D0D',
        },
        // For backward compat aliases
        navy: {
          50: '#F8F8F8', 100: '#F0F0F0', 200: '#E0E0E0',
          300: '#C4C4C4', 400: '#9A9A9A', 500: '#717171',
          600: '#525252', 700: '#3D3D3D', 800: '#272727',
          900: '#171717', 950: '#0D0D0D',
        },
        teal: {
          50:  '#FFF1F1', 100: '#FFD9D9', 200: '#FFB3B3',
          300: '#FF7A7A', 400: '#FF4444', 500: '#E51919',
          600: '#CC1212', 700: '#A80E0E', 800: '#7F0A0A', 900: '#580707',
        },
        medical: {
          light:  '#F9FAFB',
          border: '#E5E7EB',
          muted:  '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        'widest-plus': '0.15em',
        'ultra': '0.2em',
      },
      boxShadow: {
        // Premium layered shadow system
        'xs':            '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        'card':          '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 4px 12px 0 rgb(0 0 0 / 0.04)',
        'card-hover':    '0 4px 8px 0 rgb(0 0 0 / 0.06), 0 16px 32px 0 rgb(0 0 0 / 0.06)',
        'card-focus':    '0 0 0 3px rgb(204 18 18 / 0.12), 0 4px 12px 0 rgb(0 0 0 / 0.06)',
        'nav':           '0 1px 0 0 rgb(0 0 0 / 0.06), 0 2px 16px 0 rgb(0 0 0 / 0.04)',
        'btn-red':       '0 1px 2px rgb(204 18 18 / 0.2), 0 4px 12px rgb(204 18 18 / 0.15)',
        'btn-red-hover': '0 2px 4px rgb(204 18 18 / 0.25), 0 8px 20px rgb(204 18 18 / 0.2)',
        'panel':         '0 2px 4px 0 rgb(0 0 0 / 0.04), 0 8px 24px 0 rgb(0 0 0 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.04)',
        'dark':          '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)',
        'input-focus':   '0 0 0 3px rgb(204 18 18 / 0.15)',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        DEFAULT: '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'hero-grid': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 0h1v80H0zM80 0h1v80h-1zM0 0v1h80V0zM0 80v1h80v-1z' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/g%3E%3C/svg%3E\")",
        'dot-pattern': "radial-gradient(circle, rgb(255 255 255 / 0.06) 1px, transparent 1px)",
      },
      animation: {
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'slide-up':  'slideUp 0.55s cubic-bezier(0.25, 0.4, 0.25, 1) forwards',
        'pulse-dot': 'pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:  { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pulseDot: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.4' } },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.4, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
export default config
