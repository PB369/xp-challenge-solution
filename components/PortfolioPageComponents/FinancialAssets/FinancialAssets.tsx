import { assets } from "@/utils/mockedData/mockedAssets";
import { PortfolioType } from "@/utils/types/portifolioType";
import { Link } from "expo-router";
import { Text, View } from "react-native";

type Props = {
  portfolio: PortfolioType,
}

const FinancialAssets = ({ portfolio }: Props) => {

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
          <Link 
            href={{
              pathname: '/assetExplanation/[id]',
              params: { id: JSON.stringify(asset) }
            }}  
            className="bg-black mt-2 py-1 px-5 rounded-lg self-end text-white"
          >
            Ver explicação
          </Link>
        </View>
      ))}
    </View>
  )
}

export default FinancialAssets;