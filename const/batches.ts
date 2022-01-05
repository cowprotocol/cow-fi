import { siteConfig } from '@/const/meta'

const { url } = siteConfig

export const batches = [
  /*
    CASE: Full Cow
        General:
          * Tx = https://etherscan.io/tx/0x691d1a8ba39c036e841b6e2ed970f9068ac4a27b61955afb852f11019f2ff4d8 
          * Volume = 465,511.8$
          * Ether (USD Price): 126,269.27 / 29.365191402650919378 = 4,299.9641401486
          * Gas Price: 85.173846253+4.19 = 89.363846253
      
        SushiSwap
          NOTE: For gas estimation in Sushiswap, I used https://etherscan.io/tx/0xb66d8bd17e93aad6f9b95a842f0d4ab7025bad8e4ac4cf306a092d72208ce1df 
          Cost of a single trade in Sushiswap (WETH-USDC):
              * Gas: 134,047              
              * Gas cost per trade Sushiswap = (134,047 * 89.363846253 * 1e-9) * 4,299.9641401486 = 51.51$
              * Gas cost Sushiswap = 51.51 * 4 = 206.04$              
              * Sushiswap Fee (if traded in Uni) = 0.003 * (113,968.38  + 117,950.22  + 116,796.60 + 116,796.60) = 1,396.5354$
              * Volume = 2,864.66$
              * Percentage = 100 * 2,864.66 / 465,511.8 = 0.6153786005%
        
        CoW
              * Sushiswap Fee payed = 0.003 * 2,875.93 = 8.62$
              * Total Fee (USD) = (56450951 + 8729604) * 1e-6  + 4,299.9641401486 * (14440256938094260 + 17350550384232480)*1e-18 = $201.87
              * Fee per trade = 50.4675$
              * Total saved = (1396.5354 - 8.62) + (206.04  - 201.87) = 1,392.0854$
              * Solvers payed Fee = $169.06
              * Solvers profited = 201.87 - 169.06 = 32.81$
  */
  {
    id: 1,
    label: 'Full CoW',
    summary: "The users traded 99.39% peer-to-peer, the remaining is executed in Sushiswap",
    description: "Traders would have payed 1,396$ of liquidity fee in Sushiswap, instead they payed 8$",
    link: {
      label: 'View on Etherscan',
      url: 'https://etherscan.io/tx/0x691d1a8ba39c036e841b6e2ed970f9068ac4a27b61955afb852f11019f2ff4d8'
    },
    visual: 'images/cow-graph-fullCow.png',
    bars: [

      { id: 4, network: 'COW', percent: 100 },
    ],
    metrics: [{
      label: 'Trades',
      value: '4'
    }, {
      label: 'Saved fees',
      value: '$1,392.0854'
    }]
  },

  /*
  CASE: Partial Cow
        Used for calculations: https://dune.xyz/queries/38617/76300
        General:
          * Tx = https://etherscan.io/tx/0x172bddae0015331f4b357905ff7995389597a38294a00b4b13e90c1d70884785
          * Trades: 26
          * Tokens involved: 7
          * Volume = 11,384.51$
          * Gas: = 2,297,936
          * Tx cost = 696.17$
          * Ether (USD Price): 1,422.18 / 0.484793298289219619 = 2,933.5801567776
          * Gas Price = 108.239868575
          * Gas per user = 2,297,936/27 = 85,108.7407407407
        
        Volumes:
            Total Volume = 11,384.51
            Sushiswap
              * Volume = 106.26 + 1353.13 = 1,459.39$
              * Percentage = 100 * 1,459.39 / 11,384.51 = 12.81%
            Uniswap Volume
              * Volume = 981.03 + 1,553.34 + 581.09 = 3,115.46$
              * Percentage = 100 * 3,115.46 / 11,384.51 = 27.36%
            CoW Volume
              * Volume = 11,384.51 - 1,459.39 - 3,115.46 = 6,809.66$
              * Percentage = 100 - 12.81 - 27.36 = 59.83%
            

      
        SushiSwap and Uniswap gas costs, I assume they are equal, since they are forks
          NOTE: For gas estimation I used https://etherscan.io/tx/0xb66d8bd17e93aad6f9b95a842f0d4ab7025bad8e4ac4cf306a092d72208ce1df 
          Cost of a single trade in Sushiswap (WETH-USDC):
              * Gas: 134,047              
              * Gas cost per trade Sushiswap = (134,047 * 108.239868575 * 1e-9) * 2,933.5801567776 = 42.5639882291
              * Gas cost Sushiswap/Uniswap together = 1,106.6636939566$
              * Liquidity Fees (that would have payed if traded) = 0.003 * 11,384.51 = 34.15353
              * Improvement of gas compared to sushiswap = 100 * (134,047 - 85,108) / 134,047 = 36.5088364529%
        
            
        
        CoW
              * Sushiswap Fee (if traded in Uni) = 0.003 * 1,459.39 = 4.37817$
              * Uniswap Fee (if traded in Uni) = 0.003 * 3,115.46 = 9.34638$
              * Total Fee (USD) = 173.99$            
              * Total saved = 1,106.6636939566 + 34.15353 - 173.99 - 4.37817 - 9.34638 = 953.1026739566
              * Solvers payed Fee = 
              * Solvers profited = 
              * 
  */
  {
    id: 2,
    label: 'Partial CoW',
    summary: "The more traders, the more savings",
    description: "The batch costed 2,297,936 gas, but it was split among 27 traders. This reduced the gas from 134K to 85K per trade.",
    link: {
      label: 'View on Etherscan',
      url: 'https://etherscan.io/tx/0xc9761a9e40258065df485236fd6105d6d3678e46c80a0130c5c1f3f6d9e560a9'
    },
    metrics: [{
      label: 'Trades',
      value: 27
    }, {
      label: 'Gas cost',
      value: '36% cheaper'
    }],
    visual: 'images/cow-graph-partialCow.png',
    bars: [
      { id: 1, network: 'SUSHI', percent: 12.81 },
      { id: 2, network: 'UNIV2', percent: 27.36 },
      { id: 4, network: 'COW', percent: 59.83 },
    ]
  },


  /*
  CASE: No CoW
    This case is simpler to analyze. Only one trader, big volume, there's surplus 
  */
  {
    id: 3,
    label: 'No CoW',
    summary: "Even if you trade alone, you are protected",
    description: "This 8.2M trade had some slippage tolerance that could have been MEV extracted. In case of extraction, it's payed by the solvers, same applies for the fees in case the transaction reverts.",    
    link: {
      label: 'View on CoW Explorer',
      url: url.explorer + '/orders/0xe264084cb8fd111f0af766548d934444d5740602a9bcc4aa0689a7016307ff9ca0f75491720835b36edc92d06ddc468d201e9b7361877c8d',
    },
    metrics: [{
      label: 'Volume',
      value: '8.2M'
    }, {
      label: 'Surplus',
      value: '$3,176.63'
    }],
    visual: 'images/cow-graph-noCow.png',
    bars: [
      { id: 1, network: 'CURVE', percent: 100 }
    ]
  }
]