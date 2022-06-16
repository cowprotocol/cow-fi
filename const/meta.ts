const API_BASE_URL = "https://api.cow.fi"

export const siteConfig = {
  title: 'CoW Protocol',
  description: 'CoW Protocol lets you swap assets MEV protected at the best exchange rate by leveraging its batch settlement layer built on top of AMMs and DEX Aggregators.',
  descriptionShort: 'Ethereum\'s MetaDEX Aggregator',
  url: {
    root: "https://cow.fi",
    swap: "https://cowswap.exchange",
    docs: "https://docs.cow.fi",
    api: API_BASE_URL + "/mainnet",
    apiDocs: API_BASE_URL + "/docs",
    analytics: "https://dune.xyz/gnosis.protocol/Gnosis-Protocol-V2",
    explorer: "https://explorer.cow.fi",
  },
  greenhouse: {
    api: "https://boards-api.greenhouse.io/v1/boards/cowswap/jobs?content=true"
  },
  social: {
    twitter: { label: 'Twitter', account: '@MEVprotection', url: 'https://twitter.com/mevprotection' },
    discord: { label: 'Discord', url: 'https://discord.com/invite/cowprotocol' },
    github: { label: 'GitHub', url: 'https://github.com/gnosis/gp-v2-contracts' },
    forum: { label: 'Forum', url: 'https://forum.cow.fi/' },
  }
}
