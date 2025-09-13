import Alerts from "@/components/DashboardPageComponents/Alerts/Alerts";
import GoalTracker from "@/components/DashboardPageComponents/GoalTracker/GoalTracker";
import ProgressChart from "@/components/DashboardPageComponents/ProgressChart/ProgressChart";
import RecommendedWallet from "@/components/DashboardPageComponents/RecommendedWallet/RecommendedWallet";
import WalletInsights from "@/components/DashboardPageComponents/WalletInsights/WalletInsights";
import { useAuth } from "@/context/AuthContext";
import '@/global.css';
import { ScrollView } from "react-native";

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
