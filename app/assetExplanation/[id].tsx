import { useLocalSearchParams, useRouter } from "expo-router";
import {  Pressable, ScrollView, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { Asset } from "@/utils/types/assetType";
import AssetHeader from "@/components/AssetExplanationPageComponents/AssetHeader/AssetHeader";
import MainSection from "@/components/AssetExplanationPageComponents/MainSection/MainSection";
import AssetDetails from "@/components/AssetExplanationPageComponents/AssetDetails/AssetDetails";
import ExternalResources from "@/components/AssetExplanationPageComponents/ExternalResources/ExternalResources";

export default function AssetExplanation() {
  const { id } = useLocalSearchParams();
  const router = useRouter()

  const asset: Asset = JSON.parse(id as string);

  return (
    <ScrollView className="flex-1 bg-black w-full py-6" contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
      <View className="w-11/12 flex justify-center items-center">
        <Pressable onPress={() => router.replace('/(tabs)/wallet')} className="mb-4 self-start">
          <Feather name="arrow-left" size={28} color="white" />
        </Pressable>
        <View className="">
          <AssetHeader asset={asset}/>
          <MainSection asset={asset}/>
          <AssetDetails asset={asset}/>
          <ExternalResources asset={asset}/>
        </View>
      </View>
    </ScrollView>
  );
}