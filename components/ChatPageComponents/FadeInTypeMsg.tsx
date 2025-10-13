import { darkGray, mainYello } from "@/assets/colors/colors";
import { useEffect, useRef, useState } from "react";
import { Animated, Text } from "react-native";

type FadeInTypewriterMessageProps = {
  content: string;
};

export function FadeInTypeMsg({ content }: FadeInTypewriterMessageProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    let index = 0;
    const interval = setInterval(() => {
      if (index < content.length) {
        setDisplayedText((prev) => prev + content[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [content]);

  return (
    <Animated.View
      style={{
        opacity,
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
        backgroundColor: mainYello,
        borderRadius: 20,
        padding: 10,
        width: "80%",
      }}
    >
      <Text style={{ color: darkGray }}>{displayedText}</Text>
    </Animated.View>
  );
}
