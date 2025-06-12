import { useAuth } from "@/context/AuthContext";
import { Redirect, Tabs } from "expo-router";

export default function TabsLayout() {
  const { isAuthenticated } = useAuth();

  if(!isAuthenticated){
    return <Redirect href='/login'/>
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Início' }}/>
      <Tabs.Screen name="ia-chat" options={{ title: 'Assistente' }}/>
      <Tabs.Screen name="wallet" options={{ title: 'Carteira' }}/>
    </Tabs>
  )
}