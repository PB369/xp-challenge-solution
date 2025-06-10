import { Button, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";

export default function Profile() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)/monthlyAmount');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Como você reagiria se sua carteira caísse 10% em 1 mês?</Text>
      <Button title="Próximo" onPress={handleNext}/>
    </View>
  );
}
