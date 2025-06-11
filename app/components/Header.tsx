import { mainBalck, mainWhite } from "@/assets/colors/colors";
import { StyleSheet, View } from "react-native";
import IconButton from "./IconButton";

export default function Header() {
    return (
        <View style={styles.header}>
            <IconButton icon="bars" iconColor={mainWhite} iconSize={25} />
            <IconButton icon="search" iconColor={mainWhite} iconSize={25} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        height: 40,
        width: "100%",
        backgroundColor: mainBalck,
        flexDirection: "row-reverse",
        alignItems: "center"
    }
});