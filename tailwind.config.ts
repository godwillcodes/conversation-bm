import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Kenyan flag colors
        'accent-red': '#BE1622',
        'accent-green': '#009A44',
        'accent-black': '#000000',
        'accent-white': '#FFFFFF',
        
        // Glass morphism colors
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        
        // Dark theme base
        'dark-base': '#0B0B0D',
        'dark-surface': '#1A1A1C',
        'dark-elevated': '#2A2A2C',
        
        // Message bubble colors
        'bubble-left': 'rgba(255, 255, 255, 0.1)',
        'bubble-right': '#BE1622',
        'bubble-text': '#FFFFFF',
        'bubble-text-dark': '#000000',
      },
      fontFamily: {
        'system': [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 15px 35px 0 rgba(31, 38, 135, 0.2)',
        'bubble': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'bubble-lg': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'bubble': '1.25rem',
        'bubble-sm': '1rem',
        'glass': '1.25rem',
        'glass-lg': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'typing': 'typing 1.5s infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          '0%, 60%, 100%': { opacity: '0' },
          '30%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(190, 22, 34, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(190, 22, 34, 0.8)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        'bubble': '70%',
        'container': '980px',
      },
    },
  },
  plugins: [],
} satisfies Config

