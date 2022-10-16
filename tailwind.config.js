const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const green = '#57B660';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      green,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      gray: {
        200: '#CECBC5',
        300: '#B3B3B3',
        400: '#B2B2B2',
        500: '#ABAAAA',
        600: '#535353',
        700: '#333333',
        800: '#181818',
        900: '#121212'
      }
    },
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3'
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        fade: 'fade .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        '.air-block': {
          borderRadius: theme('borderRadius.layout'),
          backgroundColor: theme('colors.gray.950'),
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.lg')
        }
      });
      addUtilities({
        '.outline-border-none': {
          outline: 'none',
          border: 'none'
        },
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        '.image-like-bg': {
          objectPosition: 'center',
          objectFit: 'cover',
          pointerEvents: 'none'
        }
      });
    })
  ]
};
