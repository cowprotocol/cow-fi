import { CustomLinkProps } from '@/components/CustomLink'
import { CONFIG } from 'const/meta'
const {url, social} = CONFIG

export interface FooterLinkGroup {
  title: string,
  links: CustomLinkProps[]
}

export const HEADER_LINKS: CustomLinkProps[] = [
  { title: 'Developers', url: '/#developers'},
  { title: 'Governance', url: social.forum.url, type: 'external_untrusted'},
  { title: 'Careers', url: '/careers' },
]

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'CoW Protocol', links: [      
      { title: 'Governance', url: 'https://snapshot.org/#/cow.eth', type: 'external'  },
      { title: 'Forum', url: 'https://forum.cow.fi', type: 'external'  },
      { title: 'Blog', url: 'https://medium.com/@cow-protocol', type: 'external'  },
      { title: 'Analytics', url: url.analytics, type: 'external' },
      { title: 'Careers', url: '/careers' },
      { title: 'Grants', url: url.grants, type: 'external' },
      { title: 'Explorer', url: url.explorer, type: 'external' },
    ]
  },
  {
    title: 'About', links: [
      { title: 'CoW Protocol', url: '/#about' },
      { title: 'CoW Swap', url: 'https://swap.cow.fi/#/about', type: 'external' },
      { title: 'CoW Swap FAQ', url: 'https://swap.cow.fi/#/faq', type: 'external' },
    ]
  },
  {
    title: 'Developers', links: [
      { title: 'Documentation', url: url.docs, type: 'external' },
      { title: 'API Documentation', url: url.apiDocs, type: 'external' },
      { title: 'GitHub', url: social.github.url, type: 'external' },
      { title: 'Audit 1: G0 Group', url: 'https://github.com/gnosis/gp-v2-contracts/raw/main/audits/GnosisProtocolV2May2021.pdf', type: 'external_untrusted' },
      { title: 'Audit 2: Hacken', url: 'https://github.com/gnosis/gp-v2-contracts/raw/main/audits/%5BCowswap_10122021%5DSCAudit_Report_2.pdf', type: 'external_untrusted' },      
      // { title: 'Bug bounty', url: '/' },
    ]
  },
  {
    title: 'Support', links: [
      { title: 'Discord', url: social.discord.url, type: 'external_untrusted' },
      { title: 'Security portal', url: url.securityPortal, type: 'external_untrusted' },
      // TODO:
      // { title: 'Terms of service', url: '/' },
      // { title: 'Privacy Policy', url: '/' },
    ]
  },
]

