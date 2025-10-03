import ProgressBar from "@/components/ProgressBar/ProgressBar"
import { findBanner } from "@/utils/courseBannerMapper"
import { CourseCardType } from "@/utils/types/courseCardType"
import { Image, Text, View } from "react-native"

type Props = {
  cardIndex: number,
  card: CourseCardType,
}

const CourseCard = ({ cardIndex, card }: Props) => {

  return (
    <View className="flex-col bg-[#242424] rounded-md w-full p-4 mb-3" key={cardIndex}>
      <View className="flex-row justify-start items-center mb-4">
        <Image
          source={findBanner(card.category)}
          style={{width:45, height:45, marginRight:15}}
        />
        <View className="flex-1">
          <Text className="text-white font-medium text-lg">{card.courseName}</Text>
          <Text className="text-neutral-400 text-base font-medium">{card.duration} - {card.difficultyLevel}</Text>
        </View>
        <Text className="text-white self-end">{card.progressPercentage}%</Text>
      </View>
      <ProgressBar progressPercentage={card.progressPercentage} bgOfBackBar="#1e1e1e" bgOfFrontBar="#ffffff" borderRadius={6} height={3} widthInPercentage={100}/>
    </View>
  )
}

export default CourseCard