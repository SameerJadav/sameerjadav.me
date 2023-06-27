/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mauve1: 'hsl(var(--mauve1) / <alpha-value>)',
        mauve2: 'hsl(var(--mauve2) / <alpha-value>)',
        mauve3: 'hsl(var(--mauve3) / <alpha-value>)',
        mauve4: 'hsl(var(--mauve4) / <alpha-value>)',
        mauve5: 'hsl(var(--mauve5) / <alpha-value>)',
        mauve6: 'hsl(var(--mauve6) / <alpha-value>)',
        mauve7: 'hsl(var(--mauve7) / <alpha-value>)',
        mauve8: 'hsl(var(--mauve8) / <alpha-value>)',
        mauve9: 'hsl(var(--mauve9) / <alpha-value>)',
        mauve10: 'hsl(var(--mauve10) / <alpha-value>)',
        mauve11: 'hsl(var(--mauve11) / <alpha-value>)',
        mauve12: 'hsl(var(--mauve12) / <alpha-value>)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
