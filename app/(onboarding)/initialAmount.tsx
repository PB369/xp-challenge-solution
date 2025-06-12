import { Image, Pressable, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";
import { useState } from "react";
import { useUser } from "@/context/UserContex";
import Slider from '@react-native-community/slider';
import OnboardingProgress from "@/components/OnboardingProgress/OnboardingProgress";

export default function InitialAmount() {
  const { changeUserProperty } = useUser();
  const router = useRouter();

  const [initialAmount, setInitialAmount] = useState<number>(100);

  const handleNext = () => {
    changeUserProperty('initialAmount', initialAmount);
    router.push('/(onboarding)/profileAssessment');
  }

  return (
    <View className="flex-1 justify-center items-center bg-black w-full"
    >
      <View className="w-4/5 justify-center items-center">
        <OnboardingProgress currentStep={4}/>

        <Image source={require('@/assets/images/onboarding-images/initialAmount-image.png')} style={{width: 300, height: 300, marginBottom:16}}/>

        <Text className="text-white text-center font-semibold" style={{fontSize:26}}>Qual valor você tem disponível para investir hoje?</Text>

        <View className="w-full my-4">
          <Text className="text-white text-center text-xl font-bold mt-6">R${initialAmount}</Text>
          <Slider
            style={{ width: '100%', height: 50,  }}
            minimumValue={0}
            maximumValue={1000}
            step={50}
            minimumTrackTintColor="#facc15"
            maximumTrackTintColor="#fff"
            thumbTintColor="#fff"
            value={initialAmount}
            onValueChange={setInitialAmount}
            
          />
        </View>

          <Pressable onPress={handleNext} className={`bg-yellow-400 my-2 py-2 w-full rounded-md`}>
          <Text className="text-center text-base font-semibold">Próximo</Text>
        </Pressable>
      </View>
    </View>
  );
}
