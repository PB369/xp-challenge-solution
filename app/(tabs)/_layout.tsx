import { mainBalck, mainWhite, mainYello } from "@/assets/colors/colors";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useAuth } from "@/context/AuthContext";
import '@/global.css';
import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Redirect, Tabs, usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TabsLayout() {
  const { user } = useAuth();
  const pathname = usePathname();
  const havePathCondition = pathname === "/" || pathname === "/portfolio";

  if(!user){
    return <Redirect href='/signIn'/>
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: mainYello,
        tabBarInactiveTintColor: mainWhite,
        tabBarStyle: styles.tabs,
        headerStyle: styles.header,
        headerTitle: () => <PageHeader/>,
        headerTitleAlign: 'left',
        headerShown: havePathCondition,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="house" size={20} color={color} />
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
        name="portfolio"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="wallet" size={20} color={color} />
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
      <Tabs.Screen
        name="ia-chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" size={24} color={color}/>
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
        name="education"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book" size={24} color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color, fontSize: 12 }}>Educação</Text>
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
    height: 90,
    paddingTop: 5,
    borderTopWidth: 1,
    borderBottomColor: mainWhite,
  },
  header: {
    backgroundColor:mainBalck,
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: mainWhite,
  },
  underline: {
    height: 1,
    width: 30,
    backgroundColor: "#FFD700",
    marginTop: 2,
    borderRadius: 1,
  }
})
