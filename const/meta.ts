const API_BASE_URL = 'https://api.cow.fi'

export const CONFIG = {
  title: 'CoW Protocol',
  metatitle_tokenDetail: 'Live Token Price Chart & Metrics',
  description:
    'CoW Protocol finds the lowest prices from all decentralized exchanges and DEX aggregators & saves you more with p2p trading and protection from MEV ',
  descriptionShort: 'The smartest way to trade',
  url: {
    root: 'https://cow.fi',
    swap: 'https://swap.cow.fi',
    docs: 'https://docs.cow.fi',
    api: API_BASE_URL + '/mainnet',
    apiDocs: API_BASE_URL + '/docs',
    analytics: 'https://dune.com/cowprotocol/cowswap',
    explorer: 'https://explorer.cow.fi',
    securityPortal: 'https://app.chainpatrol.io/cow',
    grants: 'https://grants.cow.fi',
  },
  greenhouse: {
    api: 'https://boards-api.greenhouse.io/v1/boards/cowswap/jobs?content=true',
  },
  social: {
    twitter: { label: 'Twitter', account: '@CoWSwap', url: 'https://twitter.com/CoWSwap' },
    discord: { label: 'Discord', url: 'https://discord.com/invite/cowprotocol' },
    github: { label: 'GitHub', url: 'https://github.com/cowprotocol/' },
    forum: { label: 'Forum', url: 'https://forum.cow.fi/' },
  },
  tokenDisclaimer:
    'IMPORTANT DISCLAIMER: The information presented on the Interface, including hyperlinked sites, associated applications, forums, blogs, social media accounts, and other platforms, serves as general information sourced from third-party providers. We want to emphasise that we do not provide any warranties regarding the accuracy or up-to-dateness of the content. None of the content should be interpreted as financial, tax, legal, or any other type of advice. Your use or reliance on the content is entirely at your own discretion and risk. Before making any decisions, it is crucial that you undertake your own research, review, analysis, and verification of our content. Trading carries significant risks and can result in substantial losses, so it is advisable to consult your own legal, financial, tax, or other professional advisors prior to making any decisions. None of the content on the Interface is intended as a solicitation or offer.',
}
