import LineChart from '@/components/Chart/LineChart'
import { bisect, curveCardinal, NumberValue, scaleLinear, timeDay, timeHour, timeMinute, timeMonth } from 'd3'
import { useMemo } from 'react'
export type PricePoint = { timestamp: number; value: number }

type ChartProps = {
  width: number
  height: number
  prices: any
}

export function getPriceBounds(pricePoints: PricePoint[]): [number, number] {
  const prices = pricePoints.map((x) => x.value)
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  return [min, max]
}

export function Chart({ prices, height, width }: ChartProps) {
  const startingPrice = prices?.[0]
  const endingPrice = prices?.[prices.length - 1]
  const margin = { top: 100, bottom: 48, crosshair: 72 }

  const graphInnerHeight = height - margin.top - margin.bottom > 0 ? height - margin.top - margin.bottom : 0

  const curveTension = 1

  // y scale
  const rdScale = useMemo(
    () =>
      scaleLinear()
        .domain(getPriceBounds(prices ?? []))
        .range([graphInnerHeight, 0]),
    [prices, graphInnerHeight]
  )

  // x scale
  const timeScale = useMemo(
    () => scaleLinear().domain([startingPrice.timestamp, endingPrice.timestamp]).range([0, width]),
    [startingPrice, endingPrice, width]
  )

  const getX = useMemo(() => (p: PricePoint) => timeScale(p.timestamp), [timeScale])
  const getY = useMemo(() => (p: PricePoint) => rdScale(p.value), [rdScale])
  const curve = useMemo(() => curveCardinal.tension(curveTension), [curveTension])

  return (
    <svg data-cy="price-chart" width={width} height={height} style={{ minWidth: '100%' }}>
      <LineChart
        width={width}
        height={height}
        data={prices}
        getX={getX}
        getY={getY}
        marginTop={margin.top}
        curve={curve}
        strokeWidth={2}
      />
    </svg>
  )
}
