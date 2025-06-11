import { Text, View } from "react-native";

type Props = {
  currentStep: number,
}

const OnboardingProgress = ({currentStep}: Props) => {
  const totalSteps: number = 6;
  const progressPercentage: number = (currentStep / totalSteps) * 100;

  return (
    <View className="w-full flex flex-row justify-center items-center mb-8">
      <View className="h-2 bg-zinc-800 overflow-hidden rounded-md w-full mr-4">
        <View className={`h-full bg-yellow-400 rounded-md`} style={{width: `${progressPercentage}%`}}/>
      </View>
      <Text className="text-white">{`${currentStep}/${totalSteps}`}</Text>
    </View>
  )
}

export default OnboardingProgress;