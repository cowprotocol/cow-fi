
import Head from 'next/head'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useRef } from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { default as dark } from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';

import { getTotalTrades, getTotalSurplus } from 'services/dune'

// import { ExternalLink } from '@/const/styles/global'
import { siteConfig } from '@/const/meta'
import { Color } from 'const/styles/variables'

import Layout from '@/components/Layout'
import { ButtonWrapper } from '@/components/Button'
import { Section, SectionContent, SubTitle, SectionImage, Separator, IconList, IconListItem, Metrics, CheckList, StepWrapper, StepContainer, ApiWrapper, ApiTool, ApiCurlCommand, ApiParams } from '../const/styles/pages/index'
import SocialList from '@/components/SocialList'
import Button from '@/components/Button'

import { CowSdk } from '@cowprotocol/cow-sdk'
// import { intlFormat } from 'date-fns/esm';
import { GET_QUOTE } from '@/const/api';

const cowSdk = new CowSdk(1)
const numberFormatter = Intl.NumberFormat('en', { notation: 'compact' })
const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min


interface MetricsData {
  totalVolume: string
  totalTraders: string
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
          <SubTitle align={'left'} color={Color.text1} lineHeight={1.4}>CoW Protocol finds the lowest price for your trade across all exchanges and aggregators, such as Uniswap and 1inch – and protects you from MEV, unlike the others.</SubTitle>

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
        <p>CoW Protocol is the industry leader in protecting users from frontrunning and sandwich attacks – which lose traders millions of dollars every day. It does this by matching trades peer-to-peer, and leveraging batch auctions [→] so trade order becomes irrelevant.</p>
      </span>
    </IconListItem>

    <IconListItem icon="images/icons/savings.svg">
      <span>
        <b>Keep your surplus.</b>
        <p>If a price moves in your favor after you’ve placed an order, CoW Protocol gives you the price at the time of execution – unlike 1inch and other exchanges that pocket the difference for themselves.</p>
      </span>
    </IconListItem>

    <IconListItem icon="images/icons/sun.svg">
      <span>
        <b>Never pay for failed transactions.</b>
        <p>CoW Protocol never charges for failed transactions – unlike Uniswap, 1inch, and almost every other DEX or aggregator.</p>
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
          CoW Protocol batches orders, matches Coincidences of Wants <a href="https://docs.cow.fi/overview-1/coincidence-of-wants" target="_blank" rel="noreferrer">(CoWs)</a>, and auctions excess volume between every other DEX aggregator and AMM. That&apos;s how we make sure you always get the best price for your trade.
          </SubTitle>
          
          <StepWrapper>
            <StepContainer>
              <span>1</span>
              
              <img src="images/icons/funnel.svg" alt="funnel" />
  
              <p><b>Batch</b> CoW Protocol collects orders into “batches” every 5 minutes. We do this off-chain with signed messages so that we can find CoWs, collect fees in the sell tokens, and not charge for failed transactions.</p>
            </StepContainer>

            <StepContainer>
              <span>2</span>
              
              <img src="images/icons/p2p.svg" alt="Peer to Peer" />
              
              <p><b>Match</b> CoW Protocol&apos;s network of solving algorithms (“solvers”) search the batches for Coincidences of Wants. When we find a CoW, we execute the trade peer-to-peer, so you don&apos;t have to pay expensive AMM fees.</p>
            </StepContainer>

            <StepContainer>
              <span>3</span>
              
              <img src="images/icons/auction.svg" alt="batch auction" />
              
              <p><b>Solve</b> CoW Protocol&apos;s solvers then compete to find the best liquidity source for your trade – effectively auctioning the batch between all decentralized exchanges and aggregators. So the worst price you&apos;ll get with CoW Protocol is the best price available elsewhere.</p>
            </StepContainer>

            <StepContainer>
              <span>4</span>
              
              <img src="images/icons/dataProtection.svg" alt="On-chain MEV protection" />
              
              <p><b>Settle</b> CoW Protocol submits the batches on-chain and hides them in the mempool, so your trade is protected from manipulation (frontrunning and other forms of MEV) by miners and bots. Everyone in the batch gets the same price, and if the price improves after you submit your order, we pass the savings back to you.</p>
            </StepContainer>
          </StepWrapper>
        </div >
        </SectionContent>
      </Section >





      

      <Section ref={scrollToElRef} flow={'column'}>
        <SectionContent>  
        <div>
          <h3>Serious volume, serious savings.</h3>
          <SubTitle align="center">The most-seasoned DeFi pros trust CoW Swap to find the lowest prices possible and protect themselves from MEV.</SubTitle>
          <Metrics>
            <>
            <div>
              <b>${metricsData.totalVolume}</b>
              <i>Total Volume traded (USD)</i>
            </div>
            <div>
              <b>{metricsData.totalTraders}</b>
              <i>Unique accounts</i>
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

      
      




      <Section className='container' mediumSwitchOrder mobileSwitchOrder id="developers">
        <SectionContent>
        <ApiWrapper>
          <ApiTool>
            <h4>Get a price quote</h4>
            <p>Retrieve a price and fee quote for selling 10 WETH to buy USDC.</p>

            <ApiParams>
              <span><b>WETH</b><small>sellToken</small></span>
              <span><b>USDC</b><small>buyToken</small></span>
              <span><b>10</b><small>sellAmountBeforeFee</small></span>
            </ApiParams>

            <ApiCurlCommand>
              <SyntaxHighlighter language="json" style={dark} customStyle={{ margin: 0, borderRadius: '1.2rem' }}>
                {GET_QUOTE}
              </SyntaxHighlighter>
            </ApiCurlCommand>
          </ApiTool>
        </ApiWrapper>
        <div>
          <SectionImage centerMobile margin={"0 0 -4rem -1rem"} width={"10rem"} height={"10rem"}>
            <img loading="lazy" src="/images/icons/plug.svg" alt="Plug-n-play" />
          </SectionImage >

          <h3>Plug-n-play trading protocol with just a few lines of code</h3>
          <SubTitle>Directly interact with the CoW protocol to place, manage and settle your orders through a documented API interface.</SubTitle>

          <CheckList>
            <li>Fetch Quotes.</li>
            <li>Create and cancel limit orders.</li>
            <li>Manage orders across Ethereum, Rinkeby and Gnosis Chain.</li>
          </CheckList>

          <ButtonWrapper>
            <Button href={url.apiDocs} label='Explore API Docs' target="_blank" rel="noopener nofollow" />
            <Button href={url.docs} label="Documentation" target="_blank" rel="noopener nofollow" variant='white' />
          </ButtonWrapper>
        </div >
        </SectionContent>
      </Section >








      
      < Section flow={'column'} id="community" >
        <SectionContent>
        <div>
          <h3>Join the CoWmunity</h3>
          <SubTitle maxWidth={62}>Learn more about CoW Protocol, chat with the team, others in the community, and have your say in shaping the future of decentralized finance.</SubTitle>
          <SocialList social={social} />
        </div>
        </SectionContent>
      </Section >

      <Separator/>
    </Layout >
  )
}


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const siteConfigData = siteConfig
  const { social } = siteConfig
  const { volumeUsd, volumeEth, traders } = await cowSdk.cowSubgraphApi.getTotals()
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
        totalTraders: numberFormatter.format(+traders),

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