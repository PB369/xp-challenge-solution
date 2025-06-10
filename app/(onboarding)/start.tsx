import { Button, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";

export default function Start() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)/experience');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Bem-vindo!</Text>
      <Button title="Começar" onPress={handleNext}/>
    </View>
  );
}
