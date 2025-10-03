import { mainBalck, mainWhite } from '@/assets/colors/colors';
import Chat from '@/components/ChatPageComponents/Chat';
import ChatTextField from '@/components/ChatPageComponents/ChatTextField';
import TextButton from '@/components/ChatPageComponents/TextButton';
import { useUser } from '@/context/UserContex';
import '@/global.css';
import { GEMINI_API_KEY } from '@/utils/geminiKey';
import { portifolioGenerationPrompt } from '@/utils/portifolioGenerationPrompt';
import { MessageType } from '@/utils/types/messagesType';
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
  const [isResponseLoading, setIsResponseLoading] = useState(false);
  const { user, changeUserProperty, setUser } = useUser();

  const sugestionValues: string[] = ["Explique o que é um ativo financeiro", "Crie uma nova carteira de investimentos para mim", "Liste os ativos que estão rendendo mais", "Crie curso para iniciantes em Renda Fixa"];

  const verticalSugestions: string[] = ["Ativos com meu perfil", "Notícias recentes"];

  const [messages, setMessages] = useState<MessageType[]>([{
    role: "model",
    content: portifolioGenerationPrompt(user),
  }]);

  const [chat, setChat] = useState<MessageType[]>([]);

  const addPortfolio = (portfolio: PortfolioType) => {
    if(!user) return;
    const updatedPortfolios = [...(user.portfolios || []), portfolio];
    setUser({...user, portfolios: updatedPortfolios});
  }

  const send = async () => {
    if (!textValue.trim()) return;

    try {
      const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

      const userMessage: MessageType = { role: "user", content: textValue };

      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);

      const updatedChat = [...chat, userMessage];
      setChat(updatedChat);
      setTextValue("");

      setIsResponseLoading(true);
      setChat(prev => [
        ...prev,
        { role: "model", content: "<loading>" }
      ]);

      const aiResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: updatedMessages.map(m => ({
          role: m.role,
          parts: [{ text: m.content }],
        })),
      });

      const responseText = aiResponse.text as string;

      let aiMessage: MessageType;

      try {
        const cleanedResponse = responseText.trim().replace(/^```json\s*/, '').replace(/```$/, '');
        const parsed = JSON.parse(cleanedResponse);
        console.log("Resposta:", parsed);

        if (parsed.action === "create_portfolio") {
          const portfolio: PortfolioType = parsed.portfolio;
          addPortfolio(portfolio);

          aiMessage = {
            role: "model",
            content: "Sua carteira de investimento foi criada e está pronta para ser usada! Acesse a página Carteira para visualizá-la."
          };

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

      setChat(prev => {
        const withoutLoading = prev.filter(m => m.content !== "<loading>");
        return [...withoutLoading, aiMessage];
      });

      setMessages(prev => [...prev, aiMessage]);

    } catch (err) {
      console.error("Erro ao enviar mensagem para IA:", err);

      const errorMessage: MessageType = {
        role: "model",
        content: "Desculpe, estou enfrentando problemas técnicos e não consigo responder sua mensagem no momento. Tente novamente mais tarde."
      };

      setChat(prev => {
        const withoutLoading = prev.filter(m => m.content !== "<loading>");
        return [...withoutLoading, errorMessage];
      });

      setMessages(prev => [...prev, errorMessage]);
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
          {chat.length === 0 && <View style={styles.horizontalSugestions}>
            {verticalSugestions.map((value: string) => {
              return (<TextButton key={value} text={value} style={styles.horizontalSugestionButton} onClick={() => setTextValue(value)} />);
            })}
          </View>}
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
    paddingTop: 20,
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
