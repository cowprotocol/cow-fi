import { useMemo } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { UtmParams, useUtm } from 'modules/utm'
import { addUtmToUrl, hasUtmCodes } from 'modules/utm/utils'

interface LinkWithUtmProps extends React.PropsWithChildren<LinkProps> {
  defaultUtm?: UtmParams
}

export function LinkWithUtm(p: LinkWithUtmProps): JSX.Element {
  const { href, as, children, defaultUtm, ...props } = p
  const utm = useUtm()

  const newHref = useMemo(() => {
    const utmAux = utm || defaultUtm
    if (hasUtmCodes(utmAux) && typeof href === 'string') {
      return addUtmToUrl(href, utmAux)
    }
    return href
  }, [utm, defaultUtm, href])

  return (
    <Link href={newHref} as={as} {...props}>
      {children}
    </Link>
  )
}
