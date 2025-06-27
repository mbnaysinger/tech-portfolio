/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.svg',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A192F',
        accent: '#64FFDA',
        text: {
          light: '#CCD6F6',
        },
        overlay: '#00000080',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        inter: ['InterVariable', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: 'clamp(1rem, 1.125vw, 1.125rem)',
        lg: 'clamp(1.125rem, 1.25vw, 1.25rem)',
        xl: 'clamp(1.25rem, 2vw, 2rem)',
        '2xl': 'clamp(2rem, 3vw, 3rem)',
        '4xl': 'clamp(2.5rem, 5vw, 4rem)',
      },
      lineHeight: {
        normal: '1.5',
      },
      gridTemplateColumns: {
        fluid: 'repeat(12, minmax(0, 1fr))',
      },
      boxShadow: {
        glass: '0 4px 32px 0 rgba(10,25,47,0.25), 0 1.5px 4px 0 rgba(100,255,218,0.08)',
      },
      backdropBlur: {
        glass: '8px',
      },
    },
  },
  plugins: [],
}; 