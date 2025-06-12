import { Text } from "react-native";
import ProgressBar from "../ProgressBar/ProgressBar";

type Props = {
  currentStep: number,
}

const OnboardingProgress = ({currentStep}: Props) => {
  const totalSteps: number = 6;
  const progressPercentage: number = (currentStep / totalSteps) * 100;

  return (
    <ProgressBar progressPercentage={progressPercentage}>
      <Text className="text-white">{`${currentStep}/${totalSteps}`}</Text>
    </ProgressBar>
  )
}

export default OnboardingProgress;