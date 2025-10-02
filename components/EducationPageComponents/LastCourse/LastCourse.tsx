import ProgressBar from "@/components/ProgressBar/ProgressBar"
import { Image, Text, View } from "react-native"

const LastCourse = () => {
  return (
    <View className="w-full bg-[#242424] rounded-md p-4 my-4 flex-col justify-center items-center">
      <View className="flex-row w-full">
        <Image source={require('@/assets/images/courses-images/intro-fixed-income.png')} style={{width:100, height:100, marginRight:10}}/>
        <View className="flex-col flex-1 justify-center items-start">
          <Text className="text-white text-xl font-bold">Introdução à Renda Fixa</Text>
          <Text className="text-yellow-500 text-md my-1">Sua carteira tem 60% em tesouro direto</Text>
          <Text className="text-neutral-500 text-sm font-semibold">12 min - Iniciante</Text>
        </View>
      </View>
      <ProgressBar bgOfBackBar="3C3C3C" bgOfFrontBar="ffffff" progressPercentage={42} borderRadius={6} height={3} widthInPercentage={100}/>
    </View>
  )
}

export default LastCourse