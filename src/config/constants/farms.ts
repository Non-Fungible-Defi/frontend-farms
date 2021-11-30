import contracts from './contracts'
import { FarmConfig, NFDToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'NFD-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x07C62CA5015FF03305286adbA70c9f9dbE60A973',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    nfdTokenSymbol: NFDToken.USDT,
    nfdTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'NFD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x98392e1559572F078bbdC7c063e681f059eA58F2',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    nfdTokenSymbol: NFDToken.BNB,
    nfdTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'NFD',
    lpAddresses: {
      97: '',
      56: '0x07C62CA5015FF03305286adbA70c9f9dbE60A973', // EGG-BUSD LP
    },
    tokenSymbol: 'NFD',
    tokenAddresses: {
      97: '',
      56: '0x4523a56bC22Cba0784e28fF63fB17e1CD9Aa7C1A',
    },
    nfdTokenSymbol: NFDToken.USDT,
    nfdTokenAdresses: contracts.usdt,
  }
]

export default farms
