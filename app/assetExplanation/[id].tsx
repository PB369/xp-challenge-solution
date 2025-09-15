import AssetDetails from "@/components/AssetExplanationPageComponents/AssetDetails/AssetDetails";
import AssetHeader from "@/components/AssetExplanationPageComponents/AssetHeader/AssetHeader";
import ExternalResources from "@/components/AssetExplanationPageComponents/ExternalResources/ExternalResources";
import MainSection from "@/components/AssetExplanationPageComponents/MainSection/MainSection";
import { PortfolioAssetType } from "@/utils/types/portifolioType";
import Feather from '@expo/vector-icons/Feather';
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";

export default function AssetExplanation() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const asset: PortfolioAssetType = JSON.parse(id as string);

  return (
    <ScrollView className="flex-1 bg-black w-full py-6" contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
      <View className="w-11/12 flex justify-center items-center">
        <Pressable onPress={() => router.replace('/(tabs)/portfolio')} className="mb-4 self-start w-1/4 py-2 ">
          <Feather name="arrow-left" size={28} color="white" />
        </Pressable>
        <View>
          <AssetHeader asset={asset}/>
          <MainSection asset={asset}/>
          <AssetDetails asset={asset}/>
          <ExternalResources asset={asset}/>
        </View>
      </View>
    </ScrollView>
  );
}