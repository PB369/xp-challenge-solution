import { Button, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";

export default function InitialAmount() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)/profile');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Qual valor você tem disponível para investir hoje?</Text>
      <Button title="Próximo" onPress={handleNext}/>
    </View>
  );
}
