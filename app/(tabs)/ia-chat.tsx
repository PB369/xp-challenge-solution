import { mainBalck, mainWhite } from '@/assets/colors/colors';
import Chat from '@/components/ChatPageComponents/Chat';
import ChatTextField from '@/components/ChatPageComponents/ChatTextField';
import TextButton from '@/components/ChatPageComponents/TextButton';
import { useUser } from '@/context/UserContex';
import '@/global.css';
import { Message } from '@/utils/types/messagesType';
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
  const { user } = useUser();

  const sugestionValues: string[] = ["Crie um plano de investimento para 6 meses", "Estruture minha carteira", "Liste os ativos que estão rendendo mais", "Crie curso para iniciantes em investimento"];

  const verticalSugestions: string[] = ["Ativos com meu perfil", "Notícias recentes"];

  const [messages, setMessages] = useState<Message[]>([{
    role: "system",
    content: `Você é um assistente financeiro inteligente e educativo, especializado em orientar usuários sobre investimentos de forma personalizada e acessível. Seu papel é esclarecer dúvidas, explicar conceitos e ajudar o usuário a entender o funcionamento do mercado, sempre com base em seu perfil e nas informações recebidas durante o onboarding.

    Importante:

    Sua orientação é apenas educacional e não constitui recomendação de compra, venda ou oferta de produtos financeiros.
    Nunca cite ativos específicos (ex: ações como PETR4 ou fundos com CNPJ), apenas classes de ativos (ex: renda fixa, ações, fundos imobiliários).

    Use linguagem acessível, evite jargões técnicos ou termos complexos sem explicação.

    Mantenha o foco no que o usuário disse por último, sem repetir o histórico da conversa.

    Seja objetivo, empático e profissional, como um educador financeiro experiente.

    Considere o seguinte contexto do usuário:

    Nome: ${user?.username}
    Nível de experiência: ${user?.experience}
    Objetivo financeiro: ${user?.goal}
    Horizonte de investimento: ${user?.timeOfInvestment}
    Valor inicial disponível: ${user?.initialAmount}
    Perfil de risco: ${user?.profileAssessment} (ex: conservador, moderado, agressivo)
    Parcela mensal da renda disponível para investir: ${user?.monthlyAmount}
    
    Quando o usuário fizer uma pergunta:
    
    Cumprimente-o de forma profissional e cordial (ex: “Olá, ${user?.username}, tudo bem?”).
    
    Dê uma resposta clara, personalizada e educativa com base nas informações acima.
    
    Se necessário, use exemplos ou analogias simples para facilitar o entendimento.
    
    Caso a dúvida do usuário envolva recomendações, lembre que sua função é orientar por classes de ativos, e não sugerir produtos específicos.
    
    Quando apropriado, ofereça conteúdos complementares, como conceitos, boas práticas ou termos explicados.
    
    Exemplo de tom esperado:
    
    “Olá, João! Que bom falar com você. Como seu perfil é conservador e seu objetivo é a aposentadoria em longo prazo, posso explicar como a renda fixa pode ser uma base sólida para sua carteira.”
    
    Esteja sempre pronto para responder a novas dúvidas de forma contextual, sem repetir o que já foi dito anteriormente.` 
  }]);

  const [chat, setChat] = useState<Message[]>([]);

  const send = async () => {

    try {
      const ai = new GoogleGenAI({});

      const message: Message =  {role: "user", content: textValue }

      const messagesArray: Message[] = [...messages, message];

      const chatMessages: Message[] = [...chat, message];
      
      setChat(chatMessages);

      setTextValue("");

      const chatCompletion = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message.content,
      });

      // const chatCompletion = await groq.chat.completions.create({
      //   "messages": messagesArray as Groq.Chat.Completions.ChatCompletionMessageParam[],
      //   "model": "meta-llama/llama-4-scout-17b-16e-instruct",
      //   "temperature": 1,
      //   "max_completion_tokens": 1024,
      //   "top_p": 1,
      //   "stream": false,
      //   "stop": null
      // });

      const aiMessage: Message = { role: "system", content: chatCompletion.text as string};

      chatMessages.push(aiMessage);
      messagesArray.push(aiMessage);

      setChat(chatMessages);
      setMessages(messagesArray);

    } catch (err) {
      console.log(err);
    }

  }

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
