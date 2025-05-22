import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, ScrollView, Text, TextInput } from "react-native"
import { RootStackParamList } from "../../App"

const Registration = (props: NativeStackScreenProps<RootStackParamList>) => {
    const { navigation } = props;
    return (
        <ScrollView>
            <TextInput placeholder="Login"/>
            <TextInput placeholder="Senha"/>
            <Text>Esqueci minha senha</Text>
            <Button title="Acessar" onPress={() => navigation.navigate("Quiz")}/>
        </ScrollView>
    )
}

export default Registration