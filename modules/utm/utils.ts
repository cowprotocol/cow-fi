const UTM_SOURCE_PARAM = 'utm_source'
const UTM_MEDIUM_PARAM = 'utm_medium'
const UTM_CAMPAIGN_PARAM = 'utm_campaign'
const UTM_CONTENT_PARAM = 'utm_content'
const UTM_TERM_PARAM = 'utm_term'

const ALL_UTM_PARAMS = [UTM_SOURCE_PARAM, UTM_MEDIUM_PARAM, UTM_CAMPAIGN_PARAM, UTM_CONTENT_PARAM, UTM_TERM_PARAM]

// import { useLocation, useNavigate } from 'react-router-dom'
import { NextRouter } from 'next/router'
import { UtmParams } from './types'
import { ParsedUrlQuery } from 'querystring'
import { CONFIG } from '@/const/meta'

export function getUtmParams(query: ParsedUrlQuery): UtmParams {
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

export function cleanUpParams(router: NextRouter) {
  let cleanedParams = false
  const { query } = router
  ALL_UTM_PARAMS.forEach((param) => {
    if (query[param]) {
      delete query[param]
      cleanedParams = true
    }
  })

  if (cleanedParams) {
    router.replace({ pathname: router.pathname, query })
  }
}

export function hasUtmCodes(utm: UtmParams | undefined): boolean {
  if (!utm) return false

  return !!(utm.utmSource || utm.utmCampaign || utm.utmContent || utm.utmMedium || utm.utmTerm)
}

export function addUtmToUrl(href: string, utm: UtmParams): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : CONFIG.url.root
  const url = new URL(href, origin)

  if (utm.utmCampaign) {
    url.searchParams.set(UTM_CAMPAIGN_PARAM, utm.utmCampaign)
  }

  if (utm.utmContent) {
    url.searchParams.set(UTM_CONTENT_PARAM, utm.utmContent)
  }

  if (utm.utmMedium) {
    url.searchParams.set(UTM_MEDIUM_PARAM, utm.utmMedium)
  }

  if (utm.utmSource) {
    url.searchParams.set(UTM_SOURCE_PARAM, utm.utmSource)
  }

  if (utm.utmTerm) {
    url.searchParams.set(UTM_TERM_PARAM, utm.utmTerm)
  }

  const [hash = '', params = ''] = url.hash.split('?')
  const searchParams = (url.search && url.search.slice(1)) || ''
  const urlParams = params || searchParams ? `?${params}&${searchParams}` : ''

  return url.origin + hash + urlParams
}
