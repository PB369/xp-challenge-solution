import { mainBalck } from "@/assets/colors/colors";
import { Text, View } from "react-native";
import TextField from "./components/TextField";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mainBalck
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TextField />
    </View>
  );
}
