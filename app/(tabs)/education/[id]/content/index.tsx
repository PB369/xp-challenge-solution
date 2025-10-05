import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { useUser } from "@/context/UserContex";
import { findBanner } from "@/utils/courseBannerMapper";
import { EducationalCourseType } from "@/utils/types/educationalCourseType";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function CourseContent() {
  const {user} = useUser();
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | undefined>(undefined);

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

  return (
    <ScrollView className="flex-1 bg-black w-full py-6" contentContainerStyle={{justifyContent:'center', alignItems:'center'}}>
      <Image 
        source={findBanner(course.category)} 
        style={{width: "100%", height: 200}}
      />
      <Pressable onPress={()=>router.back()} className="absolute top-2 right-2">
        <Ionicons name="close-circle" size={40} color="white" />
      </Pressable>
      <View className="flex-col justify-center items-center w-11/12">
        <Text className="text-white text-2xl font-bold w-full text-center my-4">{course.courseName}</Text>
        <View className="justify-center items-center w-full my-4">
          <ProgressBar bgOfBackBar="#3C3C3C" bgOfFrontBar="#ffffff" progressPercentage={33} borderRadius={6} height={3} widthInPercentage={90}/>
          <Text className="text-white mt-3 font-semibold text-lg">{course.progressPercentage}% Concluído</Text>
        </View>
      </View>
      <View className="w-11/12 mb-8">
        <Text>Módulos</Text>
        <View className="w-full">
          {course.modules.map((module, index)=>(
            <Pressable 
              key={index} 
              className="bg-neutral-800 w-full p-5 my-2 flex-col justify-between items-center rounded-md border border-white"
              onPress={()=>setExpandedIndex(expandedIndex === index ? undefined : index)}
            >
              <View className="flex-row w-full">
                <Text className="text-white font-semibold text-xl flex-1 text-ellipsis">{index+1}. {module.moduleName}</Text>
                <MaterialIcons name="expand-more" size={24} color="white"/>
              </View>
              {expandedIndex === index && (
                <View className="py-4 justify-center items-center w-full">
                  {module.lessons.map((lesson, index)=>(
                    <View className="flex-row w-full bg-neutral-700 p-4 my-1 justify-center items-center rounded-md">
                      <View className="flex-col flex-1 justify-center items-start">
                        <Text className="text-white text-lg font-medium">{lesson.lessonName}</Text>
                        <Text className="text-white text-lg font-normal">{lesson.lessonDuration}</Text>
                      </View>
                      <View>
                      </View>
                      {lesson.isFinished ? 
                        <AntDesign name="checkcircle" size={24} color="#FFD700" />
                        :
                        <Entypo name="circle" size={24} color="#FFD700" />
                      }
                    </View>
                  ))}
                </View>
              )}
            </Pressable>
          ))}
          <View className="bg-[#FFD700] w-full p-5 my-2 flex-row justify-between items-center rounded-md">
            <Text className="text-black text-center font-semibold text-xl flex-1 text-ellipsis">Realizar Quiz</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}