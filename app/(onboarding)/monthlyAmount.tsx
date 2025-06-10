import { Button, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";

export default function MonthlyAmount() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(tabs)');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Qual parte da sua renda mensal você pode investir?</Text>
      <Button title="Finalizar" onPress={handleNext}/>
    </View>
  );
}
