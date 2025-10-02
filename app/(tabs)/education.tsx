import CourseCard from "@/components/EducationPageComponents/CourseCard/CourseCard";
import CoursesFilters from "@/components/EducationPageComponents/CoursesFilters/CoursesFilters";
import LastCourse from "@/components/EducationPageComponents/LastCourse/LastCourse";
import { ScrollView, Text, View } from "react-native";

export default function Education(){
  return (
    <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} className="flex-1 bg-black">
      <View className="flex-col w-11/12 h-full">
        <Text className="text-white text-2xl font-bold self-start mt-6">Meu Progresso</Text>
        <LastCourse/>
        <Text className="text-white text-2xl font-semibold self-start">Catálogo</Text>
        <CoursesFilters/>
        <CourseCard/>
      </View>
    </ScrollView>
  )
}