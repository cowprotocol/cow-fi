const withTM = require('next-transpile-modules')(['react-syntax-highlighter']) // pass the modules you would like to see transpiled

module.exports = withTM({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/jobs',
        destination: '/careers',
        permanent: true,
      },
    ]
  },
  compiler: {
    styledComponents: true,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    }

    return config
  },
})
