// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
// In the URL, using the nfd token 'BNB' is represented by 'ETH'
const getLiquidityUrlPathParts = ({ nfdTokenAdresses, nfdTokenSymbol, tokenAddresses }) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  const firstPart = nfdTokenSymbol === 'BNB' ? 'ETH' : nfdTokenAdresses[chainId]
  const secondPart = tokenAddresses[chainId]
  return `${firstPart}/${secondPart}`
}

export default getLiquidityUrlPathParts
