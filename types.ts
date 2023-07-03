export interface PlatformData {
  contractAddress: string
  decimalPlace: number
}

export interface Platforms {
  [key: string]: PlatformData
}

export interface TokenDetailProps {
  id: string
  name: string
  symbol: string
  desc: string
  image: {
    large: string
  }
  platforms: Platforms
  ath: string
  atl: string
  marketCap: string
  volume: string
  prices: any
  currentPrice: string
}
