import { Button, Text, TextInput, View } from "react-native";
import '@/global.css'
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const handleLogin = () => { 
    setShowErrorMessage(false);
    const isLoginSuccessful = login(username, password);

    if(isLoginSuccessful){
      router.replace('/(onboarding)/start');
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
      <TextInput onChangeText={setUsername} value={username} placeholder="username (admin)"
        className="border my-2"
      />
      <TextInput onChangeText={setPassword} value={password} placeholder="password (12345)" secureTextEntry
        className="border mb-2"
      />
      <Button title="Login" onPress={handleLogin}/>
      {showErrorMessage && (
          <Text>Credenciais inválidas! Tente novamente.</Text>
      )}
    </View>
  );
}
