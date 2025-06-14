import { Image, Text, View } from "react-native";
import '@/global.css'
import { Asset } from "@/utils/types/assetType";

type Props = {
  asset: Asset,
}

const AssetHeader = ({asset}: Props) => {
  return (
    <View>
      <View className="flex flex-row justify-start items-center mb-3">
        <Image source={require('@/assets/images/icons/barChartFilled-icon.png')} style={{width: 42, height: 42}}/>
        <View className="ml-3">
          <Text className="text-white text-3xl font-semibold">{asset.name}</Text>
          <Text className="text-yellow-200 font-semibold">{asset.class}</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="text-white font-bold">{asset.walletPercentage}</Text>
          <Text className="text-neutral-400 font-bold">da carteira</Text>
        </View>
        <View>
          <Text className="text-white font-bold">{asset.profitability}</Text>
          <Text className="text-neutral-400 font-bold">Rendabilidade</Text>
        </View>
        <View>
          <Text className="text-white font-bold">Liquidez</Text>
          <Text className="text-neutral-400 font-bold">{asset.liquidity}</Text>
        </View>
        <View>
          <Text className="text-white font-bold">Mínimo</Text>
          <Text className="text-neutral-400 font-bold">{asset.minValue} $</Text>
        </View>
      </View>
    </View>
  )
}

export default AssetHeader;