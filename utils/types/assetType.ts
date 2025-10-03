export type AssetType = {
  name: string,
  class: string,
  profitability: string,
  liquidity: string,
  walletPercentage: string,
  minValue: string,
  justification: string,
  tags: {
    iconName: string,
    content: string
  }[],
  details: {
    issuing: string,
    indexer: string,
    expirationDate: string,
    typeRemunaration: string,
    paymentFrequency: string,
  },
  externalResources: {
    title: string,
    source: string,
  }[],
}
