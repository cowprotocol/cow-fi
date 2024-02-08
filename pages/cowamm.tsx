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
      icon: `${DAO_LOGOS_PATH}aave.svg`,
      title: 'Hasu',
      description: '"The CoW AMM is amazing, it’s going to revolutionize liquidity pools forever"',
      link: '#',
    },
    {
      icon: `${DAO_LOGOS_PATH}aave.svg`,
      title: 'Hasu',
      description: '"The CoW AMM is amazing, it’s going to revolutionize liquidity pools forever"',
      link: '#',
    },
    {
      icon: `${DAO_LOGOS_PATH}aave.svg`,
      title: 'Hasu',
      description: '"The CoW AMM is amazing, it’s going to revolutionize liquidity pools forever"',
      link: '#',
    },
    { icon: `${DAO_LOGOS_PATH}karpatkey.svg`, title: 'Karpatkey', link: 'https://www.karpatkey.com/' },
    { icon: `${DAO_LOGOS_PATH}maker.svg`, title: 'MakerDAO', link: 'https://makerdao.com/' },
    { icon: `${DAO_LOGOS_PATH}lido.svg`, title: 'Lido', link: 'https://lido.fi/' },
    { icon: `${DAO_LOGOS_PATH}yearn.svg`, title: 'Yearn', link: 'https://yearn.finance/' },
    { icon: `${DAO_LOGOS_PATH}gnosis.svg`, title: 'Gnosis', link: 'https://www.gnosis.io/' },
    { icon: `${DAO_LOGOS_PATH}synthetix.svg`, title: 'Synthetix', link: 'https://synthetix.io/' },
    { icon: `${DAO_LOGOS_PATH}balancer.svg`, title: 'Balancer', link: 'https://balancer.fi/' },
    { icon: `${DAO_LOGOS_PATH}aura.svg`, title: 'Aura', link: 'https://aura.finance/' },
    { icon: `${DAO_LOGOS_PATH}vitadao.svg`, title: 'VitaDAO', link: 'https://www.vitadao.com/' },
    { icon: `${DAO_LOGOS_PATH}polygon.svg`, title: 'Polygon', link: 'https://polygon.technology/' },
    { icon: `${DAO_LOGOS_PATH}pleasrdao.svg`, title: 'PleasrDAO', link: 'https://pleasr.org/' },
    { icon: `${DAO_LOGOS_PATH}olympus.svg`, title: 'Olympus', link: 'https://www.olympusdao.finance/' },
    { icon: `${DAO_LOGOS_PATH}dxdao.svg`, title: 'DxDAO', link: 'https://dxdao.eth.limo/' },
    { icon: `${DAO_LOGOS_PATH}mstables.svg`, title: 'mStables', link: 'https://mstable.org/' },
    { icon: `${DAO_LOGOS_PATH}index.svg`, title: 'Index', link: 'https://indexcoop.com/' },
    { icon: `${DAO_LOGOS_PATH}rhino.svg`, title: 'Rhino', link: 'https://rhino.fi/' },
    { icon: `${DAO_LOGOS_PATH}jpgd.svg`, title: 'JPGD', link: 'https://jpegd.io/' },
    { icon: `${DAO_LOGOS_PATH}benddao.svg`, title: 'BendDAO', link: 'https://www.benddao.xyz/' },
    { icon: `${DAO_LOGOS_PATH}alchemix.svg`, title: 'Alchemix', link: 'https://alchemix.fi/' },
    { icon: `${DAO_LOGOS_PATH}stargate.svg`, title: 'Stargate', link: 'https://stargate.io/' },
    { icon: `${DAO_LOGOS_PATH}shapeshift.svg`, title: 'ShapeShift', link: 'https://shapeshift.com/' },
    { icon: `${DAO_LOGOS_PATH}stakedao.svg`, title: 'StakeDAO', link: 'https://stakedao.org/' },
    { icon: `${DAO_LOGOS_PATH}cryptex.svg`, title: 'Cryptex', link: 'https://cryptex.finance/' },
    { icon: `${DAO_LOGOS_PATH}frax.svg`, title: 'Frax', link: 'https://frax.finance/' },
    { icon: `${DAO_LOGOS_PATH}dfx.svg`, title: 'DFX', link: 'https://dfx.finance/' },
    { icon: `${DAO_LOGOS_PATH}reflexer.svg`, title: 'Reflexer', link: 'https://www.reflexer.finance/' },
    { icon: `${DAO_LOGOS_PATH}citydao.svg`, title: 'CityDAO', link: 'https://citydao.io/' },
    { icon: `${DAO_LOGOS_PATH}threshold.svg`, title: 'Threshold', link: 'https://threshold.network/' },
    { icon: `${DAO_LOGOS_PATH}krausehouse.svg`, title: 'KrauseHouse', link: 'https://krausehouse.ca/' },
    { icon: `${DAO_LOGOS_PATH}tokenlon.svg`, title: 'Tokenlon', link: 'https://tokenlon.im/' },
    { icon: `${DAO_LOGOS_PATH}idle.svg`, title: 'Idle', link: 'https://idle.finance/' },
    { icon: `${DAO_LOGOS_PATH}teller.svg`, title: 'Teller', link: 'https://teller.finance/' },
    { icon: `${DAO_LOGOS_PATH}sherlock.svg`, title: 'Sherlock', link: 'https://sherlock.xyz/' },
    { icon: `${DAO_LOGOS_PATH}badgerdao.svg`, title: 'BadgerDAO', link: 'https://badger.finance/' },
    { icon: `${DAO_LOGOS_PATH}solace.svg`, title: 'Solace', link: 'https://solace.fi/' },
    { icon: `${DAO_LOGOS_PATH}dreamdao.png`, title: 'DreamDAO', link: 'https://dreamdao.io/' },
    { icon: `${DAO_LOGOS_PATH}ondo.svg`, title: 'Ondo', link: 'https://ondo.finance/' },
    { icon: `${DAO_LOGOS_PATH}abracadabra.png`, title: 'Abracadabra', link: 'https://abracadabra.money/' },
    { icon: `${DAO_LOGOS_PATH}aragon.svg`, title: 'Aragorn', link: 'https://aragon.org/' },
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
        'An Automated Market Maker (AMM) is a type of decentralized trading mechanism that relies on a mathematical formula to price assets instead of using an order book. It allows digital assets to be traded automatically by using liquidity pools rather than the bid/ask model of order books. Users provide liquidity to these pools and earn trading fees in return, facilitating a self-sustaining trading environment.',
    },
    {
      title: 'What is a liquidity pool?',
      content:
        'A liquidity pool is a collection of funds that provide liquidity to a token-pair (for example ETH-USDT). Each liquidity pool has exactly two tokens and all liquidity is evenly split so that the total liquidity value of each side of the token pair is equal at any given time.',
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
          in the process.
          <br />
          <br />
          Unfortunately, the profits of arbitrageurs come at the expense of liquidity providers.
        </>
      ),
    },
    {
      title: 'What is loss-versus-rebalancing (LVR)?',
      content:
        'LVR is a term for the opportunity cost that liquidity providers incur when exploited by arbitrageurs. It indicates how much liquidity providers have lost in value by providing liquidity to a liquidity pool versus taking advantage of arbitrage opportunities themselves across various exchanges (rebalancing.)\n\nLVR is a major source of price exploitation for the decentralized trading ecosystem. In fact, for the most liquid token pairs, liquidity-providing yields a net negative return after taking LVR losses into account.',
    },
    {
      title: 'What is a CF-AMM?',
      content:
        'The most basic types of AMMs are examples of “Constant Function” AMMs. This refers to the way in which assets are automatically rebalanced by the AMM in order to ensure that it always has enough liquidity to complete a trade. \n\nCF-AMMs use the constant product function “x*y=k” to calculate the prices of the two assets in any given liquidity pool. As the supply of one asset is depleted, its price increases and vice versa. Thus, all trades on a CF-AMM can be mapped as trades that fit on the constant product function.',
    },
    {
      title: 'What is an FM-AMM?',
      content:
        'The “Function-Maximizing” AMM is a novel AMM mechanism that tackles the shortcomings of the CF-AMM design and minimizes LVR losses by reducing arbitrage. \n\nFM-AMMs accept trades in batches where traders have to first provide liquidity in order to make a trade against the AMM. The AMM picks the trader from the batch who can provide the most liquidity to execute the trade, creating a “race to the bottom” competition for any traders looking to extract arbitrage.',
    },
    {
      title: 'What is the CoW AMM?',
      content:
        'The CoW AMM is a production-ready implementation of an FM-AMM that provides liquidity for trades on CoW Protocol. Bonded third parties known as “solvers” compete with each other to tap into the pool’s liquidity, creating a beneficial environment for liquidity providers.',
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
              Raising the <s>Bar</s> <TextItalic color={'cowammPurple'}>Curve</TextItalic>
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
          The CoW AMM Benefits LPs of <TextItalic color={'cowammPink'}>All Types </TextItalic>
        </SectionH3>

        <Separator bgColor={Color.cowammBlack} borderSize={0.2} />

        <SectionContent flow={'row'} textAlign={'left'} gap={10}>
          <SectionImage width={'55rem'}>
            <img src={`${IMAGE_PATH}cowamm-lping.svg`} alt="Liquidity providing" />
          </SectionImage>
          <div className="container">
            <SectionH3 color={Color.cowammBlack} fontSize={5.6} fontWeight={500}>
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
            <SectionH3 color={Color.cowammBlack} fontSize={5.6} fontWeight={500} font={Font.circular}>
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

      <Section fullWidth colorVariant={'dark'}>
        <SectionContent flow={'column'}>
          <div>
            <h3>Feedback & Partners</h3>

            {/* Only with a description text */}
            <CardWrapper maxWidth={85}>
              {CONTENT.feedbackPartners
                .filter(({ description }) => description)
                .map(({ description, icon, title, link }, index) => (
                  <CardItem key={index} variant="outlined-dark" gap={3.6} imageFullSize textCentered>
                    <span>
                      <p>{description}</p>
                      <b>- {title}</b>
                    </span>
                  </CardItem>
                ))}
            </CardWrapper>

            <CardWrapper maxWidth={85} horizontalGrid={8} horizontalGridMobile={4}>
              {CONTENT.feedbackPartners.map(({ icon, title, link }, index) => (
                <CardItem
                  key={index}
                  padding={1.2}
                  imageFullSize
                  variant="outlined-dark"
                  gap={3.6}
                  textCentered
                  contentCentered
                  className="iconOnly"
                >
                  <LinkWithUtm
                    href={link}
                    defaultUtm={{ ...CONFIG.utm, utmContent: `widget-page-partner-${title}` }}
                    passHref
                  >
                    <a href={link} target="_blank" rel="nofollow noreferrer" title={title}>
                      <img src={icon} alt={title} />
                    </a>
                  </LinkWithUtm>
                </CardItem>
              ))}
            </CardWrapper>
          </div>
        </SectionContent>
      </Section>

      <Section colorVariant={'white'} fullWidth>
        <SectionContent flow="column">
          <div className="container">
            <h3>FAQ</h3>

            <FAQList maxWidth={60}>
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
