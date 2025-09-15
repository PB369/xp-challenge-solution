import { useUser } from "@/context/UserContex";
import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { BarChart } from 'react-native-gifted-charts';

const screenWidth = Dimensions.get('window').width;

const dataByPeriod = {
  Dia: [
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 },
  ],

  Semana: [
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 },
  ],
  
  Mês: [
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 }, 
    { value: 0 },
  ],
  
  Ano: [
    { value: 0 },
  ],
};

const labelsByPeriod = {
  Dia: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  Semana: ['1° Sem', '2° Sem', '3° Sem', '4° Sem'],
  Mês: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  Ano: ['2025'],
};


const ProgressChart = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'Dia' | 'Semana' | 'Mês' | 'Ano'>('Dia');
  
  const data = dataByPeriod[selectedPeriod];
  const labels = labelsByPeriod[selectedPeriod];
  
  const barWidth = 25;
  const spacing = 15;

  const { user } = useUser();

  return (
   <View className="w-full flex justify-center items-center my-3">
    <View className="w-11/12 pb-4 flex flex-row justify-between items-center">
      <Text className="text-white text-lg">Aqui está seu progresso</Text>
      <Text className="text-white">Ver saldos</Text>
    </View>
    <View className="w-11/12 mb-4 flex flex-row justify-between items-center">
      <View className="flex flex-row justify-center items-center">
        <Text className="text-white text-3xl font-bold mr-2">$ {user?.monthlyAmount}</Text>
        <Text className="text-[#0DFF00] text-base font-semibold">+0%</Text>
      </View>
      <Text className="text-[#0DFF00] text-xl font-semibold">$ +0.00</Text>
    </View>
    <View className="flex flex-col justify-center items-center bg-neutral-800 py-8 px-5 rounded-lg w-11/12">
      {/* Chart */}
       <BarChart
          data={data}
          barWidth={barWidth}
          spacing={spacing}
          frontColor="#a642f4"
          initialSpacing={0}
          showLine={false}
          width={screenWidth-130}
          height={240}
          sideWidth={2}
          isAnimated
          xAxisLabelTexts={labels}
          barBorderRadius={2}
          noOfSections={4}
          yAxisThickness={0}
          xAxisThickness={0}
          yAxisTextStyle={{ fontSize: 12, color: 'white' }}
          xAxisLabelTextStyle={{ fontSize: 12, color: 'white', }}
          dashWidth={10}
          dashGap={0}
          rotateLabel
          rulesColor={'#4b4b4b'}
          rulesThickness={1}
        />
      {/* Filter */}
      <View className="flex flex-row justify-between items-center bg-neutral-800 rounded-md py-2 px-4 mt-10 w-full border border-neutral-300">
        {['Dia', 'Semana', 'Mês', 'Ano'].map((p) => (
          <TouchableOpacity
            key={p}
            onPress={() => setSelectedPeriod(p as any)}
            className={`${selectedPeriod === p ? 'bg-zinc-700' : 'bg-neutral-800'} mx-2 py-1 px-4 rounded-md`}
          >
            <Text className="text-white font-semibold">
              {p}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </View>
  )
}

export default ProgressChart;