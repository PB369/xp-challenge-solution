import BenchmarkComparison from "@/components/PortfolioPageComponents/BenchmarkComparison/BenchmarkComparison";
import FinancialAssets from "@/components/PortfolioPageComponents/FinancialAssets/FinancialAssets";
import PortfolioPieChart from "@/components/PortfolioPageComponents/PortfolioPieChart/PortfolioPieChart";
import PortfolioResume from "@/components/PortfolioPageComponents/PortfolioResume/PortfolioResume";
import ProfileAlignment from "@/components/PortfolioPageComponents/ProfileAlignment/ProfileAlignment";
import { useUser } from "@/context/UserContex";
import '@/global.css';
import { ScrollView, Text, View } from "react-native";

export default function Portfolio() {
  const { user } = useUser();
  const portfoliosList = user?.portfolios || [];
  const portfolio = portfoliosList[0]
  const isPortfolioEmpty = portfoliosList.length === 0;

  return (
    <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center', flexGrow: 1}} className="flex-1 bg-black">
      <View className="flex w-11/12 my-4 justify-center items-center">
        <Text className="text-white font-semibold text-3xl">Minha carteira</Text>
        <Text className="text-white">Elaborada segundo o seu perfil de risco e seus objetivos</Text>
      </View>
      {isPortfolioEmpty ? (
        <View className="flex-col justify-center items-center w-11/12 flex-1">
          <Text className="text-white opacity-70 text-center font-bold text-xl">Nenhuma carteira criada.</Text>
          <Text className="text-white opacity-70 text-center font-bold text-xl">Peça ao seu assistente de IA para gerar uma e comece a ganhar dinheiro!</Text>
        </View>
      ) : (
        <>
          <PortfolioResume portfolio={portfolio}/>
          <PortfolioPieChart portfolio={portfolio}/>
          <FinancialAssets portfolio={portfolio}/>
          <BenchmarkComparison portfolio={portfolio}/>
          <ProfileAlignment portfolio={portfolio}/>
        </>
      )}
    </ScrollView>
  );
}