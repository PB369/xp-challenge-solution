import OnboardingProgress from "@/components/OnboardingProgress/OnboardingProgress";
import { useUser } from "@/context/UserContex";
import '@/global.css';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function ProfileAssessment() {
  const { changeUserProperty , user} = useUser();
  const router = useRouter();

  const options = [
    {
      content: 'Ficaria muito preocupado e sacaria o dinheiro',
      profileType: 'Conservador',
    },
    {
      content: 'Ficaria inseguro, mas manteria o investimento',
      profileType: 'Moderado',
    },
    {
      content: 'Aproveitaria para investir mais',
      profileType: 'Agressivo',
    },
  ];

  const [selected, setSelected] = useState<string | null>(null);

  const handleFinish = () => {
    changeUserProperty('isFirstAccess', false);
    router.replace('/(onboarding)/createFirstPortfolio');
  }
  
  const handlePrev = () => {
    router.back();
  }
  
  const handleSelected = (option: {content: string, profileType: string}) => {
    setSelected(option.profileType);
    changeUserProperty('profileAssessment', option.profileType);
  }

  return (
    <View className="flex-1 justify-center items-center bg-black w-full"
    >
      <View className="w-4/5 justify-center items-center">
        <OnboardingProgress currentStep={5}/>
        <Image source={require('@/assets/images/onboarding-images/profileAssessment-image.png')} style={{width: 276, height: 276, marginBottom:16}}/>

        <Text className="text-white text-center font-semibold" style={{fontSize:26}}>Como você reagiria se sua carteira caísse 10% em 1 mês?</Text>

        <View className="w-full my-4">
          {options.map((option) => {
            return (
              <Pressable 
                key={option.content} onPress={()=>handleSelected(option)} 
                className={
                  `border 
                  bg-zinc-800 
                    my-2 py-2 px-4 
                    w-full 
                    rounded-md`
                } 
                style={{
                  borderColor: selected === option.profileType ? '#fff': '#27272a'
                }}
              >
                <Text className="text-white text-justify text-sm">{option.content}</Text>
              </Pressable>
            )
          })}
        </View>

        <View className="flex-col w-full justify-center items-center">
          <Pressable onPress={handleFinish} className={`${selected === null && 'opacity-70'} bg-yellow-400 my-2 py-2 w-full rounded-md`} disabled={selected === null}>
            <Text className="text-center text-base font-semibold">Finalizar</Text>
          </Pressable>
          <Pressable onPress={handlePrev} className={'my-2 py-2 w-[20%]'}>
            <Text className="text-center text-base font-semibold text-white">Voltar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
