import { useUser } from "@/context/UserContex";
import { Image, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const PortfolioResume = () => {
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
          <Text className="text-white font-medium ml-2">Valor:</Text>
        </View>
        <Text className="text-white">R$200.000</Text>
      </View>
      <View className="border-b border-b-neutral-500 flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <Image source={require('@/assets/images/icons/brokenImage-icon.png')} style={{width: 20, height: 20}}/>
          <Text className="text-white font-medium ml-2">Rentabilidade:</Text>
        </View>
        <Text className="text-white">+8.2% a.a</Text>
      </View>
      <View className="border-b border-b-neutral-500 flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <Image source={require('@/assets/images/icons/beenHere-icon.png')} style={{width: 20, height: 20}}/>
          <Text className="text-white font-medium ml-2">Risco:</Text>
        </View>
        <Text className="text-white">Médio</Text>
      </View>
      <View className="border-b border-b-neutral-500 flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <Image source={require('@/assets/images/icons/profileV1-icon.png')} style={{width: 20, height: 20}}/>
          <Text className="text-white font-medium ml-2">Perfil:</Text>
        </View>
        <Text className="text-black px-3 rounded-md bg-yellow-400">{user?.profileAssessment}</Text>
      </View>
      <View className="flex flex-row w-full py-3 px-2 justify-between items-center">
        <View className="flex flex-row justify-center items-center">
          <MaterialIcons name="access-alarm" size={20} color="#00B2FF" />
          <Text className="text-white font-medium ml-2">Prazo:</Text>
        </View>
        <View className="flex flex-row justify-center items-center">
          <Text className="text-white mr-3">01/04/2025 - 30/04/2025</Text>
          <Image source={require('@/assets/images/icons/calendar-icon.png')} style={{width: 20, height: 20}}/>
        </View>
      </View>
    </View>
  )
}

export default PortfolioResume;