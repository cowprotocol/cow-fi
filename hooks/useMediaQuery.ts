import React, { useState, useEffect } from 'react'
import { Media } from 'const/styles/variables'

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
      console.log(setMatches(media.matches))
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}

export const upToSmall = `(max-width: ${Media.smallScreen}px)`
export const MediumOnly = `(min-width: ${Media.smallScreenUp}px) and (max-width: ${Media.mediumEnd}px)`
export const upToMedium = `(max-width: ${Media.mediumEnd}px)`
export const LargeOnly = `(min-width: ${Media.mediumEnd + 1}px)`
