import { mainGray, mainWhite } from "@/assets/colors/colors";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    text: string,
    style?: Record<string, any>,
    onClick?: () => any
};

export default function TextButton({ text, style, onClick }: Props) {
    return (
        <Pressable onPress={() => {
            if (onClick) {
                onClick();
            }
        }} style={{...styles.button, ...style}}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: mainGray,
        height: 35,
        borderRadius: 35,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: mainWhite
    }
});