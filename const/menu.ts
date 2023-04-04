import { CustomLinkProps } from '@/components/CustomLink'
import { CONFIG } from 'const/meta'
const { url, social } = CONFIG

export interface FooterLinkGroup {
  label: string
  links: CustomLinkProps[]
}

export const HEADER_LINKS: CustomLinkProps[] = [
  { label: 'Developers', url: '/#developers' },
  { label: 'Governance', url: social.forum.url, type: 'external_untrusted' },
  { label: 'Careers', url: '/careers' },
]

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    label: 'CoW Protocol',
    links: [
      { label: 'Governance', url: 'https://snapshot.org/#/cow.eth', type: 'external' },
      { label: 'Forum', url: 'https://forum.cow.fi', type: 'external' },
      { label: 'Blog', url: 'https://medium.com/@cow-protocol', type: 'external' },
      { label: 'Analytics', url: url.analytics, type: 'external' },
      { label: 'Careers', url: '/careers' },
      { label: 'Grants', url: url.grants, type: 'external' },
      { label: 'Explorer', url: url.explorer, type: 'external' },
    ],
  },
  {
    label: 'About',
    links: [
      { label: 'CoW Protocol', url: '/#about' },
      { label: 'CoW Swap', url: 'https://swap.cow.fi/#/about', type: 'external' },
      { label: 'CoW Swap FAQ', url: 'https://swap.cow.fi/#/faq', type: 'external' },
      {
        label: 'Brand Kit',
        url: 'https://cownation.notion.site/CoW-DAO-Brand-Kit-fe70d51a39df4229b7912cb7af3eb320',
        type: 'external',
      },
      { label: 'Terms and Conditions', url: 'https://swap.cow.fi/#/terms-and-conditions', type: 'external' },
      { label: 'Privacy Policy', url: 'https://swap.cow.fi/#/privacy-policy', type: 'external' },
      { label: 'Cookie Policy', url: 'https://swap.cow.fi/#/cookie-policy', type: 'external' },
    ],
  },
  {
    label: 'Developers',
    links: [
      { label: 'Documentation', url: url.docs, type: 'external' },
      { label: 'API Documentation', url: url.apiDocs, type: 'external' },
      { label: 'GitHub', url: social.github.url, type: 'external' },
      {
        label: 'Audit 1: G0 Group',
        url: 'https://github.com/gnosis/gp-v2-contracts/raw/main/audits/GnosisProtocolV2May2021.pdf',
        type: 'external_untrusted',
      },
      {
        label: 'Audit 2: Hacken',
        url: 'https://github.com/gnosis/gp-v2-contracts/raw/main/audits/%5BCowswap_10122021%5DSCAudit_Report_2.pdf',
        type: 'external_untrusted',
      },
      // { title: 'Bug bounty', url: '/' },
    ],
  },
  {
    label: 'Support',
    links: [
      { label: 'Discord', url: social.discord.url, type: 'external_untrusted' },
      { label: 'Security portal', url: url.securityPortal, type: 'external_untrusted' },
      // TODO:
      // { title: 'Terms of service', url: '/' },
      // { title: 'Privacy Policy', url: '/' },
    ],
  },
]
