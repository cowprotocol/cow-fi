// import Link from 'next/link'
import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { siteConfig } from '@/const/meta'
import Content from 'components/Layout/Content'
import { Section, Title, SubTitle, TitleSmall, LinkContainer, LoadingText } from 'const/styles/pages/content'
import { ExternalLink } from '@/const/styles/global'
import SVG from 'react-inlinesvg'

async function getJobs() {
  const { api, deptID } = siteConfig.greenhouse
  const getJobs = await fetch(api)
  const { jobs } = await getJobs.json()
  const jobsData = []
  await jobs.map((job) => {
    const dept = job.departments[0]
    if (dept) {
      dept.id === deptID ? jobsData.push(job) : null
    }
  })

  return jobsData
}

export default function Jobs({ jobsData }) {
  const discordURL = siteConfig.social.discord.url
  const [jobs, setJobs] = useState(jobsData)
  const [isLoading, setLoading] = useState(false)

  // Fetch the latest jobs to possibly override static rendered (getStaticProps) SSR jobs
  useEffect(() => {
    setLoading(true)
    getJobs()
      .then((data) => {
        setJobs(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Content>
      <Section>
        <Title>Want to build the future of decentralized trading?</Title>
        <SubTitle>We are an ambitious, fast growing and international team working at the forefront of DeFi. We believe that we can make markets both more efficient and fair, by building the ultimate batch auction settlement layer across EVM compatible blockchains.</SubTitle>
      </Section>

      <TitleSmall>Who we are looking for:</TitleSmall>

      {isLoading && <LoadingText>Loading jobs...</LoadingText>}
      {!isLoading && jobs.length > 0 && jobs.map(({ title, absolute_url, location, internal_job_id }) =>
        <LinkContainer key={internal_job_id} href={absolute_url} target="_blank" rel="noopener nofollow noreferrer">
          <b>{title}</b>
          <i>{location.name}</i>
          <SVG src="images/icons/arrowRight.svg" cacheRequests={true} />
        </LinkContainer>
      )}

      {!isLoading && <p>{jobs.length < 1 && 'Currently there are no open positions. Convinced you can contribute to Cow Protocol?'}{jobs.length > 0 && "Can't find the position you're looking for?"} <ExternalLink href={discordURL} target="_blank" rel="noopener nofollow">Get in touch</ExternalLink></p>}

    </Content>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const jobsData = await getJobs()

  return {
    props: { jobsData },
    
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 3600 seconds (1 hour)
    revalidate: 3600, // In seconds
  }
}