const { withPlaiceholder } = require('@plaiceholder/next')
const { withPlausibleProxy } = require('next-plausible')

const plaiceholder = withPlaiceholder({
  // your Next.js config
})

module.exports = withPlausibleProxy(plaiceholder)
