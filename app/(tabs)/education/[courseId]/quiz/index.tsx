import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function InitialScreenOfQuiz() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-around h-full items-center bg-black w-full">
      <View className="w-4/5 justify-center items-center">
        <Text className="text-white font-bold text-center" style={{fontSize:36}}>Prepare-se para o quiz</Text>
        <Text className="text-neutral-400 text-lg font-medium text-center my-4">Teste seus conhecimentos respondendo algumas questões e finalize esta jornada de aprendizado.</Text>
        <Image source={require('@/assets/images/quiz-images/initial-image.png')} style={{width: 340, height: 270, marginBottom:16}}/>
      </View>
      <Pressable 
        className="bg-yellow-400 my-2 py-4 w-[75%] rounded-md"
        onPress={()=>router.replace("/(tabs)/education/[courseId]/quiz/quizContent")}
      >
        <Text className="text-center text-lg font-semibold">Iniciar</Text>
      </Pressable>
    </View>
  )
}