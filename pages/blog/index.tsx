import Layout from '@/components/Layout'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Button } from '@/components/Button'
import {
  Section,
  SectionContent,
  SubTitle,
  CardWrapper,
  CardItem,
  SectionImage,
} from '@/components/Home/index.styles'

import { CONFIG } from '@/const/meta'
import { Color } from '@/styles/variables'
import { Article, getArticles } from 'services/cms'
import { ArticleList } from '@/components/Article'

import { LinkWithUtm } from 'modules/utm'
import { IMAGE_PATH } from '@/const/paths'
import SocialList from '@/components/SocialList'

const DATA_CACHE_TIME_SECONDS = 10 * 60 // 10 minutes

export interface BlogProps {
  articles: Article[]
}

const CATEGORIES = [
  {
    icon: `${IMAGE_PATH}/icon-milkman.svg`,
    title: 'Category 1',
    description: (
      <>
        Category 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis purus quam. In eu magna in felis dictum maximus.
      </>
    ),
  },
  {
    icon: `${IMAGE_PATH}/icon-twap-orders.svg`,
    title: 'Category 2',
    description:
      'Category 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis purus quam. In eu magna in felis dictum maximus.',
  },
  {
    icon: `${IMAGE_PATH}/icon-limit-orders.svg`,
    title: 'Category 3',
    description:
      "Category 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis purus quam. In eu magna in felis dictum maximus.",
  },
  {
    icon: `${IMAGE_PATH}/icon-price-walls.svg`,
    title: 'Category 4',
    description:
      'Category 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis purus quam. In eu magna in felis dictum maximus.',
  },
  {
    icon: `${IMAGE_PATH}/icon-basket-sells.svg`,
    title: 'Category 5',
    description: (
      <>
        Category 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis purus quam. In eu magna in felis dictum maximus.
      </>
    ),
  },
  {
    icon: `${IMAGE_PATH}/icon-logic.svg`,
    title: 'Category 6',
    description:
      'Category 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis purus quam. In eu magna in felis dictum maximus.',
  },
]



export default function BlogPage({ articles }: BlogProps) {
  return (    
    <Layout fullWidthGradientVariant={true}>
      <Head>
        <title>Blog - {CONFIG.title}</title>
      </Head>
      <Section fullWidth padding="0 8rem 14rem 8rem">
        <SectionContent flow="column">
          <div className="container">
            <h3>Learn</h3>
            <SubTitle color={Color.text1} lineHeight={1.4} maxWidth={70}>
              Read the latest articles about this vibrant ecosystem.
            </SubTitle>

            <CardWrapper maxWidth={100}>
              {CATEGORIES.map((orderType, index) => (
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

      <Section fullWidth colorVariant={'dark-gradient'} flow="column" gap={14}>
        <SectionContent flow={'row'} maxWidth={100} textAlign={'left'}>
          <div className="container">
            <h3>Show me the code!</h3>
            <SubTitle lineHeight={1.4} textAlign={'left'}>
              If you are developer who likes to learn by doing, here is great place to start!
            </SubTitle>

            <Button href="https://learn.cow.fi" target='_blank' rel="noopener nofollow" paddingLR={4.2} fontSizeMobile={2.1} label="Interactive tutorials" />
            
          </div>
          <SectionImage>
          <img src={`${IMAGE_PATH}/eth-blocks.svg`} alt="Integrate With Ease" width="340" height="214" />
          </SectionImage>
        </SectionContent>        
      </Section>

      <Section fullWidth colorVariant={'white'} flow="column" gap={14}>
        <SectionContent flow={'row'} maxWidth={100} textAlign={'left'}>
        <div className="container">
            <h3>Latest articles</h3>
            <SubTitle lineHeight={1.4} textAlign={'left'}>
              Every week we publish new articles about CoW Dao ecosystem. Stay tuned!
            </SubTitle>

            <ArticleList articles={articles} />
          </div>
        </SectionContent>
      </Section>

      <Section fullWidth>
        <SectionContent flow={'column'}>
          <div>
            <h3>Get in touch</h3>
            <SubTitle maxWidth={60} color={Color.text1} lineHeight={1.4}>
              You would like to suggest or even make your own article, reach out on Twitter or Discord!
            </SubTitle>
            <SocialList social={CONFIG.social} color={Color.darkBlue} />
          </div>
        </SectionContent>
      </Section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const articles = await getArticles()

  return {
    props: {
      articles,
    },
    revalidate: DATA_CACHE_TIME_SECONDS,
  }
}
