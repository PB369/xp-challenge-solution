import { Image, Pressable, Text, TextInput, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";
import { useState } from "react";
import { useUser } from "@/context/UserContex";
import OnboardingProgress from "@/components/OnboardingProgress/OnboardingProgress";

export default function InitialAmount() {
  const { changeUserProperty } = useUser();
  const router = useRouter();

  const [initialAmount, setInitialAmount] = useState<string>("");

  const handleNext = () => {
    // changeUserProperty('initialAmount', initialAmount);
    router.push('/(onboarding)/profileAssessment');
  }

  const handlePrev = () => {
    router.back();
  }

  return (
    <View className="flex-1 justify-center items-center bg-black w-full"
    >
      <View className="w-4/5 justify-center items-center">
        <OnboardingProgress currentStep={4}/>

        <Image source={require('@/assets/images/onboarding-images/initialAmount-image.png')} style={{width: 300, height: 300, marginBottom:16}}/>

        <Text className="text-white text-center font-semibold" style={{fontSize:26}}>Quanto você pretende alocar mensalmente para seus investimentos?</Text>

        <View className="w-full my-4">
          <TextInput 
            value={initialAmount} 
            onChangeText={setInitialAmount}
            placeholder="Digite o valor"
            className="text-white placeholder:text-white border-b-2 border-white"
          /> 
        </View>

        <View className="flex-col w-full justify-center items-center">
          <Pressable onPress={handleNext} className={`${initialAmount.length===0 && 'opacity-70'} bg-yellow-400 my-2 py-2 w-full rounded-md`} disabled={initialAmount.length===0}>
            <Text className="text-center text-base font-semibold">Próximo</Text>
          </Pressable>
          <Pressable onPress={handlePrev} className={'my-2 py-2 w-[20%]'}>
            <Text className="text-center text-base font-semibold text-white">Voltar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
