import { Text, View } from "react-native";
import '@/global.css'
import { Asset } from "@/utils/types/assetType";
import { Octicons } from "@expo/vector-icons";

type Props = {
  asset: Asset,
}

const ExternalResources = ({asset}: Props) => {
  return (
    <View className="mt-8">
      <View className="flex flex-row justify-start items-center">
        <Octicons name="question" size={26} color="#f95555" />
        <Text className="text-white text-xl font-semibold ml-2">Saiba Mais</Text>
      </View>
      <View className="mt-3">
        {asset.externalResources.map(resource => (
          <View 
            key={asset.externalResources.indexOf(resource)}
            className="flex flex-row flex-wrap"
          >
            <Text className="text-white font-semibold text-lg">{resource.title}: 
              <Text className="text-yellow-400 font-semibold text-lg"> 
                {resource.source}
              </Text>
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default ExternalResources;