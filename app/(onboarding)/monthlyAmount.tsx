import OnboardingProgress from "@/components/OnboardingProgress/OnboardingProgress";
import { useUser } from "@/context/UserContex";
import '@/global.css';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function MonthlyAmount() {
  const { changeUserProperty, user } = useUser();
  const router = useRouter();

  const [monthlyAmount, setMonthlyAmount] = useState<string>("");

  const handleNext = () => {
    changeUserProperty('monthlyAmount', monthlyAmount);
    router.replace('/(onboarding)/profileAssessment');
  }

  const handlePrev = () => {
    router.back();
  }

  return (
    <View className="flex-1 justify-center items-center bg-black w-full"
    >
      <View className="w-4/5 justify-center items-center">
        <OnboardingProgress currentStep={4}/>

        <Image source={require('@/assets/images/onboarding-images/monthlyAmount-image.png')} style={{width: 258, height: 258, marginBottom:16}}/>

        <Text className="text-white text-center font-semibold" style={{fontSize:26}}>Quanto você pretende alocar mensalmente para seus investimentos?</Text>
        
        <View className="w-full my-4">
          <TextInput 
            value={monthlyAmount} 
            onChangeText={e=>{setMonthlyAmount(e);console.log(e, monthlyAmount)}}
            placeholder="Digite o valor"
            className="text-white placeholder:text-white border-b-2 border-white text-center"
          /> 
        </View>

        <View className="flex-col w-full justify-center items-center">
          <Pressable onPress={handleNext} className={`${monthlyAmount.length===0 && 'opacity-70'} bg-yellow-400 my-2 py-2 w-full rounded-md`} disabled={monthlyAmount.length===0}>
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
