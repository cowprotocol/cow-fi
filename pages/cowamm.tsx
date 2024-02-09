import Head from 'next/head'
import { GetStaticProps } from 'next'
import { CONFIG } from '@/const/meta'
import { Color, Font, TextItalic } from 'styles/variables'
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
import { WidgetEvents } from 'lib/analytics/GAEvents'

function expandFaq(event: any) {
  const question = event.currentTarget.innerHTML
}

const IMAGE_PATH = '/images/'
const DAO_LOGOS_PATH = '/images/dao-logos/'

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
      description: 'Solvers bid to rebalance these pools whenever there is an arbitrage opportunity',
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
      title: 'Felix Leupold, CTO at CoW Protocol',
      description: (
        <>
          &quot;This is an excellent application of batch auction theory to solve one of the most important problems in
          DeFi &quot;
        </>
      ),
    },
    {
      title: 'Fernando Martinelli, CEO at Balancer Labs',
      description: (
        <>
          &quot;Balancer is super excited to explore custom AMM designs like CoW AMM. MEV/LVR is the key problem holding
          LPs back from joining AMMs &quot;
        </>
      ),
    },
    {
      title: 'Martin Köppelman, CEO at Gnosis',
      description: (
        <>
          &quot;If I knew we wouldn&apos;t suffer impermanent loss or LVR, I&apos;d be much more supportive of using
          treasury funds to provide liquidity GNO &quot;
        </>
      ),
    },
    {
      title: 'Hasu, Strategy Lead at Flashbots',
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
      description: 'LP’s Deposit Funds in the CoW AMM',
    },
    {
      description: 'Whenever solvers want to trade against the pools, they must provide liquidity',
    },
    {
      description: 'In each batch, the solver that provides the most liquidity gets to settle the trade',
    },
    {
      description:
        'The FM-AMM model of the CoW AMM forces liquidity takers to compete for the right to settle trades, guaranteeing more returns for LPs than traditional AMMs',
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
      content:
        'Since liquidity pools are unique to each AMM, they all trade the same assets at slightly different prices. Arbitrageurs are agents who are economically incentivized to trade on the price differences between various liquidity sources, including AMMs and traditional order book exchanges, capturing the arbitrage and profiting in the process. Unfortunately, the profits of arbitrageurs come at the expense of liquidity providers.',
    },
    {
      title: 'What is a CF-AMM?',
      content:
        'The most basic types of AMMs are examples of “Constant Function” AMMs. CF-AMMs use the constant product function “x*y=k” to calculate the prices of the two assets in any given liquidity pool. As the supply of one asset is depleted, its price increases and vice versa. Thus, all trades on a CF-AMM can be mapped as trades that fit on the constant product function.',
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
      title: 'What is the CoW AMM?',
      content:
        'The CoW AMM is a production-ready implementation of an FM-AMM that supplies liquidity for trades made on CoW Protocol. Solvers compete with each other for the right to trade against the AMM. The winning solver is the one that moves the AMM curves higher.',
    },
    {
      title: 'Who can create a CoW AMM pool (and how)?',
      content:
        'Anyone can create a CoW AMM pool permissionlessly. To get started, check out our docs or get in touch with us via Discord or X.',
    },
    {
      title: 'What is a CoW AMM pool ideal for?',
      content:
        'CoW AMM pools are optimal for every token pair that is not stable-to-stable. Since volatility dictates the amount of LVR that takes place in any given liquidity pool, CoW AMM pools are most effective for volatile token pairs as LPs are protected from arbitrageurs.',
    },
  ],
}

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

  return (
    <Layout fullWidthCoWAMM>
      <Head>
        <title>
          {siteConfigData.title} - {siteConfigData.descriptionShort}
        </title>
      </Head>

      <Section fullWidth firstSection padding={'8rem 8rem 4rem'} paddingMobile={'0 2.4rem 4rem'}>
        <SectionContent flow="column">
          <div>
            <img
              src={`${IMAGE_PATH}cow-amm-logo-light.svg`}
              alt="CoW AMM"
              width="430"
              style={{ margin: '0 1.6rem 4rem', maxWidth: '100%' }}
            />
            <SectionH1 color={Color.cowammWhite} fontSize={6.6} fontWeight={500} maxWidth={100}>
              The first <TextItalic color={'cowammLightPurple'}>MEV-Capturing AMM</TextItalic>, brought to you by{' '}
              <TextItalic color={'cowammYellow'}>CoW DAO</TextItalic>
            </SectionH1>
            <SubTitle color={Color.cowammWhite} fontSize={2.7} lineHeight={1.4} maxWidth={60}>
              CoW AMM uses batch auctions to maximize LP returns and solve the LVR problem for good.
            </SubTitle>
            <Button
              variant={ButtonVariant.COWAMM_LIGHTBLUE}
              href="#"
              paddingTB={3}
              paddingLR={4.2}
              borderRadius={0}
              fontSize={2.6}
              label="Protect Your Liquidity"
            />
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-light'} flow="column" gap={14}>
        <SectionContent flow={'row'} textAlign={'left'}>
          <SectionImage>
            <img src={`${IMAGE_PATH}cowamm-illustration-lvr.svg`} alt="Make Money with CoW Swap" width="580" />
          </SectionImage>
          <div className="container">
            <SectionH3 color={Color.cowammBlack} fontSize={6.4} fontWeight={500} font={Font.flecha}>
              AMMs don&apos;t want you to know about <TextItalic color={'cowammBlue'}>LVR</TextItalic>
            </SectionH3>
            <SubTitle lineHeight={1.4} textAlign={'left'} color={Color.cowammBlack} fontSize={2.9}>
              Liquidity providers expect their tokens to earn yield, but the dirty little secret of AMMs is that most
              liquidity pools lose money.
              <br />
              <br />
              In fact, billions of dollars of LP funds are stolen every year by arbitrageurs engaging in
              loss-versus-rebalancing (LVR), a type of MEV that&apos;s responsible for more value loss than frontrunning
              and sandwich attacks combined.
            </SubTitle>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-dark'}>
        <SectionContent flow={'column'}>
          <div className="container">
            <SectionH3 color={Color.cowammWhite} fontSize={6.6} fontWeight={500} font={Font.flecha}>
              Finally, an AMM designed <TextItalic color={'cowammLightOrange'}>with LPs in mind</TextItalic>
            </SectionH3>
            <Separator bgColor={Color.cowammWhite} borderSize={0.2} margin={'2rem auto'} />
            <SubTitle lineHeight={1.4} fontSize={4.8} textAlign={'left'} color={Color.cowammWhite}>
              CoW AMM eliminates LVR once and for all by using batch auctions to send surplus to LPs
            </SubTitle>

            <CardWrapper gap={3.2} horizontalGrid={4} margin={'2.4rem auto'}>
              {CONTENT.howItWorksCards.map(({ image, description }, index) => (
                <CardItem
                  variant={'cowamm-card'}
                  key={index}
                  imageHeight={5}
                  padding={0}
                  borderRadius={0}
                  fontSize={2.8}
                >
                  <img src={image} alt="image" />
                  <p>{description}</p>
                </CardItem>
              ))}
            </CardWrapper>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-light-white'} flow="column" gap={14}>
        <SectionContent flow={'row'} textAlign={'left'} gap={10}>
          <SectionImage width={'55rem'}>
            <img src={`${IMAGE_PATH}cowamm-raising-the-curve.svg`} alt="Make Money with CoW Swap" />
          </SectionImage>
          <div className="container">
            <SectionH3 color={Color.cowammBlack} fontSize={10} fontWeight={500} font={Font.flecha}>
              Raising the <s>bar</s> <TextItalic color={'cowammPurple'}>curve</TextItalic>
            </SectionH3>

            <SubTitle lineHeight={1.4} textAlign={'left'} color={Color.cowammBlack} fontSize={2.9}>
              According to backtesting across the most liquid non-stablecoin markets, FM-AMM models outperform CFAMM
              making LP&apos;ing profitable again for even the most liquid tokens.
            </SubTitle>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-light'} flow="column" gap={8}>
        <SectionH3 color={Color.cowammBlack} fontSize={6.4} fontWeight={500} font={Font.flecha} textAlign="center">
          The CoW AMM Benefits LPs of <TextItalic color={'cowammPink'}>all types</TextItalic>
        </SectionH3>

        <Separator bgColor={Color.cowammBlack} borderSize={0.2} />

        <SectionContent flow={'row'} textAlign={'left'} gap={10}>
          <SectionImage width={'55rem'}>
            <img src={`${IMAGE_PATH}cowamm-lping.svg`} alt="Liquidity providing" />
          </SectionImage>
          <div className="container">
            <SectionH3 color={Color.cowammBlack} fontSize={4.4} fontWeight={500}>
              Liquidity providing done right — even for volatile tokens
            </SectionH3>

            <SubTitle lineHeight={1.4} textAlign={'left'} color={Color.cowammBlack} fontSize={2.9}>
              LVR is bad for LPs, but it&apos;s even worse for DAOs and crypto projects releasing tokens as most of the
              liquidity they provide goes to arbitrageurs rather than remaining available for token holders.
            </SubTitle>
          </div>
        </SectionContent>

        <Separator bgColor={Color.cowammBlack} borderSize={0.2} />

        <SectionContent flow={'row'} textAlign={'left'} gap={10}>
          <div className="container">
            <SectionH3 color={Color.cowammBlack} fontSize={4.4} fontWeight={500} font={Font.circular}>
              Unlock the power of passive investing
            </SectionH3>

            <SubTitle lineHeight={1.4} textAlign={'left'} color={Color.cowammBlack} fontSize={2.9}>
              With LVR in the rearview mirror, major liquidity pools earn 5%+ in APY, making liquidity providing just as
              attractive for passive investors as staking or providing loans.
            </SubTitle>
          </div>
          <SectionImage width={'55rem'}>
            <img src={`${IMAGE_PATH}cowamm-passive-investing.svg`} alt="Unlock the power of passive investing" />
          </SectionImage>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-light-white'} flow="column" gap={14}>
        <SectionContent flow={'column'}>
          <div>
            <SectionH3 color={Color.cowammBlack} fontSize={10} fontWeight={500} font={Font.flecha}>
              Trust the <TextItalic color={'cowammLightOrange'}>experts</TextItalic>
            </SectionH3>

            <CardWrapper horizontalGrid={4} gap={3.2}>
              {CONTENT.feedbackPartners
                .filter(({ description }) => description)
                .map(({ description, title }, index) => (
                  <CardItem key={index} variant="outlined-dark" gap={3.6} imageFullSize textCentered>
                    <span>
                      <p>{description}</p>
                      <b>- {title}</b>
                    </span>
                  </CardItem>
                ))}
            </CardWrapper>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'cowamm-dark'}>
        <SectionContent flow={'column'}>
          <div className="container">
            <SectionH3 color={Color.cowammWhite} fontSize={6.6} fontWeight={500} font={Font.flecha}>
              Frequently Asked <TextItalic color={'cowammBlue'}> Questions</TextItalic>
            </SectionH3>

            <FAQList titleFontSize={4.4} bodyFontSize={2.7} color={Color.cowammWhite}>
              {CONTENT.faqContent.map(({ title, content }, index) => (
                <details key={index}>
                  <summary onClick={expandFaq}>{title}</summary>
                  <div>{content}</div>
                </details>
              ))}
            </FAQList>
          </div>
        </SectionContent>
      </Section>

      <Section>
        <SectionContent flow="column">
          <div className="container">
            <h3>Get Started with the CoW AMM</h3>

            <SubTitle lineHeight={1.4} maxWidth={80} color={Color.text1}>
              Start setting up (open) your CoW Pool and build on top of CoW Pools
            </SubTitle>

            <ButtonWrapper center>
              <b>Provide liquidity</b>
              <LinkWithUtm
                href={CONTENT.calendlyURL}
                defaultUtm={{ ...CONFIG.utm, utmContent: 'widget-page-footerCTA-talk-to-us' }}
                passHref
              >
                <Button
                  onClick={sendGAEventHandler(WidgetEvents.TALK_TO_US)}
                  paddingLR={4.2}
                  label="Read the Docs"
                  target="_blank"
                  rel="noopener nofollow"
                />
              </LinkWithUtm>

              <b>Trade against the CoW AMM</b>
              <LinkWithUtm
                href={CONTENT.docsURL}
                defaultUtm={{ ...CONFIG.utm, utmContent: 'widget-page-footerCTA-read-docs' }}
                passHref
              >
                <Button
                  onClick={sendGAEventHandler(WidgetEvents.READ_DOCS)}
                  target="_blank"
                  rel="noopener nofollow"
                  paddingLR={4.2}
                  label="Get In Touch"
                  variant={ButtonVariant.TEXT}
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
