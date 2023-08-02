import Head from 'next/head'
import { GetStaticProps } from 'next'

import { CONFIG } from '@/const/meta'

import Layout from '@/components/Layout'

import { CowSdk } from '@cowprotocol/cow-sdk'
import { getCowStats } from 'services/cow'
import Home from '@/components/Home'
import { MetricsData } from 'types'

const cowSdk = new CowSdk(1)
const numberFormatter = Intl.NumberFormat('en', { notation: 'compact' })
const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function HomePage({ metricsData, siteConfigData }: { metricsData: MetricsData; siteConfigData: typeof CONFIG }) {
  return (
    <Layout $fullWidthGradientVariant={true}>
      <Head>
        <title>
          {siteConfigData.title} - {siteConfigData.descriptionShort}
        </title>
      </Head>

      <Home $metricsData={metricsData} $siteConfigData={siteConfigData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const siteConfigData = CONFIG
  const { volumeUsd, volumeEth } = await cowSdk.cowSubgraphApi.getTotals()
  const { surplus, totalTrades, lastModified } = await getCowStats()

  const totalSurplus = surplus.reasonable + surplus.unusual
  const lastModifiedFormatted = lastModified.toISOString()

  return {
    props: {
      metricsData: {
        totalVolume: numberFormatter.format(+volumeUsd) + '+',
        totalVolumeETH: numberFormatter.format(+volumeEth) + '+',

        tradesCount: numberFormatter.format(totalTrades) + '+',
        tradesCountLastModified: lastModifiedFormatted,

        totalSurplus: numberFormatter.format(totalSurplus) + '+',
        totalSurplusLastModified: lastModifiedFormatted,
      },
      siteConfigData,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
