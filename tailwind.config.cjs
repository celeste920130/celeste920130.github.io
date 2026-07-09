let typography
try {
  typography = require('@tailwindcss/typography')
} catch (e) {
  // Fallback to explicit local path if module resolution fails in some envs
  // (helps when Next/jiti resolves differently in dev)
  // eslint-disable-next-line global-require
  typography = require('./node_modules/@tailwindcss/typography')
}

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './app/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          700: '#1E3A8A',
          800: '#172E6B',
          900: '#0f2348'
        }
         ,
         accent: {
           DEFAULT: '#FF7A59',
           500: '#FF7A59',
           600: '#FF6A46'
         },
         surface: {
           DEFAULT: '#FFFFFF',
           muted: '#F8F9FB'
         },
         warm: {
           DEFAULT: '#FDECE6'
         }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.primary.700'),
              '&:hover': { color: theme('colors.primary.800') },
            },
            h1: { color: theme('colors.primary.900') },
            h2: { color: theme('colors.primary.800') },
            h3: { color: theme('colors.slate.800') },
            code: {
              color: theme('colors.pink.600'),
              backgroundColor: theme('colors.slate.100'),
              padding: '0.2rem 0.4rem',
              borderRadius: '0.375rem',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            pre: {
              backgroundColor: theme('colors.slate.900'),
              color: theme('colors.slate.100'),
              padding: '1rem',
              borderRadius: '0.5rem',
            },
            img: {
              borderRadius: theme('borderRadius.md'),
              borderWidth: '1px',
              borderColor: theme('colors.slate.200'),
              boxShadow: '0 6px 18px rgba(2,6,23,0.08)',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: { color: theme('colors.primary.400') },
            h1: { color: theme('colors.primary.200') },
            h2: { color: theme('colors.primary.300') },
            code: {
              backgroundColor: theme('colors.slate.800'),
              color: theme('colors.pink.400'),
            },
            pre: { backgroundColor: theme('colors.slate.800') },
            img: { borderColor: theme('colors.slate.700') },
          },
        },
      }),
    },
  },
  plugins: [typography],
}
