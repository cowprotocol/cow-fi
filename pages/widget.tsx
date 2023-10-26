import Head from 'next/head'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import { CONFIG } from '@/const/meta'
import { Media, Color, Font } from 'styles/variables'
import { Section, SectionH1, SectionContent, SubTitle, CardWrapper, CardItem } from '@/components/Home/index.styles'
import Layout from '@/components/Layout'
import { LinkWithUtm } from 'modules/utm'
import { Button, ButtonVariant } from '@/components/Button'
import SVG from 'react-inlinesvg'

const StickySectionTitle = styled.div`
  position: sticky;
  top: 12rem;
  margin: 0 auto auto;
`

const IMAGE_PATH = '/images/'
const DAO_LOGOS_PATH = '/images/dao-logos/'

const CONTENT = {
  everyBell: [
    {
      icon: `${IMAGE_PATH}icon-milkman.svg`,
      title: 'Full Protection from MEV',
      description:
        'CoW Swap offers the best MEV protection in the land. Thanks to a delegated trading model that relies on experts to execute swaps, traders can rest assured that they’re safe from the MEV bots.',
    },
    {
      icon: `${IMAGE_PATH}icon-twap-orders.svg`,
      title: 'Surplus-Capturing Orders',
      description:
        'Every order is surplus-capturing and traders usually earn a little extra in their sell token with each swap.',
    },
    {
      icon: `${IMAGE_PATH}icon-limit-orders.svg`,
      title: 'Gasless Trading',
      description:
        'All gas fees are paid in the sell token for swaps and even for token approvals. Users can enjoy ETH-free trading every time, even with brand-new wallets.',
    },
  ],
  trustedDAOs: [
    { icon: `${DAO_LOGOS_PATH}aave.svg`, title: 'Aave', link: 'https://aave.com/' },
    { icon: `${DAO_LOGOS_PATH}nexus.svg`, title: 'Nexus Mutual', link: 'https://nexusmutual.io/' },
    { icon: `${DAO_LOGOS_PATH}ens.svg`, title: 'ENS', link: 'https://ens.domains/' },
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
    { description: 'Live styling configurator', icon: `${IMAGE_PATH}icon-milkman.svg` },
    { description: 'Easy install - embeddable iFrame or React module', icon: `${IMAGE_PATH}icon-milkman.svg` },
    {
      description: (
        <>
          Configurable token lists <i>(coming soon)</i>
        </>
      ),
      icon: `${IMAGE_PATH}icon-milkman.svg`,
    },
    {
      description: (
        <>
          Custom-tailored fees <i>(coming soon)</i>
        </>
      ),
      icon: `${IMAGE_PATH}icon-milkman.svg`,
    },
    {
      description: 'External wallet management - use your own wallet connection',
      icon: `${IMAGE_PATH}icon-milkman.svg`,
    },
    {
      description: 'Internal wallet management - no wallet connection needed (coming soon)',
      icon: `${IMAGE_PATH}icon-milkman.svg`,
    },
    { description: 'Fully responsive, from 340px and up (coming soon)', icon: `${IMAGE_PATH}icon-milkman.svg` },
    { description: 'Feature-adaptive display (coming soon)', icon: `${IMAGE_PATH}icon-milkman.svg` },
  ],
}

const DATA_CACHE_TIME_SECONDS = 5 * 60 // Cache 5min

