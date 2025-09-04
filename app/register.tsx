import { useAuth } from "@/context/AuthContext";
import '@/global.css';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register() {
  const { signUp } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // const saveData = async () => {
  //   try {
  //     await AsyncStorage.setItem("user_name", name);
  //     setSavedName(name);
  //   } catch (error) {
  //     console.error("Erro ao salvar:", error);
  //   }
  // };

  const handleRegister = () => {
    setShowErrorMessage(false);

    if(username.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0){
      setErrorMessage('Preencha todos os campos para criar sua conta!');
      setShowErrorMessage(true);
    } else {
      if(password === confirmPassword) {
        // register({ username, password, email })

        signUp(username, email, password);

        // try {
        //   await AsyncStorage.setItem("userData", name);
        //   setSavedName(name);
        // } catch (error) {
        //   console.error("Erro ao salvar:", error);
        // }
        router.replace('/login');
      } else {
        setErrorMessage('Os campos de senha não são iguais');
        setShowErrorMessage(true);
      }
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-black w-full">
      <View className="w-4/5 justify-center items-center">
        <View className="flex flex-row justify-center items-center w-11/12 mb-10">
          <Image source={require('@/assets/images/logos/investyou-logo.png')} style={{width:'50%'}} resizeMode="contain"/>
        </View>
        <Text className="text-white text-2xl font-semibold">Crie sua conta!</Text>
        <TextInput onChangeText={setUsername} value={username} placeholder="Nome" textContentType="name" 
          className="py-2 px-2 my-4 bg-zinc-800 text-white text-base  rounded-md w-full placeholder:text-white"
        />
        <TextInput onChangeText={setEmail} value={email} placeholder="Email" textContentType="emailAddress"
          className="py-2 px-2 mb-4 bg-zinc-800 text-white text-base  rounded-md w-full placeholder:text-white"
        />
        <TextInput onChangeText={setConfirmPassword} value={confirmPassword} secureTextEntry placeholder="Senha" textContentType="password"
          className="py-2 px-2 mb-4 bg-zinc-800 text-white text-base  rounded-md w-full placeholder:text-white" 
        />
        <TextInput onChangeText={setPassword} value={password} secureTextEntry placeholder="Confirmar senha" textContentType="password"
          className="py-2 px-2 mb-8 bg-zinc-800 text-white text-base  rounded-md w-full placeholder:text-white"
        />
        <Pressable onPress={handleRegister} className="bg-yellow-400 py-2 mb-4 w-full rounded-md">
          <Text className="text-center text-base font-semibold">Criar minha conta</Text>
        </Pressable>
      </View>
      {showErrorMessage && (
            <Text className="text-red-400">{errorMessage}</Text>
        )}
    </View>
  );
}
