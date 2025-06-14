import { Text, View } from "react-native";
import '@/global.css'
import { Asset } from "@/utils/types/assetType";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  asset: Asset,
}

const MainSection = ({asset}: Props) => {

  return (
    <View className="my-8">
      <View className="flex flex-row justify-start items-center">
        <MaterialIcons name="info-outline" size={26} color="#a3a3a3" />
        <Text className="text-white font-semibold text-xl ml-2">Por que esse ativo?</Text>
      </View>
      <Text className="text-white text-lg text-justify my-4">{asset.justification}</Text>
      <View className="flex flex-row flex-wrap">
        {asset.tags.map((tag) => (
          <View 
            key={asset.tags.indexOf(tag)}
            className={`bg-neutral-700 border py-1 px-2 rounded-lg mr-3 mb-3`}
          >
            
            <Text className="text-white">{tag.content}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default MainSection;