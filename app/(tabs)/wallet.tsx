import { ScrollView, Text, View } from "react-native";
import '@/global.css'
import WalletResume from "@/components/WalletPageComponents/WalletResume/WalletResume";
import WalletPieChart from "@/components/WalletPageComponents/WalletPieChart/WalletPieChart";
import FinancialAssets from "@/components/WalletPageComponents/FinancialAssets/FinancialAssets";
import BenchmarkComparison from "@/components/WalletPageComponents/BenchmarkComparison/BenchmarkComparison";
import ProfileAlignment from "@/components/WalletPageComponents/ProfileAlignment/ProfileAlignment";

export default function Wallet() {
  return (
    <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} className="flex-1 bg-black">
      <View className="flex w-11/12 my-4 justify-center items-center">
        <Text className="text-white font-semibold text-3xl">Carteira recomendada</Text>
        <Text className="text-white">Sugestão baseada no seu perfil de risco e objetivo</Text>
      </View>
      <WalletResume/>
      <WalletPieChart/>
      <FinancialAssets/>
      <BenchmarkComparison/>
      <ProfileAlignment/>
    </ScrollView>
  );
}