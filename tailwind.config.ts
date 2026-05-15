/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0a0e27',
        'dark-black': '#050810',
        'space-blue': '#1a1f3a',
        'cyan-neon': '#00d9ff',
        'purple-neon': '#b200ff',
        'cyan-light': '#00f0ff',
        'purple-light': '#d946ef',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #00d9ff 0%, #b200ff 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #050810 100%)',
        'radial-glow': 'radial-gradient(circle, rgba(0,217,255,0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px #00d9ff, 0 0 40px #00d9ff',
        'neon-purple': '0 0 20px #b200ff, 0 0 40px #b200ff',
        'glow': '0 0 30px rgba(0, 217, 255, 0.5)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px #00d9ff' },
          '50%': { boxShadow: '0 0 20px #00d9ff, 0 0 30px #00d9ff' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        'mono': ['var(--font-mono)'],
        'sans': ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
