import { darkGray, mainGray, mainWhite, mainYello } from "@/assets/colors/colors";
import { Message } from "@/utils/types/messagesType";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {
  messages: Array<Message>,
};

export default function Chat({ messages }: Props) {
  return (
    <ScrollView
      style={styles.chat}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <Text>teste</Text>
      {messages.map((message, index) => (
        <View
          key={index}
          style={message.role === "user" ? styles.messageUserRow : styles.messageAIRow}
        >
          <View style={message.role === "user" ? styles.messageUser : styles.messageAI}>
            <Text style={message.role === "user" ? styles.messageUserText : styles.messageAIText}>
              {message.content}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

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
});
