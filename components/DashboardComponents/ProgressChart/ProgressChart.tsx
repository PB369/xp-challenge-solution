import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { BarChart } from 'react-native-gifted-charts';

type Props = {

}

const screenWidth = Dimensions.get('window').width;

const dataByPeriod = {
  Dia: [
    { value: 10 }, 
    { value: 20 }, 
    { value: 15 }, 
    { value: 30 }, 
    { value: 20 }, 
    { value: 15 }, 
    { value: 30 },
  ],

  Semana: [
    { value: 20 }, 
    { value: 30 }, 
    { value: 40 }, 
    { value: 50 },
  ],
  
  Mês: [
    { value: 35 }, 
    { value: 60 }, 
    { value: 55 }, 
    { value: 40 }, 
    { value: 90 }, 
    { value: 70 }, 
    { value: 20 }, 
    { value: 55 }, 
    { value: 40 }, 
    { value: 90 }, 
    { value: 70 }, 
    { value: 20 },
  ],
  
  Ano: [
    { value: 50 },
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

  return (
   <View className="w-full flex justify-center items-center">
    <View>
      <Text className="text-white">Aqui está seu progresso</Text>
      <Text className="text-white">Ver saldos</Text>
    </View>
    <View>
      <Text className="text-white">R$XX,YY</Text>
      <Text className="text-white">R$XX,YY</Text>
    </View>
    <View className="flex flex-col justify-center items-center bg-neutral-800 py-8 px-5 rounded-2xl w-11/12">
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