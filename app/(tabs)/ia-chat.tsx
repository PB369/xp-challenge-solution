import { mainBalck, mainWhite } from '@/assets/colors/colors';
import Chat from '@/components/ChatPageComponents/Chat';
import ChatTextField from '@/components/ChatPageComponents/ChatTextField';
import TextButton from '@/components/ChatPageComponents/TextButton';
import { useAuth } from '@/context/AuthContext';
import { useUser } from '@/context/UserContex';
import '@/global.css';
import { Message } from '@/utils/types/messagesType';
import { PortfolioType } from '@/utils/types/portifolioType';
import { GoogleGenAI } from "@google/genai";
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function IAChat() {

  const [textValue, setTextValue] = useState("");
  const [showViewPortfolioBtn, setShowViewPortfolioBtn] = useState(false);
  const { user, changeUserProperty, setUser } = useUser();
  const GEMINI_API_KEY = "AIzaSyAsIdW9PJVgqMmfsgmzbo4pPx8D2sGVS7M";

  const sugestionValues: string[] = ["Crie um plano de investimento para 6 meses", "Estruture minha carteira", "Liste os ativos que estão rendendo mais", "Crie curso para iniciantes em investimento"];

  const verticalSugestions: string[] = ["Ativos com meu perfil", "Notícias recentes"];

  const [messages, setMessages] = useState<Message[]>([{
    role: "model",
    content: 
    `Você é um assistente financeiro integrado a um aplicativo de um projeto acadêmico.

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
    Valor inicial disponível: ${user?.initialAmount}
    Perfil de risco: ${user?.profileAssessment} (ex: conservador, moderado, agressivo)
    Parcela mensal da renda disponível para investir: ${user?.monthlyAmount}

    Responda sempre em JSON (ou seja, quero que sua resposta seja escrita em formato JSON) no seguinte formato:

    Se o usuário pedir criação de carteira, gere um modelo de exemplo (não precisa ser uma carteira de investimentos real) mas que corresponda a todo o seguinte exemplo:
    {
      "action": "create_portfolio",
      "portfolio": {
        "id": "c1",
        "ownerId": ${user?.username},
        "portfolioName": "Carteira personalizada",
        "createdAt": "2025-09-09T12:00:00Z",
        "updatedAt": "2025-09-09T12:00:00Z",
        "totalValue": 10000,
        "profile": "Conservador | Moderado | Agressivo",
        "investmentHorizon": "5 anos",
        "assets": [
          {
            "id": "a1",
            "assetName": "Tesouro Selic",
            "type": "Renda Fixa";,
            "percentageAllocation": 50,
            "expectedReturn": 9.0,
            "riskLevel": "Baixo",
            "liquidity": "D+1",
            "description": "Renda fixa pública com liquidez diária, ideal para reserva de emergência."
          },
          {
            "id": "a2",
            "name": "Fundos Imobiliários",
            "type": "Fundos Imobiliários",
            "percent": 20,
            "expectedReturn": 10.0,
            "riskLevel": "Médio",
            "liquidity": "Alta",
            "description": "Fundos que investem em imóveis e pagam rendimentos mensais."
          }
        ]
      }
    }

    Se for apenas conversa normal:
    {
      "action": "chat",
      "message": "Sua resposta em texto aqui..."
    }`
  }]);

  const [chat, setChat] = useState<Message[]>([]);

  const addPortfolio = (portfolio: PortfolioType) => {
    if(!user) return;
    const updatedPortfolios = [...(user.portfolios || []), portfolio];
    setUser({...user, portfolios: updatedPortfolios});
  }

  const send = async () => {
    if (!textValue.trim()) return;

    try {
      const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

      const userMessage: Message = { role: "user", content: textValue };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);

      const updatedChat = [...chat, userMessage];
      setChat(updatedChat);
      setTextValue("");

      const aiResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: updatedMessages.map(m => ({
          role: m.role,
          parts: [{ text: m.content }],
        })),
      });

      const responseText = aiResponse.text as string;

      let aiMessage: Message;

      try {
        const cleanedResponse = responseText.trim().replace(/^```json\s*/, '').replace(/```$/, '');

        const parsed = JSON.parse(cleanedResponse);
        console.log("Resposta:", parsed);

        if (parsed.action === "create_portfolio") {
          const portfolio: PortfolioType = parsed.portfolio;
          addPortfolio(portfolio);

          aiMessage = {
            role: "model",
            content: "Sua carteira de investimento foi criada! Clique no botão abaixo para acessá-la e visualizá-la."
          };
          setShowViewPortfolioBtn(true);

        } else if (parsed.action === "chat") {
          aiMessage = {
            role: "model",
            content: parsed.message
          };

        } else {
          aiMessage = {
            role: "model",
            content: responseText
          };
        }

      } catch {
        console.log("Parse falhou. Conteúdo: \n\n", responseText);
        aiMessage = {
          role: "model",
          content: responseText
        };
      }

      setMessages(prev => [...prev, aiMessage]);
      setChat(prev => [...prev, aiMessage]);

    } catch (err) {
      console.error("Erro ao enviar mensagem para IA:", err);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: mainBalck }}
      behavior={"padding"}
    >
        <View style={styles.contentHolder}>
          {chat.length === 0 && <View style={styles.verticalSugestions}>
            <Text style={styles.sugestionTitle}>Sobre o que você quer conversar hoje?</Text>
            {sugestionValues.map((value: string) => {
              return <TextButton
                key={value}
                text={value}
                style={styles.verticalSugestionButton}
                onClick={() => setTextValue(value)}
              />
            })}
          </View>}
          {chat.length > 0 && <Chat messages={chat} />}
          <View style={styles.horizontalSugestions}>
            {verticalSugestions.map((value: string) => {
              return (<TextButton key={value} text={value} style={styles.horizontalSugestionButton} onClick={() => setTextValue(value)} />);
            })}
          </View>
          <ChatTextField value={textValue} onChangeText={setTextValue} onSubmit={send} />
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  horizontalSugestions: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verticalSugestions: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  contentHolder: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 10,
  },
  horizontalSugestionButton: {
    marginHorizontal: 2,
    flex: 1
  },
  verticalSugestionButton: {
    marginBottom: 10,
    width: "89%"
  },
  sugestionTitle: {
    fontSize: 23,
    marginBottom: 20,
    color: mainWhite,
    textAlign: "center"
  }
});
