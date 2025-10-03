import ProgressBar from "@/components/ProgressBar/ProgressBar"
import { findBanner } from "@/utils/courseBannerMapper"
import { Image, ScrollView, Text, View } from "react-native"

const CourseCard = () => {
  const courseCards = [
    {
      courseName: "ETFs na prática",
      category: "ETFs",
      duration: "12 min",
      difficultyLevel: "Iniciante",
      progressPercentage: 20,
    },
    {
      courseName: "ETFs na prática",
      category: "ETFs",
      duration: "12 min",
      difficultyLevel: "Iniciante",
      progressPercentage: 20,
    },
    {
      courseName: "ETFs na prática",
      category: "ETFs",
      duration: "12 min",
      difficultyLevel: "Iniciante",
      progressPercentage: 20,
    },
  ]

  return (
    <ScrollView>
      {courseCards.map((card, index) => (
        <View className="flex-col bg-[#242424] rounded-md w-full p-4 mb-3" key={index}>
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
      ))}
    </ScrollView>
  )
}

export default CourseCard