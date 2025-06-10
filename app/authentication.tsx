import { Button, Text, View } from "react-native";
import '@/global.css'
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";

export default function Authentication() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.replace('/(tabs)');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Authentication</Text>
      <Button title="Login" onPress={handleLogin}/>
    </View>
  );
}
