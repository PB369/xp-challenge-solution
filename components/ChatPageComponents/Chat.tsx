import { darkGray, mainGray, mainWhite, mainYello } from "@/assets/colors/colors";
import { MessageType } from "@/utils/types/messagesType";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FadeInTypeMsg } from "./FadeInTypeMsg";
import LoadingMessage from "./LoadingMsg";

type Props = {
  messages: Array<MessageType>;
};

export default function Chat({ messages }: Props) {
  return (
    <ScrollView
      style={styles.chat}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      {messages.map((message, index) => {
        // Mensagem da IA com animação
        if (message.role === "model" && message.content !== "<loading>") {
          return <FadeInTypeMsg key={index} content={message.content} />;
        }

        // Mensagens do usuário ou loading continuam iguais
        return (
          <View
            key={index}
            style={message.role === "user" ? styles.messageUserRow : styles.messageAIRow}
          >
            <View
              style={
                message.role === "user"
                  ? styles.messageUser
                  : message.content === "<loading>"
                  ? styles.messageAILoading
                  : styles.messageAI
              }
            >
              {message.content === "<loading>" && message.role === "model" ? (
                <LoadingMessage />
              ) : (
                <Text
                  style={
                    message.role === "user"
                      ? styles.messageUserText
                      : styles.messageAIText
                  }
                >
                  {message.content}
                </Text>
              )}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

// -------------------
// Styles
// -------------------
const styles = StyleSheet.create({
  chat: {
    flex: 1,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  messageUserRow: {
    width: "100%",
    flexDirection: "row-reverse",
  },
  messageUser: {
    width: "80%",
    backgroundColor: mainGray,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  messageUserText: {
    color: mainWhite,
  },
  messageAIRow: {
    width: "100%",
    flexDirection: "row",
  },
  messageAI: {
    width: "80%",
    backgroundColor: mainYello,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  messageAIText: {
    color: darkGray,
  },
  messageAILoading: {
    width: "10%",
    backgroundColor: mainYello,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
});