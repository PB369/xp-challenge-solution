import { mainGray, mainWhite } from "@/assets/colors/colors";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    text: string,
    style?: Record<string, any>
};

export default function TextButton({ text, style }: Props) {
    return (
        <Pressable style={{...styles.button, ...style}}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: mainGray,
        height: 35,
        flex: 1,
        borderRadius: 35,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: mainWhite
    }
});