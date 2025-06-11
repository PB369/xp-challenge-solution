import { Slot } from "expo-router";
import { AuthProvider } from "@/context/AuthContext";
import { UserProvider } from "@/context/UserContex";

export default function RootLayout() {
  return (
    <UserProvider>
      <AuthProvider>
        <Slot/>
      </AuthProvider>
    </UserProvider>
  );
}
