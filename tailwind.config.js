const withAnimations = require('animated-tailwindcss')

module.exports = withAnimations({
  content: ['*'],
  daisyui: {
  },
  plugins: [require('daisyui')],
})
