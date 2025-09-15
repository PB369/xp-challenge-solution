export type PortfolioAssetType = {
  id: string;
  assetName: string;
  type: "Renda Fixa" | "Ações" | "Fundos Imobiliários" | "ETFs" | "Internacional" | "Caixa";
  percentageAllocation: number;
  expectedReturn: number;
  liquidity: string;
  description: string;
  whyThisAsset: string;

  profitability: string,
  benefitTags: string[],
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

export type PortfolioType = {
  id: string;
  ownerId: string;
  ownerProfile: "Conservador" | "Moderado" | "Agressivo";
  portfolioName: string;
  createdAt: string;
  updatedAt: string;
  investmentHorizon: string;
  totalValue: number;
  estimatedProfitability: string;
  generalRisk: string;
  assets: PortfolioAssetType[];
};