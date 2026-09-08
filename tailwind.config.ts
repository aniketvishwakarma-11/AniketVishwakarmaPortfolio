import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Backgrounds */
        bg: {
          primary: '#070b14',
          secondary: '#0d1117',
          card: 'rgba(13, 17, 23, 0.7)',
        },
        /* Brand */
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        /* Text */
        slate: {
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'scroll-x': 'scroll-x 25s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '0% center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'aurora': {
          '0%, 100%': { transform: 'translateX(0%) translateY(0%) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translateX(5%) translateY(-5%) scale(1.05)', opacity: '0.8' },
          '66%': { transform: 'translateX(-3%) translateY(3%) scale(0.97)', opacity: '0.6' },
        },
        'scroll-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #06b6d4 0%, #7c3aed 100%)',
        'gradient-brand-r': 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)',
        'gradient-dark': 'linear-gradient(135deg, #070b14 0%, #0d1117 100%)',
        'mesh-cyan': 'radial-gradient(ellipse at top, rgba(6,182,212,0.15) 0%, transparent 60%)',
        'mesh-violet': 'radial-gradient(ellipse at bottom, rgba(124,58,237,0.12) 0%, transparent 60%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.25)',
        'glow-violet': '0 0 40px rgba(124, 58, 237, 0.25)',
        'glow-sm': '0 0 20px rgba(6, 182, 212, 0.2)',
        'card': '0 4px 40px rgba(0, 0, 0, 0.4)',
        'inner-glow': 'inset 0 0 40px rgba(6, 182, 212, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
