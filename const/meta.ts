const API_BASE_URL = "https://api.cow.fi"

export const CONFIG = {
  title: 'CoW Protocol',
  description: 'CoW Protocol finds the lowest prices from all decentralized exchanges and DEX aggregators & saves you more with p2p trading and protection from MEV ',
  descriptionShort: 'The smartest way to trade cryptocurrencies',
  url: {
    root: "https://cow.fi",
    swap: "https://swap.cow.fi",
    docs: "https://docs.cow.fi",
    api: API_BASE_URL + "/mainnet",
    apiDocs: API_BASE_URL + "/docs",
    analytics: "https://dune.com/cowprotocol/Gnosis-Protocol-V2",
    explorer: "https://explorer.cow.fi",
    securityPortal: "https://app.chainpatrol.io/cow",
    grants: "https://grants.cow.fi",
  },
  greenhouse: {
    api: "https://boards-api.greenhouse.io/v1/boards/cowswap/jobs?content=true"
  },
  social: {
    twitter: { label: 'Twitter', account: '@CoWSwap', url: 'https://twitter.com/CoWSwap' },
    discord: { label: 'Discord', url: 'https://discord.com/invite/cowprotocol' },
    github: { label: 'GitHub', url: 'https://github.com/cowprotocol/' },
    forum: { label: 'Forum', url: 'https://forum.cow.fi/' },
  }
}