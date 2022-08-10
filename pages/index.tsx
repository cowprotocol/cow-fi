
import Head from 'next/head'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useRef } from 'react'

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { default as dark } from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';

import { getTotalTrades, getTotalSurplus } from 'services/dune'

// import { ExternalLink } from '@/const/styles/global'
import { siteConfig } from '@/const/meta'
import { Color } from 'const/styles/variables'

import Layout from '@/components/Layout'
import { ButtonWrapper } from '@/components/Button'
import { Section, SectionContent, SubTitle, SectionImage, Separator, IconList, IconListItem, Metrics, IntegrationList, StepWrapper, StepContainer } from '../const/styles/pages/index'
import SocialList from '@/components/SocialList'
import Button from '@/components/Button'

import { CowSdk } from '@cowprotocol/cow-sdk'
// import { intlFormat } from 'date-fns/esm';
// import { GET_QUOTE } from '@/const/api';

const cowSdk = new CowSdk(1)
const numberFormatter = Intl.NumberFormat('en', { notation: 'compact' })
const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min


interface MetricsData {
  totalVolume: string
  tradesCount: string
  tradesCountLastModified: string
  totalSurplus: string
  totalSurplusLastModified: string
  
}
interface HomeProps {
  metricsData: MetricsData
  siteConfigData: typeof siteConfig
}

