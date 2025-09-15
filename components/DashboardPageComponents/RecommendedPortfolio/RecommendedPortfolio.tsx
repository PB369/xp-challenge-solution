import { useUser } from '@/context/UserContex';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

const RecommendedPortfolio = () => {
  const router = useRouter();

  const { user } = useUser();
  const portfoliosList = user?.portfolios || [];
  const portfolio = portfoliosList[0];
  const isPortfolioEmpty = portfoliosList.length === 0;

  const portfolioLastUpdate = portfolio.updatedAt
  const date = new Date(portfolioLastUpdate);
  const formattedDate = new Intl.DateTimeFormat("pt-BR").format(date);

  return (
   <View className="w-11/12 rounded-lg bg-neutral-800 flex justify-center items-center my-3 p-3">
    <View className="w-full flex flex-row">
      <MaterialIcons name="wallet" size={24} color="#facc15" />
      <Text className="text-white font-semibold text-lg ml-3">Carteira Recomendada</Text>
    </View>
    <View className="w-full my-2 flex flex-row justify-around items-center">
      <View className="mr-2 w-4/5">
        <Text className="text-white text-sm text-justify">Sugestão baseada no seu perfil de risco e objetivo.</Text>
        <Text className="text-white text-sm">Última atualização: {formattedDate}</Text>
      </View>
      <Pressable onPress={() => router.push('/(tabs)/portfolio')}>
        <Image source={require('@/assets/images/icons/arrowCircleRight-icon.png')} style={{ width: 48, height: 48 }}/>
      </Pressable>
    </View>
  </View>
  )
}

export default RecommendedPortfolio;