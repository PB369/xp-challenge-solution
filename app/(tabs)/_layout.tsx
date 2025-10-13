import { mainBalck, mainWhite, mainYello } from "@/assets/colors/colors";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useAuth } from "@/context/AuthContext";
import '@/global.css';
import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Redirect, Tabs, usePathname } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabsLayout() {
  const { user } = useAuth();
  const pathname = usePathname();

  const havePathCondition =
    pathname === "/" || pathname === "/portfolio" || pathname === "/education";

  // 🔴 Estados das bolinhas
  const [showPortfolioBadge, setShowPortfolioBadge] = useState(false);
  const [showEducationBadge, setShowEducationBadge] = useState(false);

  // 🧮 Armazena contagem anterior para detectar novos itens
  const prevPortfolioCount = useRef(0);
  const prevEducationCount = useRef(0);

  // 👀 Detecta quando novos portfolios/cursos são adicionados
  useEffect(() => {
    if (!user) return;

    const newPortfolioCount = user.portfolios?.length ?? 0;
    const newEducationCount = user.educationalCourses?.length ?? 0;

    // Se houve aumento, mostra a bolinha
    if (newPortfolioCount > prevPortfolioCount.current) {
      setShowPortfolioBadge(true);
    }
    if (newEducationCount > prevEducationCount.current) {
      setShowEducationBadge(true);
    }

    // Atualiza as contagens
    prevPortfolioCount.current = newPortfolioCount;
    prevEducationCount.current = newEducationCount;
  }, [user?.portfolios, user?.educationalCourses]);

  // 🚀 Quando entra nas telas, remove a bolinha correspondente
  useEffect(() => {
    if (pathname === "/portfolio") setShowPortfolioBadge(false);
    if (pathname === "/education") setShowEducationBadge(false);
  }, [pathname]);

  if (!user) {
    return <Redirect href="/signIn" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: mainYello,
        tabBarInactiveTintColor: mainWhite,
        tabBarStyle: styles.tabs,
        headerStyle: styles.header,
        headerTitle: () => <PageHeader />,
        headerTitleAlign: "left",
        headerShown: havePathCondition,
      }}
    >
      {/* Início */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" size={20} color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color, fontSize: 12 }}>Início</Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
        }}
      />

      {/* Carteira */}
      <Tabs.Screen
        name="portfolio"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome5 name="wallet" size={20} color={color} />
              {showPortfolioBadge && <View style={styles.badge} />}
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color, fontSize: 12 }}>Carteira</Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
        }}
      />

      {/* Assistente */}
      <Tabs.Screen
        name="ia-chat"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="chat" size={24} color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color, fontSize: 12 }}>Assistente</Text>
              {focused && <View style={styles.underline} />}
            </View>
          ),
        }}
      />

      {/* Educação */}
      <Tabs.Screen
        name="education"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome5 name="book" size={20} color={color} />
              {showEducationBadge && <View style={styles.badge} />}
            </View>
          ),
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center" }}>
              <Text style={{ color, fontSize: 12 }}>Educação</Text>
              {focused && <View style={styles.underline} />}
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
    backgroundColor: mainBalck,
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
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -6,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },
});
