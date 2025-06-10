import '@/global.css';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import ChatTextField from '../components/ChatTextField';
import TextButton from '../components/TextButton';

export default function IAChat() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={"padding"}
      keyboardVerticalOffset={100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.contentHolder}>
          <View style={{ flex: 1 }}>
        
          </View>
          <View style={styles.sideSugestions}>
            <TextButton text="Ativos com meu perfil" style={styles.sugestionButton} />
            <TextButton text="Notícias recentes" style={styles.sugestionButton} />
          </View>
          <ChatTextField />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  sideSugestions: {
    paddingHorizontal: 10, 
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  }, 
  contentHolder: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 10,
  },
  sugestionButton: {
    marginHorizontal: 2
  }
});
