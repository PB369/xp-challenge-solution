import { darkGray, mainWhite } from "@/assets/colors/colors";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import YellowIconButton from "./YellowIconButton";

export default function ChatTextField(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pergunte alguma coisa"
        placeholderTextColor="#999"
        style={styles.textInput}
        multiline
      />
      <YellowIconButton icon="arrow-right" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: darkGray,
    borderRadius: 32,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10, 
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    color: mainWhite,
    maxHeight: 120,
  },
});
