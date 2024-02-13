import React, { useState } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { CONFIG } from '@/const/meta'
import { Color, Font, TextColor } from 'styles/variables'
import {
  CardItem,
  CardWrapper,
  Section,
  SectionContent,
  SectionH1,
  SectionH3,
  SectionImage,
  SubTitle,
  Separator,
} from '@/components/Home/index.styles'
import Layout from '@/components/Layout'
import { FAQList } from '@/components/FAQList'
import { LinkWithUtm } from 'modules/utm'
import { Button, ButtonVariant, ButtonWrapper } from '@/components/Button'
import { sendGAEventHandler } from 'lib/analytics/sendGAEvent'
import { GAEventCategories } from 'lib/analytics/GAEvents'

const IMAGE_PATH = '/images/'

const CONTENT = {
  configuratorURL: 'https://widget.cow.fi/',
  calendlyURL: 'https://calendly.com/crystal-cow/cow-swap-widget',
  docsURL: 'https://docs.cow.fi/cow-protocol/tutorials/widget',
  howItWorksCards: [
    {
      image: `${IMAGE_PATH}cowamm-howitworks-1.svg`,
      description: 'Liquidity providers deposit tokens into protected CoW AMM liquidity pools',
    },
    {
      image: `${IMAGE_PATH}cowamm-howitworks-2.svg`,
      description: 'Solvers bid to rebalance CoW AMM pools whenever there is an arbitrage opportunity',
    },
    {
      image: `${IMAGE_PATH}cowamm-howitworks-3.svg`,
      description: 'The solver that offers the most surplus to the pool wins the right to rebalance the pool',
    },
    {
      image: `${IMAGE_PATH}cowamm-howitworks-4.svg`,
      description: 'CoW AMM eliminates LVR by capturing arbitrage value for LPs and shielding it from MEV bots',
    },
  ],
  feedbackPartners: [
    {
      title: (
        <>
          ﹣ Felix Leupold
          <br />
          <small>CTO at CoW Protocol</small>
        </>
      ),
      titleColor: 'cowammOrange',
      description: (
        <>
          &quot;This is an excellent application of batch auction theory to solve one of the most important problems in
          DeFi &quot;
        </>
      ),
    },
    {
      title: (
        <>
          ﹣ Fernando Martinelli <br /> <small>CEO at Balancer Labs</small>
        </>
      ),
      titleColor: 'cowammPurple',
      description: (
        <>
          &quot;Balancer is super excited to explore custom AMM designs like CoW AMM. MEV/LVR is the key problem holding
          LPs back from joining AMMs &quot;
        </>
      ),
    },
    {
      title: (
        <>
          ﹣ Martin Köppelman <br /> <small>CEO at Gnosis</small>
        </>
      ),
      titleColor: 'cowammPink',
      description: (
        <>
          &quot;If I knew we wouldn&apos;t suffer impermanent loss or LVR, I&apos;d be much more supportive of using
          treasury funds to provide liquidity for GNO &quot;
        </>
      ),
    },
    {
      title: (
        <>
          ﹣ Hasu <br /> <small>Strategy Lead at Flashbots</small>
        </>
      ),
      titleColor: 'cowammBlue',
      description: (
        <>
          {' '}
          &quot;CoW DAO has a lot of credibility building auction mechanisms that mitigate MEV. If someone is going to
          solve the LVR problem successfully, its them &quot;
        </>
      ),
    },
  ],
  featureItems: [
    {
      description: 'LP’s Deposit Funds in CoW AMM',
    },
    {
      description: 'Whenever solvers want to trade against the pools, they must provide liquidity',
    },
    {
      description: 'In each batch, the solver that provides the most liquidity gets to settle the trade',
    },
    {
      description:
        'The FM-AMM model of CoW AMM forces liquidity takers to compete for the right to settle trades, guaranteeing more returns for LPs than traditional AMMs',
    },
  ],
  faqContent: [
    {
      title: 'What is an AMM?',
      content:
        'An Automated Market Maker (AMM) is a type of decentralized exchange that relies on a mathematical formula to price assets instead of using an order book. It allows traders to exchange digital assets automatically by using liquidity pools rather than bid/ask order books. Users provide liquidity to these pools and earn trading fees in return, facilitating a self-sustaining trading environment.',
    },
    {
      title: 'What is a liquidity pool?',
      content:
        'A liquidity pool is a collection of reserves, or funds, that provide liquidity to a token-pair (for example, ETH-USDT). Each liquidity pool has exactly two tokens and all liquidity is evenly split so that the total liquidity value of each side of the token pair is equal at any given time.',
    },
    {
      title: 'What is a liquidity provider (LP)?',
      content:
        'A liquidity provider is an individual or entity that funds a liquidity pool with assets to facilitate trading on an AMM. By supplying assets to these pools, they enable traders to buy and sell assets without waiting for a counterparty. In return for their contribution, liquidity providers earn rewards generated from the transaction fees of the trades executed in the pool.',
    },
    {
      title: 'What is an arbitrageur?',
      content: (
        <>
          Since liquidity pools are unique to each AMM, they all trade the same assets at slightly different prices.
          Arbitrageurs are agents who are economically incentivized to trade on the price differences between various
          liquidity sources, including AMMs and traditional order book exchanges, capturing the arbitrage and profiting
          in the process. <br />
          <br />
          Unfortunately, the profits of arbitrageurs come at the expense of liquidity providers.
        </>
      ),
    },
    {
      title: 'What is a CF-AMM?',
      content: (
        <>
          The most basic types of AMMs are examples of “Constant Function” AMMs. CF-AMMs use the constant product
          function “x*y=k” to calculate the prices of the two assets in any given liquidity pool. As the supply of one
          asset is depleted, its price increases and vice versa. Thus, all trades on a CF-AMM can be mapped as trades
          that fit on the constant product function.
          <br />
          <br />
          <img
            src="/images/cowamm-graph-xyz.svg"
            alt="xyz graph"
            width="100%"
            style={{ maxWidth: '52rem' }}
            loading="lazy"
          />
        </>
      ),
    },
    {
      title: 'What is loss-versus-rebalancing (LVR)?',
      content:
        'LVR is a term for the cost that liquidity providers incur when exploited by arbitrageurs. When the price of an asset changes, arbitrageurs will rush to rebalance an AMM. The first arbitrageur reaching it will be able to trade with the AMM at an outdated price, therefore extracting profits. LVR is the main source of MEV and a major burden for the DeFi ecosystem. In fact, for the most liquid token pairs, liquidity-providing yields a net negative return after taking LVR losses into account.',
    },
    {
      title: 'What is an FM-AMM?',
      content:
        'The “Function-Maximizing” AMM is a novel AMM mechanism that tackles the shortcomings of the CF-AMM design and eliminates LVR. The FM-AMM batches trades together, executing all the orders in a batch at the same uniform clearing price. This price is such that the AMM “moves up the curve” with each trade. Since anyone can submit trades to the FM-AMM while its batch is open, competition between arbitrageurs guarantees that FM-AMM always trades at the correct, equilibrium price also in case of a rebalancing.',
    },
    {
      title: 'What is CoW AMM?',
      content:
        'CoW AMM is a production-ready implementation of an FM-AMM that supplies liquidity for trades made on CoW Protocol. Solvers compete with each other for the right to trade against the AMM. The winning solver is the one that moves the AMM curves higher.',
    },
    {
      title: 'Who can create a CoW AMM pool (and how)?',
      content: (
        <>
          Anyone can create a CoW AMM pool permissionlessly. To get started, check out our docs or get in touch with us
          via{' '}
          <a href={CONFIG.social.discord.url} target="_blank" rel="noreferrer nofollow">
            Discord
          </a>{' '}
          or{' '}
          <a href={CONFIG.social.twitter.url} target="_blank" rel="noreferrer nofollow">
            X
          </a>
          .
        </>
      ),
    },
    {
      title: 'What is a CoW AMM pool ideal for?',
      content:
        'CoW AMM pools are optimal for every token pair that is not stable-to-stable. Since volatility dictates the amount of LVR that takes place in any given liquidity pool, CoW AMM pools are most effective for volatile token pairs as LPs are protected from arbitrageurs.',
    },
  ],
}

