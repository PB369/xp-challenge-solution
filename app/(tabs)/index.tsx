import { ScrollView } from "react-native";
import '@/global.css';
import ProgressChart from "@/components/DashboardPageComponents/ProgressChart/ProgressChart";
import GoalTracker from "@/components/DashboardPageComponents/GoalTracker/GoalTracker";
import RecommendedWallet from "@/components/DashboardPageComponents/RecommendedWallet/RecommendedWallet";
import Alerts from "@/components/DashboardPageComponents/Alerts/Alerts";
import WalletInsights from "@/components/DashboardPageComponents/WalletInsights/WalletInsights";

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
