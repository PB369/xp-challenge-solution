import { Asset } from "../types/assetType";

export const assets: Asset[] = [
  {
    name: 'Tesouro IPCA + 2025',
    class: 'Renda fixa',
    profitability: '+5.9%',
    liquidity: 'D-1',
    walletPercentage: '30%',
    minValue: '1000',
    justification: 'Selecionamos o Tesouro IPCA+ 2029 para sua carteira porque ele oferece proteção contra a inflação possui baixo risco de crédito e é compatível com seu objetivo de longo prazo.',
    tags: [
      {
        iconName: 'checkV1-icon.png',
        content: 'Baixo Risco',
      },
      {
        iconName: 'checkV2-icon.png',
        content: 'Proteção Inflacionária',
      },
      {
        iconName: 'checkV1-icon.png',
        content: 'Alta Segurança',
      },
      {
        iconName: 'clock-icon.png',
        content: 'Ideal para prazos longos',
      },
    ],
    details: {
      issuing: 'Tesouro Nacional',
      indexer: 'IPCA + Juros Prefixados',
      expirationDate: '15/05/2029',
      typeRemunaration: 'Pós-Fixado Atrelado ao IPCA',
      paymentFrequency: 'Semestral',
    },
    externalResources: [
      {
        title: 'Tesouro Direto',
        source: 'https://www.tesourodireto.com.br/titulos/precos-e-taxas.htm',
      },
    ],
  },
  {
    name: 'Tesouro Selic 2027',
    class: 'Renda fixa',
    profitability: '+3.4%',
    liquidity: 'D+1',
    walletPercentage: '25%',
    minValue: '1000',
    justification: 'Selecionamos o Tesouro Selic 2027 para sua carteira porque ele oferece proteção contra a inflação possui baixo risco de crédito e é compatível com seu objetivo de longo prazo.',
    tags: [
      {
        iconName: 'checkV1-icon.png',
        content: 'Baixo Risco',
      },
      {
        iconName: 'checkV2-icon.png',
        content: 'Proteção Inflacionária',
      },
      {
        iconName: 'clock-icon.png',
        content: 'Ideal para prazos longos',
      },
      {
        iconName: 'checkV1-icon.png',
        content: 'Alta Segurança',
      },
    ],
    details: {
      issuing: 'Tesouro Nacional',
      indexer: 'IPCA + Juros Prefixados',
      expirationDate: '15/05/2029',
      typeRemunaration: 'Pós-Fixado Atrelado ao IPCA',
      paymentFrequency: 'Semestral',
    },
    externalResources: [
      {
        title: 'Tesouro Direto',
        source: 'https://www.tesourodireto.com.br/titulos/precos-e-taxas.htm',
      },
    ],
  },
  {
    name: 'Tesouro Direto Prefixado',
    class: 'Renda fixa',
    profitability: '+2.8%',
    liquidity: 'D+1',
    walletPercentage: '25%',
    minValue: '1000',
    justification: 'Selecionamos o Tesouro Direto Prefixado para sua carteira porque ele oferece proteção contra a inflação possui baixo risco de crédito e é compatível com seu objetivo de longo prazo.',
    tags: [
      {
        iconName: 'checkV2-icon.png',
        content: 'Proteção Inflacionária',
      },
      {
        iconName: 'checkV1-icon.png',
        content: 'Baixo Risco',
      },
      {
        iconName: 'checkV1-icon.png',
        content: 'Alta Segurança',
      },
      {
        iconName: 'clock-icon.png',
        content: 'Ideal para prazos longos',
      },
    ],
    details: {
      issuing: 'Tesouro Nacional',
      indexer: 'IPCA + Juros Prefixados',
      expirationDate: '15/05/2029',
      typeRemunaration: 'Pós-Fixado Atrelado ao IPCA',
      paymentFrequency: 'Semestral',
    },
    externalResources: [
      {
        title: 'Tesouro Direto',
        source: 'https://www.tesourodireto.com.br/titulos/precos-e-taxas.htm',
      },
    ],
  },
];
