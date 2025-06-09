//Aqui se redirecionará o usuário para /(logged-in)

import { Text, View } from "react-native";
import '@/global.css'

export default function Authentication() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Authentication</Text>
    </View>
  );
}
