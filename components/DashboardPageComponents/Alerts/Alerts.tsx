import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Image, Pressable, Text, View } from "react-native";

const Alerts = () => {
  const alertsList = [
    {category: 'market', content: 'Mudança na Selic: veja como isso pode te afetar'}, 
    {category: 'profile', content: 'Seu perfil mudou? Refaça o questionário.'}, 
    {category: 'wallet', content: 'É hora de criar a sua nova carteira!'},
  ]

  const alertsIconByCategory: Record<string, any> = {
    market: require('@/assets/images/icons/vitalSign-icon.png'),
    profile: require('@/assets/images/icons/profileV1-icon.png'),
    wallet: require('@/assets/images/icons/wallet-icon.png'),
  }

  return (
    <View className="w-11/12 flex justify-center items-center my-3">
      <View className="flex flex-row w-full mb-2">
        <FontAwesome5 name="bell" size={24} color="#facc15" />
        <Text className="text-white font-semibold text-lg ml-3">Alertas</Text>
      </View>
        {alertsList.map((alert) => (
        <View key={alertsList.indexOf(alert)} className="rounded-lg bg-neutral-800 my-2 px-3 py-1 w-full">
          <View className="w-full flex flex-row justify-between items-center my-3">
            <View className="flex flex-row items-center w-3/4">
              <Image source={alertsIconByCategory[alert.category]} style={{width: 24, height: 24}}/>
              <Text className="text-white ml-3">{alert.content}</Text>
            </View>
            <Pressable>
              <Text className="text-neutral-400 border-b border-b-neutral-400">Detalhes</Text>
            </Pressable>
          </View>
        </View>
        ))}
    </View>
  )
}

export default Alerts;