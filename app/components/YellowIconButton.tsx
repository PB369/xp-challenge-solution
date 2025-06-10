import { mainBalck, mainYello } from "@/assets/colors/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type Props = {
    onClick?: () => any,
    icon: keyof typeof FontAwesome.glyphMap
};

export default function YellowIconButton({ onClick, icon }: Props) {
    return (
        <Pressable onPress={() => {
            if (onClick) {
                onClick()
            }
        }} style={styles.button}>
            <FontAwesome name={icon} size={20} color={mainBalck} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: mainYello,
        height: 35,
        width: 35,
        borderRadius: 35,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
});