import { Button, Pressable, Text, TextInput, View } from "react-native";
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
    <View className="flex-1 justify-center items-center bg-black w-full"
    >
      <View className="w-4/5 justify-center items-center">
        <Text className="text-white text-2xl font-semibold">Login</Text>
        <TextInput onChangeText={setUsername} value={username} placeholder="Username (admin)"
          className="py-2 px-2 my-4 bg-zinc-800 text-white text-base  rounded-md w-full"
        />
        <TextInput onChangeText={setPassword} value={password} placeholder="Senha (12345)" secureTextEntry
          className="py-2 px-2 mb-8 bg-zinc-800 text-white text-base  rounded-md w-full"
        />
        <Pressable onPress={handleLogin} className="bg-yellow-400 py-2 mb-4 w-full rounded-md">
          <Text className="text-center text-base font-semibold">Acessar</Text>
        </Pressable>
        {showErrorMessage && (
            <Text className="text-white">Credenciais inválidas! Tente novamente.</Text>
        )}
      </View>
    </View>
  );
}
