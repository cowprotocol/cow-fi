import { LinkWithUtm } from 'modules/utm'
import Link from 'next/link'

type CustomLinkType = 'internal' | 'external' | 'external_untrusted'

export interface CustomLinkProps {
  url: string
  label: string // TODO: label
  type?: CustomLinkType
  utm?: boolean
  onClick?: () => void
}

function getAnchorRel(type?: CustomLinkType): { target?: string; rel?: string } {
  switch (type) {
    case 'external_untrusted':
      return {
        target: '_blank',
        rel: 'noopener noreferrer nofollow',
      }

    case 'external':
      return {
        target: '_blank',
        rel: 'noopener',
      }
  }

  return {}
}

export function CustomLink(props: CustomLinkProps) {
  const { url, label: title, type = 'internal', onClick, utm } = props
  const { rel, target } = getAnchorRel(type)
  const LinkComponent = utm ? LinkWithUtm : Link
  return (
    <LinkComponent href={url} passHref>
      <a target={target} rel={rel} onClick={onClick}>
        {title}
      </a>
    </LinkComponent>
  )
}
