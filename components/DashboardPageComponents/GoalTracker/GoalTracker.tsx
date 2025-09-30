import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { useUser } from "@/context/UserContex";
import { Image, Text, View } from "react-native";

const GoalTracker = () => {
  const { user } = useUser();
  const portfoliosList = user?.portfolios || [];
  const portfolio = portfoliosList[0];
  const isPortfolioEmpty = portfoliosList.length === 0;

  return (
    <View className="w-11/12 rounded-lg bg-neutral-800 flex justify-center items-center my-3 p-5">
      <View className="w-full">
        <Text className="text-white text-lg"><Text className="font-bold">Meta:</Text> {user?.goal}</Text>
        <Text className="my-2 text-base text-white">Valor alvo: {' '}
          <Text className="font-bold">{isPortfolioEmpty ? 'Indefinido' : `R$ ${portfolio.totalValue}`}</Text>
        </Text>
      </View>
      <View className="w-full">
        <ProgressBar progressPercentage={0} widthInPercentage={88}>
          <View className="flex ml-4">
            <Image source={require('@/assets/images/icons/flagCheck-icon.png')}/>
            <Text className="text-white font-bold text-base">0%</Text>
          </View>
        </ProgressBar>
      </View>
      {/* <Pressable className="bg-yellow-400 px-3 pl-6 mt-4 flex flex-row justify-evenly items-center rounded-lg self-end">
        <Text className="text-black mr-2">Editar</Text>
        <Octicons name="pencil" size={16} color="black" />
      </Pressable> */}
    </View>
  )
}

export default GoalTracker;