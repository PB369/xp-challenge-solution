import { useAuth } from "@/context/AuthContext";
import '@/global.css';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

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
    <View className="flex-1 justify-center items-center bg-black w-full">
      <View className="w-4/5 justify-center items-center">
        <Text className="text-white text-2xl font-semibold">Crie sua conta!</Text>
        <TextInput onChangeText={setUsername} value={username} placeholder="Nome de usuário"
          className="py-2 px-2 my-4 bg-zinc-800 text-white text-base  rounded-md w-full placeholder:text-white"
        />
        <TextInput onChangeText={setPassword} value={password} secureTextEntry placeholder="Senha"
          className="py-2 px-2 mb-8 bg-zinc-800 text-white text-base  rounded-md w-full placeholder:text-white"
        />
        <Pressable onPress={handleRegister} className="bg-yellow-400 py-2 w-full rounded-md">
          <Text className="text-center text-base font-semibold">Criar minha conta</Text>
        </Pressable>
      </View>
    </View>
  );
}
