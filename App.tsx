import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigatorProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Learning from './Pages/Learning/Learning';
import IAChat from './Pages/IAChat/IAChat';
import Wallet from './Pages/Wallet/Wallet';
import Dashboard from './Pages/Dashboard/Dashboard';
import Quiz from './Pages/Quiz/Quiz';
import Registration from './Pages/Registration/Registration';

export type RootStackParamList = {
  Registration: undefined,
  Quiz: undefined,
  Dashboard: undefined,
  Wallet: undefined,
  Learning: undefined,
  IAChat: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Learning" component={Learning} />
        <Stack.Screen name="IAChat" component={IAChat} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