export default function WidgetPage({ siteConfigData }) {
  const { social } = siteConfigData

  // Filter out Discord/Forum social links
  let socialFiltered = {}
  Object.entries(social).forEach(([key, value]) => {
    if (key !== 'forum' && key !== 'github') {
      socialFiltered[key] = value
    }
  })

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Layout fullWidthGradientVariant={true}>
      <Head>
        <title>
          {siteConfigData.title} - {siteConfigData.descriptionShort}
        </title>
      </Head>

      <Section maxWidth={126} margin="-8rem auto 0">
        <SectionContent>
          <div>
            <SectionH1 fontSize={6.2} textAlign={'left'}>
              <b>Earn revenue by adding CoW Swap to your site</b>
            </SectionH1>
            <SubTitle color={Color.text1} fontSize={2} lineHeight={1.6} maxWidth={60} textAlign="left">
              The CoW Swap widget enables seamless trading directly from your website or dApp. Integrate the widget on
              any page and bring reliable, MEV-protected swaps to your users through CoW Protocol.
            </SubTitle>
            <Button href="#configure-widget" onClick={handleCTAClick} paddingLR={4.2} label="Configure widget" />
            <Button
              href="#docs"
              onClick={handleCTAClick}
              paddingLR={4.2}
              label="Read the docs"
              variant={ButtonVariant.TEXT}
            />
          </div>
        </SectionContent>

        <SectionContent flow="column">
          <div>
            {/* <img
              style={{ background: 'grey', borderRadius: '12px' }}
              src={`${IMAGE_PATH}widget.png`}
              alt="widget"
              width="100%"
            /> */}
            <iframe
              src={
                'https://swap-dev-git-widget-ui-15-cowswap.vercel.app/#/1/widget/swap/COW/WETH&sellAmount=1?theme=light'
              }
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        </SectionContent>
      </Section>

      <Section maxWidth={126}>
        <SectionContent flow="column">
          <div>
            <img
              style={{ borderRadius: '30rem' }}
              src={`${IMAGE_PATH}icon-logic.svg`}
              alt="easy to integrate"
              width="300"
              height="300"
            />
          </div>
        </SectionContent>
        <SectionContent flow={'column'}>
          <div className="container">
            <h3>Easy to Integrate</h3>
            <SubTitle color={Color.text1} lineHeight={1.4} maxWidth={70}>
              The CoW Swap widget is quick to install and easy to customize. Add the widget to your site in under 5
              minutes by copy-pasting a few lines of code.
            </SubTitle>
          </div>
        </SectionContent>
      </Section>

      <Section maxWidth={126}>
        <SectionContent flow={'column'}>
          <div className="container">
            <h3>Earn Revenue Through Your dApp</h3>
            <SubTitle color={Color.text1} lineHeight={1.4} maxWidth={70}>
              Enable a custom fee switch that allows you to collect revenue every time someone makes a trade through the
              CoW Swap widget. [more info]
            </SubTitle>
          </div>
        </SectionContent>
        <SectionContent flow="column" margin={'8rem auto 0'}>
          <div>
            <img
              style={{ borderRadius: '30rem' }}
              src={`${IMAGE_PATH}icon-buybacks.svg`}
              alt="earn revenue"
              width="300"
              height="300"
            />
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'dark'}>
        <SectionContent flow={'column'}>
          <div className="container">
            <h3>Every Bell, Whistle, and Moo</h3>
            <SubTitle lineHeight={1.4} maxWidth={70}>
              With the CoW Swap, you can offer your users everything you know and love about CoW Swap, and more. Oh, and
              yes… it does come with the “moo.”
            </SubTitle>

            <CardWrapper maxWidth={100} gap={3.8}>
              {CONTENT.everyBell.map((orderType, index) => (
                <CardItem key={index} imageHeight={8} imageRounded>
                  <img src={orderType.icon} alt="image" />
                  <h4>{orderType.title}</h4>
                  <p>{orderType.description}</p>
                </CardItem>
              ))}
            </CardWrapper>
          </div>
        </SectionContent>
      </Section>

      <Section maxWidth={126}>
        <SectionContent flow={'column'}>
          <StickySectionTitle>
            <h3>Everything You&apos;d Want in a Widget</h3>
            <SubTitle lineHeight={1.4} maxWidth={70} color={Color.text1}>
              With the CoW Swap, you can offer your users everything you know and love about CoW Swap, and more.
            </SubTitle>
          </StickySectionTitle>
        </SectionContent>
        <SectionContent flow="column">
          <div>
            <CardWrapper maxWidth={100} gap={1} horizontalGrid={1}>
              {CONTENT.featureItems.map((orderType, index) => (
                <CardItem key={index} imageHeight={4.8} imageRounded variant="iconWithText">
                  <img src={orderType.icon} alt="image" />
                  <p>{orderType.description}</p>
                </CardItem>
              ))}
            </CardWrapper>
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth colorVariant={'dark'}>
        <SectionContent flow={'column'}>
          <div>
            <h3>Trusted by the Best in the Field</h3>
            <SubTitle lineHeight={1.4} maxWidth={80}>
              As a trusted name in the DeFi ecosystem, CoW Protocol has handled almost $30 billion in trading volume.
              Whales and DAOs like Aave, ENS, and Gnosis execute their largest treasury swaps on the greener pastures of
              CoW Swap.
            </SubTitle>

            <CardWrapper maxWidth={85} horizontalGrid={8} horizontalGridMobile={4}>
              {CONTENT.trustedDAOs.map(({ icon, title, link }, index) => (
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
                  <LinkWithUtm href={link} defaultUtm={{ ...CONFIG.utm, utmContent: 'daos-page' }} passHref>
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

      <Section fullWidth>
        <SectionContent flow={'column'}>
          <div>
            <h3>Integrate in 5 Minutes or less</h3>

            <SubTitle color={Color.text1} fontSize={2.1} lineHeight={1.4} maxWidth={60} textAlign="left">
              Learn more about how CoW Protocol can help your [TBD].
            </SubTitle>

            <Button href="#configure-widget" onClick={handleCTAClick} paddingLR={4.2} label="Configure widget" />
            <Button
              href="#docs"
              onClick={handleCTAClick}
              paddingLR={4.2}
              label="Read the docs"
              variant={ButtonVariant.TEXT}
            />
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
