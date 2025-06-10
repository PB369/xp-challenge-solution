import { Button, Text, TextInput, View } from "react-native";
import '@/global.css'
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Register() {
  const { register } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = () => { 
    register({ username, password })
    router.replace('/login');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Crie sua conta!</Text>
      <TextInput onChangeText={setUsername} value={username} placeholder="Nome de usuário"
        className="border my-2"
      />
      <TextInput onChangeText={setPassword} value={password} secureTextEntry placeholder="Senha"
        className="border mb-2"
      />
      <Button title="Criar minha conta" onPress={handleRegister}/>
    </View>
  );
}
