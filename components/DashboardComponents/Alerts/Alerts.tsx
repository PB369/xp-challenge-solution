import { Image, Pressable, Text, View } from "react-native";

type Props = {

}

const Alerts = () => {
  return (
    <View>
      <View>
        <Image />
        <Text>Alertas</Text>
      </View>
      <View>
        <View>
          <Image />
          <Text>Texto de alerta</Text>
          <Pressable>
            <Text>Detalhes</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Alerts;