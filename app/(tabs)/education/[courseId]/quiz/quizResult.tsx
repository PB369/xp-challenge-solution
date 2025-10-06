import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Circle } from "react-native-progress";

export default function QuizResult() {
  const router = useRouter();
  const { correctAnswers, totalQuestions } = useLocalSearchParams();

  const correct = Number(correctAnswers) || 0;
  const total = Number(totalQuestions) || 1;
  const score = correct / total;
  const percentage = Math.round(score * 100);

  const learned = ["Conceitos fundamentais", "Sintaxe básica", "Fluxo de componentes"];
  const review = ["Hooks avançados", "Performance", "Boas práticas de otimização"];

  return (
    <View className="flex-1 bg-black justify-between items-center px-6 py-10">
      <Text className="text-white text-3xl font-bold mb-6">
        Resultado do Quiz
      </Text>

      <View className="items-center mb-6 justify-center">
        <Circle
          progress={score}
          size={250}
          thickness={10}
          color="#FFCE00"
          unfilledColor="#1E1E1E"
          borderWidth={0}
        />
        <Text className="absolute top-[45%] text-white font-bold text-5xl text-center">
          {percentage}%
        </Text>
      </View>

      <View className="items-center mb-6">
        <Text className="text-white font-bold text-lg mb-2">
          {score >= 0.7 ? "Bom trabalho!" : "Continue praticando!"}
        </Text>
        <Text className="text-neutral-400 text-center text-base">
          Você acertou {correct} de {total}.{"\n"}
          {score >= 0.7
            ? "Excelente desempenho!"
            : "Reveja os conteúdos e tente novamente!"}
        </Text>
      </View>

      <View className="flex-row justify-between w-full mt-4 mb-8">
        <View className="w-[48%]">
          <Text className="text-green-500 font-semibold text-lg mb-2">
            Aprendido ✓
          </Text>
          {learned.map((item, i) => (
            <Text key={i} className="text-neutral-300 text-base mb-1">
              • {item}
            </Text>
          ))}
        </View>

        <View className="w-[48%]">
          <Text className="text-red-500 font-semibold text-lg mb-2">X Revisar</Text>
          {review.map((item, i) => (
            <Text key={i} className="text-neutral-300 text-base mb-1">
              • {item}
            </Text>
          ))}
        </View>
      </View>

      <Pressable
        onPress={() => router.replace("/(tabs)/education")}
        className="bg-[#FFCE00] py-4 w-[75%] rounded-md mb-4"
      >
        <Text className="text-center text-black text-lg font-semibold">
          Concluir
        </Text>
      </Pressable>
    </View>
  );
}
