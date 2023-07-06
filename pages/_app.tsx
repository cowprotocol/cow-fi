import { AppProps } from 'next/app'
import GlobalStyles from 'styles/global.styles'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CONFIG } from '@/const/meta'
import { Analytics } from '@/components/Analytics'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from 'services/uniswap-price/apollo-client'
import { useInitializeUtm } from 'modules/utm'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  useInitializeUtm()

  const router = useRouter()
  const CURRENT_URL = `${CONFIG.url.root}${router.asPath}`

  return (
    <>
      <Head>
        <meta name="description" content={CONFIG.description} key="description" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="black" key="theme-color-light" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" key="theme-color-dark" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" key="shortcut-icon" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" key="apple-touch-icon-192" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon.png" key="apple-touch-icon-512" />
        <link rel="canonical" href={CURRENT_URL} key="canonical" />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:title" content={CONFIG.title} key="og-title" />
        <meta property="og:description" content={CONFIG.description} key="og-description" />
        <meta property="og:image" content={CONFIG.url.root + '/images/og-meta-cowprotocol.png'} key="og-image" />
        <meta property="og:url" content={CURRENT_URL} key="og-url" />
        <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
        <meta name="twitter:site" content={CONFIG.social.twitter.account} key="twitter-site" />
        <meta name="twitter:title" content={CONFIG.title} key="twitter-title" />
        <meta name="twitter:image" content={CONFIG.url.root + '/images/og-meta-cowprotocol.png'} key="twitter-image" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" key="viewport" />
      </Head>

      <GlobalStyles />
      <Analytics />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
