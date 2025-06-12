import { Image, Pressable, Text, View } from "react-native";

type Props = {

}

const WalletInsights = () => {
  return (
    <View>
      <View>
        <Image/>
        <Text>Insights sobre carteira</Text>
      </View>
      <View>
        <Image/>
        <Text>Texto de insight</Text>
        <Pressable>
          <Text>Detalhes</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default WalletInsights;