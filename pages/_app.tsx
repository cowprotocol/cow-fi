import { AppProps } from 'next/app'
import GlobalStyles from 'styles/global.styles'
import Head from 'next/head'

import { CONFIG } from '@/const/meta'
import { Analytics } from '@/components/Analytics'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from 'services/uniswap-price/apollo-client'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta name="description" content={CONFIG.description} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="black" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={CONFIG.title} />
        <meta property="og:description" content={CONFIG.description} />
        <meta property="og:image" content={CONFIG.url.root + '/images/og-meta-cowprotocol.png'} />
        <meta property="og:url" content={CONFIG.url.root} /> {/* TODO: Add URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={CONFIG.social.twitter.account} />
        <meta name="twitter:title" content={CONFIG.title} />
        <meta name="twitter:image" content={CONFIG.url.root + '/images/og-meta-cowprotocol.png'} />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"></meta>
      </Head>

      <GlobalStyles />
      <Analytics />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
