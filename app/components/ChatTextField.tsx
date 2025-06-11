import { darkGray, mainGray, mainWhite, mainYello } from "@/assets/colors/colors";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import IconButton from "./IconButton";

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function ChatTextField({ value = "", onChangeText }: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pergunte alguma coisa"
        placeholderTextColor={mainGray}
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
      />
      <IconButton icon="arrow-right" style={{ backgroundColor: mainYello }} />
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
