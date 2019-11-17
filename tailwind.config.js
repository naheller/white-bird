module.exports = {
  theme: {
    fill: theme => ({
      current: 'currentColor',
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
    })
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'even', 'odd']
  }
}
