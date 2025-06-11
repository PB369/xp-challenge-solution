import { Image, Pressable, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";

export default function Start() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)/experience');
  }

  return (
    <View className="flex-1 justify-center items-center bg-black w-full"
    >
      <View className="w-4/5 justify-center items-center">
        <Image source={require('@/assets/images/start-image.png')} style={{width: 340, height: 270, marginBottom:16}}/>
        <Text className="text-white font-bold" style={{fontSize:36}}>Bem-vindo!</Text>
        <Text className="text-white text-center my-4" style={{fontWeight:200}}>Temos algumas perguntas sobre seu perfil investidor.</Text>
        <Pressable onPress={handleNext} className="bg-yellow-400 my-2 py-2 w-full rounded-md">
          <Text className="text-center text-base font-semibold">Começar</Text>
        </Pressable>
      </View>
    </View>
  );
}