export default function Home({ metricsData, siteConfigData }: HomeProps) {
  const { title, descriptionShort, social, url } = siteConfigData

  const scrollToElRef = useRef(null);

  const handleScrollDown = () => {
    scrollToElRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout>

      <Head>
        <title>{title} - {descriptionShort}</title>
      </Head>

      {/* Hero */}
      <Section className='container' hero>
        <SectionContent>
        <div>
          <h1>Stop searching, <br/><b>for better prices</b></h1>
          <SubTitle align={'left'} color={Color.text1} lineHeight={1.4}>CoW Protocol finds the lowest price for your trade across all exchanges and aggregators, such as Uniswap and 1inch – and protects you from MEV, unlike the others</SubTitle>

          <ButtonWrapper>
            <Button paddingLR={4.2} href={'#'} target="_blank" label="Start trading" />
            <Button paddingLR={4.2} variant='text' href={'#'} label='Start building' target="_blank" rel="noopener nofollow" />
          </ButtonWrapper>
        </div>
        <div>- IMAGE HERE -</div> 
        </SectionContent>
      </Section>



      

      <Section fullWidth id="about">
<SectionContent flow={'column'}>
<div className='container'>
  <h3>The smartest way to trade crypto assets.</h3>
  <IconList>

    <IconListItem icon="images/icons/lowPrice.svg">
      <span>
        <b>Lower prices thanks to CoWs.</b>
        <p>CoW Protocol matches trades peer-to-peer where possible, cutting out the middleman and saving you money. (We call this a Coincidence of Wants – CoW!)</p>
      </span>
    </IconListItem>

    <IconListItem icon="images/icons/liquidity.svg">
      <span>
        <b>Never pay more than the cheapest alternative.</b>
        <p>No need to compare prices on 1inch, Uniswap or another exchange. CoW Protocol searches them all for you, so you get the best price available.</p>
      </span>
    </IconListItem>

    <IconListItem icon="images/icons/mev.svg">
      <span>
        <b>Protection from MEV.</b>
        <p>CoW Protocol is the industry leader in protecting users from frontrunning and sandwich attacks, which lose traders thousands of dollars every day. It does this by matching trades peer-to-peer, and leveraging batch auctions [→] so trade order becomes irrelevant. </p>
      </span>
    </IconListItem>

    <IconListItem icon="images/icons/savings.svg">
      <span>
        <b>Keep your surplus.</b>
        <p>If a price moves in your favor after you&apos;ve placed an order, CoW Protocol gives you the price at the time of execution.</p>
      </span>
    </IconListItem>

    <IconListItem icon="images/icons/sun.svg">
      <span>
        <b>Never pay for failed transactions.</b>
        <p>CoW Protocol never charges for failed transactions – unlike almost every other DEX or aggregator.</p>
      </span >
    </IconListItem >

    <IconListItem icon="images/icons/gas.svg">
      <span>
        <b>ETH-less trading.</b>
        <p>CoW Protocol takes its fees in the sell token, so you can save your precious ETH.</p>
      </span>
    </IconListItem>

    <IconListItem icon="images/icons/list.svg">
      <span>
        <b>Execute many orders at once.</b>
        <p>Never wait for one trade to finish before placing another.</p>
      </span>
    </IconListItem>

    <IconListItem icon="images/icons/shield.svg">
      <span>
        <b>Safe and reliable.</b>
        <p>CoW Protocol was incubated by Gnosis, built by a transparent and trusted community of engineers that keep security top-of-mind at all times.</p>
      </span>
    </IconListItem>

  </IconList>
</div>
</SectionContent>
</Section >





      
  
      < Section className='container' flow={'column'} >
        <SectionContent>
        <div>
          <h3>Cutting-edge technology</h3>
          <SubTitle align='center'>
          CoW Protocol batches orders, matches Coincidences of Wants <a href="https://docs.cow.fi/overview-1/coincidence-of-wants" target="_blank" rel="noreferrer">(CoWs)</a>, and sources excess volume from all DEXs and DEX aggregators. That&apos;s how the protocol makes sure you always get the best price for your trade. 
          </SubTitle>
          
          <StepWrapper>
            <StepContainer>
              <span>1</span>
              
              <img src="images/icons/funnel.svg" alt="funnel" />
  
              <p><b>Batch</b> CoW Protocol collects orders into “batches” every 30 seconds. This is done off-chain, which has a few benefits – you won’t pay if your trade fails, and the fees are collected in your sell token, not ETH. </p>
            </StepContainer>

            <StepContainer>
              <span>2</span>
              
              <img src="images/icons/p2p-v2.svg" alt="Peer to Peer" />
              
              <p><b>Match</b>CoW Protocol&apos;s network of solving algorithms (“solvers”) scans each batch for Coincidences of Wants (i.e. traders who want what each other has). These “CoWs” are matched peer-to-peer, so everyone gets a better price and no one pays unnecessary AMM fees. </p>
            </StepContainer>

            <StepContainer>
              <span>3</span>
              
              <img src="images/icons/network.svg" alt="batch auction" />
              
              <p><b>Search</b> CoW Protocol&apos;s solvers compete to find the best liquidity source for your trade across all decentralized exchanges and aggregators. So the worst price you&apos;ll get with CoW Protocol is the best price available elsewhere. </p>
            </StepContainer>

            <StepContainer imageWidth={6}>
              <span>4</span>
              
              <img src="images/icons/shield2.svg" alt="On-chain MEV protection" />
              
              <p><b>Settle</b> CoW Protocol submits the batches on-chain and hides them from the public mempool, so your trade is protected from manipulation (frontrunning and other forms of MEV) by miners and bots. </p>
            </StepContainer>
          </StepWrapper>
        </div >
        </SectionContent>
      </Section >





      

      <Section ref={scrollToElRef} flow={'column'}>
        <SectionContent>  
        <div>
          <h3>Serious volume, serious savings.</h3>
          <SubTitle maxWidth={80} align="center">Whether you are a whale, a dolphin or a prawn, you can always trust CoW Protocol to find the lowest prices possible and protect you from MEV.</SubTitle>
          <Metrics>
            <>
            <div>
              <b>${metricsData.totalVolume}</b>
              <i>Total volume traded (USD)</i>
            </div>
            <div>
              <b data-last-modified={metricsData.tradesCountLastModified}>{metricsData.tradesCount}</b>
              <i>All time trades</i>
            </div>
            <div>
              <b data-last-modified={metricsData.totalSurplusLastModified}>${metricsData.totalSurplus}</b>
              <i>Surplus saved for users</i>
            </div>
            </>
          </Metrics>
        </div>
        </SectionContent>
      </Section>

      
      




      <Section className='container' id="developers">
        <SectionContent variant="banner" reverseOrderMobile={'column-reverse'}>
       <IntegrationList>
        <ol>
          <li><a  href="https://balancer.fi/" target="_blank" rel="noreferrer"><img src='images/icons/balancer.svg' alt="Balancer"/></a></li>
          <li><a  href="https://safe.global/" target="_blank" rel="noreferrer"><img src='images/icons/safe.svg' alt="Safe"/></a></li>
          <li><a  href="https://swapr.eth.limo/" target="_blank" rel="noreferrer"><img src='images/icons/swapr.svg' alt="Swapr"/></a></li>
          <li><a  href="https://shapeshift.com/" target="_blank" rel="noreferrer"><img src='images/icons/shapeshift.svg' alt="Shapeshift"/></a></li>
          <li><a  href="https://yearn.finance/" target="_blank" rel="noreferrer"><img src='images/icons/yearn.svg' alt="Yearn finance"/></a></li>
          <li><a href="https://aura.finance/" target="_blank" rel="noreferrer"><img src='images/icons/aura.svg' alt="Aura finance"/></a></li>   
        </ol>
       </IntegrationList>
        <div>
          <h3>Quick and simple integration</h3>
          <SubTitle>Join a growing list of partners that have built a better experience for their users by integrating CoW Protocol.</SubTitle>

          <ButtonWrapper center>
            <Button href={url.apiDocs} label='Explore docs' target="_blank" rel="noopener nofollow" variant="light" />
            <Button href={'#'} label="Talk to us" target="_blank" rel="noopener nofollow" variant='textLight' />
          </ButtonWrapper>
        </div>
        </SectionContent>
      </Section >








      
      <Section flow={'column'} id="community" >
        <SectionContent>
        <div>
          <h3>Join the CoWmunity</h3>
          <SubTitle maxWidth={60}>Learn more about CoW Protocol, get support, and have your say in shaping the future of decentralized finance.</SubTitle>
          <SocialList social={social} />
        </div>
        </SectionContent>
      </Section >

      {/* <Separator/> */}
    </Layout >
  )
}


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const siteConfigData = siteConfig
  const { social } = siteConfig
  const { volumeUsd, volumeEth } = await cowSdk.cowSubgraphApi.getTotals()
  const trades = await getTotalTrades()
  const surplus = await getTotalSurplus()
  
  // const metricsData = [
  //   {label: "Total Volume", value: numberFormatter.format(+volumeUsd) + '+'},
    
  //   {label: "All Time Trades", value: numberFormatter.format(trades.totalCount) + '+'},

  //   // https://dune.xyz/gnosis.protocol/GPv2-Trader-Surplus
  //   //  Resonable + Unusual
  //   {label: "Surplus generated for users", value: "$64M+"}
  // ]


  return {
    props: {      
      metricsData: {
        totalVolume: numberFormatter.format(+volumeUsd) + '+',
        totalVolumeETH: numberFormatter.format(+volumeEth) + '+',

        tradesCount: numberFormatter.format(trades.totalCount) + '+',
        tradesCountLastModified: trades.lastModified.toISOString(),

        totalSurplus: numberFormatter.format(surplus.totalCount) + '+',
        totalSurplusLastModified: surplus.lastModified.toISOString()
      },
      siteConfigData
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}