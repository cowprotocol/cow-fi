import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

// import { useLocation, useNavigate } from 'react-router-dom'
import { useRouter } from 'next/router'

import { utmAtom } from './state'
import { UtmParams } from './types'
import { ParsedUrlQuery } from 'querystring'
import { cleanUpParams, getUtmParams, hasUtmCodes } from './utils'

export function useUtm(): UtmParams | undefined {
  return useAtomValue(utmAtom)
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
      if (hasUtmCodes(utm)) {
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
