module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend : {
      fontFamily: {
        'body': ['Manrope']
      },
      fontSize: {
        'base13': '0.8125rem'
      },
      screens: {
        'xsm': '375px',
        '1xl': '1440px'
      },
      colors: {
        darkGrayishBlue: '#48556a',
        darkDesaturatedBlue: '#6d7f97',
        grayishBlue: '#9eafc2',
        lightGrayishBlue: '#ecf2f8'
      },
      width: {
        'card': '85%'
      },
      height: {
        'card': '500px'
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
}
