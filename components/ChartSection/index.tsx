import { ChartContainer, LoadingChart } from '../Chart/LoadingChart'
import { Chart, TimePeriod } from '../Chart'
import { ParentSize } from '@visx/responsive'
import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import { tokenPriceQuery, HistoryDuration, Chain } from 'services/graphql/queries'
import { usePriceHistory } from 'lib/hooks/usePriceHistory'
import { Platforms } from '@/pages/tokens/[id]'
import { fixChart } from 'util/fixChart'

type ChartSectionProps = {
  platforms: Platforms
  priceChange: string
}

export function ChartSection({ platforms, priceChange }: ChartSectionProps) {
  const queryVariables = useMemo(() => {
    const output: any = { duration: HistoryDuration.Day }

    if (platforms.ethereum.contractAddress) {
      output.chain = Chain.Ethereum
      output.address = platforms.ethereum.contractAddress
      return output
    }

    return null
  }, [platforms.ethereum.contractAddress])

  const { data, loading, error } = useQuery(tokenPriceQuery, {
    variables: { ...queryVariables },
  })

  const originalPrices = usePriceHistory(data)

  const { prices } = useMemo(
    () => (originalPrices && originalPrices.length > 0 ? fixChart(originalPrices) : { prices: null, blanks: [] }),
    [originalPrices]
  )

  if (loading) {
    return <LoadingChart />
  }

  return (
    <ChartContainer>
      <ParentSize>
        {({ width }) => (
          <Chart priceChange={priceChange} prices={prices} timePeriod={TimePeriod.DAY} width={width} height={350} />
        )}
      </ParentSize>
    </ChartContainer>
  )
}
