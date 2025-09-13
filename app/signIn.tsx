import { Image, Pressable, Text, TextInput, View } from "react-native";
import '@/global.css'
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function SignIn() {
  const { user, signIn } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const handleSignIn = async () => { 
    setShowErrorMessage(false);

    const isSignInSuccessful = await signIn(email, password);

    if(isSignInSuccessful){
      setShowErrorMessage(true);
      if(user && user.isFirstAccess){
        router.replace('/(onboarding)/start');
      } else {
        router.replace('/(tabs)');
      }
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-black w-full">
      <View className="flex flex-row justify-center items-center w-11/12 mb-10">
        <Image source={require('@/assets/images/logos/investyou-logo.png')} style={{width:'50%'}} resizeMode="contain"/>
      </View>
      <View className="w-4/5 justify-center items-center">
        <Text className="text-white text-2xl font-semibold">Sign In</Text>
        <TextInput onChangeText={setEmail} value={email} placeholder="Email"
          className="py-2 px-2 my-4 bg-zinc-800 text-white text-base  rounded-md w-full placeholder:text-white"
        />
        <TextInput onChangeText={setPassword} value={password} placeholder="Senha" secureTextEntry
          className="py-2 px-2 mb-8 bg-zinc-800 text-white text-base  rounded-md w-full placeholder:text-white"
        />
        <Pressable onPress={handleSignIn} className="bg-yellow-400 py-2 mb-4 w-full rounded-md">
          <Text className="text-center text-base font-semibold">Acessar</Text>
        </Pressable>
        <Pressable onPress={()=>router.replace('/signUp')} className="bg-transparent py-2 mb-4 w-full rounded-md">
          <Text className="text-center text-base font-semibold text-white underline">Criar minha conta</Text>
        </Pressable>
        {showErrorMessage && (
            <Text className="text-red-400">Credenciais inválidas! Tente novamente.</Text>
        )}
      </View>
    </View>
  );
}
