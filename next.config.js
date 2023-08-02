/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['react-syntax-highlighter']) // pass the modules you would like to see transpiled

const nextConfig = withTM({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
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

module.exports = nextConfig;