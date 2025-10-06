import CourseCard from "@/components/EducationPageComponents/CourseCard/CourseCard";
import CoursesFilters from "@/components/EducationPageComponents/CoursesFilters/CoursesFilters";
import LastCourse from "@/components/EducationPageComponents/LastCourse/LastCourse";
import { CourseCardType } from "@/utils/types/courseCardType";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Education(){
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const filtersList = ["Renda Variável", "Multimercado", "Renda Fixa", "ETFs", "Fundos Imobiliários"];

  const router = useRouter();

  const courseCards: CourseCardType[] = [
    {
      courseId: 1,
      courseName: "ETFs na prática",
      category: "ETFs",
      duration: "12 min",
      difficultyLevel: "Iniciante",
      progressPercentage: 20,
    },
    {
      courseId: 1,
      courseName: "ETFs na prática",
      category: "ETFs",
      duration: "12 min",
      difficultyLevel: "Iniciante",
      progressPercentage: 20,
    },
    {
      courseId: 1,
      courseName: "ETFs na prática",
      category: "ETFs",
      duration: "12 min",
      difficultyLevel: "Iniciante",
      progressPercentage: 20,
    },
  ]

  const filteredCourses = selectedFilter
    ? courseCards.filter((c) => c.category === selectedFilter)
    : courseCards;

  return (
    <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} className="flex-1 bg-black">
      <View className="flex-col w-11/12 h-full">
        <Text className="text-white text-2xl font-bold self-start mt-6">Meu Progresso</Text>
        <LastCourse onPress={() => router.push(`/(tabs)/education/[courseId]/overview`)}/>
        <Text className="text-white text-2xl font-semibold self-start mt-3">Catálogo</Text>
        <CoursesFilters filtersList={filtersList} onFilterSelect={setSelectedFilter}/>
        <ScrollView>
          {filteredCourses.map((card, index) => (
            <CourseCard key={index} card={card} cardIndex={index} onPress={() => router.push(`/education/[courseId]/overview`)}/>
          ))}
          {filteredCourses.length === 0 && (
            <Text className="text-white font-semibold text-lg text-center mt-4">
              Nenhum curso encontrado para este catálogo.
            </Text>
          )}
        </ScrollView>
      </View>
    </ScrollView>
  )
}