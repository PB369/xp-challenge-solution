import { Text } from "react-native";
import ProgressBar from "../ProgressBar/ProgressBar";

type Props = {
  currentStep: number,
}

const OnboardingProgress = ({currentStep}: Props) => {
  const totalSteps: number = 5;
  const progressPercentage: number = (currentStep / totalSteps) * 100;

  return (
    <ProgressBar progressPercentage={progressPercentage} marginBottom={24}>
      <Text className="text-white ml-3">{`${currentStep}/${totalSteps}`}</Text>
    </ProgressBar>
  )
}

export default OnboardingProgress;