import { Button, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";

export default function Experience() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)/goal');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Qual a sua experiência com investimento?</Text>
      <Button title="Próximo" onPress={handleNext}/>
    </View>
  );
}
