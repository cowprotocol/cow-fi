import { useState, useEffect } from 'react'
import Router from 'next/router'
import ReactGA from 'react-ga4'
import { isMobile } from 'react-device-detect'

const trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

function initBraveAnalytics() {
  let params: any = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop as string),
  })

  if (params && params.utm_source) {
    document.cookie = `source=${params.utm_source};domain=.cow.fi;path=/`
  }

  if (params && params.utm_medium) {
    document.cookie = `medium=${params.utm_medium};domain=.cow.fi;path=/`
  }

  if (params && params.utm_campaign) {
    document.cookie = `campaign=${params.utm_campaign};domain=.cow.fi;path=/`
  }
}

function handleRouteChange(page_path: string) {
  console.log('[Analytics] Page view', page_path)
  ReactGA.send({ hitType: 'pageview', page_path })
}

function initializeAnalytics() {
  console.log('[Analytics] Tracking ID', trackingId)
  ReactGA.initialize(trackingId, {
    gaOptions: {
      storage: 'none',
      storeGac: false,
    },
  })
  ReactGA.set({
    anonymizeIp: true,
    customBrowserType: !isMobile
      ? 'desktop'
      : 'web3' in window || 'ethereum' in window
      ? 'mobileWeb3'
      : 'mobileRegular',
  })

  // Init brave analytics
  initBraveAnalytics()

  // Handle all route changes
  handleRouteChange(Router.pathname)
  Router.events.on('routeChangeComplete', handleRouteChange)
}

export function Analytics() {
  // Internal state
  const [analytics, setAnalytics] = useState({
    isInitialized: false,
  })

  // Use effect is used so the code is only executed client side (not server side)
  useEffect(() => {
    const { isInitialized } = analytics

    // Initialize Analytics
    if (trackingId && !isInitialized) {
      initializeAnalytics()
      setAnalytics((prev) => ({
        ...prev,
        isInitialized: true,
      }))
    }

    return () => {
      // clean up
      if (isInitialized) {
        Router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [analytics])

  return null
}
