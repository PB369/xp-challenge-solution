import { useUser } from "@/context/UserContex";
import { EducationalCourseType } from "@/utils/types/educationalCourseType";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function CourseLesson() {
  const { courseId, moduleIndex, lessonIndex } = useLocalSearchParams<{
    courseId: string;
    moduleIndex: string;
    lessonIndex: string;
  }>();

  // const course = getCourseById(courseId); 
  const [currentModuleIndex, setCurrentModuleIndex] = useState(Number(moduleIndex));
  const [currentLessonIndex, setCurrentLessonIndex] = useState(Number(lessonIndex));

  const {user} = useUser();
  const router = useRouter();

  const course: EducationalCourseType = {
      ownerId: user!.username,
      courseId: 1,
      courseName: "Introdução à Renda Fixa",
      category: "Renda Fixa",
      duration: "15 min",
      difficultyLevel: "Iniciante",
      progressPercentage: 33,
      description: "Invista com segurança: o guia definitivo para iniciantes em renda fixa.",
      isFinished: false,
      whatWillLearn: ["Entender o que é Renda Fixa e como funciona", "Identificar os principais tipos de títulos", "Saber como escolher de acordo com seu perfil de investimentos", "Evitar erros comuns de iniciantes"],
      modules: [
        {
          moduleId: 1,
          moduleName: "Fundamentos da Renda Fixa",
          moduleDescription: "Entenda o conceito e conheça exemplos reais sobre seu uso.",
          moduleDuration: "15 min",
          moduleProgressPercentage: 0,
          isFinished: false,
          lessons: [
            {
              lessonId: 1,
              lessonName: "O que é Renda Fixa?",
              lessonDuration: "5 min",
              isFinished: true,
              content: "Renda Fixa é...",
            },
            {
              lessonId: 2,
              lessonName: "Conceitos Fundamentais",
              lessonDuration: "8 min",
              isFinished: false,
              content: "No mundo de investimentos a renda fixa...",
            },
            {
              lessonId: 3,
              lessonName: "Estratégias para Renda Fixa",
              lessonDuration: "2 min",
              isFinished: false,
              content: "Para fazer bons investimentos, precisamos considerar...",
            },
          ],
        },
        {
          moduleId: 2,
          moduleName: "Títulos de Renda Fixa",
          moduleDescription: "Conheça os principais títulos e suas vantagens.",
          moduleDuration: "10 min",
          moduleProgressPercentage: 0,
          isFinished: false,
          lessons: [
            {
              lessonId: 1,
              lessonName: "Tesouro Selic",
              lessonDuration: "5 min",
              isFinished: false,
              content: "O Tesouro Selic é um título pós-fixado, ou seja...",
            },
            {
              lessonId: 2,
              lessonName: "Tesouro Prefixado",
              lessonDuration: "3 min",
              isFinished: false,
              content: "Este título permite que o investidor já saiba a taxa de rentabilidade no momento da compra e...",
            },
            {
              lessonId: 3,
              lessonName: "Tesouro IPCA+",
              lessonDuration: "2 min",
              isFinished: false,
              content: "Dentre as vantagens deste título, temos a sua rentabilidade híbrida, proteção contra inflação e...",
            },
          ],
        },
        {
          moduleId: 3,
          moduleName: "Aspectos práticos de riscos",
          moduleDescription: "Equipe-se com conhecimentos úteis sobre Renda Fixa e seus principais riscos.",
          moduleDuration: "15 min",
          moduleProgressPercentage: 0,
          isFinished: false,
          lessons: [
            {
              lessonId: 1,
              lessonName: "Reserva de Emergência",
              lessonDuration: "5 min",
              isFinished: false,
              content: "Na hora de investimento em Renda Fixa, é importante se ter uma reserva, a fim de...",
            },
            {
              lessonId: 2,
              lessonName: "Risco de Crédito",
              lessonDuration: "8 min",
              isFinished: false,
              content: "Um dos principais riscos da Renda Fixa é a possibilidade do emissor não realizar o pagamento...",
            },
            {
              lessonId: 3,
              lessonName: "O Problema da Liquidez",
              lessonDuration: "2 min",
              isFinished: false,
              content: "A liquidez tem seus prós e contras, mas quando o assunto é Renda Fixa...",
            },
          ],
        },
      ]
  }
  
  
  const module = course.modules[currentModuleIndex];
  const lesson = module.lessons[currentLessonIndex];
  const paragraphs = lesson.content.split(/\n\s*\n/);
  const isFirstLesson = currentModuleIndex === 0 && currentLessonIndex === 0;

  const isLastLesson =
  currentModuleIndex === course.modules.length - 1 &&
  currentLessonIndex === module.lessons.length - 1;

  const goNext = () => {
    if (currentLessonIndex < module.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentLessonIndex(0);
    } else {
      router.push({
        pathname: "/(tabs)/education/[courseId]/quiz",
        params: { courseId },
      });
    }
  };

  const goBack = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentModuleIndex > 0) {
      const prevModule = course.modules[currentModuleIndex - 1];
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(prevModule.lessons.length - 1);
    } else {
      router.back();
    }
  };

  return (
    <View className="flex-1 bg-black justify-between">
      <ScrollView
        className="flex-1 w-full py-6"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <View className="flex-col justify-center items-center w-11/12">
          <Text className="text-white text-2xl font-bold mb-4 text-center">
            {currentModuleIndex + 1}. {module.moduleName}
          </Text>
          <Text className="text-white text-xl mb-6 text-center">
            {lesson.lessonName}
          </Text>
        </View>

        <View className="flex-col justify-center items-center w-11/12">
          {paragraphs.map((p, index) => (
            <Text
              key={index}
              className="text-white text-lg text-justify flex-1"
            >
              {p.trim()}
            </Text>
          ))}
        </View>
      </ScrollView>

      <View className="flex-row w-full justify-around my-6">
        <Pressable
          onPress={goBack}
          disabled={isFirstLesson}
          className={`py-2 px-6 rounded-md ${
            isFirstLesson ? "bg-neutral-700" : "bg-neutral-500"
          }`}
        >
          <Text className="text-white text-lg">Voltar</Text>
        </Pressable>

        <Pressable
          onPress={goNext}
          className="py-2 px-6 bg-[#FFD700] rounded-md"
        >
          <Text className="text-black text-lg font-semibold">
            {isLastLesson ? "Finalizar" : "Próximo"}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}