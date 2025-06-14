import { Image, Pressable, Text, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";

const RecommendedWallet = () => {
  const router = useRouter();

  return (
   <View className="w-11/12 rounded-lg bg-neutral-800 flex justify-center items-center my-3 p-3">
    <View className="w-full flex flex-row">
      <MaterialIcons name="wallet" size={24} color="#facc15" />
      <Text className="text-white font-semibold text-lg ml-3">Carteira Recomendada</Text>
    </View>
    <View className="w-full my-2 flex flex-row justify-around items-center">
      <View className="mr-2 w-4/5">
        <Text className="text-white text-sm text-justify">Sugestão baseada no seu perfil de risco e objetivo.</Text>
        <Text className="text-white text-sm">Última atualização: 17/06/2025</Text>
      </View>
      <Pressable onPress={() => router.push('/(tabs)/wallet')}>
        <Image source={require('@/assets/images/icons/arrowCircleRight-icon.png')} style={{ width: 48, height: 48 }}/>
      </Pressable>
    </View>
  </View>
  )
}

export default RecommendedWallet;