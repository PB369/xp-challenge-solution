import { Image, Pressable, Text, View } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';

type Props = {

}

const WalletInsights = () => {
  const insightsList = [
    {category: 'financialGrowth', content: 'Seu patrimônio cresceu 14% nos últimos 12 meses. Mantenha o ritmo!'}, 
    {category: 'goal', content: 'Você está 22% mais perto de alcançar sua meta'},
    {category: 'profile', content: 'Seu perfil mudou de moderado para moderado-agressivo após o último ajuste.'}, 
  ]

  const insightsIconByCategory: Record<string, any> = {
    financialGrowth: require('@/assets/images/icons/barChart-icon.png'),
    goal: require('@/assets/images/icons/flagCheck-icon.png'),
    profile: require('@/assets/images/icons/profileV2-icon.png'),
  }

  return (
    <View className="w-11/12 flex justify-center items-center my-3">
      <View className="flex flex-row w-full mb-2">
        <Octicons name="light-bulb" size={24} color="#facc15" />
        <Text className="text-white font-semibold text-lg ml-3">Insights sobre carteira</Text>
      </View>
        {insightsList.map((insight) => (
        <View key={insightsList.indexOf(insight)} className="rounded-lg bg-neutral-800 my-2 px-3 py-1 w-full">
          <View className="w-full flex flex-row justify-between items-center my-3">
            <View className="flex flex-row items-center w-3/4">
              <Image source={insightsIconByCategory[insight.category]} style={{width: 24, height: 24}}/>
              <Text className="text-white ml-3">{insight.content}</Text>
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

export default WalletInsights;