const withTM = require('next-transpile-modules')(['react-syntax-highlighter']) // pass the modules you would like to see transpiled

module.exports = withTM({
  i18n: {
    locales: ['en', 'es', 'pseudo'],
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
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    }

    return config
  },
})
