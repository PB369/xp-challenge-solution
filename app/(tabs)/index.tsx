import Alerts from "@/components/DashboardPageComponents/Alerts/Alerts";
import GoalTracker from "@/components/DashboardPageComponents/GoalTracker/GoalTracker";
import PortfolioInsights from "@/components/DashboardPageComponents/PortfolioInsights/PortfolioInsights";
import ProgressChart from "@/components/DashboardPageComponents/ProgressChart/ProgressChart";
import RecommendedPortfolio from "@/components/DashboardPageComponents/RecommendedPortfolio/RecommendedPortfolio";
import { useUser } from "@/context/UserContex";
import '@/global.css';
import { ScrollView } from "react-native";

export default function Dashboard() {
  const { user } = useUser();
  const portfoliosList = user?.portfolios || [];
  const portfolio = portfoliosList[0]
  const isPortfolioEmpty = portfoliosList.length === 0;
  
  return (
    <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} className="flex-1 bg-black">
      <ProgressChart/>
      <GoalTracker/>
      {!isPortfolioEmpty && <RecommendedPortfolio/>}
      <Alerts/>
      <PortfolioInsights/>
    </ScrollView>
  );
}
