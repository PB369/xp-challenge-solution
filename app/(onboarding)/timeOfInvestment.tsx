import OnboardingProgress from "@/components/OnboardingProgress/OnboardingProgress";
import { useUser } from "@/context/UserContex";
import '@/global.css';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function TimeOfInvestment() {
  const { changeUserProperty } = useUser();
  const router = useRouter();

  const options = ['Menos de 1 ano', 'De 1 a 2 anos', 'De 3 a 4 anos', 'Mais de 4 anos'];

  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    changeUserProperty('timeOfInvestment', selected!);
    router.push('/(onboarding)/monthlyAmount');
  }

  const handlePrev = () => {
    router.back();
  }

  const handleSelected = (option: string) => {
    setSelected(option);
  }

  return (
    <View className="flex-1 justify-center items-center bg-black w-full"
    >
      <View className="w-4/5 justify-center items-center">
        <OnboardingProgress currentStep={3}/>

        <Image source={require('@/assets/images/onboarding-images/time-image.png')} style={{width: 248, height: 234, marginBottom:16}}/>

        <Text className="text-white text-center font-semibold" style={{fontSize:26}}>Quanto tempo você pretende deixar o dinheiro investido?</Text>

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

        <View className="flex-col w-full justify-center items-center">
          <Pressable onPress={handleNext} className={`${selected === null && 'opacity-70'} bg-yellow-400 my-2 py-2 w-full rounded-md`} disabled={selected === null}>
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
