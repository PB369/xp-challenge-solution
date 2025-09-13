import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';

const ProfileAlignment = () => {

  return (
    <View className="w-11/12 rounded-lg bg-neutral-800 flex justify-center items-center my-3 py-5 px-4">
      <Text className="text-white text-2xl font-semibold self-start">Alinhamento com Perfil</Text>
      <View className="w-full flex my-3">
        <ProgressBar progressPercentage={92} height={18} bgOfBackBar="#3c3c3c" widthInPercentage={85}>
          <Text className="text-white text-2xl font-semibold ml-4">92%</Text>
        </ProgressBar>
      </View>
      <View className="flex flex-row justify-start items-center w-full">
        <Feather name="check" size={26} color="#0dff00" />
        <Text className="w-3/4 text-white ml-3">Carteira equilibrada. Atenção a exposição em ações (acima de 30%).</Text>
      </View>
    </View>
  )
}

export default ProfileAlignment;