import { Button, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";

export default function Goal() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)/time');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Qual é o seu objetivo financeiro?</Text>
      <Button title="Começar" onPress={handleNext}/>
    </View>
  );
}
