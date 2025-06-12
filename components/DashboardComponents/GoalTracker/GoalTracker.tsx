import { useUser } from "@/context/UserContex";
import { Image, Pressable, Text, View } from "react-native";

type Props = {

}

const GoalTracker = () => {
  const { user } = useUser();

  return (
    <View>
      <View>
        <Text>Meta: {user?.goal}</Text>
        <Text>Valor alvo: Indefinido</Text>
      </View>
      <View>
        <View></View> {/* Barra de progresso*/}
        <View>
          <Image/>
          <Text>X%</Text>
        </View>
        <Pressable>
          <Text>Editar</Text>
          <Image/>
        </Pressable>
      </View>
    </View>
  )
}

export default GoalTracker;