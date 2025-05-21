import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="account-register" component={<Registration/>} />
        <Stack.Screen name="profile-quiz" component={<Quiz/>} />
        <Stack.Screen name="dashboard" component={<Dashboard/>} />
        <Stack.Screen name="wallet" component={<Wallet/>} />
        <Stack.Screen name="learning" component={<Learning/>} />
        <Stack.Screen name="ia-chat" component={<IAChat/>} />
        
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
