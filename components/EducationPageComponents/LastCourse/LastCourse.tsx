import ProgressBar from "@/components/ProgressBar/ProgressBar"
import { CourseCardType } from "@/utils/types/courseCardType"
import { Image, Pressable, Text, View } from "react-native"

type Props = {
  onPress?: () => void,
  lastCourseCard: CourseCardType,
}

const LastCourse = ({ onPress, lastCourseCard }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View className="w-full bg-[#242424] rounded-md p-4 my-4 flex-col justify-center items-center">
        <View className="flex-row w-full">
          <Image source={require('@/assets/images/courses-images/fixed-income-cat.png')} style={{width:100, height:100, marginRight:10}}/>
          <View className="flex-col flex-1 justify-center items-start">
            <Text className="text-white text-xl font-bold">{lastCourseCard.courseName}</Text>
            <Text className="text-yellow-500 text-md my-1">{lastCourseCard.description}</Text>
            <Text className="text-neutral-400 text-base font-medium">{lastCourseCard.duration} - {lastCourseCard.difficultyLevel}</Text>
          </View>
        </View>
        <View className="flex-col justify-center items-center">
          <Text className="text-neutral-400 self-end mb-1">{lastCourseCard.progressPercentage}%</Text>
          <ProgressBar bgOfBackBar="#3C3C3C" bgOfFrontBar="#ffffff" progressPercentage={lastCourseCard.progressPercentage} borderRadius={6} height={3} widthInPercentage={100}/>
        </View>
      </View>
    </Pressable>
  )
}

export default LastCourse