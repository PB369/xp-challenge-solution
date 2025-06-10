import { Button, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";

export default function Time() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)/initialAmount');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Quanto tempo você pretende deixar o dinheiro investido?</Text>
      <Button title="Próximo" onPress={handleNext}/>
    </View>
  );
}
