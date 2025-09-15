import { useUser } from "@/context/UserContex";
import { PortfolioType } from "@/utils/types/portifolioType";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, Text, View } from "react-native";

type Props = {
  portfolio: PortfolioType,
}

const PortfolioResume = ({ portfolio }: Props) => {
  const { user } = useUser();

  return (
    <View className="w-11/12 rounded-lg bg-neutral-800 flex justify-center items-center my-3 py-2 px-4">
      <View className="border-b border-b-neutral-500 flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <Feather name="target" size={20} color="red" />
          <Text className="text-white font-medium ml-2">Objetivo:</Text>
        </View>
        <Text className="text-white">{user?.goal}</Text>
      </View>
      <View className="border-b border-b-neutral-500 flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <MaterialIcons name="currency-exchange" size={20} color="#0DFF00" />
          <Text className="text-white font-medium ml-2">Total a Investir:</Text>
        </View>
        <Text className="text-white">R${portfolio.totalValue}</Text>
      </View>
      <View className="border-b border-b-neutral-500 flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <Image source={require('@/assets/images/icons/brokenImage-icon.png')} style={{width: 20, height: 20}}/>
          <Text className="text-white font-medium ml-2">Rentabilidade Estimada:</Text>
        </View>
        <Text className="text-white">{portfolio.estimatedProfitability}</Text>
      </View>
      <View className="border-b border-b-neutral-500 flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <Image source={require('@/assets/images/icons/beenHere-icon.png')} style={{width: 20, height: 20}}/>
          <Text className="text-white font-medium ml-2">Risco da Carteira:</Text>
        </View>
        <Text className="text-white">{portfolio.generalRisk}</Text>
      </View>
      <View className="border-b border-b-neutral-500 flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <Image source={require('@/assets/images/icons/profileV1-icon.png')} style={{width: 20, height: 20}}/>
          <Text className="text-white font-medium ml-2">Perfil de Investimento:</Text>
        </View>
        <Text className="text-black px-3 rounded-md bg-yellow-400">{user?.profileAssessment}</Text>
      </View>
      <View className="flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <MaterialIcons name="access-alarm" size={20} color="#00B2FF" />
          <Text className="text-white font-medium ml-2">Horizonte de Investimento:</Text>
        </View>
        <View className="flex flex-row justify-center items-center">
          <Text className="text-white mr-3">{portfolio.investmentHorizon}</Text>
          <Image source={require('@/assets/images/icons/calendar-icon.png')} style={{width: 20, height: 20}}/>
        </View>
      </View>
    </View>
  )
}

export default PortfolioResume;