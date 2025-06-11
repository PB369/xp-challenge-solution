import { mainBalck, mainWhite } from '@/assets/colors/colors';
import '@/global.css';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import ChatTextField from '../components/ChatTextField';
import Header from '../components/Header';
import TextButton from '../components/TextButton';

export default function IAChat() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: mainBalck }}
      behavior={"padding"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.contentHolder}>
          <Header />
          <View style={styles.verticalSugestions}>
            <Text style={styles.sugestionTitle}>Sobre o que você quer conversar hoje ?</Text>
            <TextButton text="Crie um plano de investimento para 6 meses" style={styles.verticalSugestionButton} />
            <TextButton text="Estruture minha  carteira" style={styles.verticalSugestionButton} />
            <TextButton text="Liste os ativos que estão rendendo mais" style={styles.verticalSugestionButton} />
            <TextButton text="Crie curso para iniciantes em investimento" style={styles.verticalSugestionButton} />
          </View>
          <View style={styles.horizontalSugestions}>
            <TextButton text="Ativos com meu perfil" style={styles.horizontalSugestionButton} />
            <TextButton text="Notícias recentes" style={styles.horizontalSugestionButton} />
          </View>
          <ChatTextField />
        </View>
      </TouchableWithoutFeedback>
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
