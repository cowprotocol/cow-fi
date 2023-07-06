import { useMemo } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { useUtm } from 'modules/utm'
import { addUtmToUrl, hasUtmCodes } from 'modules/utm/utils'

export function LinkWithUtm(p: React.PropsWithChildren<LinkProps>): JSX.Element {
  const { href, as, children, ...props } = p
  const utm = useUtm()

  const newHref = useMemo(() => {
    if (hasUtmCodes(utm) && typeof href === 'string') {
      return addUtmToUrl(href, utm)
    }
    return href
  }, [utm, href])

  return (
    <Link href={newHref} as={as} {...props}>
      {children}
    </Link>
  )
}
