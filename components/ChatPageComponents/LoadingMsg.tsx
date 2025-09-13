import { useEffect, useState } from "react";
import { Text } from "react-native";

const LoadingMessage = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length === 3 ? "." : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <Text style={{ color: "white", fontSize: 16 }}>{dots}</Text>;
};

export default LoadingMessage;
