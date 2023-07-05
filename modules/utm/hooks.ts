import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

// import { useLocation, useNavigate } from 'react-router-dom'
import { NextRouter, useRouter } from 'next/router'
import { useParams } from 'next/navigation'

import { utmAtom } from './state'
import { UtmParams } from './types'
import { ParsedUrlQuery } from 'querystring'

const UTM_SOURCE_PARAM = 'utm_source'
const UTM_MEDIUM_PARAM = 'utm_medium'
const UTM_CAMPAIGN_PARAM = 'utm_campaign'
const UTM_CONTENT_PARAM = 'utm_content'
const UTM_TERM_PARAM = 'utm_term'

const ALL_UTM_PARAMS = [UTM_SOURCE_PARAM, UTM_MEDIUM_PARAM, UTM_CAMPAIGN_PARAM, UTM_CONTENT_PARAM, UTM_TERM_PARAM]

function getUtmParams(query: ParsedUrlQuery): UtmParams {
  const utmSource = (query[UTM_SOURCE_PARAM] as string) || undefined
  const utmMedium = (query[UTM_MEDIUM_PARAM] as string) || undefined
  const utmCampaign = (query[UTM_CAMPAIGN_PARAM] as string) || undefined
  const utmContent = (query[UTM_CONTENT_PARAM] as string) || undefined
  const utmTerm = (query[UTM_TERM_PARAM] as string) || undefined

  return {
    utmSource,
    utmMedium,
    utmCampaign,
    utmContent,
    utmTerm,
  }
}

export function useUtm(): UtmParams | undefined {
  return useAtomValue(utmAtom)
}

function cleanUpParams(router: NextRouter) {
  let cleanedParams = false
  const { query } = router
  ALL_UTM_PARAMS.forEach((param) => {
    if (query[param]) {
      delete query[param]
      cleanedParams = true
    }
  })

  if (cleanedParams) {
    // navigate({ pathname, search: searchParams.toString() }, { replace: true })
    console.log('UTM init replace', query)
    router.replace({ pathname: router.pathname, query })
  }
}

export function useInitializeUtm(): void {
  const router = useRouter()
  // const navigate = useNavigate()
  // const { search, pathname } = useLocation()

  // get atom setter
  const setUtm = useSetAtom(utmAtom)

  useEffect(
    () => {
      const utm = getUtmParams(router.query)
      if (utm.utmSource || utm.utmCampaign || utm.utmContent || utm.utmMedium || utm.utmTerm) {
        // Only overrides the UTM if the URL includes at least one UTM param
        setUtm(utm)
      }

      // Clear params from URL and redirect
      cleanUpParams(router)
    },
    // No dependencies: It only needs to be initialized once
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
}
