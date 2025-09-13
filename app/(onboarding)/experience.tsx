import { Image, Pressable, Text, View } from "react-native";
import '@/global.css';
import { useRouter } from "expo-router";
import { useState } from "react";
import { useUser } from "@/context/UserContex";
import OnboardingProgress from "@/components/OnboardingProgress/OnboardingProgress";

export default function Experience() {
  const { changeUserProperty } = useUser();
  const router = useRouter();

  const options = ['Nunca investi', 'Já investi em renda fixa', 'Já investi em ações ou fundos multimercado'];

  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    changeUserProperty('experience', selected!);
    router.push('/(onboarding)/goal');
  }

  const handleSelected = (option: string) => {
    setSelected(option);
  }

  return (
    <View className="flex-1 justify-center items-center bg-black w-full"
    >
      <View className="w-4/5 justify-center items-center">
        <OnboardingProgress currentStep={1}/>
        
        <Image source={require('@/assets/images/onboarding-images/experience-image.png')} style={{width: 286, height: 286, marginBottom:16}}/>

        <Text className="text-white text-center font-semibold" style={{fontSize:26}}>Qual a sua experiência com investimento?</Text>

        <View className="w-full my-4">
          {options.map((option) => {
            return (
              <Pressable 
                key={option} onPress={()=>handleSelected(option)} 
                className={
                  `border 
                 bg-zinc-800 
                   my-2 py-2 px-4 
                   w-full 
                   rounded-md`
                } 
                style={{
                  borderColor: selected === option ? '#fff': '#27272a'
                }}
              >
                <Text className="text-white text-justify text-sm">{option}</Text>
              </Pressable>
            )
          })}
        </View>

         <Pressable onPress={handleNext} className={`${selected === null && 'opacity-70'} bg-yellow-400 my-2 py-2 w-full rounded-md`} disabled={selected === null}>
          <Text className="text-center text-base font-semibold">Próximo</Text>
        </Pressable>
      </View>
    </View>
  );
}
