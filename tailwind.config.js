/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pulse-dark': '#0A0E1A',
        'pulse-navy': '#0F1629',
        'pulse-card': '#141C2E',
        'pulse-border': '#1E2D4A',
        'pulse-blue': '#3B82F6',
        'pulse-cyan': '#06B6D4',
        'pulse-green': '#10B981',
        'pulse-amber': '#F59E0B',
        'pulse-red': '#EF4444',
        'pulse-purple': '#8B5CF6',
        'pulse-text': '#E2E8F0',
        'pulse-muted': '#64748B',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
