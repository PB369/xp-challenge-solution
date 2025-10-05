import { Stack } from "expo-router";

export default function EducationLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]/overview" />
      <Stack.Screen name="[id]/content/module/[moduleId]/lesson/[lessonId]" />
      <Stack.Screen name="[id]/quiz" />
    </Stack>
  );
}
