import { Image, Pressable, Text, View } from "react-native";

type Props = {
  
}

const RecommendedWallet = () => {
  return (
   <View>
    <View>
      <Image/>
      <Text>Carteira Recomendada</Text>
    </View>
    <View>
      <Text>Sugestão baseada no seu perfil de risco e objetivo.</Text>
      <Text>Última atualização: xx/xx/xxxx</Text>
    </View>
    <Pressable>
      <Image />
    </Pressable>
  </View>
  )
}

export default RecommendedWallet;