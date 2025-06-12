import { View } from "react-native";

type Props = {
  progressPercentage: number,
  children?: React.ReactNode,
}

const ProgressBar = ({progressPercentage, children}: Props) => {

  return (
    <View className="w-full flex flex-row justify-center items-center mb-8">
      <View className="h-3 bg-black overflow-hidden rounded-md w-full mr-4">
        <View className={`h-full bg-yellow-400 rounded-md`} style={{width: `${progressPercentage}%`}}/>
      </View>
      {children}
    </View>
  )
}

export default ProgressBar;