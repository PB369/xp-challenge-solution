import '@/global.css';
import { PortfolioAssetType } from "@/utils/types/portifolioType";
import { Image, Text, View } from "react-native";

type Props = {
  asset: PortfolioAssetType,
}

const AssetHeader = ({asset}: Props) => {
  return (
    <View className='w-11/12 justify-center items-center'>
      <View className="flex flex-row justify-start items-center mb-3">
        <Image source={require('@/assets/images/icons/barChartFilled-icon.png')} style={{width: 42, height: 42}}/>
        <View className="ml-3">
          <Text className="text-white text-3xl font-semibold">{asset.assetName}</Text>
          <Text className="text-yellow-200 font-semibold">{asset.type}</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center w-full">
        <View>
          <Text className="text-white font-bold">{asset.percentageAllocation}%</Text>
          <Text className="text-neutral-400 font-bold">da carteira</Text>
        </View>
        <View>
          <Text className="text-white font-bold">{asset.profitability}</Text>
          <Text className="text-neutral-400 font-bold">Rentabilidade</Text>
        </View>
        <View>
          <Text className="text-white font-bold">Liquidez</Text>
          <Text className="text-neutral-400 font-bold">{asset.liquidity}</Text>
        </View>
        <View>
          <Text className="text-white font-bold">Retorno</Text>
          <Text className="text-neutral-400 font-bold">{asset.expectedReturn}%</Text>
        </View>
      </View>
    </View>
  )
}

export default AssetHeader;