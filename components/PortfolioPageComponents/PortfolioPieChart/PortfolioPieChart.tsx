import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const PortfolioPieChart = () => {
  const data = [{value: 30, color: '#00b2ff', text: '30%'}, {value: 25, color: '#f95555', text: '25%'}, {value: 45, color: '#ffce00', text: '45%'}];

  return (
    <View className="flex flex-row w-11/12 justify-around items-center my-5">
      <PieChart 
        data={data}
        showText
        textColor="black"
        fontWeight="600"
        textSize={20}
        radius={100}
      />
      <View className="flex justify-center items-start">
        <View className="flex flex-row justify-center items-center">
          <View className="bg-[#ffce00] w-3 h-3 mr-3 rounded-full"></View>
          <Text className="text-white text-xl font-semibold">{data[2].value}% RF</Text>
        </View>
        <View className="flex flex-row justify-center items-center">
          <View className="bg-[#00b2ff] w-3 h-3 mr-3 rounded-full"></View>
          <Text className="text-white text-xl font-semibold">{data[0].value}% Ações</Text>
        </View>
        <View className="flex flex-row justify-center items-center">
          <View className="bg-[#f95555] w-3 h-3 mr-3 rounded-full"></View>
          <Text className="text-white text-xl font-semibold">{data[1].value}% ETFs</Text>
        </View>
      </View>
    </View>
  )
}

export default PortfolioPieChart;