export type PortfolioAssetType = {
  id: string;
  assetName: string;
  type: "Renda Fixa" | "Ações" | "Fundos Imobiliários" | "ETFs" | "Internacional" | "Caixa";
  percentageAllocation: number;
  expectedReturn: number;
  riskLevel: "Baixo" | "Médio" | "Alto";
  liquidity: string;
  description: string;
}

export type PortfolioType = {
  id: string;
  ownerId: string;
  portfolioName: string;
  createdAt: string;
  updatedAt: string;
  totalValue: number;
  assets: PortfolioAssetType[];
  ownerProfile: "Conservador" | "Moderado" | "Agressivo";
  investmentHorizon: string;
  notes?: string;
};