import { View } from "react-native";
import '@/global.css';
import ProgressChart from "@/components/DashboardComponents/ProgressChart/ProgressChart";
import GoalTracker from "@/components/DashboardComponents/GoalTracker/GoalTracker";
import RecommendedWallet from "@/components/DashboardComponents/RecommendedWallet/RecommendedWallet";
import Alerts from "@/components/DashboardComponents/Alerts/Alerts";
import WalletInsights from "@/components/DashboardComponents/WalletInsights/WalletInsights";

export default function Dashboard() {

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <ProgressChart/>
      <GoalTracker/>
      <RecommendedWallet/>
      <Alerts/>
      <WalletInsights/>
    </View>
  );
}
