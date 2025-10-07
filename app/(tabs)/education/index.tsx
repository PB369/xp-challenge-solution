import CourseCard from "@/components/EducationPageComponents/CourseCard/CourseCard";
import CoursesFilters from "@/components/EducationPageComponents/CoursesFilters/CoursesFilters";
import LastCourse from "@/components/EducationPageComponents/LastCourse/LastCourse";
import { useUser } from "@/context/UserContex";
import { CourseCardType } from "@/utils/types/courseCardType";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Education(){
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  
  const { user } = useUser();
  const coursesList = user?.educationalCourses || [];
  // const course = coursesList[0];
  const isCourseListEmpty = coursesList.length === 0;
  
  const router = useRouter();
  
  const courseCards: CourseCardType[] = coursesList.map((course, index) => (
    {
      courseId: course.courseId,
      courseName: course.courseName,
      category: course.category,
      duration: course.duration,
      difficultyLevel: course.difficultyLevel,
      description: course.description,
      progressPercentage: course.progressPercentage,
      isLastAccessed: course.isLastAccessed,
      hasBeenStarted: course.hasBeenStarted,
    }
  ));
  
  const lastCourseCard: CourseCardType = courseCards.filter(courseCard=>courseCard.isLastAccessed === true)[0];
  
  const filtersList: string[] = courseCards.map(courseCard => courseCard.category);

  const filteredCourses = selectedFilter
    ? courseCards.filter((c) => c.category === selectedFilter)
    : courseCards;

  const courseOverviewPath = `/(tabs)/education/[courseId]/overview`
  const courseContentPath = `/(tabs)/education/[courseId]/content`

  return (
    <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}} className="flex-1 bg-black">
      <View className="flex-col w-11/12 h-full">
        <Text className="text-white text-2xl font-bold self-start mt-6">Meu Progresso</Text>
        <LastCourse lastCourseCard={lastCourseCard} onPress={() => router.push(lastCourseCard.hasBeenStarted ? courseContentPath : courseOverviewPath)}/>
        <Text className="text-white text-2xl font-semibold self-start mt-3">Catálogo</Text>
        <CoursesFilters filtersList={filtersList} onFilterSelect={setSelectedFilter}/>
        <ScrollView>
          {filteredCourses.map((card, index) => (
            <CourseCard key={index} card={card} cardIndex={index} onPress={() => router.push(lastCourseCard.hasBeenStarted ? courseContentPath : courseOverviewPath)}/>
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