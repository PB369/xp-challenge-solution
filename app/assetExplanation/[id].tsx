import { useLocalSearchParams, useRouter } from "expo-router";
import {  Image, Pressable, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Asset } from "@/utils/types/assetType";
import Octicons from '@expo/vector-icons/Octicons';

export default function AssetExplanation() {
  const { id } = useLocalSearchParams();
  const router = useRouter()

  const asset: Asset = JSON.parse(id as string);

  return (
    <View className="flex-1 justify-center items-center bg-black w-full">
      <Pressable onPress={() => router.replace('/(tabs)/wallet')}>
        <Feather name="arrow-left" size={24} color="white" />
      </Pressable>
      <View>
        {/* Header */}
        <View>
          <View>
            <Image source={require('@/assets/images/icons/barChartFilled-icon.png')}/>
            <View className="">
              <Text className="text-white">{asset.name}</Text>
              <Text className="text-white">{asset.class}</Text>
            </View>
          </View>
          <View>
            <View>
              <Text className="text-white">{asset.walletPercentage}</Text>
              <Text className="text-white">da carteira</Text>
            </View>
            <View>
              <Text className="text-white">{asset.profitability}</Text>
              <Text className="text-white">Rendabilidade</Text>
            </View>
            <View>
              <Text className="text-white">Liquidez</Text>
              <Text className="text-white">{asset.liquidity}</Text>
            </View>
            <View>
              <Text className="text-white">Mínimo</Text>
              <Text className="text-white">{asset.minValue} $</Text>
            </View>
          </View>
        </View>
        {/* Main Section */}
        <View>
          <View>
            <MaterialIcons name="info-outline" size={24} color="black" />
            <Text className="text-white">Por que esse ativo?</Text>
          </View>
          <Text className="text-white">{asset.justification}</Text>
          <View>
            {asset.tags.map((tag) => (
              <View key={asset.tags.indexOf(tag)}>
                <Text className="text-white">{tag.content}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* Details */}
        <View>
          <Text className="text-white">Detalhes do Ativo</Text>
          {/* Tabela */}
        </View>
        {/* Resources */}
        <View>
          <View>
            <Octicons name="question" size={24} color="black" />
            <Text className="text-white">Saiba Mais</Text>
          </View>
          <View>
            {asset.externalResources.map(resource => (
              <View key={asset.externalResources.indexOf(resource)}>
                <Text className="text-white">{resource.title}: </Text>
                <Text className="text-white">{resource.source}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}