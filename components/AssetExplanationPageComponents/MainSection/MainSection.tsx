import '@/global.css';
import { PortfolioAssetType } from "@/utils/types/portifolioType";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  asset: PortfolioAssetType,
}

const MainSection = ({asset}: Props) => {
  
  return (
    <View className="my-8">
      <View className="flex flex-row justify-start items-center">
        <MaterialIcons name="info-outline" size={26} color="#a3a3a3" />
        <Text className="text-white font-semibold text-xl ml-2">Por que esse ativo?</Text>
      </View>
      <Text className="text-white text-lg text-justify my-4">{asset.whyThisAsset}</Text>
      <View className="flex flex-row flex-wrap">
        {asset.benefitTags.map((tag, index) => (
          <View 
            key={index}
            className={`bg-neutral-700 border py-1 px-2 rounded-lg mr-3 mb-3`}
          >
            <Text className="text-white">{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default MainSection;