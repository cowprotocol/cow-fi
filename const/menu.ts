import { siteConfig } from 'const/meta'
const {url, social} = siteConfig

export const mainMenu = [
  // { id: 0, title: 'About', url: '/#about'
  // items: [
  //   { id: 0, title: 'How it works', url: '/careers' },
  //   { id: 1, title: 'Careers', url: '/careers' },
  //   { id: 2, title: 'How it works', url: '/careers' },
  //   { id: 3, title: 'Careers', url: '/careers' },
  // ]
// },
  { id: 0, title: 'Developers', url: '/#developers'},
  { id: 1, title: 'Governance', url: social.forum.url, target: "_blank", rel: "noopener nofollow"},
  // { id: 0, title: 'Docs', url: url.docs, target: "_blank", rel: "noopener nofollow" },
  // { id: 1, title: 'Developers', url: '/#developers'},
  // { id: 1, title: 'About', url: '/#about' },
  // { id: 2, title: 'Community', url: social.discord.url, target: "_blank", rel: "noopener nofollow" },
  // { id: 3, title: 'Analytics', url: url.analytics, target: "_blank", rel: "noopener nofollow" },
  { id: 2, title: 'Careers', url: '/careers' },
]

export const footerMenu = [
  {
    id: 0, title: 'CoW Protocol', links: [      
      { title: 'Governance', url: 'https://snapshot.org/#/cow.eth', target: "_blank"  },
      { title: 'Forum', url: 'https://forum.cow.fi', target: "_blank"  },
      { title: 'Blog', url: 'https://medium.com/@cow-protocol', target: "_blank"  },
      { title: 'Analytics', url: url.analytics, target: "_blank" },
      { title: 'Careers', url: '/careers' },
      { title: 'Grants', url: url.grants, target: "_blank" },

      // { title: 'Sitemap', url: '/' },
    ]
  },
  {
    id: 0, title: 'About', links: [
      { title: 'CoW Protocol', url: '/#about' },
      { title: 'CoW Swap', url: 'https://swap.cow.fi/#/about', target: "_blank" },
      { title: 'CoW Swap FAQ', url: 'https://swap.cow.fi/#/faq', target: "_blank" },
    
      // { title: 'Sitemap', url: '/' },
    ]
  },
  {
    id: 1, title: 'Developers', links: [
      { title: 'Documentation', url: url.docs, target: "_blank" },
      { title: 'API Documentation', url: url.apiDocs, target: "_blank" },
      { title: 'GitHub', url: social.github.url, target: "_blank" },
      { title: 'Audit 1: G0 Group', url: 'https://github.com/gnosis/gp-v2-contracts/raw/main/audits/GnosisProtocolV2May2021.pdf' },
      { title: 'Audit 2: Hacken', url: 'https://github.com/gnosis/gp-v2-contracts/raw/main/audits/%5BCowswap_10122021%5DSCAudit_Report_2.pdf' },
      // { title: 'Bug bounty', url: '/' },
    ]
  },
  {
    id: 2, title: 'Support', links: [
      { title: 'Discord', url: social.discord.url, target: "_blank" },
      { title: 'Security portal', url: url.securityPortal, target: "_blank" },
      // TODO:
      // { title: 'Terms of service', url: '/' },
      // { title: 'Privacy Policy', url: '/' },
    ]
  },
]

