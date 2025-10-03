import { useUser } from "@/context/UserContex";
import '@/global.css';
import { GEMINI_API_KEY } from "@/utils/geminiKey";
import { MessageType } from "@/utils/types/messagesType";
import { PortfolioType } from "@/utils/types/portifolioType";
import { GoogleGenAI } from "@google/genai";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

export default function CreateFirstPortfolio() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);
  const [created, setCreated] = useState(false);

  const addPortfolio = (portfolio: PortfolioType) => {
    if (!user) return;
    const updatedPortfolios = [...(user.portfolios || []), portfolio];
    setUser({ ...user, portfolios: updatedPortfolios });
  };

  useEffect(() => {
    const createPortfolio = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

        const systemMessage: MessageType = {
          role: "model",
          content: `
          Você é um assistente financeiro integrado a um aplicativo de um projeto acadêmico.

          Importante:
          - Sempre responda apenas com JSON válido.
          - Nunca adicione comentários, texto fora do JSON, explicações ou quebras de linha extras.
          - O JSON deve seguir exatamente um dos seguintes formatos:
          - Use linguagem acessível, evite jargões técnicos ou termos complexos sem explicação.
          - Mantenha o foco no que o usuário disse por último, sem repetir o histórico da conversa.
          - Seja objetivo, empático e profissional, como um educador financeiro experiente.

          Considere o seguinte contexto do usuário:
          Nome: ${user?.username}
          Nível de experiência: ${user?.experience}
          Objetivo financeiro: ${user?.goal}
          Horizonte de investimento: ${user?.timeOfInvestment}
          Perfil de risco: ${user?.profileAssessment} (ex: conservador, moderado, agressivo)
          Quantia mensal para investir: ${user?.monthlyAmount}

          Responda sempre em JSON (ou seja, quero que sua resposta seja escrita em formato JSON) no seguinte formato:

          Se o usuário pedir criação de carteira, gere um modelo de exemplo (não precisa ser uma carteira de investimentos real) mas que corresponda a todo o exemplo abaixo. Selecione apenas tipos de ativos (type) entre: "Renda Fixa", "Renda Variável", "Fundos de Investimentos", "Fundos Imobiliários" ou "ETFs". Escreva-os exatamente como está entre aspas. Em totalValue o valor deve ser obtido pela seguinte fórmula: ${user?.monthlyAmount} * (12 * quantidade de anos em investmentHorizon). Coloque apenas o valor desse cálculo.
          
          Aqui está um exemplo de como você deve responder:
          {
            "action": "create_portfolio",
            "portfolio": {
              "id": "c1",
              "ownerId": ${user?.username},
              "ownerProfile": ${user?.profileAssessment},
              "portfolioName": "Carteira personalizada",
              "createdAt": "2025-09-09T12:00:00Z",
              "updatedAt": "2025-09-09T12:00:00Z",
              "investmentHorizon": "5 anos",
              "totalValue": ${user?.monthlyAmount} * (12 * quantidade de anos em investmentHorizon),
              "estimatedProfitability": "+8.2% a.a",
              "generalRisk": "Alto" | "Médio" | "Baixo",
              "assets": [
                {
                  "id": "a1",
                  "assetName": "Tesouro Selic",
                  "type": "Renda Fixa",
                  "percentageAllocation": 50,
                  "expectedReturn": 9.0,
                  "liquidity": "D+1",
                  "description": "Renda fixa pública com liquidez diária, ideal para reserva de emergência.",
                  "whyThisAsset": "Selecionamos o Tesouro Selic para sua carteira porque ele oferece proteção contra a inflação, possui baixo risco de crédito e é compatível com seu objetivo de longo prazo.",
                  profitability: "+9.1%",
                  benefitTags: ["Proteção Inflacionária", "Ideal para prazos longos", "Baixo risco", "Alta segurança"],
                  details: {
                    issuing: "Tesouro Nacional",
                    indexer: "IPCA + juros prefixados",
                    expirationDate: "15/05/2029",
                    typeRemunaration: "Pós-fixado",
                    paymentFrequency: "Semestral",
                  },
                  externalResources: [{
                    title: "Tesouro IPCA",
                    source: "https://www.tesourodireto.com.br",
                  }],
                },
                {
                  "id": "b1",
                  "assetName": "ITUB4 - Itaú Unibanco",
                  "type": "Ações",
                  "percentageAllocation": 25,
                  "expectedReturn": 12.5,
                  "liquidity": "D+2",
                  "description": "Ações ordinárias do Itaú Unibanco, um dos maiores bancos da América Latina.",
                  "whyThisAsset": "O Itaú Unibanco foi selecionado pela sua forte presença no setor financeiro, histórico consistente de dividendos e boa governança corporativa.",
                  "profitability": "+11.3%",
                  "benefitTags": ["Facilidade de Negociação", "Alta liquidez", "Crescimento setorial"],
                  "details": {
                    "issuing": "Itaú Unibanco Holding S.A.",
                    "indexer": "Ibovespa",
                    "expirationDate": null,
                    "typeRemunaration": "Dividendos",
                    "paymentFrequency": "Trimestral"
                  },
                  "externalResources": [
                    {
                      "title": "Ações ITUB4",
                      "source": "https://www.b3.com.br"
                    },
                    {
                      "title": "Relatório Itaú",
                      "source": "https://www.itau.com.br/relacoes-com-investidores/"
                    }
                  ]
                }

              ]
            }
          }

          Se for apenas conversa normal:
          {
            "action": "chat",
            "message": "Sua resposta em texto aqui..."
          }
          `
        };

        const userMessage: MessageType = {
          role: "user",
          content: "Crie uma nova carteira de investimentos para mim"
        };

        const messages = [systemMessage, userMessage];

        const aiResponse = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: messages.map(m => ({
            role: m.role,
            parts: [{ text: m.content }],
          })),
        });

        const responseText = aiResponse.text as string;

        try {
          const cleanedResponse = responseText.trim()
            .replace(/^```json\s*/, '')
            .replace(/```$/, '');

          const parsed = JSON.parse(cleanedResponse);

          if (parsed.action === "create_portfolio") {
            const portfolio: PortfolioType = parsed.portfolio;
            addPortfolio(portfolio);
            setCreated(true);

            setTimeout(() => {
              router.replace("/(tabs)");
            }, 3000);
          } else {
            console.warn("IA não retornou action create_portfolio:", parsed);
          }
        } catch (err) {
          console.error("Falha ao parsear resposta da IA:", responseText);
        }

      } catch (error) {
        console.error("Erro ao criar carteira:", error);
      } finally {
        setLoading(false);
      }
    };

    createPortfolio();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-black px-8">
      {loading && !created && (
        <>
          <ActivityIndicator size="large" color="#FFD700" />
          <Text className="text-white mt-4 text-lg text-center">
            Criando sua primeira carteira de investimentos personalizada...
          </Text>
        </>
      )}

      {!loading && created && (
        <Text className="text-white font-semibold text-2xl text-center">
          Sua carteira foi criada! Aproveite esta nova jornada.
        </Text>
      )}
      
      {!loading && !created && (
        <View className="flex-col justify-center items-center w-full">
          <Text className="text-white font-semibold text-2xl text-center bg-red-700 p-4 rounded-md">
            Ops! Ocorreu um erro na criação de sua carteira.
          </Text>
          <Text className="text-white font-semibold text-xl text-center my-16">
            Você poderá tentar criar uma nova carteira com a ajuda do seu assistente de IA.
          </Text>
          <Pressable className="bg-[#FFD700] px-5 py-3 rounded-md" onPress={()=>router.replace("/(tabs)")}>
            <Text className="text-xl font-semibold">Ir para tela inicial</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
