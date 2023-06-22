import LineChart from '@/components/Chart/LineChart'
import { bisect, curveCardinal, NumberValue, scaleLinear, timeDay, timeHour, timeMinute, timeMonth } from 'd3'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { AxisBottom, TickFormatter } from '@visx/axis'
import {
  dayHourFormatter,
  hourFormatter,
  monthDayFormatter,
  monthTickFormatter,
  monthYearDayFormatter,
  weekFormatter,
} from 'util/formatChartTimes'
import { Line } from '@visx/shape'
import { GlyphCircle } from '@visx/glyph'
import { localPoint } from '@visx/event'
import { EventType } from '@visx/event/lib/types'

export type PricePoint = { timestamp: number; value: number }

export enum TimePeriod {
  HOUR,
  DAY,
  WEEK,
  MONTH,
  YEAR,
}

type ChartProps = {
  width: number
  height: number
  prices: any
  timePeriod: TimePeriod
}

export function getPriceBounds(pricePoints: PricePoint[]): [number, number] {
  const prices = pricePoints.map((x) => x.value)
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  return [min, max]
}

export function Chart({ prices, height, width, timePeriod }: ChartProps) {
  const locale = 'en-US'

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

  const [crosshair, setCrosshair] = useState<number | null>(null)
  const [displayPrice, setDisplayPrice] = useState(startingPrice)

  const crosshairEdgeMax = width * 0.85
  const crosshairAtEdge = !!crosshair && crosshair > crosshairEdgeMax

  useEffect(() => {
    setDisplayPrice(endingPrice)
  }, [prices, endingPrice])

  function tickFormat(
    timePeriod: TimePeriod,
    locale: string
  ): [TickFormatter<NumberValue>, (v: number) => string, NumberValue[]] {
    const offsetTime = (endingPrice.timestamp.valueOf() - startingPrice.timestamp.valueOf()) / 24
    const startDateWithOffset = new Date((startingPrice.timestamp.valueOf() + offsetTime) * 1000)
    const endDateWithOffset = new Date((endingPrice.timestamp.valueOf() - offsetTime) * 1000)
    switch (timePeriod) {
      case TimePeriod.HOUR: {
        const interval = timeMinute.every(5)

        return [
          hourFormatter(locale),
          dayHourFormatter(locale),
          (interval ?? timeMinute)
            .range(startDateWithOffset, endDateWithOffset, interval ? 2 : 10)
            .map((x) => x.valueOf() / 1000),
        ]
      }
      case TimePeriod.DAY:
        return [
          hourFormatter(locale),
          dayHourFormatter(locale),
          timeHour.range(startDateWithOffset, endDateWithOffset, 4).map((x) => x.valueOf() / 1000),
        ]
      case TimePeriod.WEEK:
        return [
          weekFormatter(locale),
          dayHourFormatter(locale),
          timeDay.range(startDateWithOffset, endDateWithOffset, 1).map((x) => x.valueOf() / 1000),
        ]
      case TimePeriod.MONTH:
        return [
          monthDayFormatter(locale),
          dayHourFormatter(locale),
          timeDay.range(startDateWithOffset, endDateWithOffset, 7).map((x) => x.valueOf() / 1000),
        ]
      case TimePeriod.YEAR:
        return [
          monthTickFormatter(locale),
          monthYearDayFormatter(locale),
          timeMonth.range(startDateWithOffset, endDateWithOffset, 2).map((x) => x.valueOf() / 1000),
        ]
    }
  }

  const [tickFormatter, crosshairDateFormatter, ticks] = tickFormat(timePeriod, locale)
  //max ticks based on screen size
  const maxTicks = Math.floor(width / 100)
  function calculateTicks(ticks: NumberValue[]) {
    const newTicks = []
    const tickSpacing = Math.floor(ticks.length / maxTicks)
    for (let i = 1; i < ticks.length; i += tickSpacing) {
      newTicks.push(ticks[i])
    }
    return newTicks
  }

  const updatedTicks = maxTicks > 0 ? (ticks.length > maxTicks ? calculateTicks(ticks) : ticks) : []

  useEffect(() => {
    setCrosshair(null)
  }, [timePeriod])

  const handleHover = useCallback(
    (event: Element | EventType) => {
      if (!prices) return

      const { x } = localPoint(event) || { x: 0 }
      const x0 = timeScale.invert(x) // get timestamp from the scalexw
      const index = bisect(
        prices.map((x) => x.timestamp),
        x0,
        1
      )

      const d0 = prices[index - 1]
      const d1 = prices[index]
      let pricePoint = d0

      const hasPreviousData = d1 && d1.timestamp
      if (hasPreviousData) {
        pricePoint = x0.valueOf() - d0.timestamp.valueOf() > d1.timestamp.valueOf() - x0.valueOf() ? d1 : d0
      }

      if (pricePoint) {
        setCrosshair(timeScale(pricePoint.timestamp))
        setDisplayPrice(pricePoint)
      }
    },
    [timeScale, prices]
  )

  const resetDisplay = useCallback(() => {
    setCrosshair(null)
    setDisplayPrice(endingPrice)
  }, [setCrosshair, setDisplayPrice, endingPrice])

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

      {crosshair !== null ? (
        <g>
          <AxisBottom
            scale={timeScale}
            stroke={'blue'}
            tickFormat={tickFormatter}
            tickStroke={'blue'}
            tickLength={4}
            hideTicks={true}
            tickTransform="translate(0 -5)"
            tickValues={updatedTicks}
            top={height - 1}
            tickLabelProps={() => ({
              fill: 'blue',
              fontSize: 12,
              textAnchor: 'middle',
              transform: 'translate(0 -24)',
            })}
          />
          <text
            x={crosshair + (crosshairAtEdge ? -4 : 4)}
            y={margin.crosshair + 10}
            textAnchor={crosshairAtEdge ? 'end' : 'start'}
            fontSize={12}
            fill={'blue'}
          >
            {crosshairDateFormatter(displayPrice.timestamp)}
          </text>
          <Line
            from={{ x: crosshair, y: margin.crosshair }}
            to={{ x: crosshair, y: height }}
            stroke={'blue'}
            strokeWidth={1}
            pointerEvents="none"
            strokeDasharray="4,4"
          />
          <GlyphCircle
            left={crosshair}
            top={rdScale(displayPrice.value) + margin.top}
            size={50}
            fill={'blue'}
            stroke={'blue'}
            strokeWidth={0.5}
          />
        </g>
      ) : (
        <AxisBottom hideAxisLine={true} scale={timeScale} stroke={'blue'} top={height - 1} hideTicks />
      )}
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="transparent"
        onTouchStart={handleHover}
        onTouchMove={handleHover}
        onMouseMove={handleHover}
        onMouseLeave={resetDisplay}
      />
    </svg>
  )
}
