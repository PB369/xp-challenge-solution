import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="start" />
      <Stack.Screen name="experience" />
      <Stack.Screen name="goal" />
      <Stack.Screen name="timeOfInvestment" />
      <Stack.Screen name="monthlyAmount" />
      <Stack.Screen name="profileAssessment" />
      <Stack.Screen name="createFirstPortfolio" />
    </Stack>
  )
}