const MAX_WIDTH_CONTENT = 126

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function CoWAMMPage({ siteConfigData }) {
  const { social } = siteConfigData

  // Filter out Discord/Forum social links
  let socialFiltered = {}
  Object.entries(social).forEach(([key, value]) => {
    if (key !== 'forum' && key !== 'github') {
      socialFiltered[key] = value
    }
  })

  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const handleFaqClick = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <Layout fullWidthCoWAMM>
      <Head>
        <title>CoW AMM - {siteConfigData.title}</title>
        <meta
          name="description"
          content={
            'The first MEV-Capturing AMM, brought to you by CoW DAO. CoW AMM eliminates LVR once and for all by using batch auctions to send surplus to LPs.'
          }
        />
      </Head>

      <Section
        gapMobile={4}
        fullWidth
        firstSection
        padding={'8rem 8rem 4rem'}
        paddingMobile={'0 2.4rem 4rem'}
        flow="column"
      >
        <SectionImage width={'460px'} widthMobile="90%" margin="0 auto">
          <img src={`${IMAGE_PATH}cowamm-header-logo-animated.gif`} alt="CoW AMM" width="100%" />
        </SectionImage>
        <SectionContent flow="column" maxWidth={MAX_WIDTH_CONTENT}>
          <div>
            <SectionH1
              color={Color.cowammWhite}
              fontSize={6.6}
              fontSizeMobile={3.6}
              fontWeight={500}
              maxWidth={100}
              margin={'0 auto 4rem'}
            >
              The first{' '}
              <TextColor italic color={'cowammLightPurple'}>
                MEV-Capturing AMM
              </TextColor>
              , brought to you by{' '}
              <TextColor italic color={'cowammYellow'}>
                CoW DAO
              </TextColor>
            </SectionH1>
            <Button
              onClick={sendGAEventHandler({
                category: GAEventCategories.COWAMM,
                action: 'Button click - Protect Your Liquidity',
              })}
              variant={ButtonVariant.COWAMM_LIGHTBLUE}
              href="#"
              paddingTB={3}
              paddingLR={4.2}
              paddingMobileLR={2}
              paddingMobileTB={1}
              borderRadius={0}
              fontSize={2.6}
              fontSizeMobile={2.1}
              fontWeight={500}
              label="Protect Your Liquidity"
            />
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-light'} flow="column" gap={14} paddingMobile={'7rem 2.4rem'}>
        <SectionContent
          flow={'row'}
          textAlign={'left'}
          gap={8}
          maxWidth={MAX_WIDTH_CONTENT}
          reverseOrderMobile={'column-reverse'}
        >
          <SectionImage>
            <img src={`${IMAGE_PATH}cowamm-illustration-lvr.svg`} alt="LVR" width="580" loading="lazy" />
          </SectionImage>
          <div className="container">
            <SectionH3 color={Color.cowammBlack} fontSize={6.4} fontWeight={500} font={Font.flecha}>
              AMMs don&apos;t want you to know about{' '}
              <TextColor italic color={'cowammBlue'}>
                LVR
              </TextColor>
            </SectionH3>
            <SubTitle lineHeight={1.4} textAlign={'left'} color={Color.cowammBlack} fontSize={2.9}>
              Liquidity providers expect their tokens to earn yield, but the dirty little secret of AMMs is that{' '}
              <b>most liquidity pools lose money</b>.
              <br />
              <br />
              In fact, <b>billions of dollars of LP funds are stolen by arbitrageurs every year</b>. These losses are
              known as loss-versus-rebalancing (LVR). LVR is a bigger source of MEV than{' '}
              <b>frontrunning and sandwich attacks combined</b>.
            </SubTitle>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-dark'} paddingMobile={'7rem 2.4rem'}>
        <SectionContent flow={'column'} maxWidth={MAX_WIDTH_CONTENT}>
          <div className="container">
            <SectionH3 color={Color.cowammWhite} fontSize={6.6} fontWeight={500} font={Font.flecha}>
              Finally, an AMM designed{' '}
              <TextColor italic color={'cowammLightOrange'}>
                with LPs in mind
              </TextColor>
            </SectionH3>
            <Separator bgColor={Color.cowammWhite} borderSize={0.2} margin={'2rem auto'} maxWidth={MAX_WIDTH_CONTENT} />
            <SubTitle lineHeight={1.4} fontSize={4} fontSizeMobile={2.4} textAlign={'left'} color={Color.cowammWhite}>
              CoW AMM eliminates LVR once and for all by using batch auctions to send surplus to LPs
            </SubTitle>

            <CardWrapper gap={3.2} horizontalGrid={4} margin={'2.4rem auto'}>
              {CONTENT.howItWorksCards.map(({ image, description }, index) => (
                <CardItem
                  variant={'cowamm-card-light'}
                  key={index}
                  imageFullSize
                  padding={0}
                  borderRadius={0}
                  fontSize={2.6}
                  fontSizeMobile={2.1}
                >
                  <img src={image} alt={description} loading="lazy" />
                  <p>{description}</p>
                </CardItem>
              ))}
            </CardWrapper>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-light-white'} flow="column" gap={14} paddingMobile={'7rem 2.4rem'}>
        <SectionContent
          flow={'row'}
          textAlign={'left'}
          gap={10}
          maxWidth={MAX_WIDTH_CONTENT}
          reverseOrderMobile={'column-reverse'}
        >
          <SectionImage>
            <video width="100%" src="/video/cowamm-raise-the-curve.mp4" autoPlay loop muted playsInline>
              Your browser does not support the video tag.
            </video>
          </SectionImage>

          <div className="container">
            <SectionH3 color={Color.cowammBlack} fontSize={6.6} fontWeight={500} font={Font.flecha}>
              Raising the <s>bar</s>{' '}
              <TextColor italic color={'cowammPurple'}>
                curve
              </TextColor>
            </SectionH3>

            <SubTitle lineHeight={1.4} textAlign={'left'} color={Color.cowammBlack} fontSize={2.8}>
              CoW AMM LPs don&apos;t have to worry about LVR, which <b>costs CFAMM LPs 5-7% of their returns</b>, on
              average.
              <br />
              <br />
              Additionally,{' '}
              <a
                onClick={sendGAEventHandler({
                  category: GAEventCategories.COWAMM,
                  action: 'Content link click - Backtesting research',
                })}
                href="https://arxiv.org/pdf/2307.02074v3.pdf"
                target="_blank"
                rel="noreferrer nofollow"
              >
                backtesting research
              </a>{' '}
              conducted over 6 months in 2023 shows that CoW AMM returns would have outperformed CFAMM returns
              absolutely for 10 of the 11 most-liquid, non-stablecoin pairs.
            </SubTitle>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-light'} flow="column" gap={8} paddingMobile={'7rem 2.4rem'}>
        <SectionH3 color={Color.cowammBlack} fontSize={6.4} fontWeight={500} font={Font.flecha} textAlign="center">
          CoW AMM benefits LPs of{' '}
          <TextColor italic color={'cowammPink'}>
            all types
          </TextColor>
        </SectionH3>

        <Separator bgColor={Color.cowammBlack} borderSize={0.2} maxWidth={MAX_WIDTH_CONTENT} />

        <SectionContent
          flow={'row'}
          textAlign={'left'}
          gap={10}
          maxWidth={MAX_WIDTH_CONTENT}
          reverseOrderMobile={'column-reverse'}
        >
          <SectionImage>
            <img src={`${IMAGE_PATH}cowamm-lping.svg`} alt="Liquidity providing" loading="lazy" />
          </SectionImage>
          <div className="container">
            <SectionH3 color={Color.cowammBlack} fontSize={4.4} fontWeight={500}>
              Support DAO token liquidity without the stick-up
            </SectionH3>

            <SubTitle lineHeight={1.4} textAlign={'left'} color={Color.cowammBlack} fontSize={2.9}>
              Healthy liquidity for DAO tokens reduces price impact, encourages investment and discourages volatility.
              But DAOs can be reluctant to provide liquidity with treasury funds when their pools can be exploited by
              arbitrageurs. CoW AMM makes providing liquidity more attractive to DAOs of all sizes.
            </SubTitle>
          </div>
        </SectionContent>

        <Separator bgColor={Color.cowammBlack} borderSize={0.2} maxWidth={MAX_WIDTH_CONTENT} />

        <SectionContent flow={'row'} textAlign={'left'} gap={10} maxWidth={MAX_WIDTH_CONTENT}>
          <div className="container">
            <SectionH3 color={Color.cowammBlack} fontSize={4.4} fontWeight={500} font={Font.circular}>
              Unlock the power of passive investing
            </SectionH3>

            <SubTitle lineHeight={1.4} textAlign={'left'} color={Color.cowammBlack} fontSize={2.9}>
              Passive investment strategies keep portfolios balanced and reduce risk, but pursuing these strategies with
              AMMs is much less attractive when rebalancing causes LVR. CoW AMM makes LP&apos;ing just as attractive for
              passive investors as staking or lending.
            </SubTitle>
          </div>
          <SectionImage>
            <img
              src={`${IMAGE_PATH}cowamm-passive-investing.svg`}
              alt="Unlock the power of passive investing"
              loading="lazy"
            />
          </SectionImage>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-light-white'} flow="column" gap={14} paddingMobile={'7rem 2.4rem'}>
        <SectionContent maxWidth={MAX_WIDTH_CONTENT} flow={'column'}>
          <div>
            <SectionH3 color={Color.cowammBlack} fontSize={6.6} fontWeight={500} font={Font.flecha}>
              Trust the{' '}
              <TextColor italic color={'cowammLightOrange'}>
                experts
              </TextColor>
            </SectionH3>

            <CardWrapper horizontalGrid={4} gap={6.2}>
              {CONTENT.feedbackPartners
                .filter(({ description }) => description)
                .map(({ description, title, titleColor }, index) => (
                  <CardItem
                    variant={'cowamm-card-dark'}
                    key={index}
                    imageHeight={5}
                    padding={0}
                    borderRadius={0}
                    fontSize={2.2}
                    fontSizeMobile={2.1}
                    equalHeight
                  >
                    <span>
                      <p style={{ margin: '0 auto 2.1rem' }}>{description}</p>
                      <TextColor color={titleColor as keyof typeof Color}>{title}</TextColor>
                    </span>
                  </CardItem>
                ))}
            </CardWrapper>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-dark'} paddingMobile={'7rem 2.4rem'}>
        <SectionContent flow={'column'}>
          <div className="container">
            <SectionH3 color={Color.cowammWhite} fontSize={6.6} fontWeight={500} font={Font.flecha}>
              Frequently asked{' '}
              <TextColor italic color={'cowammBlue'}>
                {' '}
                questions
              </TextColor>
            </SectionH3>

            <FAQList
              titleFontSize={4}
              titleFontSizeMobile={2.4}
              bodyFontSize={2.7}
              bodyFontSizeMobile={1.7}
              color={Color.cowammWhite}
            >
              {CONTENT.faqContent.map(({ title, content }, index) => (
                <details key={index}>
                  <summary onClick={handleFaqClick}>{title}</summary>
                  <div>{content}</div>
                </details>
              ))}
            </FAQList>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-light-white'} flow="column" gap={14} paddingMobile={'7rem 2.4rem'}>
        <SectionContent flow={'column'}>
          <div>
            <SectionH3 color={Color.cowammBlack} fontSize={6.6} fontWeight={500} font={Font.flecha}>
              Get started with{' '}
              <TextColor italic color={'cowammOrange'}>
                CoW AMM
              </TextColor>
            </SectionH3>

            <SubTitle fontSize={2.9} lineHeight={1.4} color={Color.cowammBlack} maxWidth={100}>
              Anyone can provide liquidity to CoW AMM by creating their own protected pools. Get in touch with the CoW
              DAO team if you&apos;d like to create a liquidity pool for any token pair.
            </SubTitle>

            <ButtonWrapper center>
              <LinkWithUtm
                href={CONTENT.docsURL}
                defaultUtm={{ ...CONFIG.utm, utmContent: 'widget-page-footerCTA-read-docs' }}
                passHref
              >
                <Button
                  onClick={sendGAEventHandler({
                    category: GAEventCategories.COWAMM,
                    action: 'Button click - Get in touch',
                  })}
                  variant={ButtonVariant.COWAMM_LIGHTBLUE}
                  href="#"
                  paddingTB={3}
                  paddingLR={4.2}
                  borderRadius={0}
                  fontSize={2.6}
                  fontSizeMobile={2.1}
                  fontWeight={500}
                  label="Get in touch"
                />
              </LinkWithUtm>
            </ButtonWrapper>
          </div>
        </SectionContent>
      </Section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const siteConfigData = CONFIG

  return {
    props: {
      siteConfigData,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
