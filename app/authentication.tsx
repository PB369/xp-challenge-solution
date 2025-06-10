import { Button, Text, TextInput, View } from "react-native";
import '@/global.css'
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Authentication() {
  const { login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const handleLogin = () => {
    setShowErrorMessage(false)
    if(username === "admin" && password === "12345"){
      login();
      router.replace('/(tabs)');
    } else {
      setShowErrorMessage(true);
    }
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
      <TextInput onChangeText={setUsername} placeholder="username (admin)"
        className="border my-2"
      />
      <TextInput onChangeText={setPassword} placeholder="password (12345)"
        className="border mb-2"
      />
      <Button title="Login" onPress={handleLogin}/>
      {showErrorMessage && (
          <Text>Credenciais inválidas! Tente novamente.</Text>
      )}
    </View>
  );
}
