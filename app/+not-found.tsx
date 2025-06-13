import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View>
        <Link href="/(tabs)">Go to Home</Link>
      </View>
    </>
  );
}