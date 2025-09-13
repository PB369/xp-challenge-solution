import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { Image, Text, View } from "react-native"

const BenchmarkComparison = () => {
  return (
    <View className="w-11/12 flex justify-center items-center my-3">
      <View className="flex flex-row w-full">
        <Image source={require('@/assets/images/icons/barChart-icon.png')} style={{width: 26, height: 26}}/>
        <Text className="text-white font-semibold text-2xl ml-3">Comparativo com Benchmark</Text>
      </View>
      <View className="w-full rounded-md bg-neutral-800 flex justify-center items-center my-3 py-6 px-8">
        <View className="w-full flex justify-center items-center mb-4">
          <View className="flex flex-row justify-between w-full items-center mb-2">
            <Text className="text-white">Minha Carteira</Text>
            <Text className="text-white">+8.2%</Text>
          </View>
          <ProgressBar 
            progressPercentage={50} 
            bgOfBackBar="#3c3c3c"
            bgOfFrontBar="#268c41"
            height={18}
          />
        </View>
        <View className="w-full flex justify-center items-center mb-4">
          <View className="flex flex-row justify-between w-full items-center mb-2">
            <Text className="text-white">CDI</Text>
            <Text className="text-white">+11.5%</Text>
          </View>
          <ProgressBar 
            progressPercentage={0} 
            bgOfBackBar="#3c3c3c"
            height={18}
          />
        </View>
        <View className="w-full flex justify-center items-center mb-4">
          <View className="flex flex-row justify-between w-full items-center mb-2">
            <Text className="text-white">IPCA</Text>
            <Text className="text-white">+4.7%</Text>
          </View>
          <ProgressBar 
            progressPercentage={35} 
            bgOfBackBar="#3c3c3c"
            bgOfFrontBar="#929292"
            height={18}
            />
        </View>
        <Text className="text-white text-justify">Sua carteira está projetada abaixo do CDI, mas adequada ao seu perfil e objetivo de longo prazo</Text>
      </View>
    </View>
  )
}

export default BenchmarkComparison;