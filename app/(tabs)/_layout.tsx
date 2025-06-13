import { mainBalck, mainWhite, mainYello } from "@/assets/colors/colors";
import { useAuth } from "@/context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TabsLayout() {
  const { isAuthenticated } = useAuth();

  if(!isAuthenticated){
    return <Redirect href='/login'/>
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: mainYello,
        tabBarInactiveTintColor: mainWhite,
        headerShown: false,
        tabBarStyle: styles.tabs
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color, fontSize: 12 }}>Início</Text>
              {focused && (
                <View style={styles.underline} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="ia-chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="comments" size={size} color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color, fontSize: 12 }}>Assistente</Text>
              {focused && (
                <View style={styles.underline} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wallet" size={size} color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color, fontSize: 12 }}>Carteira</Text>
              {focused && (
                <View style={styles.underline} />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: mainBalck,
    borderTopWidth: 0,
  },
  underline: {
    height: 1,
    width: 30,
    backgroundColor: "#FFD700",
    marginTop: 2,
    borderRadius: 1,
  }
})
