import Link from 'next/link'

type CustomLinkType = 'internal' | 'external'| 'external_untrusted'

export interface CustomLinkProps {
  url: string
  title: string, // TODO: label
  type?: CustomLinkType
  onClick?: () => void
}

function getAnchorRel(type?: CustomLinkType): { target?: string, rel?: string } {
  switch (type) {
    case 'external_untrusted':
      return {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      }

    case 'external':
      return {
        target: '_blank',
        rel: 'noopener'
      }
  }

  return {}
}

export function CustomLink(props: CustomLinkProps) {
  const { url, title, type='internal', onClick } = props
  const { rel, target } = getAnchorRel(type)
  return (
    <Link href={url}>
      <a 
        target={target} 
        rel={rel}
        onClick={onClick}>
          {title}
      </a>
    </Link>
  )
}