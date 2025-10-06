import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
};

export default function QuizContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const router = useRouter();

  const questions: Question[] = [
    {
      id: 1,
      question: "O que é o React Native?",
      options: [
        "Uma linguagem de programação",
        "Um framework para apps móveis",
        "Um sistema operacional",
        "Um banco de dados",
      ],
      correct: 1,
    },
    {
      id: 2,
      question: "Qual linguagem principal o React Native utiliza?",
      options: ["Kotlin", "JavaScript", "Swift", "Dart"],
      correct: 1,
    },
    {
      id: 3,
      question: "Quem mantém o React Native?",
      options: ["Google", "Meta (Facebook)", "Microsoft", "Amazon"],
      correct: 1,
    },
  ];

  const { courseId } = useLocalSearchParams();

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (selectedOption === null) return;

    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = selectedOption;
    setAnswers(updatedAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      const correctAnswers = updatedAnswers.filter(
        (a, i) => a === questions[i].correct
      ).length;

      router.replace({
        pathname: "/(tabs)/education/[courseId]/quiz/quizResult",
        params: {
          courseId: courseId.toString(),
          correctAnswers: correctAnswers.toString(),
          totalQuestions: questions.length.toString(),
        },
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(answers[currentIndex - 1] ?? null);
    }
  };

  return (
    <View className="flex-1 bg-black justify-between items-center px-6 py-8">
      <View className="w-full">
        <View className="flex-row justify-between items-center w-full mb-3">
          <Text className="text-neutral-400 text-lg text-right">
            Pergunta {currentIndex + 1}/{questions.length}
          </Text>
          <Pressable onPress={()=>router.push(`/(tabs)/education/${courseId}/content`)}>
          <Ionicons name="close-circle" size={40} color="white" />
        </Pressable>
        </View>

        <Text className="text-white text-2xl font-bold mb-6">
          {currentQuestion.question}
        </Text>
        {currentQuestion.options.map((option, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedOption(index)}
            className={`w-full p-4 my-2 rounded-md border ${
              selectedOption === index
                ? "bg-yellow-400 border-yellow-400"
                : "border-neutral-600"
            }`}
          >
            <Text
              className={`text-lg ${
                selectedOption === index
                  ? "text-black font-semibold"
                  : "text-white"
              }`}
            >
              {option}
            </Text>
          </Pressable>
        ))}
      </View>

      <View className="flex-row justify-between w-full mt-8">
        <Pressable
          className={`px-6 py-3 rounded-md ${
            currentIndex === 0 ? "bg-neutral-700" : "bg-neutral-600"
          }`}
          disabled={currentIndex === 0}
          onPress={handlePrevious}
        >
          <Text className="text-white text-lg">Voltar</Text>
        </Pressable>

        <Pressable
          className={`px-6 py-3 rounded-md ${
            selectedOption === null ? "bg-neutral-700" : "bg-yellow-400"
          }`}
          disabled={selectedOption === null}
          onPress={handleNext}
        >
          <Text className="text-black text-lg font-semibold">
            {currentIndex === questions.length - 1 ? "Finalizar" : "Próxima"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
