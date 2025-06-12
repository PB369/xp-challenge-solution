import { ScrollView } from "react-native";
import '@/global.css';
import ProgressChart from "@/components/DashboardComponents/ProgressChart/ProgressChart";
import GoalTracker from "@/components/DashboardComponents/GoalTracker/GoalTracker";
import RecommendedWallet from "@/components/DashboardComponents/RecommendedWallet/RecommendedWallet";
import Alerts from "@/components/DashboardComponents/Alerts/Alerts";
import WalletInsights from "@/components/DashboardComponents/WalletInsights/WalletInsights";

export default function Dashboard() {

  return (
    <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} className="flex-1 bg-black">
      <ProgressChart/>
      <GoalTracker/>
      <RecommendedWallet/>
      <Alerts/>
      <WalletInsights/>
    </ScrollView>
  );
}
