import { Pressable, Text, View } from "react-native"

const FinancialAssets = () => {
  const assets = [
    {
      name: 'Tesouro IPCA + 2025',
      class: 'Renda fixa',
      profitability: '+5.9%',
      liquidity: 'D-1',
    },
    {
      name: 'Tesouro Selic 2027',
      class: 'Renda fixa',
      profitability: '+3.4%',
      liquidity: 'D+1',
    },
    {
      name: 'Tesouro Direto Prefixado',
      class: 'Renda fixa',
      profitability: '+2.8%',
      liquidity: 'D+1',
    },
  ];

  return (
    <View className="w-11/12 flex justify-center items-center my-3">
      <Text className="text-white font-semibold text-2xl w-full">Ativos Detalhados</Text>
      {assets.map(asset => (
        <View key={assets.indexOf(asset)} className="w-full rounded-md bg-neutral-800 flex justify-center items-center my-3 py-3 px-4">
          <Text className="text-white text-xl font-semibold self-start">{asset.name}</Text>
          <View className="flex flex-row w-full my-1 justify-between items-center">
            <Text className="text-white">Ativo:</Text>
            <Text className="text-white">{asset.class}</Text>
          </View>
          <View className="flex flex-row w-full my-1 justify-between items-center">
            <Text className="text-white">Rentabilidade:</Text>
            <Text className="text-white">{asset.profitability}</Text>
          </View>
          <View className="flex flex-row w-full my-1 justify-between items-center">
            <Text className="text-white">Liquidez:</Text>
            <Text className="text-white">{asset.liquidity}</Text>
          </View>
          <Pressable className="bg-black mt-2 py-1 px-5 rounded-lg self-end">
            <Text className="text-white">Ver explicação</Text>
          </Pressable>
        </View>
      ))}
    </View>
  )
}

export default FinancialAssets;