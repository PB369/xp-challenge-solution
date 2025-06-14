import { mainBalck, mainWhite } from '@/assets/colors/colors';
import { Message } from '@/assets/types/messages';
import Chat from '@/components/ChatPageComponents/Chat';
import ChatTextField from '@/components/ChatPageComponents/ChatTextField';
import TextButton from '@/components/ChatPageComponents/TextButton';
import '@/global.css';
import { Groq } from 'groq-sdk';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View
} from "react-native";



export default function IAChat() {
  const [textValue, setTextValue] = useState("");

  const sugestionValues: string[] = ["Crie um plano de investimento para 6 meses", "Estruture minha carteira", "Liste os ativos que estão rendendo mais", "Crie curso para iniciantes em investimento"];

  const verticalSugestions: string[] = ["Ativos com meu perfil", "Notícias recentes"];

  const [messages, setMessages] = useState<Message[]>([{
    role: "system",
    content: `Você é um assistente financeiro especializado em montar carteiras de investimentos personalizadas. Seu objetivo é entender o perfil do usuário antes de sugerir qualquer investimento. 

    Siga este processo:
    1. Cumprimente a pessoa de forma profissional e amigável.
    2. Pergunte sobre o perfil de risco do usuário: conservador, moderado ou arrojado. Se ele não souber, ajude com perguntas (ex: 'Como você se sente ao ver seu investimento oscilar?', 'Você prefere segurança ou maior rentabilidade?').
    3. Pergunte o objetivo do investimento (ex: aposentadoria, comprar casa, independência financeira, reserva de emergência).
    4. Pergunte qual o valor disponível para investir.
    5. Com base nas respostas, monte uma carteira com uma distribuição percentual recomendada entre ativos como: Renda Fixa, Fundos Imobiliários, Ações, Fundos de Investimento, Tesouro Direto, Criptoativos (apenas se o perfil for arrojado).
    6. Explique de forma simples e clara o motivo de cada classe de ativo na carteira.
    7. Pergunte se o usuário gostaria de sugestões de ajustes ou rebalanceamento mensal ou anual.

    Importante:
    - Use linguagem acessível e evite jargões técnicos.
    - Nunca faça recomendações de ativos específicos (ex: ações com ticker), apenas classes.
    - Seja claro que a conversa é apenas para fins educacionais e não configura uma recomendação financeira real.
    - Mantenha o contexto da conversa, sem repetir ou resumir o que já foi dito.
    - Foque em responder com base no que o usuário disse por último.
    - Não repita explicações já dadas anteriormente.` 
  }]);

  const [chat, setChat] = useState<Message[]>([])

  const send = async () => {

    try {
      const groq = new Groq({
        apiKey: "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"
      });

      const message: Message =  {role: "user", content: textValue }

      const messagesArray: Message[] = [...messages, message];

      const chatMessages: Message[] = [...chat, message];
      
      setChat(chatMessages);

      setTextValue("");

      const chatCompletion = await groq.chat.completions.create({
        "messages": messagesArray as Groq.Chat.Completions.ChatCompletionMessageParam[],
        "model": "meta-llama/llama-4-scout-17b-16e-instruct",
        "temperature": 1,
        "max_completion_tokens": 1024,
        "top_p": 1,
        "stream": false,
        "stop": null
      });

      const aiMessage: Message = { role: "system", content: chatCompletion.choices[0].message.content as string};

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
