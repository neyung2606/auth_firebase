const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // by default only @utilities is applied
  important: true,
  // prefix: '',
  experimental: 'all',
  purge: {
    content: [
      './**/*.{js,ts,jsx,tsx}',
      './**/*.jsx',
      './*.blade.php',
      './**/*.blade.php'
    ]
  },
  theme: {
    screens: {},
    extend: {
      borderWidth: {
        default: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px'
      },
      transitionDuration: {
        DEFAULT: '150ms'
        // ...
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
        // ...
      },
      colors,
      maxWidth: {
        '1/12': '8.333%',
        '2/12': '16,666%',
        '3/12': '25%',
        '4/12': '33.333%',
        '5/12': '41.666%',
        '6/12': '50%',
        '7/12': '58.333%',
        '8/12': '66.666%',
        '9/12': '75%',
        '10/12': '83.333%',
        '11/12': '91.666%'
      },
      fontFamily: {
        // Add "Inter var" to your "sans" font family in your Tailwind config:
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extends: {
      textColor: ['visited'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      transform: ['active']
    }
  },

  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp')
  ]
}
